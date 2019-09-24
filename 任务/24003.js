/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    if (status == 0) {
qm.sendNext("(启动音乐盒，让音乐响起来吧。)");
    } else if (status == 1) {
qm.forceStartQuest(24003, "");
qm.forceCompleteQuest(24003);
qm.onScriptMessage(4, 1033206, 0, 0,  "(想起了和村里冰冷的气息不相称的和平的音乐。希望孩子们能做个好梦……)", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
qm.effect_PlayMusic("Game/QueenOfElf");
qm.getEA();
    } else if (status == 2) {
qm.getTopMsgFont("点击头上有书本图标的NPC就能完成任务。", 3, 20, 20, 0);
qm.npc_LeaveField("oid=214367");
qm.npc_LeaveField("oid=214368");
qm.npc_LeaveField("oid=214369");
qm.forceCompleteQuest(24000);
qm.forceStartQuest(24001, "");
qm.npc_LeaveField("oid=214363");
qm.npc_LeaveField("oid=214364");
qm.npc_LeaveField("oid=214365");
qm.npc_LeaveField("oid=214366");
qm.npc_LeaveField("oid=214370");
qm.dispose();
    }
}
