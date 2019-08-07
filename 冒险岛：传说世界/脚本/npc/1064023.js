load('nashorn:mozilla_compat.js');
/* 
 NPC Name: 		Divine Bird
 Map(s): 		Erev
 Description: 		Buff
 */
importPackage(Packages.tools.packet);
function start() {
    //cm.useItem(2022458);
    cm.sendOk("欢迎来到圣地....");
    //WvsContext.serverNotice(0, 0, "String message", true);
    cm.dispose();
}

function action(mode, type, selection) {
    cm.dispose();
}