// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.sendNext("从出现的时间不久来看，应该是刚才的战斗造成的。既然已经受到惩罚，我就不说什么了。\r\n", 3001202);
	} else if (status === i++) {
		cm.sendNextPrev("给，这是治疗药，快用这个治疗一下吧。\r\n", 3001202);
	} else if (status === i++) {
		cm.forceStartQuest(34603, "");
		cm.openUIWithOption(0, 0);
		cm.sendNextPrev("我给了你治疗药。快打开背包的消耗栏，使用治疗药吧。点击快捷键(I)即可打开背包。\r\n", 3001250);
	} else if (status === i++) {
		cm.sendOk("虽然味道不怎么样，但疗效还不错。结束治疗后就来找我吧。我会交给你只有正式支部成员才能学习的技术。\r\n", 3001250);
	} else if (status === i++) {
		cm.updateInfoQuest(34603, "clear=1");
		//qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		cm.sendNextNoESC_Bottom("#face6##b(治疗药的苦味在嘴里蔓延。是的，我一睁眼的时候就是这个味道。)#k", 3001270);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face6##b(突然回想起从前，在长久的噩梦中惊醒，第一次遇到支部长的那天。)#k", 3001270);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction19.img/effect/cadena_dir/0", 0, 900, 0, -80, 12, 4, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face8#放手，我要赶快到城堡去！", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/0", 128);
		cm.sendNextNoESC_Bottom("#face9#现在不是优柔寡断的时候！", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/1", 128);
		cm.sendNextNoESC_Bottom("#face2#镇定点，快醒醒！", 3001250);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#……那一日的惨剧导致王族灭亡。而你是唯一的幸存者。", 3001250);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction19.img/effect/cadena_dir/1", 0, 900, 0, -80, 12, 4, 0);
		cm.sendNextNoESC_Bottom("#face10#你说什么？", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/2", 128);
		cm.sendNextNoESC_Bottom("#face2#所有人都死了，看来这件事已经过去好久了。看来是你运气好被近卫队长赏识，才逃出了城堡。", 3001250);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face10#……", 3001270);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#……后来你受到严重撞伤，陷入了昏迷……近卫队长带着只剩半条命的你来到这里。", 3001250);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#那时再晚一步就危险了。吃下治疗药才算得救了。不过药物引发的副作用一直持续到现在……", 3001250);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face10#为什么……单单救了我呢？", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/3", 128);
		cm.sendNextNoESC_Bottom("#face2#放心吧，我不是白白帮你。因为之前欠近卫队长一个人情，这次算是抵消了。记得好好谢谢人家。", 3001250);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 300, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction19.img/effect/cadena_dir/2", 0, 900, 0, -80, 12, 4, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face2#总之我遵守了诺言。现在没义务再保护你了。今后你好自为之吧。", 3001250);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 300, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.sendNextNoESC_Bottom("#face0##b(醒后就到支部长手下做事已经是后来的事了。不可一世的王族也好，没出息的胆小鬼也好，那都是过去的事了。现在连王族时的名字也不要了……)#k", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/4", 128);
		cm.sendNextNoESC_Bottom("#face0##b(我决定以寓意锁链的卡德娜的名义活下去。要用手中的锁链把妨碍我的人碎尸万段……)#k", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/5", 128);
		cm.sendNextNoESC_Bottom("#face0##b(我只想让自己变得更强。无论使用任何手段，即使做尽坏事我也甘愿。我要踩着商团一步步往上爬。)#k", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/6", 128);
		cm.sendNextNoESC_Bottom("#face0##b(我要不断变强，变强大……总有一天，要登上那黑暗顶端。牢记那一日的决心……还有伤痛……)#k", 3001270);
	} else if (status === i++) {
		cm.effect_Voice("Voice3.img/cadena/Q2/Female/7", 128);
		cm.sendNextPrevS("#b（……啊，突然想起了过去的事……但现在不是想这些的时候。）#k");
	} else if (status === i++) {
		cm.sendNextPrevS("#b（对，对了，支部长说要传授我新技能。现在他应该在据点里。到那里去吧。）#k");
	} else if (status === i++) {
		cm.forceCompleteQuest();
		cm.setInGameDirectionMode(false, false, false);
		cm.setStandAloneMode(false);
		cm.OnStartNavigation(402000001, 1, "3001200", 0);
		qm.dispose();
		cm.warp(402000001);
	}
}
