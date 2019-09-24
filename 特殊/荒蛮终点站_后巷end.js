/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]魔链影士系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
cm.fieldEffect_ScreenMsg("monsterPark/clear");
cm.fieldEffect_PlayFieldSound("Party1/Clear", 100);
cm.dispose();
cm.warp(402000002,0);
    } else {
        cm.dispose();
    }
}