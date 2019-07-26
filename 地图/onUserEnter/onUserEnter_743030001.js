/*
 * 龙的传人剧情 - 02
 * 地图：秘密地图 - 大神殿内部 (743020200)
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.sendNextNoESC("试穿看看", 9330203);
    } else if (status === i++) {
        ms.gainItem(2000004, 5);
        ms.gainItem(2000000, 10);
        ms.gainItem(2000003, 10);
        ms.sendNextNoESC("怎样？吓到了吗？", 9330203);
    } else if (status === i++) {
        ms.sendNextSNoESC("太，太开心了，所以，不知道说什么了。");
    } else if (status === i++) {
        ms.sendNextSNoESC("好！我从现在开始也是宏武团的一份子！");
    } else if (status === i++) {
        ms.sendNextSNoESC("如果想象父亲一样成为优秀的侠客，就要更认真的修炼了！");
    } else if (status === i++) {
        ms.sendNextNoESC("少爷你开心，连我的心情也变好。对了我要去帮团长，要走了。就算没有我，你也不能疏于修炼！", 9330203);
    } else if (status === i++) {
        ms.sendNextSNoESC("恩，知道了，秀禾。谢谢！！");
    } else if (status === i++) {
        ms.forceCompleteQuest(52408);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(743000000, 0);
    } else {
        ms.dispose();
    }
}