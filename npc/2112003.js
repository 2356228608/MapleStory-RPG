function action(mode, type, selection) {
    var em = cm.getEventManager("ZChaosPQ3");
    if (em == null) {
        cm.sendOk("请稍后再试。");
        cm.dispose();
        return;
    }
    switch (cm.getPlayer().getMapId()) {
    case 261000021:
	cm.dispose();
	cm.openNpc(2112003,1);
        return;
    case 926110000:
        cm.sendOk("你应该尝试调查这里。看看#b文件库#k中的内容。直到找到可以进入实验室的入口。");
        break;
    case 926110001:
        cm.sendOk("请消灭所有的怪物！我会支持你的。");
        break;
    case 926110100:
        cm.sendOk("这些烧杯有泄漏。我们必须把#b可疑的液体#k倒入烧杯里边，一段时间不把#b可疑的液体#k倒入烧杯内，烧杯里的液体会流失光。请抓紧了！");
        break;
    case 926110400:
        cm.sendOk("你什么时候准备好，我们要去拯救我的爱情。");
        break;
    case 926110401:
	if(!cm.haveMonster(9300139)){
   	   cm.gainPlayerEnergy(10);
	   cm.gainItem(5062002, 2);
	   cm.gainItem(4310036, 10);
	   cm.gainItem(4310030, 5);
	   cm.gainItem(4033943, 10);
           cm.worldSpouseMessage(0x20,"[日常活动] 恭喜玩家 "+ cm.getChar().getName() +" 在拯救罗和朱活动中获得高级神奇魔方x2征服币x10运动会币x5魔法球x10 。");
	   cm.setEventCount("罗朱");
	   cm.setPartyEventCount("罗朱1");
	   cm.warp(910000000);
	   cm.dispose();
	}else{
	cm.sendOk("请确认地图上否还存在怪物!");
	}
        break;
    }
    cm.dispose();
}