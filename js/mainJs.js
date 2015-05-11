
/*
	声明：本项目仅仅用于学习和技术交流，如有商业目的的引用，请通知本项目作者
	作者：小鑫鑫
	项目起始时间：2015年5月9日10:40:36
	最后更新时间：2015年5月9日10:40:45

	
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


	//歌曲类型列表宽度高度样式初始化
	function songListStyleInfo(){
		var $con         = $('#misicClassList'),
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



})(Zepto)