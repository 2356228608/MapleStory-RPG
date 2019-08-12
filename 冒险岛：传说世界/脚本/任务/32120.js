/* Dawnveil
[Ellinel Fairy Academy] Dr. Betty's Measures
Headmistress Ivana
Made by Daenerys
 */
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.sendNext("我研究的是森林里的各种生物。在森林中，需要精确捕捉所需生命体的声音时，有时也会用上这个工具。只要捕捉到声音的话，就能大致知道方向和距离。\r\n\r\n#i4033830# #b#t4033830#");
	} else if (status == 1) {
		qm.askAcceptDecline("虽然不知道是否能派上用场，但总比没有强啊。请把那些不幸的孩子拯救出来吧。\r\n\r\n（接受后，移动到妖精学院艾利涅。）");
	} else if (status == 2) {
		qm.forceStartQuest();
		qm.warp(101071300, 0);
		qm.gainItem(4033830, 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			qm.sendNext("你来啦。有收获吗？");
		} else if (status == 1) {
			qm.sendNextPrevS("（给妖精们看巴缇博士的东西，并说明其功能。)");
		} else if (status == 2) {
			qm.sendNextPrev("……那么，现在要让我们使用这不纯洁的人类的东西？不行！绝对不行！死也不行！", 1500002);
		} else if (status == 3) {
			qm.sendNextPrev("可现在别无他法，副校长先生。", 1500009);
		} else if (status == 4) {
			qm.sendNextPrev("罗雯的话没错。现在最首要的任务就是要找到那些孩子，不是吗？", 1500008);
		} else if (status == 5) {
			qm.sendNextPrev("我虽不赞同，但目前只有这个方法。");
		} else if (status == 6) {
			qm.sendNextPrev("……呃……只好那样了，不过只此一回……不，不管怎么说……", 1500002);
		} else if (status == 7) {
			qm.sendNextPrev("我来启动试试。请大家暂时安静。", 1500000);
		} else if (status == 8) {
			qm.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
			qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
			qm.fieldEffect_PlayBGM("Bgm34/TheFairyForest");
			qm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status == 9) {
			qm.sendNext("......", 1500000);
		} else if (status == 10) {
			qm.sendNext("好像捕捉到了森林里的各种声音……", 1500000);
		} else if (status == 11) {
			qm.inGameDirectionEvent_AskAnswerTime(3000);
		} else if (status == 12) {
			qm.topMsg("吱吱吱……");
			qm.sendNext("???", 1500000);
		} else if (status == 13) {
			qm.inGameDirectionEvent_AskAnswerTime(3000);
		} else if (status == 14) {
			qm.topMsg("嘭……嘭……");
			qm.sendNext("什么嘛，除了杂音什么也听不见。", 1500002);
		} else if (status == 15) {
			qm.sendNextPrev("嘘...安静。", 1500009);
		} else if (status == 16) {
			qm.inGameDirectionEvent_AskAnswerTime(3000);
		} else if (status == 17) {
			qm.topMsg("呜呜……救命啊……呜呜。");
			qm.sendNext("！！这声音是！");
		} else if (status == 18) {
			qm.sendNextPrev("是后院的方向。", 1500000);
		} else if (status == 19) {
			qm.sendNext("等着我，孩子们！我副校长去救你们啦！", 1500002);
		} else if (status == 20) {
			qm.sendNextPrev("艾温，我们也一起去寻找孩子们吧！", 1500009);
		} else if (status == 21) {
			qm.sendNext("各位，请等一下……！");
		} else if (status == 22) {
			qm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
			qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			qm.forceCompleteQuest();
			qm.dispose();
			qm.fieldEffect_PlayBGM("Bgm34/TheFairyAcademy");
		}
	}
}
