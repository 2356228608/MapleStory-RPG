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
//        ms.gainItem(1142336, 1);
//        ms.gainItem(2000019, 50);
        ms.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene1");
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else {
        ms.warp(101050010, 0);
        ms.dispose();
    }
}
