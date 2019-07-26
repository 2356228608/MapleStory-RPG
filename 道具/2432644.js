/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：
 *  @Author 娜娜 
 */
var status = -1;

function start() {
    var menu = im.getSkillMenu(30, im.getPlayer().getJob());
    if (menu == "") {
        im.sendOkS("看来你不需要其他能手册啊。", 4, 2080009);
        im.dispose();
    } else {
        im.askMenu("你可以提升的技能目录如下。\r\n" + menu + "\r\n\r\n#r#L0# #fn黑体##fs14##e取消使用能手册。#n#fs##fn##l", 5, 2080009);
    }
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (selection > 0 && im.canUseSkillBook(selection, 30)) {
            im.useSkillBook(selection, 30);
            im.gainItem(2432644, -1);
        } else if (selection != 0) {
            im.sendOkS("看来你不需要其他能手册啊,请先把技能点加好后再来用吧.", 4, 2080009);
        }
        im.dispose();
    } else {
        im.dispose();
    }
}