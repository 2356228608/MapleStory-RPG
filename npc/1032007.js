/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：
 *  @Author 娜娜 
 */

        var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("你好!我是乔尔，我在这一站工作。你想离开维多利亚岛去别的地方吗？这一站是在那里你会找到那艘前往# 天空站# K.");
    } else if (status == 1) {
        cm.sendNextPrev("如果你正在考虑去奥比斯，请去跟右边.");
    } else if (status == 2) {
        cm.sendNextPrev("嗯，事实是，我们收取这些航班直到最近，但炼金术士做了一个重要的发现，大大减少了用于飞行的魔法量的燃料，所以这些航班现在是自由的。别担心，我们还是会得到报酬的。现在我们只是通过政府获得.");
        cm.dispose();
    }
}