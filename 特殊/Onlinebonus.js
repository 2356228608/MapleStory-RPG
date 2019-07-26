var cashitem;
var status = -1;
var select = -1;
var time;

var itemList = Array(
        Array(2100140, 3, 1), //蝙蝠魔召唤包
        Array(2430578, 1, 2), //蝙蝠魔骑宠卷
        Array(2450041, 1, 3), //1.5经验卡
        Array(4001126, 50, 4), //枫叶
        Array(2450064, 2, 5), //经验卡
        Array(2022800, 3, 6), //
        Array(4001839, 300, 7)//星星
        );


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    //time =(cm.getPQLog("OnlineBonus")+1)*60000*5;
    time = 10 * 60000;
    if (status == 0) {
        cm.sendNext("想领取在线奖励么？\n\r当前在线时间为：" + parseInt(cm.getOnlineTime() / 60000) + " 分钟。\n\r 共有7 次奖励，当前已经领取了：" + cm.getPQLog("OnlineBonus") + " 次奖励！");
    } else if (status == 1) {
        var checktime = parseInt(cm.getOnlineTime() / time);
        if (cm.getPQLog("OnlineBonus") + 1 <= checktime && cm.getPQLog("OnlineBonus") < 7) {
            var finalitem = Array();
            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i][2] == cm.getPQLog("OnlineBonus") + 1) {
                    finalitem.push(itemList[i]);
                }
            }

            var itemId = finalitem[0][0];
            var quantity = finalitem[0][1];
            cm.gainItem(itemId, quantity);
            cm.setPQLog("OnlineBonus")
            //cm.setOnlineTime();
            cm.sendOk("恭喜你获得在线奖励！请10分钟后再来领取下一个奖励");
            cm.dispose();
        } else if (cm.getPQLog("OnlineBonus") >= 7) {
            cm.sendOk("你已经领取完了今天的奖励了,请明天再来吧!");
            cm.dispose();
        } else {
            //var ex =(time - cm.getOnlineTime())/60000;
            cm.sendOk("你还没有满足条件，只在线满一定时间就能来领取丰厚的奖励啦！！");
            cm.dispose();
        }

    } else {
        cm.dispose();
    }
}
