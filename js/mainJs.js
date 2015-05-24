
/*
	声明：本项目仅仅用于学习和技术交流，如有商业目的的引用，请通知本项目作者
	作者：笨·大叔
	项目起始时间：2015年5月9日10:40:36
	最后更新时间：2015年5月24日18:03:27

	
	本文件主要为本项目提供主要的逻辑代码支持，及主程序
	项目技术支持：
			1：本项目基于zepto.js以及其touch.js插件
		    2：屏幕的切换，依托swiper.js
            3：数据的加载，(data.js的数据模拟)
            4：主逻辑，
          		4.1 数据:预处理、渲染、
          		4.2 音乐:播放、基础操控、当前播放列表数组对象的操控 
          		4.3 歌词：数据预处理、格式化、以及渲染 
          		4.4 红心音乐:数组的操作
          		4.5 离线存储
          		4.6 页面初始化动画	
*/


(function($){

	//loding
	window.onload = function(){
		$('#affrimLoad').show();
	}

	$('#affrimLoad').tap(function(){
		var obj = $(this).parent();

		obj.css({'opacity':0});
		setTimeout(function(){
			obj.hide();
		},2000);

	});


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
			$playStop        = $('#pageA_palyStop,#pageB_playStop').find('i'),//播放，暂停
			$preSong         = $("#pageB_preSong"),//上一首
			$nextSong        = $("#PageA_NextSong,#pageB_nextSong"),//下一首
			$timeLine        = $('#pageA_timeLine,#pageB_line'),//时间轴
			$playMode        = $('#playMode'),//播放模式
			$showNowTime     = $('#nowTime'), //页面当前时间  
			$showAllTime     = $('#allTime'), //页面当前时间  
			$songName        = $('#pageA_songName,#pageB_songName'),//歌名
			$singerName      = $("#pageA_singerName,#pageB_singerName"),//歌手名称
			$singerImg       = $('#pageA_SingerImg,#pageB_SingerImg').find('img'),//歌手图片
			$pageBSingerImg  = $('#pageB_SingerImg'),
			$nowHeart        = $('#nowHeart').find('i'),//显示当前是否为红心
			$allSong         = $('#allSong'),//按钮,全部音乐
			$Ilike           = $('#ILike'),//底部，红心按钮

			//页面渲染用到的变量
			$showSongClass   = $('#misicClassList'),//歌曲分类列表容器
			$showSongCon     = $('#songList'),//歌曲列表容器
			$lyricsCon       = $('#lyrics_list'),//歌词容器

			//页面中用到的变量
			Data             = requestData(),//获取数据
			songClass        = [],//歌曲分类
			nowSongClassLlit = [],//当前播放列表
			nowSongIndex     = 0,//当前类表正在播放的index值
			allArrIndexPlay  = 0,//当前播放的这首歌，在整个数组中的位置
			songTimeArr      = [],//当前歌曲时间数组
			songLyricsArr    = [],//当前歌曲歌词数组
			playModeNum      = 0,//播放模式

			AllsongArr       = [],//所有歌曲的角标，为点击'全部'所用
			redHeartArr      = [],//红心数据

			//后台操作中用到的变量
			nowTime          = 0,//当前歌曲的当前时间
			AllTime          = 0,//当前歌曲的总时间
			AllRunFun        = null,//一直在运行的方法

			LyricsVideoH     = $('#Lyricer_video').height(),//歌词可视区域
			lyricsLiHeight   = $lyricsCon.find('li').height(),     


			aa               = '';

		//初始化红心数据getUnlineDate
		function infoRedHeartArr(){
			if ( !isNaN(getUnlineDate()[0])) {
				redHeartArr = getUnlineDate();
				for( var i in redHeartArr){
					Data[redHeartArr[i]].ILIKE = true;
				}
			}else{
				redHeartArr = [];
			}
			

		}
		infoRedHeartArr();

		//DataDrawing

		// 歌曲分类的渲染
		function songClassListDrawing(){
			for( var i = 0; i < Data.length; i++){
				//动态的写入这首歌的编号，这个属性将成为操作歌曲的索引
				Data[i].SongNumber = i;
				// 初始化，全部歌曲的数组，为点击'全部'所用
				AllsongArr.push(i);
				//接收类名称
				songClass[i]       = Data[i].classS;
			}
			// 数组去除相同的元素
			songClass = romoveSameVal(songClass);
			// 页面渲染
			for( var i in songClass ){
				var nowLi = '<li><span>'+ songClass[i] +'</span></li>';
				$showSongClass.append(nowLi);
			}

		}
		songClassListDrawing();

		//歌曲列表的渲染,接收的是一个数组，数组中储存了歌曲的角标
		function songListDrawing(Arr){
			var nowArr      = Arr,
				nowHeart    = '';
			//清空原数据
			$showSongCon.html('');

			for( var i = 0; i < nowArr.length; i++ ){
				//如果是红心
				if( Data[nowArr[i]].ILIKE ){
					nowHeart = '<i class="iconfont noFind hide">&#xe60b;</i><i class="iconfont Find">&#xe609;</i>';
				}else{
					nowHeart = '<i class="iconfont noFind">&#xe60b;</i><i class="iconfont Find hide">&#xe609;</i>';
				}

				var li = '<li><span class="songNumber">'+ doNunmber(i+1) +'</span>'+
				         '<div class="songListInformation" thisNumber='+ Data[nowArr[i]].SongNumber +'>'+
				         '<p>'+ Data[nowArr[i]].Name +'</p><p>'+ Data[nowArr[i]].Singer +'</p></div><div class="thisHeart">'+
						 nowHeart+'</div></li>';
				$showSongCon.append(li);
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
		songListDrawing(AllsongArr);

		function LyricsDrawing(){
			$lyricsCon.html('');
			for( var i in songLyricsArr ){
				var li = '<li>'+ songLyricsArr[i] +'</li>';
				$lyricsCon.append(li);
			}

		}


		//DataDrawing end


		//点击类型列表按钮，进行加载元素
		$showSongClass.find('li').tap(function(){
			var Arr = [];
			for( var i in Data ){
				if( Data[i].classS == songClass[$(this).index()] ){
					Arr.push(Data[i].SongNumber);
				}
			}
			songListDrawing(Arr);
		});

		//全部音乐，列表渲染
		$allSong.tap(function(){
			songListDrawing(AllsongArr);
		});

		//点击列表播放音乐
		$showSongCon.delegate('p','tap',function(){
			// 获取这首歌的thisNumber,并且播放
			var index =  parseInt($(this).parent().attr('thisnumber')),
			//获取当前列表对象
			    obj   = $showSongCon.find('.songListInformation');

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

		//暂停，播放
		$playStop.tap(function(){
			if( Audio.paused ){
				Audio.play();
			}else{
				Audio.pause();
			}
		});

		//操控列表红心音乐,
		//列表红心操作
		$showSongCon.delegate('i','tap',function(){
			var thisSongNum = parseInt($(this).parent().siblings('div').attr('thisnumber'));

			if ( $(this).index() == 0 ) {
				//红心，给这个对象新写入一个属性(ILIKE:true)
				Data[thisSongNum].ILIKE = true;
				redHeartArr.unshift( thisSongNum );
				
			}else{
				// 去除红心;
				Data[thisSongNum].ILIKE = false;
				redHeartArr = romoveArrElement(redHeartArr,thisSongNum);
			}

			// 数组去除相同的元素
			// redHeartArr = romoveSameVal(redHeartArr);
			//离线存储数据
			saveUnlineData(redHeartArr);
			$(this).hide().siblings().show();

		});
		//pageB,红心操作
		$nowHeart.tap(function(){
			var thisSongNum = allArrIndexPlay;
			
			if($(this).index() == 0 ){
				//红心，给这个对象新写入一个属性(ILIKE:true)
				Data[thisSongNum].ILIKE = true;
				redHeartArr.unshift( thisSongNum );
			}else{
				// 去除红心;
				Data[thisSongNum].ILIKE = false;
				redHeartArr = romoveArrElement(redHeartArr,thisSongNum);
			}
			
			// 数组去除相同的元素
			// redHeartArr = romoveSameVal(redHeartArr);

			//离线存储数据
			saveUnlineData(redHeartArr);

			$(this).hide().siblings().show();
		});
		//pageB红心end


		//红心音乐渲染
		$Ilike.tap(function(){
			songListDrawing(redHeartArr);
		});

		//监听事件，监听歌曲是否播放，改变样式
		Audio.addEventListener('play',function(){
			$playStop.eq(0).hide();
			$playStop.eq(1).show();
			$playStop.eq(2).hide();
			$playStop.eq(3).show();
			Runing();
			//page动画样式
			$pageBSingerImg.css({
				'animation': 'Runing 60s linear 2s infinite',
				'-webkit-animation': 'Runing 60s linear 2s infinite'
			});
		},false);

		Audio.addEventListener('pause',function(){
			$playStop.eq(0).show();
			$playStop.eq(1).hide();
			$playStop.eq(2).show();
			$playStop.eq(3).hide();
			clearInterval(AllRunFun);
			//清除动画
			$pageBSingerImg.css({
				'animation': 'Runin 0s linear infinite',
				'-webkit-animation': 'Runin 0s linear infinite'
			});
		},false);


		//音乐播放函数
		function playMusic(index){
			allArrIndexPlay = index;

			//更新音乐时间数组
			songTimeArr   = LayoutLyric( Data[allArrIndexPlay].Lyric )[0];
			//更新音乐歌词数组
			songLyricsArr = LayoutLyric( Data[allArrIndexPlay].Lyric )[1];

			//渲染歌词
			LyricsDrawing();

			//判断是不是红心音乐
			if( Data[allArrIndexPlay].ILIKE ){
				$nowHeart.eq(1).show().siblings().hide();
			}else{
				$nowHeart.eq(0).show().siblings().hide();
			}


			//加载歌曲信息
			$songName.text(Data[allArrIndexPlay].Name);
			$singerName.text(Data[allArrIndexPlay].Singer);
			$singerImg.attr({'src':Data[allArrIndexPlay].Img});

			//暂停音乐
			Audio.pause();
			//更新地址
			$(Audio).attr({'src':Data[allArrIndexPlay].Src});
			//重新加载
			Audio.load();
			//播放
			Audio.play();

			//不断执行的方法
			Runing();

		}//playMusic() end

		//获取歌曲时间长度
		Audio.addEventListener('canplay',function(){
			//如果是数字，那么进行赋值，
			if( !isNaN(Audio.duration) ){
				AllTime = Audio.duration;
				$showAllTime.text( layoutTime(AllTime) );
			}
		},false);


		function Runing(){

			AllRunFun = setInterval(function(){
				//因为可能canplay的时候，总时间长度，重新定义全局变量，总时长.太暴力了。。
				AllTime = Audio.duration;
				$showAllTime.text( layoutTime(AllTime) );
				//获取当前时间
				nowTime = audio.currentTime;
				// 写入当前时间
				$showNowTime.text( layoutTime(nowTime) );
				//时间轴
				$timeLine.find('div').css({
					'width':nowTime/AllTime*100+'%'
				});

				//同步歌词
				for( var i in songTimeArr ){

					if( parseInt(songTimeArr[i]/1000) == parseInt(nowTime) ){
						$lyricsCon.find('li').eq(i).addClass('active').siblings().removeClass('active');
						$lyricsCon.css({
							'transform': 'translate3D(0,' +( LyricsVideoH / 2 - i * lyricsLiHeight )+ 'px,  0)',
							'-webkit-transform': 'translate3D( 0,' +( LyricsVideoH / 2 - i * lyricsLiHeight )+ 'px, 0)'
						});
					}

				}//同步歌词 end

			},50); 
		}


		//时间轨迹的点击,拖动
		function AudioDoTime(){
			var line     = document.getElementById('pageB_line'),
				endX     = 0,
				AllWidth = $timeLine.width();

			function startTouch(e){
				var touches = e.touches[0];
					endX    = touches.pageX;

				line.addEventListener('touchmove',MoveTouch,false);	
				line.addEventListener('touchend',endTouch,false);	
			}

			function MoveTouch(e){
				e.preventDefault();
				e.stopPropagation();

				var touches = e.touches[0];
					endX    = touches.pageX;

			}
			function endTouch(){
				Audio.currentTime = parseInt(endX/AllWidth*AllTime);

				line.removeEventListener('touchmove',MoveTouch,false);	
				line.removeEventListener('touchend',endTouch,false);
			}

			line.addEventListener('touchstart',startTouch,false);

		}
		AudioDoTime();








		//如果播放完毕，那么执行播放模式
		Audio.addEventListener('ended',function(){
			Audio.pause();
			plauMode();
		},false);



		//点击切换播放模式
		function tapChagePlayMode(){
			var obj = $playMode.find('i');
			
			obj.tap(function(){
				playModeNum++;
				if( playModeNum > obj.length -1 ){
					playModeNum = 0;
				}
				obj.eq(playModeNum).show().siblings().hide();
				
			});

		}
		tapChagePlayMode();

		//播放模式
		function plauMode(){
			//列表播放
			if( playModeNum == 0 ){
				nowSongIndex++;
				if( nowSongIndex > nowSongClassLlit.length - 1 ){
					Audio.pause();
				}else{
					playMusic(nowSongClassLlit[nowSongIndex]);
				}
				
			}
			// 循环播放
			if( playModeNum == 1){
				nowSongIndex++;
				if( nowSongIndex > nowSongClassLlit.length - 1 ){
					nowSongIndex = 0;
				}
				playMusic(nowSongClassLlit[nowSongIndex]);
			}
			//单曲播放
			if ( playModeNum == 2 ) {
				playMusic(nowSongClassLlit[nowSongIndex]);
			}
			//随机播放
			if( playModeNum == 3 ){

				nowSongIndex = parseInt(Math.random()*nowSongClassLlit.length); 
				playMusic(nowSongClassLlit[nowSongIndex]);
			}
		}




		//这个方法处理歌词，把源字符串修改成两个数组。一个是时间数组，一个是歌词数组，返回一个数组，
	    function LayoutLyric(str){
			var obj       = str,
				ReTime    = /\[([^\]]+)\]/g,
				ReLyric   = /\][^\[]+/g,
				tiemArr   = [],
				lyricArr  = [];
			//时间数组
			tiemArr  = obj.match(ReTime).map(function(list){
				return list.replace(/[\[\]]/g,'');
			});
			lyricArr = obj.match(ReLyric).map(function(list){
				return list.replace(/[\[\]]/g,'');
			});

			//处理时间数组
			function MakeTime(){
				tiemArr.map(function(list,index){
					var arr         = list.split(':'),
					    minute      = parseInt(arr[0])*60*1000,//分钟
					    second      = parseInt(arr[1])*1000,
					    millisecond = parseInt(parseFloat(arr[1])%1*100);
					    tiemArr[index] = minute + second + millisecond;   
				});
			}
			MakeTime();
			return [tiemArr,lyricArr];
		}//LayoutLyric end!

		//时间的处理方法，传进来秒，返回00:00
		function layoutTime(T){
			var time   = T,
				minute = parseInt(time/60),
				second = parseInt((time%60).toFixed(2));

			if( minute < 10 ){
				minute = '0' + minute;
			}
			if( second < 10 ){
				second = '0' + second;
			}

			return minute + ':' + second;


		}





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
			moreThat    = $('#moreThat'),
			morePage    = $('#morePage'),
			returnMain  = $('#returnMain'),
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

			//更多按钮，项目简介
			moreThat.tap(function(){
				morePage.css({
					'transform':'translate3D(0,0,0)',
					'-webkit-transform':'translate3D(0,0,0)',
				});
			});

			returnMain.tap(function(){
				morePage.css({
					'transform':'translate3D(110%,0,0)',
					'-webkit-transform':'translate3D(110%,0,0)',
				});
			});


	}
	showPage();



	//构造函数，删除数组内的指定元素，接收一个数组，一个要删除值
	function romoveArrElement(Arr,removeObj){
		var ArrObj    = Arr,
			removeVal = removeObj,
			thisIndex = 0;

		for( var i = 0; i < ArrObj.length; i++ ){
			if( ArrObj[i] == removeVal ){
				thisIndex = i;
			}
		}

		ArrObj.splice(thisIndex,1);
		return ArrObj;
	}

	//储存离线数据
	function saveUnlineData(dataVal){
		localStorage.redArr = dataVal;
	}

	//获取离线数据
	function getUnlineDate(){
		var arr = [];
		if ( localStorage.redArr ){
			arr = localStorage.redArr.split(',');
			for(var i in arr ){
				arr[i] = parseInt(arr[i]);
			}
		}
		
		return arr;
	}

	// 数组去除相同的元素
	function romoveSameVal(arr){
		var nowA = [];
		if( arr.length > 2){
			nowA = arr.reverse().join(",").match(/([^,]+)(?!.*\1)/ig).reverse();
			return nowA;
		}else{
			return arr;
		}
		
	}




})(Zepto)