/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
	ms.curNodeEventEnd(true);
	ms.setInGameDirectionMode(true, false, false);
	ms.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene0", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(14000);
    }else if (status ==1) {
	ms.setInGameDirectionMode(false, false, false);
	ms.dispose();
        ms.warp(101050010, 0);

    }
}
