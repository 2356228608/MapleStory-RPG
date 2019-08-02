/* 起源之塔
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
		ms.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 1000, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 18 F\r\n\r\n#fs22#这椰子树长得很好，不是吗？应该可以收获果实了。\r\n\r\n你去将装满果实的箱子拿来给我。你也可以直接从树上摘下来。\r\n\r\n你要小心。因为青螃蟹和红螃蟹可能会阻止你带回椰子果。\r\n\r\n如果你搜集10个椰子果回来的话，我就为你打开通往下一层的门。", 30000);
	} else if (status === i++) {
		// 收尾
		ms.fieldEffect_InsertCanvas(0, 0, 0, 0, 1000, 0, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// TODO
		ms.getMap().startMapEffect("你需要采集10个椰子果。", 5120085);
		ms.warp(992018000, 1);
	} else {
		ms.dispose();
	}
}
