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
			selStr += "#b#L6#领取#v1712006##z1712006#(需要10000点卷)#l \r\n";//神秘徽章：埃斯佩拉
            selStr += "#b#L7#开启神秘徽章6格背包(需要100000点卷)#l \r\n";
            selStr += "#b#L8#合成神秘徽章[可增加属性和攻击力]#l \r\n";
            selStr += "#b#L9#使用点卷强化第1个神秘徽章10000点卷增加100神秘力量#l \r\n";
            selStr += "#b#L10#使用点卷强化第2个神秘徽章10000点卷增加100神秘力量#l \r\n";
            selStr += "#b#L11#使用点卷强化第3个神秘徽章10000点卷增加100神秘力量#l \r\n";
            selStr += "#b#L12#使用点卷强化第4个神秘徽章10000点卷增加100神秘力量#l \r\n";
            selStr += "#b#L13#使用点卷强化第5个神秘徽章10000点卷增加100神秘力量#l \r\n";
            selStr += "#b#L14#使用点卷强化第6个神秘徽章10000点卷增加100神秘力量#l \r\n";

            cm.askMenu(selStr);
        } else if (status == 1) {

            switch (selection) {
                case 1://
                case 2://
                case 3://
                case 4://
                case 5://
				case 6://
                    var item = 1712000 + selection;
                    cm.gainItem(item, 1);
                    cm.dispose();
                    cm.sendOk("成功领取#v" + item + "##z" + item + "#。");
                    break;
                case 7://
                    //cm.getPlayer().forceCompleteQuest(34478);
                    if (cm.getPlayer().getCSPoints(1) < 10000) {
                        cm.dispose();
                        cm.sendOk("您的点卷不足");
                        return;
                    }

                    cm.getPlayer().forceCompleteQuest(34478);
                    cm.gainNX(1, -10000);
                    cm.dispose();
                    cm.sendOk("成功开启神秘徽章6格背包。");
                    //cm.openNpc(9900004, "秘徽章6格任务");
                    break;
                case 8://
                    cm.dispose();
                    cm.openNpc(1022003, 1);
                    break;
                case 9://使用点卷强化神秘徽章1格
                    使用点卷强化神秘徽章(-1600);
                    break;
                case 10://使用点卷强化神秘徽章2格
                    使用点卷强化神秘徽章(-1601);
                    break;
                case 11://使用点卷强化神秘徽章3格
                    使用点卷强化神秘徽章(-1602);
                    break;
				case 12://使用点卷强化神秘徽章4格
                    使用点卷强化神秘徽章(-1603);
                    break;
				case 13://使用点卷强化神秘徽章5格
                    使用点卷强化神秘徽章(-1604);
                    break;
				case 14://使用点卷强化神秘徽章6格
                    使用点卷强化神秘徽章(-1605);
                    break;
            }
            //cm.dispose();
        }
    }

    function 使用点卷强化神秘徽章(Position) {
        if (cm.getPlayer().getCSPoints(1) < 10000) {
            cm.dispose();
            cm.sendOk("您的点卷不足10000");
            return;
        }
        var itemid = cm.ItemPosition(Position);//获取身上的装备 第3格神秘徽章
        if (itemid != null) {
            itemid.setArc(itemid.getArc() + 100);//设置神秘徽章力量
            cm.getPlayer().forceUpdateItem(itemid);//刷新装备
            cm.equiplaba(itemid);//喇叭消息
            cm.gainNX(1, -10000);
            cm.sendOk("神秘徽章力量增加到" + itemid.getArc());
        } else {
            cm.sendOk("请先装备你的神秘徽章");
        }
        cm.dispose();
    }