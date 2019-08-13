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
		ms.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		ms.sendNextNoESC("哎？你们突然一大帮人闯进来，要做什么？", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("咳咳……嗯……咳咳。要从哪里说起好呢。", 1510000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("那个嘛……嗯……", 1510005);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("要说什么就快说！我正忙着要做饭！", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("我是来道歉的。很抱歉之前误会了你。", 1510002);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("一切都是场误会。你不是魔女，你既没破坏冰川，,也没害得海平面升高。反而还照顾了我们那些失去家园的孩子们。", 1510003);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("哈，你明白得还真早啊。", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("总之，真是很抱歉。你应该早点儿说清楚啊。要是那样的话，不就不会发生什么误会了嘛。", 1510000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("真是可笑。我怎么会伤害你们这些我数十年来照顾的孩子呢？", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("啊……？", 1510000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("我不是这地方的人。在故乡失去丈夫和孩子后……我本不想活了。为了在临死前好好看看我喜欢的雪，才来到这里的。", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("可就在那时，我看见了在大海上漂浮的你们。", 1510008);
	} else if (status === i++) {
		ms.sendNextPrevNoESC("一群小家伙眼中带着求生欲望，紧紧抓着我的衣角……我忍不下心不管啊。所以就带回家，自己抚养喽。", 1510008);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(141040002, 0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
