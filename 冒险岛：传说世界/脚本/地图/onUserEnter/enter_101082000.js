/*
Made by Jessefjxm
 */
var status = -1;
function action(mode, type, selection) {
	status++;
	if (ms.isQuestFinished(37163)) {
		ms.removeAll(4036501);
	}
	if (ms.isQuestFinished(37164)) {
		ms.removeAll(4036502);
		ms.removeAll(2630159);
	}
	var info = ms.getInfoQuest(37159);
	if (info == null || info.isEmpty() || info.equals("")) {
		action首次进入(mode, type, selection);
	} else if (info.equals("1")) {
		action见到魔女(mode, type, selection);
	} else if (info.equals("2")) {
		action37159(mode, type, selection);
	} else if (info.equals("3")) {
		action37160(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action首次进入(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 100, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -550, 100);
	} else if (status === i++) {
		ms.npc_ChangeController(1501014, -67, 128, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1501014, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextSNoESC("惨叫声……停止了？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(1800);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextSNoESC("好像没有任何……人#fs16#嗯#fs20#嗯#fs24#嗯#fs28#嗯！！！！！！！");
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 0, 0, -100);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heart");
		ms.inGameDirectionEvent_PushScaleInfo(200, 1500, 200, -280, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heart");
		ms.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, -120, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heart");
		ms.inGameDirectionEvent_PushScaleInfo(200, 2500, 200, -50, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_close");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(200, 1500, 200, -280, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextSNoESC("#fs28#啊啊啊啊啊啊啊啊啊啊啊！！！！！！！");
	} else if (status === i++) {
		ms.sendNextNoESC("喂。", 1501012);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushScaleInfo(200, 1500, 200, -480, 100);
	} else if (status === i++) {
		ms.npc_ChangeController(1501012, -645, 130, 0); //D5 F8 86 01
		ms.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 0, 0, -100);
		ms.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC("请……听我说……", 1501012);
	} else if (status === i++) {
		ms.sendNextSNoESC("啊……");
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(4);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/Balloonmsg0/0", 0, 0, -100, 1, 0, 1, 1501012, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC("哈……", 1501012);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 200, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.npc_LeaveField(1501012);
		ms.npc_LeaveField(1501014);
		ms.updateInfoQuest(37159, "1");
		ms.updateInfoQuest(37150, "00=h1;02=h1");
		ms.warp(101082000, 0);
		ms.dispose();
	}
}

function action见到魔女(mode, type, selection) {
	var i = -1;
	ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 100, 0); //创建一个遮布 0x10
	ms.dispose();
}

function action37159(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_MoveAction(4);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextSNoESC("呃……");
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.sendNextNoESC("终于醒过来了吗？", 1501012);
	} else if (status === i++) {
		ms.sendNextSNoESC("呃……");
	} else if (status === i++) {
		ms.sendNextSNoESC("走……走开，你这个……");
	} else if (status === i++) {
		ms.updateInfoQuest(37150, "00=h2;02=h1");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.updateInfoQuest(37150, "00=h3;02=h1");
		ms.sendNextNoESC("你就不能老实躺着吗？", 1501000);
	} else if (status === i++) {
		ms.sendNextSNoESC("翅膀……？妖精……？");
	} else if (status === i++) {
		ms.sendNextNoESC("呼……现在能听我说了吗？", 1501000);
	} else if (status === i++) {
		ms.sendNextNoESC("我叫鲁安。就住在魔法密林南部的森林里。", 1501000);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h1");
		ms.updateInfoQuest(37159, "1");
		ms.forceCompleteQuest(37159);
		ms.gainExp(10320);
		ms.dispose();
	}
}

function action37160(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/scream_close");
		ms.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(2);
		ms.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1000, 0); //创建一个遮布 0x10
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/HekatonEff_1001.img/hit", 0, 60, 0, 1, 0, 1, 1501003, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC("嘎啊！", 1501003);
	} else if (status === i++) {
		ms.sendNextNoESC("……我还以为你很胆小，没什么用呢。没想到力气还挺大的嘛。", 1501001);
	} else if (status === i++) {
		ms.sendNextNoESC("干嘛打我！干嘛打我！", 1501003);
	} else if (status === i++) {
		ms.sendNextSNoESC("再不闭嘴，我就让你再也叫不出来。");
	} else if (status === i++) {
		// 小鸟哭了
		ms.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h2");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextNoESC("不过那样对付那个可怜的小家伙，也太野蛮了！怎么能那样对待它呢？", 1501001);
	} else if (status === i++) {
		ms.sendNextNoESC("是吧？那我就再……", 1501003);
	} else if (status === i++) {
		ms.sendNextNoESC("哎呀，你想再被打一顿吗？我觉得它再受一次冲击，应该就能清醒过来了。你觉得怎么样？", 1501001);
	} else if (status === i++) {
		ms.sendNextNoESC("呜呜……", 1501003);
	} else if (status === i++) {
		ms.sendNextSNoESC("你之前都在干嘛啊……为什么要等到现在……");
	} else if (status === i++) {
		ms.sendNextNoESC("当然要等你来做了。我是森林的朋友，怎么忍心伤害小鸟呢？", 1501001);
	} else if (status === i++) {
		ms.sendNextSNoESC("……");
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.updateInfoQuest(37159, "1");
		ms.forceCompleteQuest(37160);
		ms.gainExp(10320);
		ms.dispose();
	}
}
