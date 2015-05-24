function requestData() {
	// body...
	var data = [
		//第一个类别
		{
			'Name': '光辉岁月',
			'Singer': '黄家驹',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100000eyims3MbmGS.m4a?fromtag=52',
			'Img': 'images/singer/singer2.jpg',
			'Lyric': '[00: 00.81]光辉岁月 - 黄家驹 [00: 29.28]钟声响起 [00: 30.12]归家的信号 [00: 33.64]在他生命里 [00: 37.01]彷佛带点唏嘘 [00: 42.23]黑色肌肤给他的意义 [00: 46.83]是一生奉献肤色斗争中 [00: 55.35]年月把拥有变做失去 [01: 01.68]疲倦的双眼带着期望 [01: 08.18]今天只有残留的躯壳 [01: 11.76]迎接光辉岁月 [01: 15.10]风雨中抱紧自由 [01: 21.10]一生经过彷徨的挣扎 [01: 24.70]自信可改变未来 [01: 28.00]问谁又能做到 [01: 43.68]可否不分肤色的界限 [01: 48.09]愿这土地里 [01: 51.48]不分你我高低 [01: 56.71]缤纷色彩显出的美丽 [02: 00.96]是因它没有 [02: 04.34]分开每种色彩 [02: 09.69]年月把拥有变做失去 [02: 16.20]疲倦的双眼带着期望 [02: 22.54]今天只有残留的躯壳 [02: 26.26]迎接光辉岁月 [02: 29.42]风雨中抱紧自由 [02: 35.53]一生经过彷徨的挣扎 [02: 39.25]自信可改变未来 [02: 42.51]问谁又能做到 [03: 24.00]今天只有残留的躯壳 [03: 27.72]迎接光辉岁月 [03: 31.07]风雨中抱紧自由 [03: 37.09]一生经过彷徨的挣扎 [03: 40.68]自信可改变未来 [03: 43.95]问谁又能做到 [03: 59.67]今天只有残留的躯壳 [04: 03.27]迎接光辉岁月 [04: 06.55]风雨中抱紧自由 [04: 12.48]一生经过彷徨的挣扎 [04: 16.19]自信可改变未来'
		}, 
		{
			'Name': '不再联系',
			'Singer': '夏天',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100000xM8bN4OGgoo.m4a?fromtag=52',
			'Img': 'images/singer/singer2.jpg',
			'Lyric': '[00:00.36]不再联系 - 夏天Alex[00:18.82]也许还能在网上看到你的消息[00:22.54]也许我唱的歌还存在你的手机[00:26.17]也许我爱你埋在心底变成秘密[00:29.88]也许你想我的时候我也在想你[00:36.04]多少次我告诉自己[00:39.80]此情可待已成追忆[00:43.44]多少次我告诫自己[00:46.94]不再为你流泪到一败涂地[00:50.66]我和你不再联系[00:52.51]希望你不要介意[00:54.41]要怪就怪当初没在一起[00:58.04]而你对现在也比较满意[01:01.75]所以我留下来也没有道理[01:05.46]我和你断了联系[01:07.31]不代表我不想你[01:09.17]走到哪里还是会有惦记[01:12.89]而我也开始试着去忘记[01:16.68]抹去我们过去的放弃的所有交集[01:36.39]也许还能在网上看到你的消息[01:40.09]也许我唱的歌还存在你的手机[01:43.80]也许我爱你埋在心底变成秘密[01:47.52]也许你想我的时候我也在想你[01:53.75]多少次我告诉自己[01:57.29]此情可待已成追忆[02:01.00]多少次我告诫自己[02:04.55]不再为你流泪到一败涂地[02:08.14]我和你不再联系[02:10.11]希望你不要介意[02:11.91]要怪就怪当初没在一起[02:15.51]而你对现在也比较满意[02:19.23]所以我留下来也没有道理[02:22.94]我和你断了联系[02:24.80]不代表我不想你[02:26.65]走到哪里还是会有惦记[02:30.26]而我也开始试着去忘记[02:34.21]抹去我们过去的放弃的所有交集[02:38.25]我和你不再联系[02:39.67]希望你不要介意[02:41.42]要怪就怪当初没在一起[02:45.03]而你对现在也比较满意[02:48.74]所以我留下来也没有道理[02:52.45]我和你断了联系[02:54.30]不代表我不想你[02:56.17]走到哪里还是会有惦记[02:59.88]而我也开始试着去忘记[03:03.80]抹去我们过去的放弃的所有交集'
		},{
			'Name': '北京·北京',
			'Singer': '汪峰',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001LiUo438vc8o.m4a?fromtag=52',
			'Img': 'images/singer/wangfen2.jpg',
			'Lyric': '[00: 01.63]北京北京 - 汪峰 [00: 30.47]当我走在这里的每一条街道 [00: 36.72]我的心似乎从来都不能平静 [00: 44.78]除了发动机的轰鸣和电气之音 [00: 51.14]我似乎听到了他烛骨般的心跳 [00: 59.20]我在这里欢笑我在这里哭泣 [01: 06.51]我在这里活着也在这死去 [01: 13.52]我在这里祈祷我在这里迷惘 [01: 20.58]我在这里寻找在这里失去 [01: 26.53]北京北京 [01: 34.79]咖啡馆与广场有三个街区 [01: 41.25]就像霓虹灯和月亮的距离 [01: 49.36]人们在挣扎中相互告慰和拥抱 [01: 55.57]寻找着追逐着奄奄一息的碎梦 [02: 03.68]我们在这欢笑我们在这哭泣 [02: 10.72]我们在这活着也在这死去 [02: 17.84]我们在这祈祷我们在这迷惘 [02: 25.03]我们在这寻找也在这失去 [02: 31.04]北京北京 [03: 08.09]如果有一天我不得不离去 [03: 14.30]我希望人们把我埋在这里 [03: 22.46]在这我能感觉到我的存在 [03: 28.72]在这有太多让我眷恋的东西 [03: 36.92]我在这里欢笑我在这里哭泣 [03: 43.88]我在这里活着也在这死去 [03: 51.14]我在这里祈祷我在这里迷惘 [03: 58.21]我在这里寻找也在这失去 [04: 04.11]北京北京 [04: 11.33]北京北京'
		}, {
			'Name': '海阔天空',
			'Singer': '黄家驹',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003a6oCe4dhP4V.m4a?fromtag=52',
			'Img': 'images/singer/singer2.jpg',
			'Lyric': '[00: 01.17]海阔天空——beyond[00: 10.01]词黄家驹曲黄家驹 [00: 18.53]今天我寒夜里看雪飘过 [00: 25.19]怀著冷却了的心窝飘远方 [00: 30.98]风雨里追赶 [00: 34.15]雾里分不清影踪 [00: 37.32]天空海阔你与我 [00: 40.37]可会变 (谁没在变)[00: 43.64]多少次迎著冷眼与嘲笑 [00: 50.20]从没有放弃过心中的理想 [00: 55.98]一刹那恍惚 [00: 59.26]若有所失的感觉 [01: 02.32]不知不觉已变淡 [01: 05.38]心里爱 (谁明白我)[01: 08.87]原谅我这一生不羁放纵爱自由 [01: 15.86]也会怕有一天会跌倒 [01: 22.09]背弃了理想谁人都可以 [01: 28.31]那会怕有一天只你共我 [01: 42.82]今天我寒夜里看雪飘过 [01: 49.48]怀著冷却了的心窝飘远方 [01: 55.26]风雨里追赶 [01: 58.32]雾里分不清影踪 [02: 01.38]天空海阔你与我 [02: 04.77]可会变 (谁没在变)[02: 08.26]原谅我这一生不羁放纵爱自由 [02: 15.14]也会怕有一天会跌倒 [02: 21.37]背弃了理想谁人都可以 [02: 27.59]那会怕有一天只你共我 [03: 08.54]仍然自由自我 [03: 12.03]永远高唱我歌 [03: 15.09]走遍千里 [03: 19.90]原谅我这一生不羁放纵爱自由 [03: 26.88]也会怕有一天会跌倒 [03: 33.11]背弃了理想谁人都可以 [03: 39.33]那会怕有一天只你共我 [03: 45.67]背弃了理想谁人都可以 [03: 51.78]那会怕有一天只你共我 [03: 57.24]原谅我这一生不羁放纵爱自由 [04: 04.23]也会怕有一天会跌倒 [04: 10.45]背弃了理想谁人都可以 [04: 16.68]那会怕有一天只你共我'
		}, {
			'Name': '预谋邂逅',
			'Singer': '阿肆',
			'classS': '小感觉',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100002KweJZ082ERb.m4a?fromtag=52',
			'Img': 'images/singer/yijibg.jpg',
			'Lyric': '[00: 00.37]预谋邂逅 - 阿肆 [00: 02.14]词曲：阿肆 [00: 23.60]已经习惯 [00: 26.73]这样不被注意的存在 [00: 29.71]在人群中假装冷淡 [00: 32.62]在角落里独自傻笑狂欢 [00: 36.30]已经习惯 [00: 38.57]放弃对缘分的期盼 [00: 41.59]指靠老天 [00: 43.64]不如自己套牢噢另一半 [00: 48.72]苦思冥想地盘算 [00: 51.38]怎样才最自然 [00: 54.50]最恰到好处的安排 [00: 59.44]或许在 [01: 00.96]某个大雨的夜晚 [01: 03.95]路过你身边不打伞 [01: 05.97]也许你会因为不忍心看我淋湿而与我为伴 [01: 11.50]或许在 [01: 12.56]你最常出没的咖啡馆 [01: 15.48]喝一个下午的蓝山 [01: 18.32]直到你出现假装我没带钱然后只好让你买单 [01: 35.47]已经习惯 [01: 38.54]这种啼笑皆非的孤单 [01: 41.58]喜欢我的人我不喜欢 [01: 44.50]我喜欢的人却总在彼岸 [01: 48.17]已经习惯 [01: 50.54]放弃对缘分的期盼 [01: 53.47]指靠老天 [01: 55.69]不如自己勇敢找出答案 [02: 00.47]苦思冥想地盘算 [02: 03.40]怎样才最自然 [02: 06.23]最恰到好处的安排 [02: 11.62]或许在 [02: 12.98]某个大雨的夜晚 [02: 15.88]路过你身边不打伞 [02: 18.31]也许你会因为不忍心看我淋湿而与我为伴 [02: 23.97]或许在 [02: 24.85]你最常出没的咖啡馆 [02: 27.88]喝一个下午的蓝山 [02: 30.37]直到你出现假装我没带钱然后只好让你买单 [02: 41.46]这不经意的片段是我预谋的偶然 [02: 53.30]这幻想中的乐观是我内向的浪漫 [02: 59.41]我多想在 [03: 01.03]某个大雨的夜晚 [03: 03.82]路过你身边不打伞 [03: 06.36]也许你会因为不忍心看我淋湿而与我为伴 [03: 11.92]或许在 [03: 13.03]你最常出没的咖啡馆 [03: 16.00]喝一个下午的蓝山 [03: 18.38]直到你出现假装我没带钱然后只好让你买单 [03: 30.17]至少不会遗憾 [03: 33.12]也不会让你看出我的破绽'
		}, {
			'Name': '画',
			'Singer': '赵小雷',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C1000004zjvt1dq4Lh.m4a?fromtag=52',
			'Img': 'images/singer/zhaolei.jpg',
			'Lyric': '[00: 00.65]画 (live版) - 赵雷 [00: 17.66]为寂寞的夜空画上一个月亮 [00: 23.45]把我画在那月亮下面歌唱 [00: 28.03]为冷清的房子画上一扇大窗 [00: 34.26]再画上一张床 [00: 39.93]画一个姑娘陪着我 [00: 45.06]再画个花边的被窝 [00: 50.85]画上灶炉与柴火 [00: 56.53]我们一起生来一起活 [01: 24.70]画一群鸟儿围着我 [01: 29.94]再画上绿岭和青坡 [01: 35.84]画上宁静与祥和 [01: 41.20]雨点儿在稻田上飘落 [01: 46.76]画上有你能用手触到的彩虹 [01: 52.65]画中有我决定不灭的星空 [01: 58.23]画上弯曲无尽平坦的小路 [02: 03.80]尽头的人家梦一路 [02: 09.48]画上母亲安详的姿势 [02: 15.16]还有橡皮能擦去的争执 [02: 20.29]画上四季都不愁的粮食 [02: 26.19]悠闲的人从没心事 [02: 31.64]我没有擦去争吵的橡皮 [02: 37.00]只有一支画着孤独的笔 [02: 42.24]那夜空的月也不再亮 [02: 48.68]只有个忧郁的孩子在唱 [02: 54.25]为寂寞的夜空画上一个月亮'
		}, {
			'Name': '你一定要幸福',
			'Singer': '何洁',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003mufRc3F0oNF.m4a?fromtag=52',
			'Img': 'images/singer/aasd.jpg',
			'Lyric': '[00: 00.95]你一定要幸福 - 何洁 [00: 32.22]沿着路灯一个人走回家 [00: 38.78]和老朋友打电话 [00: 45.37]你那里天气好吗 [00: 50.47]有什么新闻可以当作笑话 [00: 58.17]回忆与我都不爱说话 [01: 05.23]偶尔我会想起他 [01: 11.28]心里有一些牵挂 [01: 16.83]有些爱却不得不各安天涯 [01: 26.64]在夜深人静的时候想起他 [01: 33.04]送的那些花 [01: 35.44]还说过一些撕心裂肺的情话 [01: 42.50]赌一把幸福的筹码 [01: 47.00]在人来人往的街头想起他 [01: 52.80]他现在好吗 [01: 55.45]可我没有能给你想要的回答 [02: 02.60]可是你一定要幸福呀 [02: 22.11]沿着路灯一个人走回家 [02: 28.17]和老朋友打电话 [02: 35.02]你那里天气好吗 [02: 40.51]有什么新闻可以当作笑话 [02: 48.42]回忆与我都不爱说话 [02: 55.84]偶尔我会想起他 [03: 01.89]心里有一些牵挂 [03: 06.89]有些爱却不得不各安天涯 [03: 13.39]在夜深人静的时候想起他 [03: 19.60]送的那些花 [03: 22.15]还说过一些撕心裂肺的情话 [03: 29.15]赌一把幸福的筹码 [03: 33.59]在人来人往的街头想起他 [03: 39.65]他现在好吗 [03: 42.10]可我没有能给你想要的回答 [03: 49.10]可是你一定要幸福呀 [04: 00.07]在夜深人静的时候想起他 [04: 06.52]送的那些花 [04: 08.87]还说过一些撕心裂肺的情话 [04: 16.10]赌一把幸福的筹码 [04: 20.44]在人来人往的街头想起他 [04: 26.50]他现在好吗 [04: 29.00]可我没有能给你想要的回答 [04: 36.10]可是你一定要幸福呀 [04: 47.41]幸福呀'
		}, {
			'Name': '江南',
			'Singer': '林俊杰',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001oGzem0k192p.m4a?fromtag=52',
			'Img': 'images/singer/linjunjie.jpg',
			'Lyric': '[00: 01.08]江南 - 林俊杰 [00: 36.73]风到这里就是粘 [00: 40.37]粘住过客的思念 [00: 44.56]雨到了这里缠成线 [00: 48.35]缠着我们留恋人世间 [00: 52.78]你在身边就是缘 [00: 56.21]缘分写在三生石上面 [01: 00.70]爱有万分之一甜 [01: 04.19]宁愿我就葬在这一点 [01: 08.84]圈圈圆圆圈圈 [01: 10.54]天天年年天天的我 [01: 13.36]深深看你的脸 [01: 15.76]生气的温柔 [01: 17.69]埋怨的温柔的脸 [01: 23.81]不懂爱恨情愁煎熬的我们 [01: 27.50]都以为相爱就像风云的善变 [01: 31.74]相信爱一天抵过永远 [01: 36.08]在这一刹那冻结了时间 [01: 39.66]不懂怎么表现温柔的我们 [01: 43.60]还以为殉情只是古老的传言 [01: 47.44]离愁能有多痛痛有多浓 [01: 52.04]当梦被埋在江南烟雨中 [01: 55.29]心碎了才懂 [02: 20.80]圈圈圆圆圈圈 [02: 22.47]天天年年天天的我 [02: 25.29]深深看你的脸 [02: 27.76]生气的温柔 [02: 29.78]埋怨的温柔的脸 [02: 35.94]不懂爱恨情愁煎熬的我们 [02: 39.53]都以为相爱就像风云的善变 [02: 43.57]相信爱一天抵过永远 [02: 47.98]在这一刹那冻结了时间 [02: 51.61]不懂怎么表现温柔的我们 [02: 55.55]还以为殉情只是古老的传言 [02: 59.54]离愁能有多痛痛有多浓 [03: 03.99]当梦被埋在江南烟雨中 [03: 07.22]心碎了才懂 [03: 19.85]相信爱一天抵过永远 [03: 23.99]在这一刹那冻结了时间 [03: 27.58]不懂怎么表现温柔的我们 [03: 31.52]还以为殉情只是古老的传言 [03: 35.36]离愁能有多痛痛有多浓 [03: 40.01]当梦被埋在江南烟雨中 [03: 45.31]心碎了才懂'
		}, {
			'Name': '看不见的风景',
			'Singer': '许嵩',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004RBsdr0kJrws.m4a?fromtag=52',
			'Img': 'images/singer/xusong.jpg',
			'Lyric': '[00: 00.97]看不见的风景 - 许嵩 [00: 34.23]黑朦朦的天空正下着雨 [00: 37.63]一星期没有停 [00: 41.85]我在这里 [00: 43.63]回忆淋不清 [00: 50.33]你透过玻璃橱窗看风景 [00: 53.78]眨落檐角雨滴 [00: 57.78]静静喘息 [00: 59.81]无声也说明 [01: 04.33]爱情的甜蜜痛苦记得清清楚楚 [01: 09.76]爱了会哭哭了会输 [01: 13.87]反反复复看不清前路 [01: 21.18]我不想还哭泣抹去受伤血迹 [01: 29.31]你嘴角有隐约笑意分析不透你的心 [01: 37.38]我不想还哭泣看不见的风景 [01: 45.36]只想藏进你的梦里看清你 [02: 25.84]雨啊雨一星期没有停 [02: 33.36]我在这里回忆淋不清 [02: 42.35]你透过玻璃橱窗看风景 [02: 45.65]眨落檐角雨滴 [02: 49.71]静静喘息无声也说明 [02: 56.72]爱情的甜蜜痛苦记得清清楚楚 [03: 02.05]爱了会哭哭了会输 [03: 05.86]反反复复我看不清前路 [03: 13.48]我不想还哭泣抹去受伤血迹 [03: 21.25]你嘴角有隐约笑意分析不透你的心 [03: 29.32]我不想还哭泣看不见的风景 [03: 37.30]只想藏进你的梦里看清你 [03: 44.71]我不想不想还哭泣抹去受伤血迹 [03: 53.25]你嘴角有隐约笑意分析不透你的心 [04: 10.09]只想藏进你的梦里看清你'
		}, {
			'Name': '李白',
			'Singer': '李荣浩',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100000rMFLS0ZnngN.m4a?fromtag=52',
			'Img': 'images/singer/lironghao.jpg',
			'Lyric': '[00: 00.70]李白 - 李荣浩 [00: 01.71]词：李荣浩曲：李荣浩 [00: 18.15]大部分人要我学习去看世俗的眼光 [00: 26.47]我认真学习了世俗眼光世俗到天亮 [00: 34.31]一部外国电影没听懂一句话 [00: 38.61]看完结局才是笑话 [00: 42.63]你看我多乖多聪明多么听话多奸诈 [00: 51.48]喝了几大碗米酒再离开是为了模仿 [00: 59.83]一出门不小心吐的那幅是谁的书画 [01: 07.66]你一天一口一个亲爱的对方 [01: 11.92]多么不流行的模样 [01: 16.04]都应该练练书法再出门闯荡 [01: 19.67]才会有人热情买帐 [01: 23.50]要是能重来我要选李白 [01: 27.66]几百年前做的好坏没那么多人猜 [01: 31.83]要是能重来我要选李白 [01: 35.72]至少我还能写写诗来澎湃逗逗女孩 [01: 40.18]要是能重来我要选李白 [01: 43.98]创作也能到那么高端被那么多人崇拜 [01: 51.77]要是能重来 [01: 54.17]喝了几大碗米酒再离开是为了模仿 [02: 02.48]一出门不小心吐的那幅是谁的书画 [02: 10.25]你一天一口一个亲爱的对方 [02: 14.46]多么不流行的模样 [02: 18.57]都应该练练书法再出门闯荡 [02: 22.13]才会有人热情买帐 [02: 26.14]要是能重来我要选李白 [02: 30.36]几百年前做的好坏没那么多人猜 [02: 34.65]要是能重来我要选李白 [02: 38.08]至少我还能写写诗来澎湃逗逗女孩 [02: 42.76]要是能重来我要选李白 [02: 46.64]创作也能到那么高端被那么多人崇拜 [02: 54.38]要是能重来 [03: 27.71]要是能重来我要选李白 [03: 32.84]几百年前做的好坏没那么多人猜 [03: 37.01]要是能重来我要选李白 [03: 40.70]至少我还能写写诗来澎湃逗逗女孩 [03: 45.43]要是能重来我要选李白 [03: 49.26]创作也能到那么高端被那么多人崇拜 [03: 56.71]要是能重来'
		}, {
			'Name': '明天，你好！',
			'Singer': '牛奶&咖啡',
			'classS': '小感觉',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100002OrhQA0bNYFg.m4a?fromtag=52',
			'Img': 'images/singer/asdsd.jpg',
			'Lyric': '[00: 00.05]明天你好 - 牛奶@咖啡 [00: 23.17]看昨天的我们走远了 [00: 28.16]在命运广场中央等待 [00: 33.52]那模糊的肩膀 [00: 36.49]越奔跑越渺小 [00: 43.18]曾经并肩往前的伙伴 [00: 48.15]在举杯祝福后都走散 [00: 53.51]只是那个夜晚 [00: 56.35]我深深的都留藏在心坎 [01: 00.72]长大以后我只能奔跑 [01: 05.74]我多害怕黑暗中跌倒 [01: 10.58]明天你好含着泪微笑 [01: 15.93]越美好越害怕得到 [01: 20.69]每一次哭又笑着奔跑 [01: 25.66]一边失去一边在寻找 [01: 30.68]明天你好声音多渺小 [01: 35.68]却提醒我勇敢是什么 [02: 03.20]当我朝着反方向走去 [02: 08.14]在楼梯的角落找勇气 [02: 13.50]抖着肩膀哭泣 [02: 16.20]问自己在哪里 [02: 23.16]曾经并肩往前的伙伴 [02: 28.17]沉默着懂得我的委屈 [02: 33.52]时间它总说谎 [02: 36.25]我从不曾失去那些肩膀 [02: 40.72]长大以后我只能奔跑 [02: 45.69]我多害怕黑暗中跌倒 [02: 50.61]明天你好含着泪微笑 [02: 56.00]越美好越害怕得到 [03: 00.66]每一次哭又笑着奔跑 [03: 05.66]一边失去一边在寻找 [03: 10.67]明天你好声音多渺小 [03: 15.62]却提醒我 [03: 20.68]长大以后我只能奔跑 [03: 25.60]我多害怕黑暗中跌倒 [03: 30.58]明天你好含着泪微笑 [03: 35.89]越美好越害怕得到 [03: 40.40]每一次哭又笑着奔跑 [03: 45.64]一边失去一边在寻找 [03: 50.67]明天你好声音多渺小 [03: 55.63]却提醒我勇敢是什么'
		}, {
			'Name': '硬币',
			'Singer': '汪峰',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003bSRGv4NaGx9.m4a?fromtag=52',
			'Img': 'images/singer/wangfen.jpg',
			'Lyric': '[00: 04.56]硬币 [00: 05.91]汪峰 [00: 16.48]除了阳光 [00: 17.73]没有什么可以笼罩世界 [00: 23.62]除了雨 [00: 24.84]没有什么可以画出彩虹 [00: 31.61]除了雪 [00: 32.48]没有什么可以洁白大地 [00: 39.17]除了风 [00: 40.11]没有什么可以吹动树叶 [00: 46.27]你有没有看到 [00: 48.59]自己眼中的绝望 [00: 54.20]你有没有听见 [00: 56.41]痛彻心肺的哭声 [01: 01.67]你有没有感到 [01: 03.78]心如花朵般枯萎 [01: 09.40]你有没有体验过 [01: 11.70]生命有多无可奈何 [01: 17.15]除了你 [01: 17.82]没有什么可以让我眷恋 [01: 24.72]除了悲伤 [01: 26.09]没有什么可以值得忘却 [01: 32.29]除了宽容 [01: 33.58]没有什么可以让你释怀 [01: 39.69]除了爱 [01: 40.67]没有什么可以改变生命 [01: 47.16]你有没有看见 [01: 49.18]手上那条单纯的命运线 [01: 54.73]你有没有听见 [01: 57.14]自己被抛弃后的呼喊 [02: 02.37]你有没有感到 [02: 04.50]也许永远只能视而不见 [02: 09.74]你有没有扔过一枚硬币 [02: 13.30]选择正反面 [02: 49.83]你有没有看见 [02: 51.56]手上那条单纯的命运线 [02: 57.33]你有没有听见 [02: 59.29]自己被抛弃后的呼喊 [03: 04.73]你有没有感到 [03: 06.92]也许永远只能视而不见 [03: 12.38]你有没有扔过一枚硬币 [03: 15.45]选择正反面 [03: 19.76] music…… [03: 28.11] end……'
		}, {
			'Name': '时光倒流',
			'Singer': '汪峰',
			'classS': '中文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003cI5Py2rBVUF.m4a?fromtag=52',
			'Img': 'images/singer/wangfen2.jpg',
			'Lyric': '[00: 00.93]时光倒流 - 汪峰 [00: 59.44]那天傍晚我走在街边看着往来如浪的人群 [01: 05.51]想起曾经走过的岁月想起曾经热爱的你 [01: 21.50]我没有该去的地方也不知道身处何处 [01: 28.40]只因为你已不在这里这思念让我心动 [01: 42.67]我想哭却流不出眼泪 [01: 49.63]我想喊却发不出声音 [01: 57.05]我愿意抛弃我的所有 [02: 04.25]如果能时光倒流 [02: 13.17]夕阳洒在我的脸上风儿拔动我的心弦 [02: 19.58]我多想你就坐在我身旁没有你我有多孤独 [02: 34.25]我想哭却流不出眼泪 [02: 41.31]我想喊却发不出声音 [02: 48.67]我愿意抛弃我的所有 [02: 56.08]如果能时光倒流 [03: 47.96]我想哭却流不出眼泪 [03: 55.17]我想喊却发不出声音 [04: 02.33]我愿意抛弃我的所有 [04: 10.04]如果能时光倒流 [04: 17.66]如果能时光倒流 [04: 24.67]如果能时光倒流'
		},

		//第二个类别
		{
			'Name': 'Oceans Deep',
			'Singer': 'SONSOFDAY',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100000L1Cf40Uw7bE.m4a?fromtag=52',
			'Img': 'images/singer/singer3.jpg',
			'Lyric': "[00:08.48]Oceans Deep - Sons Of Day[00:18.48]Even though the world I am in [00:22.55]即使我所生活的世界 [00:22.55]The perfect pitch this way appears [00:27.23]以怎样完美的状态呈现 [00:27.23]The greatest pressures of my sin don't disappear [00:35.86]那沉重的伤感始终挥之不去 [00:35.86]Although alive and without much [00:40.17]或许我这一生拥有的不多  [00:40.17]The wishing well I wished for you [00:44.49]但我将一切美好的祝愿送给你  [00:44.49]Then I look to see myself within it all [00:52.30]然后尽我的全力去帮你一一实现  [00:52.30]My oceans deep my rivers wide [00:56.68]我对你的爱像海洋一样深 像江河一样广 [00:56.68]The strangers weep at pleasures side [01:01.69]就连在世界另一端的陌生人都会为我哭泣 [01:01.69]Oh why do I not see the only one unseen [01:13.19]可为什么我却始终看不见我唯一想见的人 [01:13.19]I'm lost without it seems so true [01:17.57]失去你的爱已成现实  [01:17.57]You left from here from me to you [01:21.38]你从这里离开了我  [01:21.38]Well my heart is broken [01:24.01]那么好吧,我的心碎了 [01:24.01]I am trying can't you see can't you see [01:29.70]但我仍然还在努力 难道你看不到吗 你看不到吗? [01:29.70]My oceans deep my rivers wide [01:34.14]我对你的爱像海洋一样深 像江河一样广 [01:34.14]The strangers weep at pleasures side [01:39.14]就连在世界另一端的陌生人都会为我哭泣 [01:39.14]Oh why do I not see the only one unseen [01:47.45]可为什么我却始终看不见我唯一想见的人 [01:47.45]My oceans deep my rivers wide [01:51.70]我对你的爱像海洋一样深 像江河一样广 [01:51.70]The strangers weep at pleasures side [01:56.76]就连在世界另一端的陌生人都会为我哭泣 [01:56.76]Oh why do I not see the only one unseen [02:42.34]可为什么我却始终看不见我唯一想见的人 [02:42.34]My oceans deep my rivers wide [02:46.78]我对你的爱像海洋一样深 像江河一样广 [02:46.78]The strangers weep at pleasures side [02:51.77]就连在世界另一端的陌生人都会为我哭泣 [02:51.77]Oh why do I not see the only one unseen [02:59.90]可为什么我却始终看不见我唯一想见的人 [02:59.90]My oceans deep my rivers wide [03:04.27]我对你的爱像海洋一样深 像江河一样广 [03:04.27]The strangers weep at pleasures side [03:09.34]就连在世界另一端的陌生人都会为我哭泣 [03:09.34]Oh why do I not see the only one unseen [03:15.34]可为什么我却始终看不见我唯一想见的人 "
		},
		{
			'Name': 'Blow Me A Kiss',
			'Singer': 'Git Fresh',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004f8bWE0OjdME.m4a?fromtag=52',
			'Img': 'images/singer/singer3.jpg',
			'Lyric': "[00:07.73]Blow Me A Kiss - Deep Side [00:13.70] [00:13.70]It's like this [00:15.36]就像这样  [00:15.36]It's like that [00:16.66]就像那样  [00:16.66]I got dough [00:17.98]我有钱  [00:17.98]I got stacks [00:19.63]很多钱  [00:19.63]I can buy anything that I need [00:22.98]我可以买任何我需要的  [00:22.98]But I gotta have you for free [00:26.20]但我一定要不花一文得到你  [00:26.20]I ain't never paid for it in my life [00:28.97]我不是没有付出过  [00:28.97]So why the hell would I pay for a wife [00:32.50]可是我为什么要在妻子上付出那么沉重的代价  [00:32.50]I need love [00:33.97]我需要爱情  [00:33.97]Yes I do [00:35.88]是的没错  [00:35.88]But this is what I need from you [00:39.14]这就是我需要你给我的  [00:39.14]Ooh [00:40.26]哦 [00:40.26]A brother needs love and affection [00:43.37]男人需要有人来爱他  [00:43.37]A brother needs TLC [00:45.99]男人也需要关心和体贴  [00:45.99]And I ain't talking about chili (chili) [00:49.45]我没有瞎说  [00:49.45]But I'll take chili if she don't want it (Ooh) [00:52.69]但如果你喜欢的话我也以随便怎样  [00:52.69]A brother needs cooking and cleaning [00:55.87]男人需要有人为他洗衣做饭  [00:55.87]And when she say she loves me she means it [00:58.73]当她开始对我表达爱意的时候  [00:58.73]Her insides pretty (pretty) [01:01.48]我感觉到了她的内在美  [01:01.48]Hey hey hey [01:02.97]嘿嘿  [01:02.97]And if that's you [01:05.76]如果这个人真的是你  [01:05.76]Blow me a kiss (kiss) [01:09.20]那就给我一个飞吻  [01:09.20]To let me know(know) [01:13.69]好让我知道 [01:13.69]If you feeling me [01:15.48]你是否感觉到了我  [01:15.48]You can do better then [01:18.50]你可以做的更好  [01:18.50]Than That Scrub That U With (Than Scrub That U With) [01:22.20]和你一起不用考虑 [01:22.20]Babygirl all that you gotta do (gotta do) [01:24.81]宝贝你唯一需要做的就是 [01:24.81]Is blow me a kiss [01:29.45]给我一个飞吻  [01:29.45]La da da [01:30.05]啦 嗒嗒 [01:30.05]da da da da da da [01:31.09]啦啦啦 啦啦 啦啦 啦啦  [01:31.09]La da da [01:32.56]啦 嗒嗒 [01:32.56]da da da da da da [01:35.31]啦啦啦 啦啦 啦啦 啦啦  [01:35.31]La da da (da da) [01:36.18]啦 嗒嗒 [01:36.18]da da (da da) [01:38.48]啦啦啦 啦啦 啦啦 啦啦  [01:38.48](da da) [01:40.51]啦啦  [01:40.51]Blow me a kiss [01:42.69]给我一个飞吻  [01:42.69](kiss kiss) [01:43.49]吻吻 [01:43.49]Da da [01:45.12]啦啦  [01:45.12](kiss kiss) [01:45.84]吻吻 [01:45.84]La da da [01:46.68]啦啦  [01:46.68](kiss kiss) [01:47.27]吻吻 [01:47.27]Da da [01:48.33]啦啦  [01:48.33](kiss kiss) [01:49.11]吻吻 [01:49.11]La da da [01:49.97]啦啦  [01:49.97](kiss kiss) [01:50.47]吻吻 [01:50.47]Da da [01:51.08]啦啦  [01:51.08](kiss kiss) [01:51.81]吻吻 [01:51.81]Da da [01:53.25]啦啦  [01:53.25]Blow me a kiss [01:55.27]给我一个飞吻  [01:55.27]I'ma bout this [01:56.99]我就这样  [01:56.99]I have O's [01:58.35]我富有  [01:58.35]I spit stacks [01:59.75]我不在乎钱  [01:59.75]I've had everything in my life _(my life) [02:04.06]我什么都不缺  [02:04.06]But I'ma have you tonight [02:06.42]但今晚我只想得到你  [02:06.42]Yeah I'ma have [02:07.41]是的我要得到你  [02:07.41]Yooooou [02:10.10]你你... [02:10.10]Yooooou [02:12.87]你你... [02:12.87]I need love [02:14.36]我需要爱情  [02:14.36]Yes indeed [02:16.58]我是认真的  [02:16.58]But this is what you get from me [02:19.61]而且这也是你将得到的  [02:19.61](Ooh) [02:21.10]噢 [02:21.10]I'ma give you love in direction [02:23.95]我要指引你找到爱情  [02:23.95]You can be my [02:24.85]你将成为我的 [02:24.85]PYT [02:25.73]小宝贝  [02:25.73]I ain't talking about Thriller (Thriller) [02:29.48]我不是逗你玩  [02:29.48]But I can be your thriller if you want it (Ooh) [02:33.27]但只要你喜欢那我就都依你  [02:33.27]I don't need no cooking or cleaning [02:36.32]我不是不需要有人来洗衣做饭  [02:36.32]We can get a maid if we need it [02:39.16]如果需要的话我们可以找个保姆  [02:39.16]Cause I'm on my Crazy (crazy) [02:41.79]因为我为你疯狂  [02:41.79]Hey hey hey [02:43.76]嘿嘿  [02:43.76]And if that's yooou [02:45.81]如果这个人真的是你  [02:45.81]You [02:46.63]你  [02:46.63]Blow me a kiss (kiss) [02:49.74]那就给我一个飞吻  [02:49.74]To let me know (know) [02:54.09]好让我知道 [02:54.09]That you're digging me (digging me) [02:56.21]你是否感觉到了我  [02:56.21]You can do better __then [02:59.11]你可以做的更好  [02:59.11]Than That Scrub That U With (Than Scrub That U With) [03:02.69]和你一起不用考虑 [03:02.69]Babygirl all that you gotta do (gotta do) [03:05.42]宝贝你唯一需要做的就是 [03:05.42]Is blow me a kiss [03:08.27]给我一个飞吻  [03:08.27]Hey hey hey [03:09.36]嘿嘿  [03:09.36]La da da [03:10.04]啦 嗒嗒 [03:10.04]da da [03:10.63]啦啦啦 啦啦 啦啦 啦啦  [03:10.63]da da [03:11.31]啦 嗒嗒 [03:11.31]da da [03:11.85]啦啦啦 啦啦 啦啦 啦啦  [03:11.85]La da da [03:12.71]啦 嗒嗒 [03:12.71]da da [03:13.28]啦啦啦 啦啦 啦啦 啦啦  [03:13.28]da da [03:13.95]啦啦  [03:13.95]da da [03:15.04]啦啦  [03:15.04]La da da (da da) [03:16.54]吻吻 [03:16.54]da da (da da) [03:18.82]啦啦  [03:18.82]da da [03:20.99]吻吻 [03:20.99]Blow me a kiss [03:21.96]啦啦  [03:21.96](kiss kiss) [03:22.71]吻吻 [03:22.71]da da [03:23.66]啦啦  [03:23.66](kiss kiss) [03:24.36]吻吻 [03:24.36]La da da [03:24.96]啦啦  [03:24.96](kiss kiss) [03:25.71]吻吻 [03:25.71]da da [03:26.97]啦啦  [03:26.97](kiss kiss) [03:27.71]吻吻 [03:27.71]La da da [03:28.68]啦啦  [03:28.68](kiss kiss) [03:29.22]吻吻 [03:29.22]da da [03:29.77]啦啦  [03:29.77](kiss kiss) [03:30.16]吻吻 [03:30.16]da da [03:31.07]啦啦  [03:31.07]da da  [03:33.63]啦啦  [03:33.63]Blow me a kiss [03:36.69]给我一个飞吻  [03:36.69]The song right here [03:38.50]这首歌在这里 [03:38.50]It get the medicine [03:42.05]它把药 [03:42.05]Some big show [03:44.45]一些大的显示 [03:44.45]Right here [03:46.21]在这儿 [03:46.21]Blow me a kiss [03:58.91]给我一个飞吻  [03:58.91]Blow me a kiss [04:01.63]给我一个飞吻"
		},
		{
			'Name': 'I wanted you',
			'Singer': 'Ina Wroldsen',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004H7E7W14vQ3g.m4a?fromtag=52',
			'Img': 'images/singer/singer3.jpg',
			'Lyric': "[00:01.23]I Wanted You-Ina[00:18.16]Lately I've been thinking about what I can do [00:22.09]最近我一直在思考我能做什么  [00:22.09]I've been stressing to fall back in love with you [00:25.92]我一直强调回落爱上了你  [00:25.92]I'm so sorry that I couldn't follow through [00:29.24]我很抱歉，我无法贯彻  [00:29.24]But I can't go on this way. I've got to stop it babe [00:34.26]但是，我不能再这样。我得阻止它宝贝  [00:34.26]You've been wonderful in all that you can be [00:38.07]您已在所有美妙，你可以  [00:38.07]But it hurts when you say that you understand me [00:42.28]但它伤害时，你说，你明白我的  [00:42.28]So believe me. I, I am sorry, I, I am sorry, I, I [00:48.49]因此，相信我。我很抱歉，我，我很抱歉，我，我  [00:48.49]I wanted you to be there when I fall [00:52.63]我想你在那里当我属于  [00:52.63]I wanted you to see me through it all [00:56.66]我想你来见我通过这一切  [00:56.66]I wanted you to be the one I loved [01:00.76]我想你是一个我喜欢  [01:00.76]I wanted you, I wanted you [01:04.75]我想你，我想你  [01:04.75]I wanted you to hold me in my sleep [01:08.68]我想你持有我的睡眠  [01:08.68]I wanted you to show me what I need [01:12.82]我希望你能告诉我我需要什么  [01:12.82]I wanted you to know just how down deep [01:16.91]我想你知道是多么深跌  [01:16.91]I wanted you, I wanted you [01:22.63]我想你，我想你  [01:22.63]I've been pushing hard to open up the door [01:26.51]我一直在努力推动开放的大门  [01:26.51]Trying to take us back to where we were before [01:30.74]试图使我们回到我们面前  [01:30.74]But I'm done. I just can't do this anymore [01:33.92]但我还是要做。我不能这样做了  [01:33.92]'Cause we can't be mended, so let's stop pretending now [01:38.29]'的原因，我们不能修复，所以让我们现在停止假装  [01:38.29]We've been walking around in circles for some time [01:42.78]我们一直在四处走动界一段时间  [01:42.78]And I think we should head for the finish line [01:46.82]我认为，我们应该走向终点  [01:46.82]So believe me. I, I am sorry, I, I am sorry, I, I [01:53.22]因此，相信我。我很抱歉，我，我很抱歉，我，我  [01:53.22]I wanted you to be there when I fall [01:57.10]我想你在那里当我属于  [01:57.10]I wanted you to see me through it all [02:01.09]我想你来见我通过这一切  [02:01.09]I wanted you to be the one I loved [02:05.22]我想你是一个我喜欢  [02:05.22]I wanted you, I wanted you [02:09.20]我想你，我想你  [02:09.20]I wanted you to hold me in my sleep [02:13.24]我想你持有我的睡眠  [02:13.24]I wanted you to show me what I need [02:17.32]我希望你能告诉我我需要什么  [02:17.32]I wanted you to know just how down deep [02:21.43]我想你知道是多么深跌  [02:21.43]I wanted you, I wanted you [02:26.87]我想你，我想你  [02:26.87]I, I... I'm so sorry baby [02:30.25]一，一..我很抱歉婴儿  [02:30.25]But I, I... I gotta pack up and leave [02:34.14]但我一..俺得收拾行装，离开  [02:34.14]But I, I'll always remember how we came close [02:39.69]但是，我，我会永远记住我们如何接近  [02:39.69]... to being how I wanted to be [02:45.58]...被如何我想成为  [02:45.58]I wanted you baby [02:56.75]我想你婴儿  [02:56.75]I wanted you [02:57.79]我想你  [02:57.79]I wanted you to be there when I fall [03:01.67]我想你在那里当我属于  [03:01.67]I wanted you to see me through it all [03:05.74]我想你来见我通过这一切  [03:05.74]I wanted you to be the one I loved [03:09.82]我想你是一个我喜欢  [03:09.82]I wanted you, I wanted you [03:14.03]我想你，我想你  [03:14.03]I wanted you to hold me in my sleep [03:17.82]我想你持有我的睡眠  [03:17.82]I wanted you to show me what I need [03:21.85]我希望你能告诉我我需要什么  [03:21.85]I wanted you to know just how down deep [03:26.07]我想你知道是多么深跌  [03:26.07]I wanted you, I wanted you... [03:46.94]我想你，我想你"
		},
		{
			'Name': 'Better In Time',
			'Singer': 'Leona Lewis',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003jK24E184xMr.m4a?fromtag=52',
			'Img': 'images/singer/singer3.jpg',
			'Lyric': "[00 : 00.73]Better In Time - Leona Lewis [00 : 24.50] [00 : 24.50]It's been the longest winter without you [00:30.47]这是最漫长的冬季 因为你不在[00:30.47]I didn't know where to turn to [00 : 36.17]我不知道该去哪里 [00 : 36.17]See somehow I can't forget you [00:41.98]没有道理就是忘不了你[00:41.98]After all that we've been through [00 : 47.03]但我们已经成为过去 [00 : 47.03]Going coming thought I heard a knock [00 : 49.81]来来往往 [00 : 49.81]Who's there no one [00:51.83]我听见一阵敲门[00:51.83]Thinking that I deserve it [00:54.40]想着（我值得）[00:54.40]Now I realize that I really didn't know [00 : 58.69]我现在才懂 其实我并不知道 [00 : 58.69]If you didn't notice you mean everything [01:01.52]如果哦你没注意过 你意味着一切[01:01.52]Quickly I'm learning to love again [01 : 04.39]（快点我在听） [01 : 04.39]All I know is I'ma be ok [01:11.34]我都知道我会过得很好[01:11.34]Thought I couldn't live without you [01 : 14.27]只是不能没有你 [01 : 14.27]It's gonna hurt when it heals too [01:17.21]痊愈的同时也会痛[01:17.21]oh yeah It'll all get better in time [01 : 22.91]哦 耶一切都会好起来的 [01 : 22.91]And even though I really love you [01 : 25.88]尽管我真的爱你 [01 : 25.88]I'm gonna smile cause I deserve to [01:30.62]我会微笑因为我也值得		 [01:30.62]It'll all get better in time [01 : 35.01]一切都会好起来的 [01 : 35.01]I couldn't turn on the TV [01:40.46]我可以换台		 [01:40.46]Without something there to remind me [01:46.61]不需要什么东西来提醒我[01:46.61]Was it all that easy [01:52.15]一切都很简单[01:52.15]To just put aside your feelings [01:57.10]就是将'我们'排除在你的感情之外[01:57.10]If I'm dreaming don't wanna laugh [02:00.16]如果我是在做梦 我不想伤害它[02:00.16]Hurt my feelings but that's the path [02 : 02.95]伤害我的感情但它已经过去 [02 : 02.95]I believe in [02 : 05.15]我相信它 [02 : 05.15]And I know that time will heal it [02 : 08.68]而且我知道，时间会使它痊愈 [02 : 08.68]If you didn't notice boy you meant everything [02:11.85]如果哦你没注意过 你意味着一切[02:11.85]Quickly I'm learning to love again [02 : 14.75]很快我会学着再爱一次 [02 : 14.75]All I know is I'ma be ok [02:21.56]我都知道我会过得很好[02:21.56]Thought I couldn't live without you [02 : 24.38]只是不能没有你 [02 : 24.38]It's gonna hurt when it heals too [02:27.34]痊愈的同时也会痛[02:27.34]oh yeah It'll all get better in time [02 : 33.13]哦 耶一切都会好起来的 [02 : 33.13]And even though I really love you [02 : 36.05]尽管我真的爱你 [02 : 36.05]I'm gonna smile cause I deserve to [02:40.79]我会微笑因为我也值得[02:40.79]It'll all get better in time [02 : 45.20]哦 耶一切都会好起来的 [02 : 45.20]Since there's no more you and me (no more you and me) [02:50.50]自从你我结束之后（你我结束）[02:50.50]It's time I let you go [02 : 52.06]这一次我让你离开 [02 : 52.06]So I can be free [02 : 56.65]于是我也可以自由 [02 : 56.65]And live my life how it should be [03 : 02.05]去过我该过的生活 [03 : 02.05]No matter how hard it is I'll be fine without you [03:06.71]无论有多难 没有你我也会很好		 [03:06.71]Yes I will [03:08.48]是的  我会的[03:08.48]Thought I couldn't live without you [03 : 11.14]然而我不能没有你 [03 : 11.14]It's gonna hurt when it heals too [03:15.95]痊愈的同时也会痛[03:15.95]It'll all get better in time [03 : 19.98]哦 耶一切都会好起来的 [03 : 19.98]And even though I really love you [03 : 22.86]尽管我真的爱你 [03 : 22.86]I'm gonna smile cause I deserve to（Yes I do） [03:27.63]我会微笑因为我也值得（是的）[03:27.63]It'll all get better in time [03 : 31.82]一切都会好起来的 [03 : 31.82]Thought I couldn't live without you [03:34.65]只是不能没有你[03:34.65]It's gonna hurt when it heals too [03 : 39.28]痊愈的同时也会痛 [03 : 39.28]It'll all get better in time [03:43.57]一切都会好起来的[03:43.57]And even though I really love you [03:46.69]尽管我真的爱你[03:46.69]I'm gonna smile cause I deserve to [03 : 49.20]我会微笑因为我也值得"
		},
		{
			'Name': 'Roamer',
			'Singer': 'Enrique Iglesias',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004X7wrx2C7Clw.m4a?fromtag=52',
			'Img': 'images/singer/singer3.jpg',
			'Lyric': "[00:03.38]Roamer - Enrique Iglesias [00:13.20] [00:13.20]hello, i'm coming at your town again [00:18.96]嗨，我又来到你的城市 [00:18.96]how's about a night, how's about a flight supernova [00:25.81]停留一个晚上，或是只飞过上方，超新星啊 [00:25.81]i know, i've been kinda hot and cold [00:31.40]我知道，我有点忽冷忽热 [00:31.40]but you never go away, no matter what i say, [00:34.70]但我不会离开，我总是无心之言 [00:34.70]in the mornings [00:36.95]在清晨 [00:36.95]my need is running low [00:40.17]我要开始飞低 [00:40.17]i've been moving everywhere [00:43.77]在各地穿梭往返 [00:43.77]spreading out my wings, trying everything [00:46.93]伸展翅膀，肆意飞翔 [00:46.93]but that's over, cos when i'm on my own [00:52.71]但那都结束了，因为当我孤单一人 [00:52.71]waking up with someone new [00:56.25]醒来后发现新的脸庞 [00:56.25]and now i feel the same, i'm mixing up their name [00:59.50]没什么不一样，而且他们的名字我总记不清 [00:59.50]it's like a roamer [01:03.47]就像一个流浪汉 [01:03.47]goodbye, i'm going on the road again [01:08.63]再见吧，我将再次启程 [01:08.63]but i'm bringing you along, [01:10.79]但也带走对你的思念 [01:10.79]in each and every song that we cover [01:15.95]去传唱你我故事的歌 [01:15.95]and i, i always wanna see your face [01:21.70]而且，我会时时浮想你的面孔 [01:21.70]cos looking in your eyes, is where i see my life [01:24.92]因为看进了你的眼睛，我就看见了我的生命 [01:24.92]when i'm older [01:27.19]当我变老了 [01:27.19]my need is running low [01:30.37]我要开始飞低 [01:30.37]i've been moving everywhere [01:33.92]在各地穿梭往返 [01:33.92]spreading out my wings, trying everything [01:37.02]伸展翅膀，肆意飞翔 [01:37.02]but that's over, cos when i'm on my own [01:42.90]但那都结束了，因为当我孤单一人 [01:42.90]waking up with someone new [01:46.47]醒来后发现新的脸庞 [01:46.47]and now i feel the same, i'm mixing up their name [01:49.65]没什么不一样，而且他们的名字我总记不清 [01:49.65]it's like a roamer [01:52.71]就像一个流浪汉 [01:52.71]like a roamer, like a roamer [01:59.54]像个流浪汉，像个流浪汉 [01:59.54]mississippi, tenessee [02:02.99]密西西比，田纳西 [02:02.99]california ,lexico ,like a roamer [02:05.85]加利福利亚，墨西哥，像个流浪汉 [02:05.85]russia, san fransico bay, to the uk, [02:08.87]俄罗斯，旧金山湾，直到大不列颠 [02:08.87]round the world in 80 days [02:10.99]80天环游世界 [02:10.99]like a roamer [02:24.67]像个流浪汉 [02:24.67]when i go away, don't wanna go away [02:27.95]当我离开，心仍徘徊 [02:27.95]don't wanna go away, don't wanna go away [02:36.42]心仍徘徊，心仍徘徊 [02:36.42]my need is running low [02:39.73]我要开始飞低 [02:39.73]i've been moving everywhere [02:42.62]在各地穿梭往返 [02:42.62]spreading out my wings, trying everything [02:46.09]伸展翅膀，肆意飞翔 [02:46.09]but that's over, cos when i'm on my own [02:51.94]但那都结束了，因为当我孤单一人 [02:51.94]waking up with someone new [02:55.56]醒来后发现新的脸庞 [02:55.56]and now i feel the same, i'm mixing up their name [02:58.73]没什么不一样，而且他们的名字我总记不清 [02:58.73]it's like a roamer [03:01.44]就像一个流浪汉 [03:01.44]my need is running low [03:04.51]我要开始飞低 [03:04.51]i've been moving everywhere [03:08.01]在各地穿梭往返 [03:08.01]spreading out my wings, trying everything [03:11.18]伸展翅膀，肆意飞翔 [03:11.18]but that's over, cos when i'm on my own [03:17.55]但那都结束了，因为当我孤单一人 [03:17.55]waking up with someone new [03:20.66]醒来后发现新的脸庞 [03:20.66]and now i feel the same, i'm mixing up their name [03:23.87]没什么不一样，而且他们的名字我总记不清 [03:23.87]it's like a roamer [03:27.92]就像一个流浪汉 [03:27.92]mississippi, tenessee [03:30.78]密西西比，田纳西 [03:30.78]california ,lexico ,like a roamer [03:33.83]加利福利亚，墨西哥，像个流浪汉 [03:33.83]russia, san fransico bay, to the uk, [03:36.64]俄罗斯，旧金山湾，直到大不列颠 [03:36.64]round the world in 80 days [03:38.72]80天环游世界 [03:38.72]like a roamer [03:43.23]像个流浪汉 "
		},
		{
			'Name': 'Think Again',
			'Singer': 'kate havnevik',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001oaBvI08kmlL.m4a?fromtag=52',
			'Img': 'images/singer/singer3.jpg',
			'Lyric': "[00:00.45]Think Again - Kate Havnevik [00:17.83]Only you [00:20.73]惟有你 [00:20.73]I wanna be in love with you [00:25.03]我想与你相恋 [00:25.03]I don't wanna get over you [00:29.58]我不想忘掉你。 [00:29.58]I want you here [00:35.43]我要你在我身边 [00:35.43]Me and you [00:38.68]与你相比 [00:38.68]Maybe I'm no good for you [00:43.18]可能我配不上你 [00:43.18]Alter strain the line from you [00:47.58]所以变着法躲开你。 [00:47.58]Can't you see [00:54.28]你感觉不到吗 [00:54.28]Summer is coming to a close [00:58.78]夏天即将落幕。 [00:58.78]Dreaming's over once again [01:03.33]梦境再次苏醒。 [01:03.33]It's still quiet in this town [01:07.81]小城依旧宁静。 [01:07.81]I know where things to end [01:12.90]我知道一切就要走向终结。 [01:12.90]And I…… [01:16.46]而我 [01:16.46]I'm not to see you [01:20.66]我再也见不到你 [01:20.66]Woo…… [01:35.61]喔。。。 [01:35.61]Only you [01:38.31]惟有你 [01:38.31]I wanna make pround of you [01:42.71]我总想要复制一个你 [01:42.71]Is that how I get over you [01:47.35]我是否因此失去了你 [01:47.35]Set you free [01:53.16]让你远离 [01:53.16]Broke into [01:56.53]心已破碎 [01:56.53]moving onto tears on you [02:00.74]为你我流干了眼泪 [02:00.74]I know I'll smile on you [02:05.14]我明白我应微笑待你。 [02:05.14]Clear on me [02:12.09]装作什么都没发生过。 [02:12.09]Summer is coming to a close [02:16.54]夏天即将落幕。 [02:16.54]Dreaming's over once again [02:21.09]梦境再次苏醒。 [02:21.09]It's still quiet in this town [02:25.42]小城依旧宁静。 [02:25.42]I know where things to end [02:30.67]我知道一切就要走向终结。 [02:30.67]And I…… [02:34.01]而我 [02:34.01]I'm not to see you [02:38.22]我再也见不到你 [02:38.22]Woo…… [02:44.67]喔。。。 [02:44.67]Think again [02:54.57]再次回想 [02:54.57]I know that I'm losing you [02:58.62]我知道我失去了你 [02:58.62]I know that I'm losing you [03:03.17]我知道我失去了你 [03:03.17]Think again [03:04.82]反复回想 [03:04.82]But I don't wanna get over you [03:11.87]我真的不想忘掉你 [03:11.87]Ha…… [03:27.51]啊。。。 "
		}, {
			'Name': 'Right Here Waiting',
			'Singer': 'Richard Marx',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004bjlJj0M9Ord.m4a?fromtag=52',
			'Img': 'images/singer/asdsad.jpg',
			'Lyric': "[00:00.66]Right Here Waiting(此情可待) - Bryan Adams [00:45.00] [00:45.00]Oceans apart day after day [00:50.94]隔海相思，日复一日 [00:50.94]And I slowly go insane [00:55.44]我逐渐陷入疯狂 [00:55.44]I hear your voice on the line [01:01.45]在电话里听着你的声音 [01:01.45]But it doesnt stop the pain [01:06.21]但那不能疗伤止痛 [01:06.21]If I see you next to never [01:11.76]如果永远见不到你 [01:11.76]How can we say forever [01:16.96]我俩还谈什么天长地久 [01:16.96]Wherever you go [01:19.56]不论你去了哪里 [01:19.56]Whatever you do [01:21.86]不管你做了什么 [01:21.86]I will be right here waiting for you [01:27.63]我都会在此为你等候 [01:27.63]Whatever it takes [01:30.24]不管未来如何 [01:30.24]Or how my heart breaks [01:32.68]或我有多么伤心 [01:32.68]I will be right here waiting for you [01:43.94]我都会在此为你等候 [01:43.94]I took for granted all the times [01:50.09]过去我一直视为理所当然 [01:50.09]That I though would last somehow [01:54.64]以为那终究会继续 [01:54.64]I hear the laughted I taste the tears [02:00.51]我听到笑语，尝到泪水 [02:00.51]But I cant get near you now [02:05.32]现在却无法靠近你 [02:05.32]Oh cant you see it baby [02:10.64]宝贝，你难道看不出来 [02:10.64]You've got me goin Crazy [02:16.25]你已经令我疯狂 [02:16.25]Wherever you go [02:18.54]不论你去了哪里 [02:18.54]Whatever you do [02:21.10]不管你做了什么 [02:21.10]I will be right here waiting for you [02:26.66]我都会在此为你等候 [02:26.66]Whatever it takes [02:29.41]不管未来如何 [02:29.41]Or how my heart breaks [02:32.02]或我有多么伤心 [02:32.02]I will be right here waiting for you [02:38.07]我都会在此为你等候 [02:38.07]I wonder how we can survive [02:43.78]我怀疑要怎样才让继续下去 [02:43.78]This romance [02:48.30]这段恋情 [02:48.30]But in the end if Im with you [02:53.44]如果最后我能够和你在一起 [02:53.44]I'll take the chance [03:20.79]我会好好把握机会 [03:20.79]Oh cant you see it baby [03:25.97]宝贝，你难道看不出来 [03:25.97]You've got me goin crazy [03:31.53]你已经令我疯狂 [03:31.53]Wherever you go [03:33.97]不论你去了哪里 [03:33.97]Whatever you do [03:36.53]不管你做了什么 [03:36.53]I will be right here waiting for you [03:41.83]我都会在此为你等候 [03:41.83]Whatever it takes [03:44.68]不管未来如何 [03:44.68]Or how my heart breaks [03:47.37]或我有多么伤心 [03:47.37]I will be right here waiting for you [04:01.02]我都会在此为你等候 [04:01.02]waiting for you [04:02.90]为你等候 "
		}, {
			'Name': 'Wonderful Tonight',
			'Singer': 'Eric Clapton',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003H5UTj1Q6Ekm.m4a?fromtag=52',
			'Img': 'images/singer/asdsd.jpg',
			'Lyric': "[00:22.22]It's late in the evening [00:27.06]夜色渐浓 [00:27.06]She is wondering what clothes to wear [00:32.41]她还在为如何装扮犹豫不决 [00:32.41]She puts on her make-up [00:37.31]选好衣服穿上 薄施粉黛 [00:37.31]And brushes she's long blonde hair [00:42.30]并盘好了那一头漂亮的金发 [00:42.30]And then she asks me Do I look all right [00:50.62]然后她问我这样打扮得合适吗 [00:50.62]And I say Yes you look wonderful tonight [01:07.47]我答到:是的 你今晚看起来很迷人 [01:07.47]We go to a party [01:12.46]我们去参加一个晚会 [01:12.46]Everyone turns to see [01:17.61]惹得众人频频侧目 [01:17.61]This beautiful lady that's walking around with me [01:27.65]这位美丽的淑女 [01:27.65]And then she asks me Do you feel all right [01:35.22]与我结伴款款而行 [01:35.22]And I say Yes I feel wonderful tonight [01:45.56]这时她问我:你感觉还好吧 [01:45.56]I feel wonderful because I see [01:51.36]我回答:是的 我今晚感觉很不错 [01:51.36]The love light in your eyes [01:56.35]我感觉不错是因为我看到在你眼中燃烧着的爱意 [01:56.35]And wonder of it all [02:01.14]而且我还在想 [02:01.14]That you just don't realize [02:04.92]你可能并不知道 [02:04.92]How much I love you [02:28.03]我到底有多爱你 [02:28.03]It's time to go home now [02:32.82]该回家的时候 [02:32.82]And I've got an aching head [02:37.77]我觉到有点头痛 [02:37.77]So I give her the car keys [02:42.86]因此我给她车钥匙 [02:42.86]And she helps me to bed [02:47.35]她送我回家并扶我上床 [02:47.35]And then I tell her as I turn out the light [02:55.78]我告诉她 当我把灯关掉的时候 [02:55.78]I say My darling you are wonderful tonight [03:06.31]我说:亲爱的 你今晚很迷人 [03:06.31]Oh my darling you are wonderful tonight [03:32.53]哦 我亲爱的 你今晚真的很迷人 "
		}, {
			'Name': 'Forever Young',
			'Singer': 'Youth Group',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100002uQH2G3O7A8z.m4a?fromtag=52',
			'Img': 'images/singer/foreverYoung.jpg',
			'Lyric': "[00:00.70]Forever, forever[00:03.17]Forever young ----Youth Group[00:19.04]Let's dance in style let's dance for a while,[00:23.63]Heaven can wait we're only watching the skies,[00:27.73]Hoping for the best but expecting the worst,[00:31.63]Are you gonna drop the bomb or not?[00:36.09]Let us die on let us live forever,[00:40.32]Don't have the power but we never say never,[00:44.39]Sitting in the sandpit life is a short trip,[00:49.16]Music's for the sad man[00:52.83]Can you imagine when this race is run,[00:57.03]Turning up our faces into the sun,[01:01.23]Praising our leaders getting in tune,[01:05.08]Music's played by the mad man[01:09.42]Forever young, I want to be forever young,[01:17.49]Do you really want to live forever?[01:21.61]Forever forever,[01:43.56]Some are like water Some are like the heat,[01:46.86]Some are melodies Some are the beat,[01:51.14]Sooner or later they'll all be gone,[01:55.10]Why don't they stay on?[01:59.24]It's hard to get without a cause,[02:03.15]I don't want to perish like a fading voice,[02:07.54]Youth is like diamonds in the sun,[02:11.64]And diamonds are forever,[02:15.19]Forever young, I wanna be forever young[02:23.47]Do you really want to live forever[02:27.44]Forever, forever[02:32.04]Forever young, I wanna be forever young[02:39.75]Do you really want to live forever[02:43.93]Forever, forever[03:21.55]Forever young, I wanna be forever young[03:28.61]Do you really want to live forever[03:33.60]Forever, forever[03:37.38]Forever young, I wanna be forever young[03:45.06]Do you really want to live forever"
		}, {
			'Name': 'Amarantine',
			'Singer': 'Enya',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003YusAP08qsMt.m4a?fromtag=52',
			'Img': 'images/singer/enya.jpg',
			'Lyric': '[00: 00.34] Amarantine - Enya[00: 07.82] You know when you gave your love away[00: 13.51] It opened your heart everything is new[00: 19.45] And you know time will always find a way[00: 25.47] To let your heart believe it true[00: 31.90] You know love is everything you say[00: 37.63] A whisper a word promises you give[00: 43.48] You feel it in the heartbeat of the day[00: 49.68] You know this is the way love is[00: 56.25] Amarantine[00: 59.00] Amarantine[01: 02.02] Amarantine[01: 05.01] Love is always love[01: 08.42] Amarantine[01: 11.08] Amarantine[01: 13.89] Amarantine[01: 17.35] love is always love[01: 24.67] You know love will sometimes make you cry[01: 30.16] So let the tears go they will flow away[01: 36.11] For you know love will always let you fly[01: 42.27] How far a heart can fly away[01: 48.59] Amarantine[01: 51.77] Amarantine[01: 54.74] Amarantine[01: 58.11] Love is always love[02: 01.01] Amarantine[02: 03.86] Amarantine[02: 06.63] Amarantine[02: 10.11] Love is always love[02: 13.34] Amarantine[02: 16.02] Amarantine[02: 18.81] Amarantine[02: 22.25] Love is always love[02: 29.38] You know when love shining in your eyes[02: 34.68] It may be the storms falling from above[02: 41.09] And you know love is with you when you rise[02: 46.71] For night and day belong to love'
		}, {
			'Name': 'I Look To You',
			'Singer': 'Whitney Houston',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003ZxD8w29OCEP.m4a?fromtag=52',
			'Img': 'images/singer/huiT.jpg',
			'Lyric': "[00:00.61]I Look To You - Whitney Houston  [00:10.24]As I lay me down [00:14.98]随着我躺下 [00:14.98]heaven hear me now [00:19.65]天堂听到我的呼声 [00:19.65]I am lost without a cause [00:23.90]我已迷失 没有任何理想  [00:23.90]after giving it my all [00:28.87]在我付出所有之后 [00:28.87]Winter storms have come [00:33.77]冬天的风暴已来 [00:33.77]and darkened my sun [00:38.41]灰暗了我的太阳 [00:38.41]After all that I've been through [00:43.17]经历了所有之后  [00:43.17]Who on earth can I turn to [00:46.37]到底我能向谁求助 [00:46.37]I look to you [00:51.24]我指望你  [00:51.24]I look to you [00:57.25]我指望你  [00:57.25]After all my strength is gone [01:02.03]在我所有力气丧失殆尽 [01:02.03]In you I can be strong [01:05.20]靠着你 我会强壮有力 [01:05.20]I look to you [01:10.09]我指望你 [01:10.09]I look to you [01:15.94]我指望你 [01:15.94]And when melodies are gone [01:20.53]当旋律消失 [01:20.53]In you I hear a song [01:23.91]在你这我听到一首歌 [01:23.91]I look to you [01:34.30]我指望你 [01:34.30]After I lose my breath [01:39.33]当我不能呼吸 [01:39.33]there is no more fighting left [01:43.90]没有斗争剩下 [01:43.90]Thinking to rise no more [01:48.71]不再想着起来 [01:48.71]Searching for that open door [01:52.97]寻找那开着的门 [01:52.97]and every road that I've taken [01:57.99]我走过的每一条路 [01:57.99]Led to my regret [02:02.82]导致我的悔恨 [02:02.82]And I don't know if I'm gonna make it [02:07.51]我不知道我是否能搞定 [02:07.51]Nothing to do but lift my head [02:11.33]没事做 只能抬头 [02:11.33]I look to you [02:15.80]我指望你  [02:15.80]I look to you [02:22.00]我指望你  [02:22.00]After all my strength is gone [02:26.70]在我所有力气丧失殆尽 [02:26.70]In you I can be strong [02:29.87]靠着你 我会强壮有力 [02:29.87]I look to you [02:35.10]我指望你 [02:35.10]I look to you [02:40.55]我指望你 [02:40.55]And when melodies are gone [02:45.36]当旋律消失 [02:45.36]In you I hear a song [02:48.42]在你这我听到一首歌 [02:48.42]I look to you [02:51.53]我指望你 [02:51.53]My leaves are broken (oh lord) [02:54.22]我的叶子已碎（哦上帝） [02:54.22]My walls have come(coming down on me) [02:57.04]我的墙已来 (来到我面前) [02:57.04]Tumbling down on me (All the rain is falling) [03:01.27]倒向我 （大雨倾盆） [03:01.27]The rain is falling [03:03.35]雨在下 [03:03.35]Defeat is calling (Set me free) [03:06.14]失败在召唤（保护我） [03:06.14]I need you to set me free [03:10.10]我需要你保护我 [03:10.10]Take me far away from the battle [03:14.12]带我远离战争 [03:14.12]I need you to shine on me [03:19.40]我需要你闪耀 [03:19.40]I look to you [03:24.20]我指望你  [03:24.20]I look to you [03:29.90]我指望你  [03:29.90]After all my strength is gone [03:34.76]在我所有力气丧失殆尽 [03:34.76]In you I can be strong [03:38.14]靠着你 我会强壮有力 [03:38.14]I look to you [03:43.16]我指望你  [03:43.16]I look to you [03:48.99]我指望你  [03:48.99]And when melodies are gone [03:53.85]当旋律消失 [03:53.85]In you I hear a song [03:57.01]在你这我听到一首歌 [03:57.01]I look to you [04:07.57]我指望你 [04:07.57]I look to you ohh [04:14.62]我指望你  哦 [04:14.62]I look to you [04:21.05]我指望你"
		}, {
			'Name': 'I Will Always Love You',
			'Singer': 'Whitney Houston',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004JsRxi3NX4i4.m4a?fromtag=52',
			'Img': 'images/singer/huiT.jpg',
			'Lyric': "00:10.41]I'll only be your way [00:20.24]我会成为你的羁绊   [00:20.24]So I'll go [00:24.10]所以我离去   [00:24.10]But I know [00:27.91]但我知道   [00:27.91]I'll think of you [00:30.53]我将会想着你   [00:30.53]Every step of the way [00:43.14]我每迈出的 [00:43.14]And I will always love you [00:56.99]于是我将永远爱你    [00:56.99]always love you [01:07.04]我将永远爱你    [01:07.04]You my darling you [01:15.90] 你,我亲爱的宝贝    [01:15.90]Bitter sweet memories [01:24.08]苦涩而甜蜜的回忆   [01:24.08]That is all I'll taking with me [01:31.49]是我带走的唯一东西   [01:31.49]So good-bye [01:34.56]再见吧, [01:34.56]Please don't cry [01:38.36]请不要哭泣   [01:38.36]We both know [01:40.36]我们彼此都知道 [01:40.36]I'm not what you need [01:45.74]我不是你所需  [01:45.74]And I will always love you [01:56.98]于是我将永远爱你  [01:56.98]And I will always love you [02:36.23]于是我将永远爱你  [02:36.23]I hope life treats you kind [02:43.04]我希望生活能善待你   [02:43.04]And I hope you  have all you've dreamed of [02:49.90]希望你好梦成真   [02:49.90]And I wish you joy and happiness [02:55.70]祝愿你美满幸福   [02:55.70]But above all this [02:58.76]更要祝福 [02:58.76]I wish you love [03:08.75]你找到真爱   [03:08.75]And I will always love you [03:18.48]于是我将永远爱你    [03:18.48]I will always love you [03:25.28]我将永远爱你    [03:25.28]I will always love you [03:32.53]我将永远爱你    [03:32.53]I will always love you [03:41.03]我将永远爱你    [03:41.03]I will always love you [03:48.27]我将永远爱你    [03:48.27]I will always love you [03:48.30]我将永远爱你"
		}, {
			'Name': 'If I Were A Boy',
			'Singer': 'Beyoncé',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100002yQF872swxMe.m4a?fromtag=52',
			'Img': 'images/singer/listen.jpg',
			'Lyric': "[00:01.00]If I were a boy [00:05.98]假如我是男孩 [00:05.98]Even just for a day [00:12.25]哪怕只有一天 [00:12.25]I'd roll out of bed in the morning [00:15.95]清晨我会从床上翻下来 [00:15.95]And throw on what I wanted and go [00:22.11]随便套上我想穿的衣服 [00:22.11]Drink beer with the guys [00:27.70]和朋友们一块喝酒 [00:27.70]And chase after girls [00:33.98]泡妞 [00:33.98]I'd kick it with who I wanted [00:37.15]我会为了心仪的人戒掉不好的习惯. [00:37.15]And I'd ever get confronted for it [00:40.98]我再也不会沾上这些不良的嗜好 [00:40.98]Because they'd stick up for me [00:43.78]因为他们都挺我 [00:43.78]If I were a boy [00:48.44]假如我是男孩 [00:48.44]I think I could understand [00:55.43]我想我会懂得 [00:55.43]How it feels to love a girl [00:58.58]怎样去爱一个女人 [00:58.58]I swear I'd be a better man [01:05.20]我发誓我一定会比男人做得更好 [01:05.20]I'd listen to her [01:10.16]我会听她诉说 [01:10.16]Cause I know how it hurts [01:16.69]因为我了解那有多痛 [01:16.69]When you lose the one you wanted [01:19.17]当你失去你爱的人（的时候） [01:19.17]Cause he's taken you for granted [01:22.11]因为他对你的无动于衷 [01:22.11]And everything you had got destroyed [01:26.74]你的世界因此而崩溃 [01:26.74]If I were a boy [01:31.39]假如我是个男孩 [01:31.39]I would turn off my phone [01:38.41]我会关掉我的电话 [01:38.41]Tell everyone it's broken  [01:40.65]告诉别人它（电话）坏了， [01:40.65]So they'd think that I was sleepin alone [01:47.80]让他们以为我是一个人睡 [01:47.80]I'd put myself first And make the rules as I go [01:59.37]我会把自己放在首位 我会做我自己想做的事情 [01:59.37]Cause I know that she'd be faithful [02:02.75]因为我知道她会对我忠诚 [02:02.75]Waitin for me to come home (to come home) [02:09.13]一直等着我回家 (回家) [02:09.13]If I were a boy [02:13.80]假如我是男孩 [02:13.80]i think i could understand [02:20.90]我想我会懂得 [02:20.90]How it feels to love a girl [02:23.83]怎样去爱一个女人 [02:23.83]I swear I'd be a better man [02:30.58]我发誓我一定会比男人做得更好 [02:30.58]I'd listen to her [02:35.41]我会听她诉说 [02:35.41]cause i know how it hurts [02:42.07]因为我了解那有多痛 [02:42.07]when u lose the one u wanted Cause he's taken you for [02:46.42]当你失去你爱的人（的时候）因为他对你的无动于衷 [02:46.42]granted And everything you had got destroyed [02:54.28]你的世界因此而崩溃 [02:54.28]It's a little too late for you to come back [02:59.18]现在你回头已经太晚了 [02:59.18]Say it's just a mistake think I'd forgive you like that [03:04.40]说那只是一个错误 认为我会像你想的那个样子原谅你 [03:04.40]If you thought I would wait for you [03:08.10]如果你认为我会等着你 [03:08.10]You thought wrong [03:14.27]那你就错了 [03:14.27]But you're just a boy [03:19.81]但你恰恰是一个男孩 [03:19.81]You don't understand [03:22.14]你不懂 [03:22.14]No you don't understand [03:26.42]是的 你不懂 [03:26.42]How it feels to love a girl someday [03:29.23]爱一个女孩是怎样的感觉 [03:29.23]You wish you were a better man [03:35.72]将来有一天 你会希望你是一个更好的男人 [03:35.72]You don't listen to her [03:40.63]你不倾听她的话 [03:40.63]You don't care how it hurts [03:47.21]你不在乎那是怎样的伤害 [03:47.21]Until you lose the one you wanted [03:50.22]直到你失去你心爱的那个人 [03:50.22]Cause you're taking her for granted [03:52.95]因为你把她的付出当成理所当然 [03:52.95]And everything you had got destroyed [04:00.04]一切都被你摧毁 [04:00.04]But you're just a boy [04:02.08]你只是一个男孩 "
		}, {
			'Name': 'Cry On My Shoulder',
			'Singer': 'Melissa McClelland',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C1000037PtDP2sJUSO.m4a?fromtag=52',
			'Img': 'images/singer/asfdasd.jpg',
			'Lyric': "[00:01.18]Cry On My Shoulder - Deutschland Sucht Den Superstar [00:26.86]If the hero never comes to you [00:32.85]如果男主角还没有出现，  [00:32.85]If you need someone You're feeling blue [00:38.80]如果你需要有一个人你感觉忧伤  [00:38.80]If you wait for love and you're alone [00:44.51]如果你孤单的等候著你的爱情;  [00:44.51]If you call your friends nobody's home [00:50.16]如果你打电话给你的朋友但是没有人接听  [00:50.16]You can run away but you can't hide [00:56.29]你可以离家，但是不可以躲起来。  [00:56.29]Through a storm and through a lonely night [01:02.38]尽管一场暴风雨贯穿了整个孤独的夜晚  [01:02.38]Then I'll show you there's a destiny [01:06.89]我会告诉你一个人的命运  [01:06.89]The best things in life they are free [01:14.20]人生命中最好的东西是自由  [01:14.20]But if you wanna cry Cry on my shoulder [01:20.56]如果你想哭泣，请靠在我的肩膀上  [01:20.56]If you need someone Who cares for you [01:26.23]如果你需要一个人关心你  [01:26.23]If you're feeling sad your heart gets colder [01:33.70]如果你正感觉很伤心 你的心越来越冷  [01:33.70]Yes I show you what real love can do [01:43.85]我会告诉你真正的爱情有什麼作用  [01:43.85]If your sky is grey oh let me know [01:49.79]如果你的天空是灰色的，请告诉我  [01:49.79]There's a place in heaven where we'll go [01:55.60]我们将去天堂的某一个地方  [01:55.60]If heaven is a million years away [02:00.98]如果去天堂的路有百万年之远  [02:00.98]Oh just call me and I'll make your day [02:07.56]请打电话给我，我会挣得你幸运的一天  [02:07.56]When the nights are getting cold and blue [02:13.53]当夜晚对你来说变得寒冷和忧伤  [02:13.53]When the days are getting hard for you [02:19.28]当白天对你来说变的艰难  [02:19.28]I will always stay here by your side [02:23.71]我将永远站在你的身边  [02:23.71]I promise you I'll never hide [02:31.35]我保证，我绝对不会躲起来  [02:31.35]But if you wanna cry Cry on my shoulder [02:37.19]如果你想哭，请靠在我的肩上  [02:37.19]If you need someone Who cares for you [02:43.09]如果你需要有一个人关心你  [02:43.09]If you're feeling sad Your heart gets colder [02:50.70]如果你感觉很伤心，心也变得越来越冷  [02:50.70]Yes I show you what real love can do [02:55.13]我会告诉你真正的爱情有什麼作用  [02:55.13]But if you wanna cry Cry on my shoulder [03:00.89]如果你想哭泣，请靠在我的肩膀上  [03:00.89]If you need someone Who cares for you [03:07.02]如果你需要一个人关心你  [03:07.02]If you're feeling sad your heart gets colder [03:14.49]如果你正感觉很伤心 你的心越来越冷  [03:14.49]Yes I show you what real love can do what real love can do [03:25.10]我会告诉你真正的爱情有什麼作用 爱情有什麼作用 [03:25.10]what real love can do what love can do [03:36.49]真正的爱情有什麼作用  [03:36.49]what love can do love can do [03:46.20]爱情有什麼作用 "
		}, {
			'Name': 'As Long As You Love Me',
			'Singer': 'Backstreet Boys',
			'classS': '英文',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100002k9sY70KAB1t.m4a?fromtag=52',
			'Img': 'images/singer/backstreetBoys.jpg',
			'Lyric': "[00:01.15]As Lonng As You Love Me - Backstreet Boys [00:07.20]As Lonng As You Love Me [00:19.58]我只要你爱我 [00:19.58]Although loneliness has always been a friend of mine [00:24.24]虽然早已习惯孤独形影相伴 [00:24.24]I'm leaving my life in your hands [00:29.91]我把自己交你掌管 [00:29.91]People say i'm crazy that i am blind [00:34.53]人们说我被感情冲昏了脑袋 [00:34.53]Risking it all in a glance [00:39.45]竟转眼间赌上未来 [00:39.45]How you got my blind is still a mystery [00:44.19]你怎会让我不顾一切还是个谜 [00:44.19]I can't get you out of my head [00:49.46]我就是无法忘了你 [00:49.46]Don't care what is written in your history [00:53.85]我不在乎你有过怎样的经历 [00:53.85]As long as youre here with me [00:57.35]只要你和我在一起 [00:57.35]I don't care who you are [01:01.11]我不管你是谁 [01:01.11]Where youre from [01:03.74]从哪来 [01:03.74]What you did [01:05.81]做过什么 [01:05.81]As long as you love me [01:08.39]我只要你爱我 [01:08.39]Who you are [01:10.96]我不管你是谁 [01:10.96]Where youre from [01:12.90]从哪来 [01:12.90]Don't care what you did [01:15.37]做过什么 [01:15.37]As long as you love me [01:18.62]我只要你爱我 [01:18.62]Every little thing that you have said and done [01:23.17]你说过做过的那些点点滴滴 [01:23.17]Feels like it's deep within me [01:28.58]都深深印在我心里 [01:28.58]Doesn't really matter if youre on the run [01:32.95]即使你行色匆匆也没有关系 [01:32.95]It seems like were meant to be [01:36.56]我们似乎命中注定 [01:36.56]I don't care who you are [01:40.31]我不管你是谁 [01:40.31]Where youre from [01:42.62]从哪来 [01:42.62]What you did [01:44.86]做过什么 [01:44.86]As long as you love me [01:47.45]我只要你爱我 [01:47.45]Who you are [01:49.89]我不管你是谁 [01:49.89]Where youre from [01:51.87]从哪来 [01:51.87]Don't care what you did [01:54.50]做过什么 [01:54.50]As long as you love me [02:04.51]我只要你爱我 [02:04.51]As long as you love me [02:07.76]我只要你爱我 [02:07.76]I've tried to hide it so that no one knows [02:11.36]我设法把感情隐藏起来不让人看透 [02:11.36]But I guess it shows [02:13.96]但恐怕我无法不流露 [02:13.96]When you look in to my eyes [02:17.88]当你凝视着我 [02:17.88]What you did and where youre coming from [02:21.27]你做过什么又从哪里来 [02:21.27]I don't care [02:24.06]我都不在乎 [02:24.06]as long as you love me baby [02:35.55]只要你爱我就好，宝贝 [02:35.55]I don't care who you are [02:38.94]我不管你是谁 [02:38.94]Where youre from [02:41.42]从哪来 [02:41.42]What you did [02:43.24]做过什么 [02:43.24]As long as you love me [02:46.14]我只要你爱我 [02:46.14]Who you are [02:48.67]我不管你是谁 [02:48.67]Where youre from [02:50.61]从哪来 [02:50.61]Don't care what you did [02:53.13]做过什么 [02:53.13]As long as you love me [02:57.60]我只要你爱我 [02:57.60]who you are [02:59.71]我不管你是谁 [02:59.71]Where youre from [03:02.12]从哪来 [03:02.12]What you did [03:04.10]做过什么 [03:04.10]As long as you love me [03:06.78]我只要你爱我 [03:06.78]Who you are [03:09.48]我不管你是谁 [03:09.48]Where youre from [03:12.68]从哪来 [03:12.68]As long as you love me [03:15.56]做过什么 [03:15.56]Who you are [03:17.79]我只要你爱我 [03:17.79]As long as you love me [03:20.60]我只要你爱我 [03:20.60]What you did [03:22.39]你做过什么 [03:22.39]I don't care as long as you love me [03:28.33]我都不在乎我只要你爱我 "
		},
		//第三个类别
		{
			'Name': 'Always with me',
			'Singer': '久石让',
			'classS': '安静',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100000ozixA07JqNb.m4a?fromtag=52',
			'Img': 'images/singer/singer4.jpg',
			'Lyric': '[00:07.07]Always With Me - 宫崎骏  [00:19.24]宫崎骏动画千与千寻片尾曲 [00:34.05]宫崎骏（Miyazaki Hayao，1941年1月5日－）， [00:40.18]日本著名动画导演、动画师及漫画家， [00:46.33]出生于东京都文京区，1963年进入东映动画公司， [00:54.50]1985年与高畑勋共同创立吉卜力工作室， [01:01.33]出品的动漫电影以精湛的技术、 [01:05.73]动人的故事和温暖的风格在世界动漫界独树一帜， [01:12.66]能与美国迪士尼、梦工厂的作品相比肩， [01:18.32]受到全世界不分种族、不分国籍、 [01:24.12]不分文化的各类观众的一致好评。 [01:34.02]其动画作品大多涉及人类与自然之间的关系、 [01:40.59]和平主义及女权运动。 [01:45.14]宫崎骏在日本动画界占有超重量级的地位， [01:52.89]更在全球动画界具有无可替代的地位'
		}, {
			'Name': 'the Promise',
			'Singer': '秘密花园',
			'classS': '安静',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004ZeNye1lvQgT.m4a?fromtag=52',
			'Img': 'images/singer/Aa.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': '一个人的雨',
			'Singer': '萤火虫',
			'classS': '安静',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001236u40lVTTQ.m4a?fromtag=52',
			'Img': 'images/singer/Aa.jpg',
			'Lyric': '[00:04.39]一个人的雨-轻音乐 [00:23.07]《一个人的雨》选自萤火虫的《山居岁月》 [00:56.92]《山居岁月》本专辑入围 [01:00.57]2003年第十四届金曲奖 [01:15.57]「最佳流行音乐演奏专辑奖」 [01:35.57]一个人的雨，一个人的安静。 [01:50.21]“是谁无事种芭蕉，早也萧萧，晚也萧萧。” [02:11.72]这样的夜晚也许最适合的就是 [02:24.08]狠命地思念某人吧 [02:36.39]或者，无关爱情，只关心情。 [02:54.08]只是不知道什么时候 [03:04.08]琴声已停了，而雨却还在下着....'
		}, {
			'Name': '卡农',
			'Singer': '卡农',
			'classS': '安静',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100000Aa8CW2u2bnT.m4a?fromtag=52',
			'Img': 'images/singer/singerH.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': 'River Flows In You',
			'Singer': '李闰珉',
			'classS': '安静',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003QgpxI3xY5jc.m4a?fromtag=52',
			'Img': 'images/singer/singerH14.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': 'Kiss The Rain',
			'Singer': '李闰珉',
			'classS': '安静',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003rSoNx4gKSgY.m4a?fromtag=52',
			'Img': 'images/singer/singerH14.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': 'Piano Cafe 钢琴咖啡屋',
			'Singer': 'Yuichi Watanabe',
			'classS': '安静',
			'Src': 'http://musicfile.bandari.net/music-VaontlinkDdZeF/Yuichi_Watanabe/02.Piano.Cafe/07.Pianoafe.mp3',
			'Img': 'images/singer/singerH13.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': 'If I Could See You Again',
			'Singer': 'Yiruma',
			'classS': '安静',
			'Src': 'http://musicfile.bandari.net/music-VaontlinkDdZeF/Yiruma/02First/12.Bandari.Net_Ifme.mp3',
			'Img': 'images/singer/singerH13.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': 'I 我  ',
			'Singer': 'Yiruma',
			'classS': '安静',
			'Src': 'http://musicfile.bandari.net/music-VaontlinkDdZeF/Yiruma/02First/01.Bandari.Net_Me.mp3',
			'Img': 'images/singer/singerH18.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': 'My Soul 我的灵魂 ',
			'Singer': 'July',
			'classS': '安静',
			'Src': 'http://musicfile.bandari.net/music-VaontlinkDdZeF/July/Time/01.msouler.mp3',
			'Img': 'images/singer/singerH18.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		}, {
			'Name': 'Fragrance In The Breeze',
			'Singer': '李欣芸',
			'classS': '安静',
			'Src': 'http://musicfile.bandari.net/music-VaontlinkDdZeF/MoonLavender/09.Fragrance.mp3',
			'Img': 'images/singer/singerH18.jpg',
			'Lyric': '[00:01.74]纯音乐 [00:07.26]纯音乐就是作曲初衷就不包含填词的音乐 [00:11.87]作为纯音乐，这种音乐模式 [00:16.51]完全以纯粹优美的音乐 [00:21.11]来叙述表达作者的情感 [00:25.82]所以一般简称做纯音乐 [00:30.62]虽然它没有歌词 [00:36.08]但是它完全以自己优美的曲调实现了完美 [00:40.95]正因为如此，纯音乐的作曲要求十分的高 [00:45.98]要作出一曲优秀的纯音乐 [00:51.15]除了必需的大量灵感来支持作曲外 [00:56.04]还需要作者不单在乐理上 [01:01.33]更是在生活体验 [01:06.71]人格和精神上有很深的水准造诣'
		},

		//第四个类别
		{
			'Name': 'Runnng Away With Me',
			'Singer': 'Omar',
			'classS': '节奏',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003DXJEx1v5xFx.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00: 08.17]这是我喜欢的一首轻音乐 [00: 27.64] cctv新闻的天气预报就是这首乐曲 [00: 46.46]每当想起这段旋律 [00: 56.30]脑海中总是会不自觉的想到柔和的夕阳 [01: 15.12]以及在夕阳照耀下的沙滩 [01: 26.81]和海面上倒映的落日的余晖 [01: 36.11]落日是太阳一天中最美的时刻 [01: 43.11]少了太阳阳光的刺眼，燥热和盛气凌人 [01: 51.33]更多的是温润，轻柔 [02: 19.11]海边的落日更显傍晚的美丽 [02: 33.33]傍晚时伴着微凉的海风 [02: 46.24]欣赏落日的余晖 [02: 55.20]内心总是会充满宁静与平和 [03: 12.70]少了尘世的浮躁与喧嚣 [03: 25.40]山气日夕佳，飞鸟相与还 [03: 37.97]陶潜的写这句时想必就是这种平和的心境吧 [04: 13.71]每当听到这段旋律 [04: 25.41]总会不禁感到置身大自然的感觉真好'
		},

		// 2015年5月15日12:27:59，新加，图片带添加
		{
			'Name': 'conquest of paradise',
			'Singer': 'Vangelis',
			'classS': '节奏',
			'Src': 'http://cc.stream.qqmusic.qq.com/C1000034t3aJ4TOAIS.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:01.32]Conquest Of Paradise - Vangelis[01:00.91][01:00.91]In noreni per-i-pe, [01:05.35]理想让我们坚强[01:05.35]in noremi co-ra, [01:09.74]冲破黑暗的阻挡[01:09.74]tira mine per-i-to, [01:15.42]理想让我们坚强[01:15.42]ne do---mina. [01:22.52]决不放弃希望[01:22.52]In noreni per-i-pe, [01:27.37]偷过泪水能看见[01:27.37]in noremi co-ra, [01:31.84]闪烁的星光[01:31.84]tira mine per-i-to, [01:37.32]穿越风和雨跟随[01:37.32]ne do---mina. [02:44.30]生命的光芒[02:44.30]In noreni per-i-pe, [02:47.78]理想让我们坚强[02:47.78]in noremi co-ra, [02:51.84]冲破黑暗的阻挡[02:51.84]tira mine per-i-to, [02:57.57]理想让我们坚强[02:57.57]ne do---mina. [03:43.95]决不放弃希望[03:43.95]In romine tir-meno, [03:48.45]偷过泪水能看见[03:48.45]-ne romine to-fa, [03:52.80]闪烁的星光[03:52.80]imaginas pro-me-no[03:58.32]穿越风和雨跟随[03:58.32]per i--mentira.[04:03.63]生命的光芒 '
		},
		{
			'Name': 'Transcendence ',
			'Singer': 'Lindsey Stirling',
			'classS': '节奏',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001v3bmD3Nz8bn.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:01.32]Transcendence - Lindsey Stirling'
		},
		{
			'Name': '追梦赤子心',
			'Singer': 'Gala',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004M07TF12vRjv.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:02.10]追梦赤子心 - GALA[00:15.35]充满鲜花的世界到底在哪里[00:21.60]如果它真的存在那么我一定会去[00:28.75]我想在那里最高的山峰矗立[00:33.80]不在乎它是不是悬崖峭壁[00:41.85]用力活着用力爱哪怕肝脑涂地[00:47.71]不求任何人满意只要对得起自己[00:55.21]关于理想我从来没选择放弃[01:00.56]即使在灰头土脸的日子里[01:07.40]也许我没有天分[01:10.41]但我有梦的天真[01:13.86]我将会去证明 用我的一生[01:20.71]也许我手比较笨[01:23.81]但我愿不停探寻[01:27.21]付出所有的青春 不留遗憾[01:34.36]向前跑[01:37.32]迎着冷眼和嘲笑[01:41.07]生命的广阔不历经磨难怎能感到[01:47.52]命运它无法让我们跪地求饶[01:54.47]就算鲜血洒满了怀抱[02:00.92]继续跑[02:04.02]带着赤子的骄傲[02:07.57]生命的闪耀不坚持到底怎能看到[02:14.13]与其苟延残喘不如纵情燃烧吧[02:22.23]有一天会再发芽[02:55.41]未来迷人绚烂总在向我召唤[03:01.31]哪怕只有痛苦作伴也要勇往直前[03:08.51]我想在那里最蓝的大海扬帆[03:14.62]绝不管自己能不能回还[03:20.67]失败后郁郁寡欢[03:23.77]那是懦夫的表现[03:27.12]只要一息尚存请握紧双拳[03:33.66]在天色破晓之前[03:37.07]我们要更加勇敢[03:40.47]等待日出时最耀眼的瞬间[03:47.57]向前跑[03:50.47]迎着冷眼和嘲笑[03:54.16]生命的广阔不历经磨难怎能感到[04:00.67]命运它无法让我们跪地求饶[04:07.77]就算鲜血洒满了怀抱[04:14.03]继续跑[04:17.38]带着赤子的骄傲[04:20.72]生命的闪耀不坚持到底怎能看到[04:27.03]与其苟延残喘不如纵情燃烧吧[04:34.84]为了心中的美好[04:41.94]不妥协直到变老'
		},

		{
			'Name': '南方姑娘',
			'Singer': '赵雷',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001O8Fq6090GIP.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:00.49]南方姑娘-赵雷[00:02.45]作词：赵雷 作曲：赵雷 编曲：赵照[00:57.80]北方的村庄住着一个南方的姑娘[01:05.77]她总是喜欢穿着带花的裙子站在路旁[01:14.83]她的话不多但笑起来是那么平静悠扬[01:22.30]她柔弱的眼神里装的是什么 是思念的忧伤[01:32.86]南方的小镇阴雨的冬天没有北方冷[01:41.06]她不需要臃肿的棉衣去遮盖她似水的面容[01:50.01]她在来去的街头留下影子芳香才会某然的心痛[01:57.76]眨眼的时间芳香已飘散影子已不见[02:08.14]南方姑娘 你是否习惯北方的秋凉[02:16.45]南方姑娘 你是否喜欢北方人的直爽[02:28.78]日子过的就像那些不眠的晚上[02:37.85]她嚼着口香糖对墙满谈着理想[02:45.49]南方姑娘 我们都在忍受着漫长[02:53.68]南方姑娘 是不是高楼遮住了你的希望[03:39.21]昨日的雨曾淋漓过她瘦弱的肩膀[03:47.41]夜空的北斗也没有让她找到迷途的方向[03:56.25]阳光里她在院子中央晾晒着衣裳[04:03.78]在四季的风中她散着头发安慰着时光[04:12.26]南方姑娘 你是否爱上了北方[04:20.46]南方姑娘 你说今天你就要回到你的家乡[04:32.94]思念让人心伤 她呼唤着你的泪光[04:42.00]南方的果子已熟 那是最简单的理想[04:49.44]啦……啦……'
		},
		{
			'Name': '花房姑娘',
			'Singer': '崔健',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001UewPn4HTYg3.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:01.08]花房姑娘-崔健[00:33.49]我独自走过你身旁[00:37.40]并没有话要对你讲[00:41.54]我不敢抬头看着你的[00:44.71]喔哦 脸庞[00:49.71]你问我要去向何方[00:53.80]我指着大海的方向[00:57.89]你的惊奇像是给我[01:00.96]喔哦 赞扬[01:06.11]你问我要去向何方[01:10.10]我指着大海的方向[01:14.14]你问我要去向何方[01:18.22]我指着大海的方向[01:38.84]你带我走进你的花房[01:42.81]我无法逃脱花的迷香[01:46.90]我不知不觉忘记了[01:49.92]喔哦 方向[01:55.11]你说我世上最坚强[01:59.14]我说你世上最善良[02:03.17]我不知不觉已和花儿[02:06.35]喔哦 一样[02:11.43]你说我世上最坚强[02:15.47]我说你世上最善良[02:19.50]妳说我世上最坚强[02:23.49]我说你世上最善良[03:00.56]你要我留在这地方[03:04.54]你要我和他们一样[03:08.53]我看着你默默地说[03:11.96]喔哦 不能这样[03:16.81]我想要回到老地方[03:20.85]我想要走在老路上[03:24.88]这时我才知离不开你[03:28.26]喔哦 姑娘[03:33.12]我就要回到老地方[03:37.25]我就要走在老路上[03:41.44]我明知我已离不开你[03:44.45]喔哦 我的姑娘[03:49.53]我就要回到老地方[03:53.56]我就要走在老路上[03:57.49]我明知我已离不开你[04:00.93]喔哦 姑娘[04:05.77]我就要回到老地方[04:09.86]我就要走在老路上[04:14.00]我明知我已离不开你[04:17.07]喔哦 我的姑娘[04:22.07]我就要回到老地方[04:26.21]我就要走在老路上[04:30.24]我明知我已离不开你[04:33.55]喔哦 姑娘'
		},
		
		{
			'Name': '该死的温柔',
			'Singer': '马天宇',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C1000018z9xr0czhRQ.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:00.32]该死的温柔-马天宇[00:01.67]你这该死的温柔[00:04.64]让我心在痛泪在流[00:07.97]就在和你说分手以后[00:11.45]想忘记已不能够[00:14.53]你这该死的温柔[00:17.85]让我止不住颤抖[00:21.33]哪怕有再多的借口[00:24.66]我都无法再去牵你的手[00:31.65]让我们走完这一次[00:33.26]完美的结局[00:34.67]好像当初的约定[00:36.09]爱着对方一直到老[00:37.86]问自己[00:38.56]爱情的游戏[00:39.78]还有没有规则[00:41.19]要怎么面对着问题[00:42.90]说没问题[00:44.67]心里在流泪[00:45.73]骗自己[00:46.53]可是你却对我说[00:48.52]说好泪不流[00:51.80]缘份已尽的时候[00:54.93]你不再要借口[00:57.95]风停了[00:59.77]雨顿了[01:01.69]你一定要走[01:04.77]我还站在记忆里[01:07.49]在感受[01:11.38]你这该死的温柔[01:14.61]让我心在痛泪在流[01:17.99]就在和你说分手以后[01:21.31]想忘记已不能够[01:24.64]你这该死的温柔[01:27.92]让我止不住颤抖[01:31.25]哪怕有再多的借口[01:34.83]我都无法再去牵你的手[01:41.59]I put it down on my life[01:43.05]That I love you from[01:44.61]the bottom of my heart[01:45.78]Cause you the sweetest[01:46.59]thing ever in my life[01:48.15]I cry So many times[01:49.77]Ever since the night you were gone[01:51.78]说好从此后[01:55.16]说好泪不流[01:58.44]缘份已尽的时候[02:01.76]你不再要借口[02:04.59]风停了[02:06.30]雨顿了[02:08.33]你一定要走[02:11.45]我还站在记忆里[02:14.22]在感受[02:18.00]你这该死的温柔[02:21.28]让我心在痛泪在流[02:24.46]就在和你说分手以后[02:28.09]想忘记已不能够[02:31.12]你这该死的温柔[02:34.50]让我止不住颤抖[02:37.88]哪怕有再多的借口[02:41.41]我都无法再去牵你的手[02:47.92]你这该死的温柔[02:51.10]让我心在痛泪在流[02:54.53]就在和你说分手以后[02:57.97]想忘记已不能够[03:01.19]你这该死的温柔[03:04.52]让我止不住颤抖[03:08.06]哪怕有再多的借口[03:11.23]我都无法再去牵你的手[03:18.36]哦……哦……[03:24.46]牵你的手[03:27.64]牵你的手'
		},
		{
			'Name': '活着',
			'Singer': '郝云',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100003A5jI63H2aMZ.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:00.14]活着 (电视剧《废柴兄弟》片尾片头曲) - 郝云[00:04.04]词曲：郝云[00:14.42]每天站在高楼上[00:17.74]看着地上的小蚂蚁[00:22.03]它们的头很大[00:23.93]它们的腿很细[00:28.86]它们拿着苹果手机[00:32.33]它们穿着耐克阿迪[00:36.48]上班就要迟到了[00:38.76]它们很着急[00:43.50]我那可怜的吉普车[00:46.87]很久没爬山也没过河[00:51.10]它在这个城市里[00:53.28]过得很压抑[00:57.92]虽然它什么都没说[01:01.63]但我知道它很难过[01:05.49]我悄悄地许下愿望[01:07.91]带它去蒙古国[01:12.05]慌慌张张 匆匆忙忙[01:15.88]为何生活总是这样[01:19.18]难道说我的理想[01:23.21]就是这样度过一生的时光[01:26.45]不卑不亢 不慌不忙[01:30.70]也许生活应该这样[01:33.83]难道说六十岁以后[01:37.33]再去寻找我想要的自由[01:56.14]一年一年飞逝而去[01:59.71]还是那一点点小积蓄[02:03.74]我喜欢的好多东西[02:05.89]还是买不起[02:10.59]生活总是麻烦不断[02:14.07]到现在我还没习惯[02:17.97]都说钱是王八蛋[02:20.40]可长得真好看[02:24.85]慌慌张张 匆匆忙忙[02:28.65]为何生活总是这样[02:32.07]难道说我的理想[02:35.88]就是这样度过一生的时光[02:39.30]不卑不亢 不慌不忙[02:43.22]也许生活应该这样[02:46.58]难道说六十岁以后[02:50.53]再去寻找我想要的自由[02:55.03]我不想这样活着[02:56.17]我不想这样活着[02:57.51]我不想这样活着[02:58.95]我不想这样活着[03:00.37]我不想这样活着[03:01.98]我不想这样活着[03:03.74]我不想这样活着[03:05.29]我不想这样活着[03:06.78]我不想这样活着[03:08.53]慌慌张张 匆匆忙忙[03:12.07]为何生活总是这样[03:15.72]难道说我的理想[03:19.49]就是这样度过一生的时光[03:22.94]不卑不亢 不慌不忙[03:26.85]也许生活应该这样[03:30.27]难道说六十岁以后[03:34.11]再去寻找我想要的自由[04:07.13]其实我也常对自己说[04:10.59]人要学会知足而常乐[04:14.57]可万事都一笑而过[04:16.75]还有什么意思呢'
		},
		{
			'Name': '新长征路上的摇滚',
			'Singer': '崔健',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004U2B0Z39bDUp.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:00.73]新长征路上的摇滚 - 崔健[00:30.54]一 二 三 四[00:38.35]听说过 没见过 两万五千里[00:42.13]有的说 没的做 怎知不容易[00:45.88]埋着头 向前走 寻找我自己[00:49.64]走过来 走过去 没有根据地[00:53.41]想什么 做什么 是步枪和小米[00:57.22]道理多 总是说 是大炮轰炸机[01:01.02]汗也流 泪也落 心中不服气[01:04.75]藏一藏 躲一躲 心说别着急[01:08.34]噢 一 二 三 四 五 六 七[01:23.45]噢 一 二 三 四 五 六 七[02:08.77]一 二 三 四[02:16.62]问问天 问问地 还有多少里[02:20.44]求求风 求求雨 快离我远去[02:24.17]山也多 水也多 分不清东西[02:27.94]人也多 嘴也多 讲不清道理[02:31.72]怎样说 怎样做 才真正是自己[02:35.52]怎样歌 怎样唱 这心中才得意[02:39.24]一边走 一边想 雪山和草地[02:42.94]一边走 一边唱 领袖毛主席[02:46.77]噢 一 二 三 四 五 六 七[03:01.65]噢 一 二 三 四 五 六 七[03:16.75]噢 一 二 三 四 五 六 七[03:47.08]一 二 三 四 五 六 七[03:50.82]一 二 三 四 五 六 七[03:54.56]一 二 三 四 五 六 七[03:58.41]一 二 三 四 五 六 七[04:02.13]听说过 没见过 两万五千里[04:05.78]有的说 没的做 怎知不容易[04:09.73]埋着头 向前走 寻找我自己[04:13.36]走过来 走过去 没有根据地[04:17.15]一 二 三 四 五 六 七[04:21.02]一 二 三 四 五 六 七[04:24.79]一 二 三 四 五 六 七[04:28.54]一 二 三 四 五 六 七'
		},
		{
			'Name': '好想好想',
			'Singer': '赵薇',
			'classS': '杨大叔',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100001dNlyv1rN5Gl.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:00.63]好想好想 - 赵薇[00:16.77]好想好想和你在一起[00:20.60]和你一起数天上的星星[00:25.85]收集春天的细雨[00:33.13]好想好想和你在一起[00:37.16]听你诉说古老的故事[00:42.41]细数你眼中的情意[00:50.18]好想好想 好想好想[00:58.96]好想好想和你在一起[01:06.17]踏遍万水千山[01:10.30]走遍海角天涯[01:14.49]让每一个日子[01:16.71]都串连成我们最美丽[01:20.90]最美丽的回忆[01:39.40]好想好想和你在一起[01:43.33]并肩看天边的落日[01:48.53]并肩听林间的鸟语[01:56.35]好想好想 好想好想[02:05.13]好想好想和你在一起[02:12.34]踏遍万水千山[02:16.47]走遍海角天涯[02:20.61]让每一个日子[02:22.77]都串连成我们最美丽[02:27.11]最美丽的回忆[02:37.80]好想好想 好想好想[02:46.52]好想好想和你在一起[02:53.68]踏遍万水千山[02:57.81]走遍海角天涯[03:02.00]让每一个日子[03:04.17]都串连成我们最美丽[03:12.77]最美丽的回忆[03:19.12]回忆 回忆'
		},
		{
			'Name': '情歌2',
			'Singer': '刘润洁',
			'classS': '小感觉',
			'Src': 'http://cc.stream.qqmusic.qq.com/C1000019Obzm1YCLeT.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:01.12]情歌2(现场版) - 刘润洁 [00:05.31]作词：刘润洁 作曲：刘润洁 [00:09.59]转过弯 躺过河 爬过山 [00:19.15]穿过沙 走过雪 等过春秋 [00:28.82]起过早 贪过黑 数过日落 [00:38.39]摔过跤 迷过眼 带着笑 [00:42.74]去找你 [00:47.97]我的心 一朵花 一片叶 [00:52.37]一个世界 [00:57.44]住着风 住着雨 住着日月 [01:01.98]住着你 [01:07.19]走过漫漫长路 [01:09.43]我终于遇见了你 [01:16.62]一点光 一点亮 一睁眼 [01:20.55]是梦里面 [01:26.30]转过弯 躺过河 爬过山 [01:35.93]穿过沙 走过雪 等过春秋 [01:45.52]起过早 贪过黑 数过日落 [01:55.07]摔过跤 迷过眼 带着笑 [01:59.50]去找你 [02:04.58]我的心 一朵花 一片叶 [02:09.17]一个世界 [02:14.17]住着风 住着雨 住着日月 [02:18.73]住着你 [02:23.78]走过漫漫长路 [02:26.25]我终于遇见了你 [02:33.42]一点光 一点亮 一睁眼 [02:37.31]是梦里面 [02:43.00]一点光 一点亮 一睁眼 [02:48.74]是梦里面'
		},
		{
			'Name': '小情歌',
			'Singer': '苏打绿',
			'classS': '小感觉',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004eCDC22ul2HR.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:00.92]小情歌-苏打绿[00:30.01]这是一首简单的小情歌[00:37.12]唱着人们心肠的曲折[00:43.27]我想我很快乐[00:46.74]当有你的温热[00:50.95]脚边的空气转了[01:13.49]这是一首简单的小情歌[01:20.74]唱着我们心头的白鸽[01:26.99]我想我很适合[01:30.51]当一个歌颂者[01:34.86]青春在风中飘着[01:41.41]你知道就算大雨让这座城市颠倒[01:46.20]我会给你怀抱[01:48.54]受不了看见你背影来到[01:52.22]写下我度秒如年难捱的离骚[01:56.84]就算整个世界被寂寞绑票[02:00.64]我也不会奔跑[02:03.14]逃不了最后谁也都苍老[02:06.78]写下我时间和琴声交错的城堡[02:29.79]这是一首简单的小情歌[02:37.01]唱着我们心头的白鸽[02:43.30]我想我很适合[02:46.85]当一个歌颂者[02:50.70]青春在风中飘着[02:57.22]你知道就算大雨让这座城市颠倒[03:02.50]我会给你怀抱[03:04.69]受不了看见你背影来到[03:08.09]写下我度秒如年难捱的离骚[03:13.36]就算整个世界被寂寞绑票[03:16.92]我也不会奔跑[03:19.53]逃不了最后谁也都苍老[03:23.29]写下我时间和琴声交错的城堡[03:30.34]你知道就算大雨让这座城市颠倒[03:35.11]我会给你怀抱[03:37.51]受不了看见你背影来到[03:41.61]写下我度秒如年难捱的离骚[03:45.99]就算整个世界被寂寞绑票[03:49.65]我也不会奔跑[03:53.50]最后谁也都苍老[03:55.90]写下我时间和琴声交错的城堡'
		},
		{
			'Name': '微凉的你',
			'Singer': '陈绮贞',
			'classS': '小感觉',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100004bZxQj0if8Dy.m4a?fromtag=52',
			'Img': 'images/singer/singerH9.jpg',
			'Lyric': '[00:00.45]微凉的你 - 陈绮贞[00:18.37]迎着微微的风像微微的你[00:22.47]在我不经意的时候[00:25.52]掀起一阵涟漪[00:31.83]躲着凉凉的雨像凉凉的你[00:36.02]偶尔捎来消息[00:38.18]将我整天灼热的思绪[00:42.64]抚平在夜里在黎明[00:47.14]融化我凝结的心~[00:54.24]拥抱一阵微凉的风[00:58.54]心的空隙任你来去[01:02.89]我睁大了眼睛[01:07.74]找寻不到你[01:12.14]飘散的发留住了你[01:16.59]微笑的脸却来不及温习你的吻[01:24.44]回忆才是你唯一的痕迹[02:15.33]迎着微微的风像微微的你[02:19.43]在我不经意的时候[02:22.43]掀起一阵涟漪[02:28.58]躲着凉凉的雨像凉凉的你[02:33.13]偶尔捎来消息[02:35.03]将我整天灼热的思绪[02:39.48]抚平在夜里在黎明[02:44.08]融化我凝结的心[02:51.12]拥抱一阵微凉的风[02:55.43]心的空隙任你来去[02:59.67]我睁大了眼睛[03:04.48]找寻不到你[03:08.99]飘散的发留住了你[03:13.39]微笑的脸却来不及温习你的吻[03:21.24]回忆才是你唯一的痕迹[03:35.99]拥抱一阵微凉的风[03:40.34]心的空隙任你来去[03:44.69]我睁大了眼睛[03:49.44]找寻不到你[03:53.94]飘散的发留住了你[03:57.93]微笑的脸却来不及温习你的吻[04:05.78]回忆才是你唯一的痕迹'
		},
		{
			'Name': 'The Sounds Of Silence',
			'Singer': '纯音乐',
			'classS': '安静',
			'Src': 'http://cc.stream.qqmusic.qq.com/C100002QA08m4OccGO.m4a?fromtag=52',
			'Img': 'images/singer/singer4.jpg',
			'Lyric': ''
		}



	];
	return data;
}

// 