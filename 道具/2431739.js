﻿function start() {
    im.gainItem(2431739, -1);
    im.gainNX(2, 1000);
    im.sendOk("恭喜您获得 #r1000#k 低用卷。");
    im.worldSpouseMessage(0x0C, "[怪物掉宝提示]" + " : " + "玩家" + im.getChar().getName() + ",从怪物身上掉落[抵用券1000商品券]获得1000抵用卷。");
    //im.worldSpouseMessage(0x20,"[怪物掉宝提示]：恭喜玩家 "+ im.getChar().getName() +" 从怪物身上掉落[抵用券1000商品券]获得1000抵用卷。");
    im.dispose();
}