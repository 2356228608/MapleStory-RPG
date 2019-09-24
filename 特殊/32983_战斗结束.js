/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
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
cm.updateInfoQuest(16700, "count=30;date=20190918");
cm.fieldEffect_ScreenMsg("monsterPark/clear");
cm.fieldEffect_PlayFieldSound("Party1/Clear", 100);
cm.forceStartQuest(32983, "");
cm.updateInfoQuest(32999, "00=h0;01=h0;10=h0;11=h0;20=h1;02=h0;03=h0;12=h01;21=h0;04=h0;13=h0;05=h0;14=h1;06=h0;15=h0;07=h0;16=h0;17=h0;08=h1;18=h0;19=h0");
cm.updateInfoQuest(32999, "00=h0;01=h0;10=h0;11=h0;20=h1;02=h0;03=h0;12=h01;21=h1;04=h0;13=h0;05=h0;14=h1;06=h0;15=h0;07=h0;16=h0;17=h0;08=h1;18=h0;19=h0");
cm.updateInfoQuest(32983, "clear=1");
cm.npc_LeaveField("oid=4093078");
cm.dispose();
cm.warp(307000210);
    } else {
        ms.dispose();
    }
}