/**
-- BMS NPC脚本空白模板 ----------------------------------------------------------------------------
NPC ID： 9400930
NPC名称： 管家
所在地图ID： 871200001
所在地图名称：
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
%创建日志%
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	// 	cm.updateInfoQuest(500773, "askR=0;manager=0;managerHide=0;s1=30;talkDate=19/09/28;s2=14;s3=3;bonusTalk=0;s4=2;s5=10;resetDate=19/09/28;affDown=19/09/28");
	var map = cm.readQuestInfo(500773);
	var manager = parseInt(map.getOrDefault("manager", "0"));
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var talkDate = map.getOrDefault("talkDate", "0");
		var text = talk[manager][randomNum(0, talk[manager].length - 1)] + "\r\n";
		if (!talkDate.equals(getCurDate())) {
			text += "#L1##b和#p9400920#对话#k#l\r\n";
		}
		text += "#L99##b查看管家信息#k#l";
		cm.onScriptMessage(4, 9400930, 0, 0, text, 0, 6, -124, 0, 1, 9400920 + manager); // [类型] 选择菜单
	} else if (status === i++) {
		if (selection == 1) {
			cm.onScriptMessage(4, 9400930, 0, 0, "(要说什么呢？)\r\n\r\n#L0##b#p" + (9400920 + manager) + "#，今天过得怎么样？#k#l\r\n#L1##b今天的天气如何？#k#l\r\n#L2##b#p" + (9400920 + manager) + "#，我有个问题！#k#l", 0, 6, -126, 0, 1, 0); // [类型] 选择菜单
		} else {
			cm.dispose();
			cm.sendManagerUIPacket();
		}
	} else if (status === i++) {
		if (selectionLog[2] == 0) { // 今天过得怎么样？
			cm.onScriptMessage(4, 9400930, 0, 0, "#face0#今天我打算在家里练习一下魔法……为什么我的实力总是无法提高呢？嘤……\r\n\r\n#L0##b不！比起一开始还是好很多了吧？多亏了#p" + (9400920 + manager) + "#，打猎的时候方便多了。#k#l\r\n#L1##b没错，似乎还需要多点练习。#k#l\r\n#L2##b实力不强也可以，只要有心意就行了。#k#l", 0, 6, -124, 0, 1, 9400920 + manager); // [类型] 选择菜单
		} else if (selectionLog[2] == 1) { // 今天的天气如何？
			cm.onScriptMessage(4, 9400930, 0, 0, "#face0#今天据说一整天都是晴朗的好天气呢。一直都是让人感到舒适的温度，很适合出去野外活动呢。\r\n\r\n#L0##b#p" + (9400920 + manager) + "#要做什么呢？#k#l\r\n#L1##b谢谢，这是个打猎的好天气呢！#k#l\r\n#L2##b#p" + (9400920 + manager) + "#今天也要去兜风吧。#k#l", 0, 6, -124, 0, 1, 9400920 + manager); // [类型] 选择菜单
		} else {
			// 我有个问题！
			cm.dispose();
		}
	} else if (status === i++) {
		if (selectionLog[2] == 0) { // 今天过得怎么样？
			cm.onScriptMessage(3, 0, 0, 0, "#face2#真的吗？是真的吧？！太好了！我会继续努力练习的，敬请期待！", 256, 0, 36, 0, 1, 9400920 + manager); // [类型] 普通对话
		} else if (selectionLog[2] == 1) { // 今天的天气如何？
			cm.onScriptMessage(3, 0, 0, 0, "#face2#阳光很好，所以我正在考虑要不要晒一下杯子呢。然后给花浇浇水，把积攒的家务事都做一下。", 256, 0, 36, 0, 1, 9400920 + manager); // [类型] 普通对话
		} else {
			// 我有个问题！
		}
	} else if (status === i++) {
		var text = "#b(和#p" + (9400920 + manager) + "#开心地聊天，#p" + (9400920 + manager) + "#的属性提高了！)\r\n";

		var srand = randomNum(1, 4);
		var s = parseInt(map.getOrDefault("s" + srand, "0"));
		var sgain = randomNum(2, 8);
		text += "#b";
		if (srand == 1) {
			text += "家务";
		} else if (srand == 2) {
			text += "美感";
		} else if (srand == 3) {
			text += "财务";
		} else if (srand == 4) {
			text += "社交";
		}
		text += "#k属性提高了#b" + srand + "#k！ (" + s + " -> #b" + (s + srand) + "#k)\r\n";
		map.put("s" + srand, toString(s + sgain));

		var s5 = parseInt(map.getOrDefault("s5", "0"));
		var s5gain = randomNum(2, 8);
		text += "#b亲密度#k提高了#b" + s5gain + "#k！(" + s5 + " -> #b" + (s5 + s5gain) + "#k)";
		cm.onScriptMessage(3, 0, 0, 0, text, 257, 0, 56, 0, 1, 0); // [类型] 普通对话
		map.put("s5", toString(s5 + s5gain));

		map.put("talkDate", getCurDate());
		cm.saveQuestInfo(500773, map);
	} else {
		cm.dispose();
	}
}

var talk = [["#face0##h0#！你回来了啊？你今天都去了哪儿？ ",
		"#face0##h0#已经吃遍冒险岛世界的食物了呢？真是太羡慕了！什么是最好吃的？ ",
		"#face0#今天也辛苦你了，#h0#，是不是很累？躺在椅子上休息一下吧！ ",
		"#face0#嗯，魔法真是难呢。增益技能就这么难，怎样才能呼风唤雨呢？真正的魔法师真的好棒啊！ ",
		"#face0#今天米兰达也在喷泉的长椅上画画，每天都在努力的她，实力肯定会有所增长的。",
		"#face0#隔壁好像又搬来了新人！虽然多个邻居是件好事，但是却因此连埃尔宾哥哥的面都见不到了。估计他现在正在帮忙进行装修呢吧？ ",
		"#face0#真是的，不久前我想吃奶油面包，所以去了趟特鲁迪家，结果居然卖完了？看着他们生意这么好，我应该开心的……但还是有点遗憾啊……本来这是我专属的美食店呢~！ ",
		"#face0##h0#，冒险是什么样的感觉？",
		"#face0#广场上的人非常多，难道是有我不知道的活动？ ",
		"#face0#我好饿啊，#h0#~~。#h0#吃饭了吗？",
		"#face0#嗯……？#h0#？你还没睡？",
		"#face0#特鲁迪等了很久，然后回去了！他说想见见#h0#呢~\r\n如果你有时间，那就去广场找特鲁迪玩吧。",
		"#face0#嗯……该来了……啊！#h0#你来了啊？……我正在等父母的联络。他们每年都一定会寄信来，看来今年要晚一点了。",
		"#face0#别看艾丹那样，其实他超级~~胆小。刚才看到花盆里的虫子都被吓到了吧？",
		"#face0#……看来给凯蒂喂食的人越来越多了。最近它一直在变胖呢~必须增加散步时间了！ ",
		"#face0#森林里开了很多紫罗兰！整个凯兰西亚都充满了花香。每天都像这样就好了~！ "], ["#face0#我喜欢在家休息，而艾米喜欢在外面玩。虽然我们是双胞胎，但是性格完全相反。",
		"#face0##h0#，你今天过得怎么样？",
		"#face0#艾米已经睡着了。只要一过晚上10点，她就会陷入梦乡。",
		"#face0#沙发似乎越多越好。因为你不知道好友什么时候会来玩嘛？",
		"#face0#今天我去参观了其他朋友的家，果然还是#h0#的家最漂亮。",
		"#face0#给花盆浇水，浇着浇着就不知道过了多长时间。植物有着能让人平静的神秘能力。作为装修的装饰品是很优秀的！",
		"#face0#艾米非常喜欢吃东西。我只要看着艾米吃的样子就饱了。",
		"#face0#今天我去广场，见到了艾丹，我很想知道他有没有好好使用桌子。",
		"#face0#你有听说凯尼斯家进了新的家具的消息吗？ ",
		"#face0#水下世界是什么地方？我看到过在那里制作的珊瑚灯，真是太神秘了。总有一天，我要去看看。",
		"#face0#嗯~那面墙看起来有点空旷呢。至少应该挂一个相框吧！ ",
		"#face0#只要更改屋顶的颜色，就能改变整个家的气氛！ ",
		"#face0#每次有新人搬来的时候，我就感觉很激动。但也会担心我们艾米会不会又闯出什么事故……",
		"#face0##h0#，你回来了啊？你没受伤吧？",
		"#face0#艾米又去哪里了，一大早就不见人影了呢，应该不是去了什么危险的地方吧？"]];

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}

function getCurDate() {
	var date = new Date();
	var dateStr = (date.getYear() - 100) + "/" + (date.getMonth() + 1) + "/" + date.getDay();
	return dateStr;
}
