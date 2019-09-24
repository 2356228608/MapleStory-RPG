/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function enter(pi) {
    if (!pi.isQuestFinished(29952)) {//曾经的英雄
        pi.warp(101050100, 2);
    } else {
        pi.warp(101050000, 2);
    }
}