
/*
	声明：本项目仅仅用于学习和技术交流，如有商业目的的引用，请通知本项目作者
	作者：jack大叔
	项目起始时间：2015年5月9日10:40:36
	最后更新时间：2015年5月12日9:21:20

	
	本文件主要为本项目提供主要的逻辑代码支持，及主程序
	项目技术支持：
			1：本项目基于zepto.js，主要应用了其选择器，以及其touch.js插件
		    2：屏幕的切换，依托swiper.js
            3：数据的加载，(data.js的数据模拟)
            4：主逻辑，
          		4.1 数据:预处理、渲染、
          		4.2 音乐:播放、基础操控、当前播放列表数组对象的操控 
          		4.3 歌词：数据预处理、格式化、以及渲染 
          		4.4 红心音乐:数组的操作
          		4.5 离线存储	
*/


(function($){

	// 随机背景
	function randomBackground(){
		var obj   = $('#pageA,#pageB'),
			maxBg = 6;
		obj.css({
			'background-image':'url(images/pageBg/'+ parseInt(Math.random()*maxBg+1) +'.jpg)'
		});
	}
	randomBackground();

	//音乐播放器的主程序
	function musicMain(){
		// 播放器组件获取
		var Audio            = document.getElementById('audio'),//获取播放器
			$playStop        = $('#pageA_palyStop,#pageB_playStop'),//播放，暂停
			$preSong         = $("#pageB_preSong"),//上一首
			$nextSong        = $("#PageA_NextSong,#pageB_nextSong"),//下一首
			$timeLine        = $('#pageA_timeLine,#pageB_line'),//时间轴
			$playMode        = $('#playMode'),//播放模式
			$showNowTime     = $('#nowTime'), //页面当前时间  
			$showAllTime     = $('#allTime'), //页面当前时间  
			$songName        = $('#pageA_songName,#pageB_songName'),//歌名
			$singerName      = $("#pageA_singerName"),//歌手名称
			$singerImg       = $('#pageA_SingerImg').find('img'),//歌手图片
			$nowHeart        = $('#nowHeart'),//显示当前是否为红心
			$allSong         = $('#allSong'),//按钮

			//页面渲染用到的变量
			$showSongClass   = $('#misicClassList'),//歌曲分类列表容器
			$showSongCon     = $('#songList'),//歌曲列表容器
			$lyricsCon       = $('#lyrics_list'),//歌词容器     


			//页面中用到的变量
			Data             = requestData(),//获取数据
			songClass        = [],//歌曲分类
			nowSongClassLlit = [],//当前播放列表
			nowSongIndex     = 0,//当前类表正在播放的index值
			songTimeArr      = [],//当前歌曲时间数组
			songLyricsArr    = [],//当前歌曲歌词数组
			playModeNum      = 0,

			//后台操作中用到的变量
			nowTime          = 0,//当前歌曲的当前时间
			AllTime          = 0,//当前歌曲的总时间
			AllRunFun        = null,//一直在运行的方法

			aa               = '';


		//DataDrawing

		// 歌曲分类的渲染
		function songClassListDrawing(){
			for( var i = 0; i < Data.length; i++){
				//动态的写入这首歌的编号
				Data[i].SongNumber = i;
				//接收类名称
				songClass[i]       = Data[i].classS;
			}
			// 数组去除相同的元素
			songClass = songClass.reverse().join(",").match(/([^,]+)(?!.*\1)/ig).reverse();
			// 页面渲染
			for( var i in songClass ){
				var nowLi = '<li><span>'+ songClass[i] +'</span></li>';
				$showSongClass.append(nowLi);
			}

		}
		songClassListDrawing();

		//歌曲列表的渲染,接收的是歌曲分类数组的index值
		function songListDrawing(ClassIndex){
			var classNumber = ClassIndex,
				listIndex   = 0;
			//清空原数据
			$showSongCon.html('');

			for( var i = 0; i < Data.length; i++ ){
				if( Data[i].classS == songClass[classNumber] ){
					listIndex++;
					var li = '<li><span class="songNumber">'+ doNunmber(listIndex) +'</span>'+
					         '<div class="songListInformation" thisNumber='+ Data[i].SongNumber +'>'+
					         '<p>'+ Data[i].Name +'</p><p>'+ Data[i].Singer +'</p></div><div class="thisHeart">'+
							 '<i class="iconfont noFind">&#xe60b;</i><i class="iconfont Find">&#xe609;</i></div></li>';
					$showSongCon.append(li);
				}
			}

			//把数值转化成二位数
			function doNunmber(i){
				if( i <= 9 ){
					return '0'+i;
				}else{
					return i;
				}
			}	
		}
		//默认显示第一个
		songListDrawing(0);


		//DataDrawing end


		//点击类型列表按钮，进行加载元素
		$showSongClass.find('li').tap(function(){
			songListDrawing($(this).index());
		});

		//点击列表播放音乐
		$showSongCon.delegate('p','tap',function(){
			// 获取这首歌的thisNumber,并且播放
			var index =  parseInt($(this).parent().attr('thisnumber')),
			//获取当前列表对象
			      obj = $showSongCon.find('.songListInformation');

			//改变全局变量
			//当前列表的这首歌的index值
			nowSongIndex = $(this).parents('li').index();

			//清空原数组
			nowSongClassLlit = [];
			for( var i = 0; i < obj.length; i++ ){
				nowSongClassLlit.push( obj.eq(i).attr('thisnumber') );
			}

			playMusic(index);
			return false;
		});

		//上一首
		$preSong.tap(function(){
			nowSongIndex--;
			if( nowSongIndex < 0 ){
				nowSongIndex = nowSongClassLlit.length - 1;
			}
			playMusic( parseInt(nowSongClassLlit[nowSongIndex]) );
		});

		//下一首
		$nextSong.tap(function(){
			nowSongIndex++;
			if( nowSongIndex > nowSongClassLlit.length - 1 ){
				nowSongIndex = 0;
			}
			playMusic( parseInt(nowSongClassLlit[nowSongIndex]) );
		});


		//音乐播放函数
		function playMusic(index){
			var thisIndex = index;


			//加载歌曲信息
			$songName.text(Data[thisIndex].Name);
			$singerName.text(Data[thisIndex].Singer);
			$singerImg.attr({'src':Data[thisIndex].Img});

			//更新地址
			$(Audio).attr({'src':Data[thisIndex].Src});
			//重新加载
			Audio.load();
			//播放
			Audio.play();




		}//playMusic() end





	}//musicMain() end!

	musicMain();


	//歌曲类型列表宽度高度样式初始化
	function songListStyleInfo(){
		var $con         = $('#misicClassList,#protect'),
			$list        = $con.find('li'),
			paddingWidth = 5,
			conWidth     = $con.width() - 2*paddingWidth,
			lineNumber   = 3;

		$list.css({
			'width':conWidth/lineNumber+'px',
			'height':conWidth/lineNumber+'px',
			'line-height':(conWidth/lineNumber - paddingWidth*2) +'px'
		});

		$(window).resize(function(){
			songListStyleInfo();
		});	
	}
	songListStyleInfo();


	//页面总体样式的改变,上下，左右的切换
	function showPage(){
		var pageA       = $('#pageA'),
			pageB       = $('#pageB'),
			songClass   = $('#misicClassList,#protect').find('li'),//类列表
			returnPageA = $('#returnPageA'),//B中返回A的按钮
			pageBArr    = $('#pageBArr'),//b页面中，的三个显示集合
			BnowPage    = $('#pageB_nowPage').find('span'),//三个小按钮
			windowW     = $(document).width(),
			gotoPageB   = $('#nowSong_information,#pageA_SingerImg'),//点击歌手信息，到pageB,且不会跳转

			//swiper,左右切换,记录原点
			mySwiper    = new Swiper('.swiper-container',{
				onSlideChangeEnd: function(swiper){
			      	var index = swiper.snapIndex;
			      	BnowPage.eq(index).addClass('active').siblings().removeClass('active');
			    }
			});
			
			songClass.tap(function(){
				pageB.css({
					'transform':'translate3D(0,0,0)',
					'-webkit-transform':'translate3d(0,0,0)'
				});
				pageBArr.css({
					'transform':'translate3D(0,0,0)',
					'-webkit-transform':'translate3d(0,0,0)'
				});
				BnowPage.eq(0).addClass('active').siblings().removeClass('active');

			});
			gotoPageB.tap(function(){
				pageB.css({
					'transform':'translate3D(0,0,0)',
					'-webkit-transform':'translate3d(0,0,0)'
				});
			});
			returnPageA.tap(function(){
				pageB.css({
					'transform':'translate3D(0,100%,0)',
					'-webkit-transform':'translate3d(0,100%,0)'
				});
			});


	}
	showPage();



})(Zepto)