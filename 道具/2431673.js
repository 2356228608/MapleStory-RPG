﻿function start() {
    if (im.getRMB() >= 1000) {
        if (im.getBossLogAcc("毛莫的口袋1000礼包") == -1) {
            im.sendOk("您已经开启过该礼包，无法重复开启");
            im.dispose();
            return;
        }
        im.gainItem(2431673, -1);

        im.setBossLogAcc("毛莫的口袋1000礼包", -2);
        //im.gainNX(1, -300000);
        //im.gainPlayerPoints(100000);
        im.gainItem(3994417, 1);
        im.gainItem(2049750, 1); //S级潜能卷轴 80% 
        im.gainItem(2049402, 1); //特殊潜能附加卷轴
        im.gainItem(2048307, 1); //特殊附加潜能附加卷轴
        //im.gainItem(4001716, 1); // 10E
        var ii = im.getItemInfo();
        var toDrop = ii.randomizeStats(ii.getEquipById(1112183)).copy(); // 生成一个Equip类                    
        toDrop.setStr(30); //装备力量
        toDrop.setDex(30); //装备敏捷
        toDrop.setInt(30); //装备智力
        toDrop.setLuk(30); //装备运气
        toDrop.setMatk(30); //物理攻击
        toDrop.setWatk(30); //魔法攻击 
        toDrop.setAcc(30); //
        toDrop.setOwner("豪华点装");
        im.addFromDrop(im.getClient(), toDrop, false);
        var ii = im.getItemInfo();
        var toDrop = ii.randomizeStats(ii.getEquipById(1112296)).copy(); // 生成一个Equip类                    
        toDrop.setStr(15); //装备力量
        toDrop.setDex(15); //装备敏捷
        toDrop.setInt(15); //装备智力
        toDrop.setLuk(15); //装备运气
        toDrop.setMatk(15); //物理攻击
        toDrop.setWatk(15); //魔法攻击 
        toDrop.setAcc(15); //
        toDrop.setOwner("神级觉醒");
        im.addFromDrop(im.getClient(), toDrop, false);
        var ii = im.getItemInfo();
        var toDrop = ii.randomizeStats(ii.getEquipById(1003719)).copy(); // 生成一个Equip类                    
        toDrop.setStr(50); //装备力量
        toDrop.setDex(50); //装备敏捷
        toDrop.setInt(50); //装备智力
        toDrop.setLuk(50); //装备运气
        toDrop.setMatk(30); //物理攻击
        toDrop.setWatk(30); //魔法攻击 
        toDrop.setSpeed(15); //移动速度
        toDrop.setJump(15); //跳跃
        toDrop.setAcc(15); //
        toDrop.setOwner("豪华神装");
        im.addFromDrop(im.getClient(), toDrop, false);
        im.sendOk("成功获得 #r豪华礼包#k 一个。");
        im.worldMessage("『毛莫的口袋』" + " : " + "玩家 " + im.getChar().getName() + " 从限时1000元豪华中获得 神装 以及 道具。");
        im.dispose();
    } else {
        im.sendOk("#b累计充值达到1000元即可开启该礼包，不需要扣除点卷，如果时间到了还未开启的话礼包会自动消失哦。#k\r\n\r\n#v3994417# #v2049750# #v2049402# #v2048307#\r\n#r#t1003719##v1003719# : 全属性50，攻击力魔攻30。\r\n#t1112296##v1112296# : 全属性15，攻击力魔攻15。\r\n#t1112183##v1112183# : 全属性15，攻击力魔攻15。");//\r\n\r\n- #e#d永久BUFF以及骑宠技能#k#n:\r\n#s80000077# #s80000077# #s80000077# #s80000081# #s80000082# #s80000083# #s80001198# #s80001241#");
        im.dispose();
    }
}