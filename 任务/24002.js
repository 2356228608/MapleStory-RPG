/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    if (status == 0) {
        qm.sendNext("因为黑魔法师的诅咒，不仅是双弩精灵本人，整个#m101050000#都正在被冰冻起来。在所有一切被冰冻起来之前，最好把村子封印起来。去见见#b魔法长老#p1033100##k，询问封印的方法吧。");
    } else if (status == 1) {
        qm.forceStartQuest(24002);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (status == 0) {
        qm.sendOk("启动了魔法阵。现在外面的人应该无法感觉到#m101050000#的存在了。");
        qm.forceCompleteQuest(24002);
	qm.dispose();
    } else if (status == 1) {
        qm.dispose();
    }
}