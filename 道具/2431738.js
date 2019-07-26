function start() {
    im.gainItem(2431738, -1);
    im.gainNX(2, 500);
    im.sendOk("恭喜您获得 #r500#k 抵用卷。");
    im.worldMessage("[在线奖励提示]" + " : " + "恭喜玩家" + im.getChar().getName() + ",在线30分钟领取了[抵用券500商品券]。");
    //im.worldSpouseMessage(0x20,"[在线奖励提示]：恭喜玩家 "+ im.getChar().getName() +" 在线30分钟领取了获得500抵用卷。");
    im.dispose();
}