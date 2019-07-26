/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：神秘徽章
 *  @Author 娜娜 
 */
var status = 0;


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
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        var selStr = "亲爱的#r#h ##k您好，我这里可以为您领取神秘力量微章哦#k\r\n";
		
		selStr += "#b#L1#领取#v1712001##z1712001#(需要10000点卷)#l\r\n";//神秘徽章：消亡旅途
        selStr += "#b#L2#领取#v1712002##z1712002#(需要10000点卷)#l \r\n";//神秘徽章：啾啾岛
        selStr += "#b#L3#领取#v1712003##z1712003#(需要10000点卷)#l \r\n";//神秘徽章：拉克兰
        selStr += "#b#L4#领取#v1712004##z1712004#(需要10000点卷)#l \r\n";//神秘徽章：阿尔卡那
		selStr += "#b#L5#领取#v1712005##z1712005#(需要10000点卷)#l \r\n";//神秘徽章：莫拉斯
		//selStr += "#b#L6#提升神秘徽章等级#l \r\n";
		selStr += "#b#L7#合成神秘徽章[可增加属性和攻击力]#l \r\n";
		selStr += "#b#L8#使用点卷强化第1个神秘徽章10000点卷增加100神秘力量#l \r\n";
		selStr += "#b#L9#使用点卷强化第2个神秘徽章10000点卷增加100神秘力量#l \r\n";
		selStr += "#b#L10#使用点卷强化第3个神秘徽章10000点卷增加100神秘力量#l \r\n";
        cm.askMenu(selStr);
    } else if (status == 1) {
		
        switch (selection) {
            case 1://
			case 2://
			case 3://
			case 4://
			case 5://
			var item =1712000+selection;
			if (cm.getPlayer().getCSPoints(1) < 10000) {
                cm.dispose();
				cm.sendOk("您的点卷不足");
                return;
            }
			
			var ii = cm.getItemInfo();
			var toDrop = ii.randomizeStats(ii.getEquipById(item)).copy(); // 生成一个Equip类                    
				toDrop.setStr(300); //装备力量
				toDrop.setDex(300); //装备敏捷
				toDrop.setInt(300); //装备智力
				toDrop.setLuk(300); //装备运气
				toDrop.setTitle("神级觉醒");
				cm.addFromDrop(cm.getClient(), toDrop, false);//false
				cm.gainNX(1, -10000);
                //cm.gainItem(item, 1);
				cm.dispose();
				cm.sendOk("成功领取#v"+item+"##z"+item+"#。");
                break;
			case 7://
				cm.dispose();
				cm.openNpc(1022003, 1);
                break;
			case 8://使用点卷强化神秘徽章
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.dispose();
					cm.sendOk("您的点卷不足10000");
					return;
				}
				var itemid = cm.ItemPosition(-1600);//获取身上的装备 第1格神秘徽章
				if(itemid!=null){
					itemid.setArc(itemid.getArc()+100);//设置神秘徽章力量
					cm.getPlayer().forceUpdateItem(itemid);//刷新装备
					cm.equiplaba(itemid);//喇叭消息
					cm.sendOk("神秘徽章力量增加到"+itemid.getArc());
				}else{
					cm.sendOk("请先装备你的神秘徽章");
				}
				cm.dispose();
                break;
			case 9://使用点卷强化神秘徽章
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.dispose();
					cm.sendOk("您的点卷不足10000");
					return;
				}
				var itemid = cm.ItemPosition(-1601);//获取身上的装备 第2格神秘徽章
				if(itemid!=null){
					itemid.setArc(itemid.getArc()+100);//设置神秘徽章力量
					cm.getPlayer().forceUpdateItem(itemid);//刷新装备
					cm.equiplaba(itemid);//喇叭消息
					cm.sendOk("神秘徽章力量增加到"+itemid.getArc());
				}else{
					cm.sendOk("请先装备你的神秘徽章");
				}
				cm.dispose();
                break;	
			case 10://使用点卷强化神秘徽章
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.dispose();
					cm.sendOk("您的点卷不足10000");
					return;
				}
				var itemid = cm.ItemPosition(-1602);//获取身上的装备 第3格神秘徽章
				if(itemid!=null){
					itemid.setArc(itemid.getArc()+100);//设置神秘徽章力量
					cm.getPlayer().forceUpdateItem(itemid);//刷新装备
					cm.equiplaba(itemid);//喇叭消息
					cm.sendOk("神秘徽章力量增加到"+itemid.getArc());
				}else{
					cm.sendOk("请先装备你的神秘徽章");
				}
				cm.dispose();
                break;
        }
		//cm.dispose();
    }
}


