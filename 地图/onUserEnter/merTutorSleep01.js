var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		//        ms.teachSkill(20021166, -1, 1);
		//        ms.teachSkill(20021181, -1, 1);
		//        ms.teachSkill(20020111, -1, 1);
		ms.curNodeEventEnd(true);
		ms.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene1");
		ms.inGameDirectionEvent_AskAnswerTime(3000);
		cm.updateInfoQuest(24006, "Level=1;Afrien=o;Eurel=1");
		cm.forceStartQuest(11620, "0");
		cm.updateInfoQuest(15710, "lasttime=19/09/04/16/13");
		cm.updateInfoQuest(25980, "normal=#");
		cm.updateInfoQuest(25980, "normal=#;hard=#");
		cm.forceStartQuest(11620, "0");
		cm.forceStartQuest(11620, "0");
		cm.forceStartQuest(11620, "0");
		cm.forceStartQuest(11620, "0");
		cm.forceStartQuest(11620, "0");
		cm.forceStartQuest(11620, "0");
		cm.forceStartQuest(11620, "0");
		cm.forceStartQuest(11620, "0");
		cm.setInGameDirectionMode(false, false, false);
		ms.warp(101050010, 0);
		ms.dispose();
	}
}
