/* 鲁塔比斯 消灭北侧的封印守护者
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		// 收尾
		qm.updateInfoQuest(30012,"");
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

// 打爆BOSS就好了？不需要脚本干活？
function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status <= i++) {
		qm.sendNextNoESC("北侧的封印也解开了吗？", 1064001);
	} else if (status === i++) {
		qm.sendNextSNoESC("嗯，现在所有的封印守护者都消灭掉了。你的封印也应该已经解开了。");
	} else if (status <= i++) {
		qm.sendNextNoESC("我说怎么感觉身体变轻了。束缚着身体的黑暗气息已经完全感觉不到了！封印好像已经完全解开了！", 1064001);
	//} else if (status <= i++) {
		// 图片 阿丽莎发光了
		//ms.effect_Direction("Effect/Direction11.img/meet/Scene0");
		//ms.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
