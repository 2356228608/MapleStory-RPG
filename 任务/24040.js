var status = -1;

function start(mode, type, selection) {
    if (status == -1) {
        qm.sendNext("Did the curse do this to me? This must be a nightmare.");
        qm.forceCompleteQuest();
        status++;
    } else {
        qm.effect_Direction("Effect/Direction5.img/mersedesQuest/Scene2");
        qm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/mercedes/q24040");
        qm.forceCompleteQuest(29952);
        qm.gainItem(1142336, 1);
        qm.dispose();
    }
}
function end(mode, type, selection) {
    if (status == -1) {
        qm.sendNext("Did the curse do this to me? This must be a nightmare.");
        qm.forceCompleteQuest();
        status++;
    } else {
        qm.effect_Direction("Effect/Direction5.img/mersedesQuest/Scene2");
        qm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/mercedes/q24040");
        qm.forceCompleteQuest(29952);
        qm.gainItem(1142336, 1);
        qm.dispose();
    }
}
