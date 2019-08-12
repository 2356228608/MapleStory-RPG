/* 妖精学院艾利涅
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
		ms.inGameDirectionEvent_AskAnswerTime(30);
	} else if (status === i++) {
		ms.sendNextNoESC("老师！", 1500003);
	} else if (status === i++) {
		ms.sendNextNoESC("想死你了！", 1500004);
	} else if (status === i++) {
		ms.sendNextNoESC("吓死我了。", 1500005);
	} else if (status === i++) {
		ms.sendNextNoESC("我错了。下次再也不会去危险的地方了。", 1500006);
	} else if (status === i++) {
		ms.sendNextNoESC("不，是我不好！我当初没有批评你们的话，也就…以后我会尊重你们的兴趣！", 1500002);
	} else if (status === i++) {
		ms.sendNextNoESC("啊啊，多么美好的场面啊。对吧，#h #？", 1500015);
	} else if (status === i++) {
		ms.sendNextNoESC("呵呵…如果没有各位帮忙，根本无法找到孩子们。", 1500001);
	} else if (status === i++) {
		ms.sendNextNoESC("对于我的误会，再次深表歉意，魔法师库迪。要说报答的话，我想给你一个建议。", 1500001);
	} else if (status === i++) {
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(101072002, 0);
		ms.dispose();
	} else {
		ms.dispose();
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
