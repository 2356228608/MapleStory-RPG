/* global ms */
var status = -1;

function action(mode, type, selection) {
	if (mode === 0) {
		status--;
	} else {
		status++;
	}
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 1000, 370, 260);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNextS_Bottom("这个……是逃走的蘑菇大臣的通缉传单，还没抓到吗？");
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
