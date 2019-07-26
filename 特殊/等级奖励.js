﻿var d1 = "#fUI/UIWindowBT.img/WorldMap/NoticeIcon/0#";//信封
var status = 0;
var bossid = "等级礼包";
var giftLevel = Array(50, 100, 120, 140, 160, 180, 200, 250);
var giftContent = Array(
        Array(4032521, 1, 1), //VIP邀请卷
        Array(4001714, 1, 1), //定居金100W
        //100级
        Array(2615002, 10, 2), //低级贝勒德卷轴
        Array(2431098, 1, 2), //低级贝勒德随机
        Array(2431097, 1, 2), //伤害皮肤箱子
        Array(5062000, 2, 2), //神奇魔方
        //Array()
        //120级
        Array(5150040, 3, 3), //皇家理发卷
        Array(5152053, 3, 3), //皇家整容卷
        Array(2431741, 1, 3), //抵用券3000
        Array(5062000, 5, 3), //神奇魔方
        //140级
        Array(2430226, 1, 4), //乱斗翅膀
        Array(5062000, 5, 4),
        Array(2049124, 10, 4), //正向
        Array(2049135, 2, 4), //惊人正义20%2340000
        Array(2431741, 1, 4), //抵用券3000
        Array(4310030, 100, 4), //运动会币
        Array(4000082, 10, 4), //僵尸金牙
        Array(4021012, 1, 4), //强烈灵魂的净水
        Array(4021011, 1, 4), //春节灵魂的火花
        Array(4021010, 1, 4), //时间之石
        //160级
        Array(2431741, 1, 5), //抵用券3000
        Array(4310129, 10, 5), //冬季限量硬币
        Array(5062002, 5, 5), //高级魔方
        Array(5064000, 5, 5), //防爆
        Array(2049116, 10, 5), //强化
        Array(2049135, 2, 5), //惊人正义20%2340000
        Array(4033356, 3, 5), //正义火种1
        Array(4000124, 2, 5), //战甲梦想鱼内存卡
        Array(4310030, 150, 5), //运动会币
        Array(4000082, 30, 5), //僵尸金牙
        Array(4021012, 2, 5), //强烈灵魂的净水
        Array(4021011, 2, 5), //春节灵魂的火花
        Array(4021010, 2, 5), //时间之石
        //180级
        Array(2431944, 1, 6), //140级武器箱子
        Array(2431945, 1, 6), //140防具箱子
        Array(2431741, 1, 6), //抵用券3000
        Array(4310129, 10, 6), //冬季限量硬币
        Array(4000517, 1, 6), //黄金鱼，提升15%
        Array(4033924, 2, 6), //神话耳环蓝图
        Array(4033356, 5, 6), //正义火种1
        Array(4000124, 5, 6), //战甲梦想鱼内存卡
        Array(4310030, 300, 6), //运动会币
        Array(4000082, 40, 6), //僵尸金牙
        Array(4021012, 3, 6), //强烈灵魂的净水
        Array(4021011, 3, 6), //春节灵魂的火花
        Array(4021010, 3, 6), //时间之石
        //200级
        Array(2431945, 1, 7), //140防具箱子
        Array(2431945, 1, 7), //140防具箱子
        Array(2431741, 1, 7), //抵用券3000
        Array(4000463, 1, 7), //梦想邮票，兑换点卷使用
        Array(5062000, 5, 7),
        Array(5062002, 5, 7),
        Array(5062500, 5, 7),
        Array(2049323, 2, 7), //无损
        Array(2049752, 2, 7), //S 潜能 30%
        Array(2049116, 20, 7), //惊人正义20%2340000
        Array(2049124, 20, 7), //惊人正义20%2340000
        Array(2049135, 5, 7), //惊人正义20%2340000
        Array(4310030, 300, 7), //运动会币
        Array(4033356, 5, 7), //正义火种1
        Array(4000124, 5, 7), //战甲梦想鱼内存卡
        Array(4000082, 50, 7), //僵尸金牙
        Array(4021012, 3, 7), //强烈灵魂的净水
        Array(4021011, 3, 7), //春节灵魂的火花
        Array(4021010, 3, 7), //时间之石
        Array(4310015, 1, 7), //斗神证物
        Array(4021019, 1, 7), //梦之石
        //250级
        Array(4000463, 100, 8), //梦想邮票，兑换点卷使用
        Array(5062000, 10, 8),
        Array(2300001, 300, 8),
        Array(5062002, 10, 8),
        Array(5062500, 10, 8),
        Array(5064000, 10, 8),
        //Array(2431995, 1, 8), //惊人卷轴箱子
        //Array(2431725, 1, 8), //热力四射蜡笔箱子
        Array(4310036, 3000, 8), //征服者
        Array(4033356, 10, 8), //正义火种1
        Array(4000124, 10, 8), //战甲梦想鱼内存卡
        Array(4000082, 50, 8), //僵尸金牙
        Array(4021012, 3, 8), //强烈灵魂的净水
        Array(4021011, 3, 8), //春节灵魂的火花
        Array(4021010, 3, 8), //时间之石
        Array(4310015, 2, 8) //斗神证物
        )
var giftId = -1;
var giftToken = Array();
var gifts = null;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "" + d1 + "";
        text += "嘿，我为你准备了许多宝贝，等你达到相应等级的时候就可以领取了，另外点击可以查看礼包内容呢，快抢先看看吧！\r\n";
        for (var key in giftLevel) {
            var tips = "";
            giftToken[key] = false;
            if (cm.getChar().getLevel() >= giftLevel[key]) {
                if (cm.getEventCount(bossid + key) >= 0) {
                    tips = "(可领取)";
                    giftToken[key] = true;
                } else {
                    tips = "#g(已领取)#b";
                }
            } else {
                tips = "#r(等级不足)#b";
            }
            text += "#b#L" + (parseInt(key) + 1) + "#" + d1 + "领取#r#e" + giftLevel[key] + "#n#b级等级礼包 " + tips + "#l#k\r\n";
        }
        cm.askMenu(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        var text = "#r#e" + giftLevel[giftId - 1] + "#n#b级礼包内容：\r\n";
        gifts = getGift(giftId);
        for (var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text += "#v" + itemId + "##b#t" + itemId + "##k #rx " + itemQuantity + "#k\r\n";
        }
        text += "\r\n#d是否现在就领取该礼包？#k";
        cm.askYesNo(text);
    } else if (status == 2) {
        if (giftId != -1 && gifts != null) {
            if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
                cm.sendOk("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
                cm.dispose();
                return;
            }
            if (giftToken[giftId - 1]) {
                cm.setEventCount(bossid + (giftId - 1), 0, -2);
                for (var key in gifts) {
                    var itemId = gifts[key][0];
                    var itemQuantity = gifts[key][1];
                    cm.gainItem(itemId, itemQuantity);
                }
                cm.worldMessage("『等级奖励』玩家[" + cm.getChar().getName() + "] 领取了 " + giftLevel[giftId - 1] + "级 等级奖励。");
                cm.dispose();
				cm.sendOk("恭喜您，领取成功！快打开包裹看看吧！");
            } else {
                status = -1;
                cm.askMenu("您已经领过了该礼包或者等级未达到要求，无法领取。");
            }
        } else {
            cm.sendOk("领取错误！请联系管理员！");
            cm.dispose();
        }
    }
}
function getGift(id) {
    var lastGiftContent = Array();
    for (var key in giftContent) {
        if (giftContent[key][2] == id)
            lastGiftContent.push(giftContent[key]);
    }
    return lastGiftContent;
}
