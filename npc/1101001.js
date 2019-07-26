load('nashorn:mozilla_compat.js');
/* 
 NPC Name: 		Divine Bird
 Map(s): 		Erev
 Description: 		Buff
 */
importPackage(Packages.tools.packet);
function start() {
    //cm.useItem(2022458);
    cm.sendOk("不要停止锻炼. 你的每一份力量对保护冒险岛世界都至关重要....");
    //WvsContext.serverNotice(0, 0, "String message", true);
    cm.dispose();
}

function action(mode, type, selection) {
    cm.dispose();
}