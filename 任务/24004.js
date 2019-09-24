/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
        qm.sendNext("#b(看到了制造结界的魔法语言。念诵咒语，可以为埃欧雷设置结界。至少在100年之内谁也无法入侵村子的强力结界……要设置结界吗？)");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
        qm.sendNext("#b(设置了结界。这下村子应该安全了……)");
	qm.dispose();
    }
}