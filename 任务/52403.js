/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]龙的传人系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
qm.curNodeEventEnd(true);
qm.setStandAloneMode(true);
qm.setInGameDirectionMode(true, false);
qm.inGameDirectionEvent_Effect("Effect/Direction100.img/effect/tuto/balloonMsg9/0", 2000, 0, -100, 0, undefined, 0, 0, 0, 0);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9330204,  "呵。时间已经到了…，父亲还没回来。也没看到秀禾，秀禾。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 9330204,  "到这么晚时间… 到底怎么回事呢?", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.setStandAloneMode(false);
qm.setInGameDirectionMode(false, true);
qm.dispose();
qm.warp(743020201,0);
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
	qm.dispose();
    } else {
        qm.dispose();
    }
}