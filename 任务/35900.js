/*
 * 超能力者任务 - 杰的牢骚(22720)
 * 地图：据点 - 总部 (331001000)
 * 任务：杰的牢骚(22720)
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#好的，要到祭坛钥匙指向的地方去看看吗？刚好就在这附近。快去看看吧。", 1013358);
    } else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#与钥匙产生共鸣的地方……在那边。", 1013358);
    } else if (status === i++) {
		qm.OnStartNavigation(910090302,1,"1013305",35900);
		qm.forceStartQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}


function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face3#这不是箭和……药水吗？虽然看上去很古老，但好像不是什么了不起的东西。", 1013358);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face6#嗯……感觉跟现在的东西没什么区别。只是普通的东西。难道白忙活了一场？", 1013358);
    } else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0#但是，啊哈……这个箱子的表面写着什么东西。让我来看看。");
    } else if (status === i++) {
		qm.gainExp(100);
		qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
