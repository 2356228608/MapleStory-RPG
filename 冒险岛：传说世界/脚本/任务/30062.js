var status = -1;
var quest = 30062;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.dispose();
}

function end(mode, type, selection) {
	status++;
	var info = qm.getInfoQuest(quest);
	if(info==null || info.isEmpty() || info.equals("")){
		end1(mode, type, selection);
	}else if(info.equals("NpcSpeech=13020161")){
		end2(mode, type, selection);
	}else if(info.equals("NpcSpeech=13020161/13020072"){
		end3(mode, type, selection);
	}else{
		qm.dispose();
	}
}

function end1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 初始化
		qm.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("我是骄傲的大海盗！我是绝对不会开口的！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("那我就让你尝尝厉害。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("（咂，咂，咂）", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("难，难道……那是！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("是的，这是鸡蛋！我要给你吃鸡蛋！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("竟然吃蛋！你们这些野蛮无耻的家伙！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("怎么样？还不肯开囗吗？", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("你干脆杀了我吧！抽泣……", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.updateInfoQuest(quest, "NpcSpeech=13020161");
		qm.dispose();
	}
}

function end2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 初始化
		qm.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("这次我想到了鸡……！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("……够了，还是我来吧。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("勇士，你要亲自上阵吗？", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("是的，你能稍微离开一下吗？", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("啊，你是想用非常残忍的拷问手段吗？！明，明白了。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.updateInfoQuest(quest, "NpcSpeech=13020161/13020072");
		qm.dispose();
	}
}

function end3(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 初始化
		qm.setInGameDirectionMode(true, true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		qm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("你，再这样嘴硬的话……", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("我就让你和碧欧蕾塔公主结婚！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("我，我说！我全说！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("你这个背叛者！你把大海盗的意志丢到哪里去了！", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("那你代替我去和公主结婚？", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("……相信船长一定会理解我们的。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("是啊，是啊。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("没错，没错。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("好了，现在能说了吧？", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("没错，没错。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		qm.effect_NormalSpeechBalloon("没错，没错。", 2000, 4);
		qm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		// 收尾
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.updateInfoQuest(quest, "NpcSpeech=13020161/13020072/13020183");
		qm.gainExp(3700);
		qm.dispose();
	}
}
