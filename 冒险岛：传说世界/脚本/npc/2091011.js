var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askMenu("我师父可是武陵最厉害的人, 你居然要对他进行挑战? 日后可别后悔了. #b\r\n#L0#去武陵道场挑战吧. #l\r\n#L1# 武陵道场是什么? #l\r\n#L2#我想要看看在武陵道场可以获得的奖励. #l\r\n#L3#我想要确认一下今天剩余的挑战次数. #l\r\n#L4#我想要进入武陵身心修炼馆. #l\r\n");
	} else {
		if (selectionLog[1] == 0) {
			action进入副本(mode, type, selection);
		} else if (selectionLog[1] == 1) {
			action1(mode, type, selection, i);
		} else if (selectionLog[1] == 2) {
			action2(mode, type, selection, i);
		} else if (selectionLog[1] == 3) {
			action3(mode, type, selection, i);
		} else if (selectionLog[1] == 4) {
			action4(mode, type, selection, i);
		} else {
			cm.dispose();
		}
	}
}

function action1(mode, type, selection, i) {
	if (status <= i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "我们师父是武陵最厉害的人，而师父所建造的地方就是武陵道场。武陵道场是一座共计63层的建筑物，由62层建筑再加上师父的单独楼层所构成，一层一层地逐渐往上走，就可以修炼自己，当然凭你的实力，估计是很难走到最后的。", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "除了师父所在的63层之外，其他各层都有冒险岛世界的BOSS驻守。详细的情况我也不太清楚，只有师父知道。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "从第1层到第9层, 从第11层到第19层, 会有一个首领怪出场, 想要进入下一阶段, 只要打倒一个就可以了. ", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "从第21层到第29层会有一个首领怪和五个部下出场, 只有将首领怪和部下全都打倒, 才能进入下一层. ", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "从第31层到第39层, 就需要对付超过两位首领怪. \r\n\r\n除了33、36、39层之外, 都是以一对一的方式来对付大多数的首领怪, \r\n而33、36、39层则需要对付一次性出场的多个首领怪. ", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "到40层为止，每10层会有冒险岛世界的命名BOSS登场。在这里可以每#r15秒#k使用一次药水。要是实力太差的话，会很辛苦。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "从41层开始，依然是每#r15秒#k可以使用一次药水，你问为什么？这个嘛，你进去之后自会知晓，呵呵呵……", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "从41层开始，会再次出现一个首领怪，而之后的45层和50层则会出现多个首领怪，切不可掉以轻心。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "51层到56层会有冒险骑士团长和希纳斯守候，相信你应该知道，那并不是你所知道的那个温驯的希纳斯吧？", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "从57层到62层，会有师父的弟子把守，如果能上到这里，就表明你真的实力超群。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "他们的实力和你在外面所知的会有些不一样, 呵呵呵……这个嘛, 你自己看着处理就好. ", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "而且由于师父设下的结界，你只能使出冒险岛世界#b十分之一#k的力量。进去之后，可不要惊慌失措。\r\n知道了的话，就快进去看看吧。是不是浑身发痒了？", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
	} else {
		cm.dispose();
	}
}
function action2(mode, type, selection, i) {
	if (status <= i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "在武陵道场获取奖励的方法有两条, 用超高的实力和强大的力量占据靠前的排名, 又或者通过坚持不懈的努力获得点数并进行物物交换. \r\n#b\r\n#L0#询问排名奖励的相关事宜. #l\r\n#L1#询问参与奖励(点数)的相关事宜. #l", 0, 6, 0, 0, 0, 0); // [类型] 选择菜单
	} else if (status === i++) {
		if (selectionLog[2] == 0) {
			cm.onScriptMessage(4, 2091011, 0, 0, "正如我说的, 师父会对排名靠前者给予奖励, 只有强大才在我们武陵道场有着最大的价值, 而为强大提供奖励, 这不是理所应当的吗? ", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
		} else if (selectionLog[2] == 1) {
			cm.onScriptMessage(4, 2091011, 0, 0, "点数会根据你的武陵道场参与度进行发放. \r\n\r\n 1.按照每次挑战所通过的层数发放点数\r\n 2.按照自己所在的排名区间, 上周全体排名百分比来发放点数\r\n\r\n点数就会根据这两条标准来发放. ", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
		} else {
			cm.dispose();
		}
	} else if (status === i++) {
		if (selectionLog[2] == 0) {
			cm.onScriptMessage(4, 2091011, 0, 0, "为了竞争更加公平, 排名区间是不同的. \r\n\r\n*入门：105~140级\r\n*熟练：141~180级\r\n*精通：181级以上", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
		} else if (selectionLog[2] == 1) {
			cm.onScriptMessage(4, 2091011, 0, 0, "点数将与层数成正比，将采取每一层默认会发放10点，每10层额外发放100点的方式进行。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
		} else {
			cm.dispose();
		}
	} else if (status === i++) {
		if (selectionLog[2] == 0) {
			cm.onScriptMessage(4, 2091011, 0, 0, "这是理所当然的，排名区间不同奖励也不同。\r\n一定要确定你属于哪个排名区间。\r\n\r\n你该不会说自己在之前的排名区间里排名靠前，让我给你发放奖励吧？\r\n#b别忘了要在当前所属排名区间内发放奖励#k。详细内容请查看武陵道场排名表。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
		} else if (selectionLog[2] == 1) {
			cm.onScriptMessage(4, 2091011, 0, 0, "而根据排名百分率所发放的点数，则会使越强的人所在的排名区间，以及创造更好成绩的人，将分到更多的点数，你要是不想出洋相，就变得强大起来。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
		} else {
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
function action3(mode, type, selection, i) {
	var maxEnter = 10;
	var count = maxEnter - cm.getPQLog("副本_武陵道场");
	cm.onScriptMessage(4, 2091011, 0, 0, "今天可在武陵道场参与" + count + "次, 这种事你自己记着点. ", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
	cm.dispose();
}
function action4(mode, type, selection, i) {
	if (status <= i++) {
		cm.onScriptMessage(4, 2091011, 0, 0, "武陵决定向普通人开放身心修炼馆, \r\n只不过, 只有强大或诚实的人才能够进入. 去把拉奥大叔给的符咒拿来, 我会根据符咒上所记载的时间放你进去的. \r\n\r\n你要入场吗? \r\n#b(身心修炼馆入场时, 会根据角色的等级自动获得经验值. )", 0, 3, 0, 0, 0, 0); // [类型] 是/否
	} else if (status === i++) {
		if (mode == 1) {
			// 18766 [武陵道场强敌]凭借今日最高纪录领取身心修炼馆入场专用符。
			var data = getData(cm, 18766, ["Time", "enterTime"]);
			data[0][1] = parseInt(data[0][1]);

			var items = [4001851, 4001852, 4001853, 4001854, 4001862, 4001881, 4001882];
			var minutes = [30, 60, 3 * 60, 6 * 60, 12 * 60, 9 * 60, 24 * 60];
			for (var j = 0; j < items.length; j++) {
				if (cm.haveItem(items[j])) {
					data[0][1] += minutes[j] * 60 * cm.itemQuantity(items[j]);
					cm.gainItem(items[j], -cm.itemQuantity(items[j]));
				}
			}
			if (data[0][1] <= 0) {
				cm.onScriptMessage(4, 2091011, 0, 0, "嗯? 你没有符咒啊，那样我没法让你进去。", 256, 0, 0, 0, 0, 0);
			} else {
				data[1][1] = new Date().getTime();
				saveData(cm, 18766, data);
				var em = cm.getEventManager("场景_武陵道场身心修炼馆");
				em.startInstance(cm.getPlayer());
			}
		} else {
			cm.onScriptMessage(4, 2091011, 0, 0, "嗯? 我让你自己看着办吧. ", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
		}
		cm.dispose();
	}
}
// ==================== 副本入口
/*
Made by jessefjxm
 */
//副本开关 开启、true 关闭、false
var open = true;
//配置文件名称
var PQname = ["副本_武陵道场"];
//记录次数名称
var PQLog = ["副本_武陵道场"];
//开始的地图
var startmap = 925020001;
//等级限制
var minLevel = [105];
var maxLevel = [999];
//次数限制
var maxenter = [1000];
//几天一次
var interval = [1000];
var status = -1;
//限制人数
var minPlayers = 1;
var maxPlayers = 6;
//怪物最大等级设置
var moblevel = 255;
var chs = 0;

function action进入副本(mode, type, selection) {
	if (cm.getMapId() == startmap) {
		var em = cm.getEventManager(PQname[chs]);
		if (em == null || open == false) {
			cm.sendOk("配置文件不存在,请联系管理员。");
		} else if (cm.getPlayer().getLevel() < minLevel[chs]) { //判断组队
			cm.sendOk("你的等级也太低了，先提升到 " + minLevel[chs] + " 级再来挑战吧。");
		} else {
			var prop = em.getProperty("state");
			if (prop == null || prop.equals("0")) {
				em.startInstance(cm.getPlayer());
				em.setProperty("PQLog", PQLog[chs]); // 务必放在加载事件下方
				cm.forceStartQuest(7279, "1");
				var date = new Date();
				cm.updateInfoQuest(3847, "Time=0;enter=" + (date.getYear() - 100) + "/" + (date.getMonth() + 1) + "/" + date.getDay() + "/" + date.getHours() + "/" + date.getMinutes() + ";Floor=0;Result=start");
				cm.updateInfoQuest(65197, "Hack10=0;Hack20=0;Hack30=0;Hack40=0;Hack50=0;Hack60=0");
			} else {
				cm.sendOk("好像已经有队伍在进行了，换其他频道尝试吧。");
			}
		}
		cm.dispose();
	} else {
		cm.warp(startmap, 0);
		cm.dispose();
	}
}

function getData(manager, quest, name) {
	var str = manager.getInfoQuest(quest);
	var data = new Array();
	for (var i = 0; i < name.length; i++) {
		data.push([name[i], "0"]);
	}
	if (str == null)
		return;
	str.split(";").forEach(function (e, i) {
		if (e.length <= 1) {
			return;
		}
		var v = e.split("=");
		if (typeof(v) == "undefined" || v.length != 2)
			return;
		data[i][1] = isNaN(v[1]) ? 0 : v[1];
	});
	return data;
}

function saveData(manager, quest, data) {
	var str = "";
	data.forEach(function (e, i) {
		str += e[0] + "=" + e[1] + ((i < data.length - 1) ? ";" : "");
	});
	manager.updateInfoQuest(quest, str);
}
