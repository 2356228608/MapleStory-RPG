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
        qm.sendNextNoESC_Bottom("#face0#这好像是古代的文字。要试着解读一下吗？", 1013358);
    } else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face2#虽然会花费一点时间……呵呵……不过还挺让人好奇的。", 1013358);
    } else if (status === i++) {
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
        qm.sendNextNoESC_Bottom("#face0##g“靠近时会让人受伤的善变的舞蹈家。”\r\n“跳着红色之舞，留下黑色的脚印。”#k", 1013358);
    } else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face1#啊哈，感觉像是某种暗语……下一句话是……", 1013358);
    } else if (status === i++) {
		qm.sendNextNoESC_Bottom("#face0##b（解读箱子上写着的古代文字。\r\n虽然全都是暗语，但仔细斟酌一下，就能猜到大概的意思。）#k", 1013358);
    } else if (status === i++) {
		qm.gainExp(100);
		qm.forceCompleteQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }
}
