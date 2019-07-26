﻿var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {//如果你有#b#t05152053##k 使用皇家整容院优惠券
        cm.askMenu("你好，我是整形手术领域的艺术家#b#p9201148##k。如果你有#b#t05152053##k，我可以为你做脸部整形手术。怎么样？ 你想让自己的脸变得完美无瑕吗？\r\n#b#L0# 换脸(使用皇家整容院优惠券)#l");
    } else if (status == 1) {
        cm.askYesNo("使用皇家整容院优惠券，可以随意更改脸型。但是请别担心，我的手术已经达到了艺术的境界。你真的要使用#b#t05152053##k，变换脸型吗？");
    } else if (status == 2) {
        var face = cm.getPlayerStat("FACE");
        var facetype;
        if (cm.getPlayerStat("GENDER") == 0) {
            facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20066, 20067, 20068, 20069];// 20074, 20075, 20077, 20080
        } else {
            facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 21059, 21060, 21061, 21062, 21063, 21064, 21077, 21075, 21078];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
        //cm.gainItemPeriod(5152053,1,1);
        if (cm.setRandomCharStyle(5152053, facetype) == 1) {
            cm.sendOk("好了,你的朋友们一定认不出你了!");
        } else {
            cm.sendOk("必须有皇家整容院优惠券，才能进行手术。");
        }
        cm.dispose();
    }
}