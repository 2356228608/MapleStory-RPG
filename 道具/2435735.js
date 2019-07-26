/*  This is mada by bms    
 *  This source is made by bms Team
 *  功能＿轿格兰蒂斯神秘矿
 *  @Author nana 
 */


        var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (im.isQuestActive(1475)) {
        im.forceCompleteQuest(1475);
        //var exp = im.getOneInfo(1470, "exp");
        im.sendOk("#r该神秘石激活中！剩余时间：" + (60 - im.getPlayer().getQuestDiffTime()));
        im.dispose();
    } else {
        if (im.isQuestFinished(1475)) {
            im.sendOk("#r该神秘石已激活完毕。");
            im.dispose();
            return;
        }
        if (im.isQuestActive(1474) || im.isQuestActive(1476)) {
            im.sendOk("已激活其他神秘石。");
            im.dispose();
            return;
        }
        if (status == 0) {
            im.askYesNo("你要立刻激活神秘石吗？\r\n\r\n#b(如果点击确认，接下来1小时内的狩猎经验值将会被记录?#k");
        } else if (status == 1) {
            im.setLTime();
            im.forceStartQuest(1475);
            im.dispose();
        }
    }
}