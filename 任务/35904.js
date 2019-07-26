/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：任务35904 
 *  @Author 娜娜 
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
			qm.sendNext_Bottom("#face1#喂，要我把你弄出来吗？", 1013358);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face1#拜，拜托了……请，请帮帮我！", 1013353);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face1#要是我帮了你，你什么都能答应我吗？", 1013358);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face1#好，好吧……但是……不能到村外去！\r\n除了那个之外，我什么都听你！", 1013353);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face1#很好，那我就开始拔了哦？", 1013358);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face1#呃……不，不行！\r\n要是那样，我马斯卡波的身体就要变成两截了！", 1013353);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face6#那该怎么办呢？", 1013358);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face1#洒，洒点种子油，应该就能拔出来了！\r\n那个东西在附近很常见，应该很快就能找到！", 1013353);
		} else if (status === i++) {
			qm.sendNext_Bottom("#face1#请帮我从#r#o2300201##k身上搜集#b10个#k#b#i4036524# #t4036524##k！\r\n胖胖花在附近的#r#m100051011##k就能找到！", 1013353);
		} else if (status === i++) {
			qm.gainItem(4036524, 10);
			 qm.forceStartQuest();
		//qm.forceCompleteQuest();
		qm.dispose();
		//qm.openNpc(1013358,"转职任务35903");
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
		qm.sendNext_Bottom("#face3##b(把种子油洒上去之后，地面变得湿润起来。\r\n接着，突然从地下冒出了一个奇怪的东西。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#呼，呼……终于得，得救了。\r\n真是谢谢……谢谢你……", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#呼……虽然还有点没缓过劲来，不过……\r\n我会遵守约定，满足你的一个请求。快告诉我吧。", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#把你知道的关于这一带的情况都告诉我。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#有什么问题，请尽管问。\r\n只要是我马斯卡波知道的，我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于遗迹 #l", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#遗，遗迹……难道是说那个废墟？\r\n据说那是受到古代人崇拜的地方，可以让受伤的人痊愈……", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#但是随着时间的流逝，那里逐渐变得人迹罕至，\r\n并开始散发出阴森的气息。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#年复一年，那种气息变得越来越强。\r\n现在变成了谁都不愿涉足的废墟，咕咕……", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#有什么问题，请尽管问。r\n只要是我马斯卡波知道的，我会一五一十地全部告诉你。\r\n\r\n#b#L0# 关于遗物 #l", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#这片森林中经常可以发现原本埋藏在废墟中的东西。\r\n都是些奇奇怪怪的东西，连我们卡鲁帕都会觉得害怕。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#虽然有些家伙喜欢收集废墟中发现的东西……\r\n不过对我们卡鲁帕来说，和废墟有关的东西都是不祥之物。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#难道……你对废墟里的东西感兴趣？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（遗物多有价值啊。真是帮没有眼光的家伙。\r\n不过看来是不方便询问有关遗物的事情了……）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#有什么问题，请尽管问。\r\n只要是我马斯卡波知道的，我会一五一十地全部告诉你。\r\n\r\n\r\n#b#L0# 关于村庄 #l", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#你对卡鲁帕的村庄感兴趣吗？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#啊，卡鲁帕是指代代生活在卡鲁帕的村民。\r\n我也是其中之一。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#我们大都很胆小，不喜欢到外面去。\r\n除了偶尔来访的冒险家之外，很少和外面交流。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（虽然是这里的土著居民，但却很害怕遗迹。\r\n看来关于遗迹入口的事情，也是很难问出来了。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face6##b（再问下去，可能也只是在浪费时间。\r\n不如到其他地方去打听一下。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#冒险家，看来你好像对这一带很感兴趣。\r\n嗯……如果可以，你能到村里去一趟吗？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#今天刚好是村里的节日……\r\n名字叫做卡鲁帕灵药节！", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#传说喝了那种灵药之后，可以净化一切邪恶，\r\n并且能让人延年益寿……", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face3##b（哦，可以净化邪恶的传说中的灵药……\r\n听上去还挺让人心动的嘛。说不定跟诅咒有什么关系。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（虽然不太可信，但只能死马当活马医了。\r\n就当是调查村庄，暂时跟着去看看吧。）#k", 1013358);
	} 
	
	/*
	
	else if (status === i++) {
		qm.sendNext_Bottom("#face0#好，那就带我到村里去吧。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#对于救命恩人，怎么能光是回答几个问题就糊弄过去呢？\r\n我要邀请你参加节日，好好招待招待你。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#虽然村民们会感觉有点距离感……\r\n但他们很快就能看出你拥有一颗善良之心，并友善地对待你。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#相信你一定能很快跟村民们打成一片。\r\n呵呵……我看人的眼光可从来不会有错。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#呵呵，介绍就到这里……\r\n那我就马上带你到村里去吧。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#好的，请跟我来。\r\n我来把你带到卡鲁帕村。\r\n\r\n#r ※ 自动移动到任务地图。#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("111111111", 1013358);
	} */else if (status === i++) {
		qm.forceCompleteQuest();
		qm.gainItem(4036524, -10);
		qm.gainExp(500);
        qm.dispose();
		//qm.warp(910090306, 0);
    } else {
        qm.dispose();
    }
}
