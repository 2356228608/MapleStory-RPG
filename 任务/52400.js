/*
 * 龙的传人剧情 - 02
 * 地图：秘密地图 - 大神殿内部 (743030000)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC("天啊，已经结束了吗？", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("不，不要这样看我。不会花很……很长时间的。");
    } else if (status === i++) {
        qm.sendNextNoESC("我不是已经说过了吗？少爷！", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("真……真的吗？");
    } else if (status === i++) {
        qm.sendNextNoESC("哼哼。", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("为，为什么这样笑？今天秀禾有点奇怪。突然生气，然后又这样笑咪咪的…？这样…？");
    } else if (status === i++) {
        qm.sendNextNoESC("少爷刚才对你凶是...开玩笑的啦", 9330203);
    } else if (status === i++) {
        qm.sendNextNoESC("实际上你父亲拜托我，如果今天认真的修炼，就会给你好东西。", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("好，好了？那是什么？ (是类似生日礼物吗？)");
    } else if (status === i++) {
        qm.sendNextNoESC("你猜猜看这是什么东西呢？", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("秀禾，不要闹了，我真的很想知道。");
    } else if (status === i++) {
        qm.sendNextNoESC("好，这里，好了吗！", 9330203);
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
        qm.warp(743020200, 0);
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        qm.sendNextNoESC("天啊，已经结束了吗？", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("不，不要这样看我。不会花很……很长时间的。");
    } else if (status === i++) {
        qm.sendNextNoESC("我不是已经说过了吗？少爷！", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("真……真的吗？");
    } else if (status === i++) {
        qm.sendNextNoESC("哼哼。", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("为，为什么这样笑？今天秀禾有点奇怪。突然生气，然后又这样笑咪咪的…？这样…？");
    } else if (status === i++) {
        qm.sendNextNoESC("少爷刚才对你凶是...开玩笑的啦", 9330203);
    } else if (status === i++) {
        qm.sendNextNoESC("实际上你父亲拜托我，如果今天认真的修炼，就会给你好东西。", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("好，好了？那是什么？ (是类似生日礼物吗？)");
    } else if (status === i++) {
        qm.sendNextNoESC("你猜猜看这是什么东西呢？", 9330203);
    } else if (status === i++) {
        qm.sendNextSNoESC("秀禾，不要闹了，我真的很想知道。");
    } else if (status === i++) {
        qm.sendNextNoESC("好，这里，好了吗！", 9330203);
    } else if (status === i++) {
        qm.forceCompleteQuest();
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        qm.dispose();
        qm.warp(743020200, 0);
    } else {
        qm.dispose();
    }
}