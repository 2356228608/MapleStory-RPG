/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var BGM = [["阿里安特", "Bgm14/Ariant"], ["明珠港", "Bgm02/AboveTheTreetops"], ["射手村", "Bgm00/FloralLife"], ["勇士部落", "Bgm00/Nightmare"], ["废弃都市", "Bgm01/BadGuys"], ["魔法密林", "Bgm02/WhenTheMorningComes"], ["林中之城", "Bgm00/SleepyWood"], ["埃欧雷", "Bgm25/WindAndFlower"], ["天空之城", "Bgm04/Shinin'Harbor"], ["冰封雪域", "Bgm03/SnowyVillage"], ["水下世界", "Bgm11/Aquarium"], ["玩具城", "Bgm06/FantasticThinking"], ["神木村", "Bgm13/Leafre"], ["圣地", "Bgm18/QueensGarden"], ["埃德尔斯坦", "Bgm22/EdelsteinCity"], ["玛加提亚", "Bgm12/Dispute"], ["武陵", "Bgm15/MureungHill"], ["里恩", "Bgm19/RienVillage"], ["尖耳狐狸村", "Bgm36/foxvillage"], ["万神殿", "Bgm27/Pantheon"], ["童话村", "Bgm11/DownTown"]];
var correctText = ["嗯~挺厉害的嘛。你看上去可不怎么聪明。", "真了不起！你是怎么答对的？", "切……对了。这次我就让你通过吧。", "你看上去笨笨的，还有两下子嘛。"];
// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var id = cm.getNpc();
	if (id < 1 || id > 4) {
		cm.dispose();
		return;
	}
	status++;
	var i = -1;
	var em = cm.getEventManager("Map_TowerOfOz");
	var sound = parseInt(em.getProperty("stage24_bgm_" + id));
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askText("你要仔细想想现在听到的音乐是哪个村庄的背景音乐，\r\n然后将村庄的名字写在下面的空格内。\r\n对了，我可是无比严格的女人哦。哈哈哈！", 2540010);
	} else if (status === i++) {
		var eim = em.getInstance("Map_TowerOfOz");
		var isLastQuestionFinished = (id == 1) ? 1 : parseInt(em.getInstance("stage24_question_" + (id - 1)));
		var text = cm.getText();
		var sound = parseInt(em.getProperty("stage24_bgm_" + id));
		if (isLastQuestionFinished == 0) {
			eim.restartEventTimer(eim.getTimeLeft() - 5 * 60 * 1000);
			cm.addPopupSay(2540000, 4000, "糟糕，朦胧石的保护时间被桃乐丝扣除了5分钟！");
			cm.sendOk("咦，你还没有回答上一个问题怎么就到这里来了？桃乐丝讨厌投机取巧的人！", 2540010);
			cm.dispose();
		} else if (!text.equals(BGM[sound][0])) {
			eim.restartEventTimer(eim.getTimeLeft() - 5 * 60 * 1000);
			cm.addPopupSay(2540000, 4000, "糟糕，朦胧石的保护时间被桃乐丝扣除了5分钟！下次回答前一定要想清楚啊！");
			cm.sendOk("答错了，你个笨蛋！不聪明的人会受到桃乐丝的惩罚！", 2540010);
			cm.dispose();
		} else {
			cm.sendNext(correctText[randomNum(0, correctText.length - 1)], 2540010);
		}
	} else if (status === i++) {
		if (id == 4) {
			cm.warp(992024000, id + 1);
			em.setProperty("stage24", "clear");
			cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
			cm.dispose();
		} else {
			cm.curNodeEventEnd(true);
			cm.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
			var nextSound = parseInt(em.getProperty("stage24_bgm_" + (id + 1)));
			cm.fieldEffect_PlayBGM(BGM[nextSound][1]);
			cm.addPopupSay(2540000, 6000, "音乐发生了变化，暂停一下，集中精神倾听音乐吧。");
			cm.inGameDirectionEvent_AskAnswerTime(6000);
		}
	} else if (status === i++) {
		cm.warp(992024000, id + 1);
		// 收尾
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
		var nextSound = parseInt(em.getProperty("stage24_bgm_" + (id + 1)));
		cm.fieldEffect_PlayBGM(BGM[nextSound][1]);
		em.setProperty("stage24_question_" + id, "clear");
		cm.dispose();
	} else {
		cm.dispose();
	}
}

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
