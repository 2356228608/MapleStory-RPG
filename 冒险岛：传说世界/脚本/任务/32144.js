/* Dawnveil
 [Theme Dungeon] Ellinel Fairy Academy
 通用 by jessefjxm
 Made by Daenerys
 */
        var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        qm.askAcceptDecline("啊，来得正好。从外部发来了紧急请求，务必请勇士你帮忙啊。");
    } else if (status == 1) {
        qm.sendNext("其实，#b妖精字院艾利涅#k里正在发生巨大骚乱。和魔法密林不同的是，妖精字院艾利涅所在的地方是人类不能进入的妖精之地。因此，那里仍然还保持着妖精之地最初的样子。可最近，好像有一个#r人类魔法师#k进到了那里。");
    } else if (status == 2) {
        qm.sendNextPrev("虽然详细的事情我也不是很清楚，但如果骚乱继续扩大的话，妖精和人类之间的关系肯定会日趋恶化，因此，得去弄清楚事情的真相才行。勇士你去的话，肯定能够应对这种状况。那么请先到魔法密林附近的北部森林，寻找#b潘喜#k吧。");
    } else if (status == 3) {
        qm.askYesNo("不过，你知道潘喜的位置吗？如果你能自己找到那再好不过。要不让我送你过去吧。");
    } else if (status == 4) {
        qm.sendNext("好吧，我现在马上就送你去潘喜那边。祝你好运！");
    } else if (status == 5) {
        qm.forceStartQuest();
        qm.warp(101030000, 0);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 0 && type == 0) {
        status--;
    } else if (mode == -1) {
        qm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendNext("喵~ 你就是受邀前来解决妖精学院艾利涅里发生的骚乱的勇士吗，喵？");
    } else if (status == 1) {
        qm.sendNextPrevS("原……原来如此……不过你就是潘喜吗？", 15);
    } else if (status == 2) {
        qm.sendNextPrev("你看上去好像并没有想象中的那么强哦，喵。但既然是有名的勇士，我就相信你一次吧，喵。");
    } else if (status == 3) {
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
