/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
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

    var i = -1;
        if (status <= i++) {
            cm.dispose();
} else if (status === i++) {
cm.askYesNo("Ep5. 你想阅读<影子炼金术士>吗？", 2500000);
} else if (status === i++) {
cm.sendNext("你选择了#e影子炼金术士#n。做好进入在月光下缓缓流淌的故事世界的准备了吗？", 2500000);
} else if (status === i++) {
cm.sendNextPrev("#fNpc/2500001.img/stand/0#\r\n如果想从故事中回到现实，请随时点击我。我会出现在故事中的某处。\r\n\r\n#r（建议在游戏时打开背景音乐。）\r\n（神之子角色建议在180级之后执行。）", 2500000);
} else if (status === i++) {
cm.updateInfoQuest(32999, "01=h0");
cm.updateInfoQuest(32999, "01=h0;03=h0");
cm.updateInfoQuest(32999, "01=h0;03=h0;04=h0");
cm.updateInfoQuest(32999, "01=h0;03=h0;04=h0;05=h0");
cm.updateInfoQuest(32999, "01=h0;03=h0;04=h0;05=h0;06=h0");
cm.updateInfoQuest(32999, "01=h0;03=h0;04=h0;05=h0;06=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;03=h0;04=h0;05=h0;06=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;03=h0;04=h0;05=h0;06=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;04=h0;05=h0;06=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;13=h0;04=h0;05=h0;06=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;06=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;11=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;20=h0;11=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
cm.updateInfoQuest(32999, "10=h0;01=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
cm.warp(307090000);
cm.dispose();
        }
}