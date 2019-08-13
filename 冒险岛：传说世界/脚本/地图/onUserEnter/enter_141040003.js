/* 列娜海峡
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(0, 200, -300, 100);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextNoESC("真不敢相信……我都想不起来了，你竟是小时候救了我们的大恩人啊！", 1510000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("我隐隐约约能记起来，被温暖的大手照料的那种感觉……但没想到她竟是人类，甚至还被我们称作魔女。", 1510003);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("这么说，你在这里做这样的善事已经至少有数十年了。天啊……对我们种族来说，你是像母亲一样的恩人啊！", 1510005);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("真让人感动啊，老奶奶。", 1510007);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("少肉麻，好久不见，吃顿饭再走吧。", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("还有，你们这帮家伙，别再相互斗了……", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("……？", 1510000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("#r#e见到你们那样，我这老婆子都要伤心死了！", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("呃……我知道了！", 1510000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(1, 150, 0,0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("太好了。今后三个种族之间再不会互相斗了吧？", 1510007);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("哈哈，这全要归功于航海士啊。", 1510006);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(141000000, 1);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
