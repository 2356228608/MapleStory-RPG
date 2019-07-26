var status = 0;
var totAp = 0;
var statup;
var p;
var needMeso = 500000;
var needLevel = 200;
var count = 0;
var current;
var retap = 0;

function start() {
    p = cm.getPlayer();
    totAp = p.getRemainingAp() + p.getStat().getStr() + p.getStat().getDex() + p.getStat().getInt() + p.getStat().getLuk(); //总能力点
    if (p.getVip() <= 1) {
        retap = 50;
		count = 20;
    } else if (p.getVip() == 2) {
        retap = 80;
		count = 20;
    } else if (cm.getVip() == 3) {
        retap = 130;
		count = 20;
    } else if (cm.getVip() == 4) {
        retap = 180;
		count = 20;
    } else if (cm.getVip() == 5) {
        retap = 200;
		count = 20;
    } else if (cm.getVip() == 6) {
        retap = 250;
		count = 20;
    } else if (cm.getVip() == 7) {
        retap = 300;
		count = 20;
    } else if (cm.getVip() == 8) {
        retap = 400;
		count = 20;
    } 
    retap = (cm.getRepairquency() + 1) * retap; //实际保留属性点
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) { //ExitChat
        cm.dispose();
    } else if (mode == 0) { //No
        cm.sendOk("好的, 请告诉我你确定需要 #b投胎转世#k.");
        cm.dispose();
    } else { //Regular Talk
        if (mode == 1) status++;
        else status--;
        if (status == 0) {
            var zscx = count - cm.getBossLog("转生");
            var text = "啊哈... 伟大的#b#h ##k。你已经通过一个漫长而充满挑战的道路，终于成为了风起云涌的人物。\r\n";
            text += "如果您能给我" + needMeso + "金币和#b1个圣杯#k #v4031454#。 \r\n";
            text += "我可以用我的乾坤大挪移心法，助你转世！\r\n";
			text += "已经转生次数" + cm.getRepairquency() + "次\r\n";
            text += "您今天已经转生次数：#d" + cm.getBossLog("转生") + "#k，你今天还可以转：" + zscx + "次\r\n";
            text += "您已经转生次数(你玩这个角色总转生次数!)：#r" + "#k\r\n";
            text += "您将成为1级的 #b新手#k, 并且同时将您所有的#b技能#k扣除，\r\n";
            text += "传承你的累计属性将保留#r" + retap + "#k点，你是否想#r转生#k?\r\n\r\n";
            text += "VIP1保留50属性点\r\nVIP2保留80属性点\r\nVIP3保留130属性点\r\nVIP4保留180属性点\r\nVIP5保留200属性点\r\nVIP6保留250属性点\r\nVIP7保留300属性点\r\nVIP8保留400属性点";
            cm.askYesNo(text);
        } else if (status == 1) {
            if (cm.getChar().getLevel() < needLevel) {
                cm.sendOk("很抱歉，您需要" + needLevel + "级，才可以投胎转世.");
                cm.dispose();
            } else if (cm.haveItem(4031454, 1) == false) {
                cm.sendOk("你没有带来#b圣杯#k 每日签到可以领取哦!");
                cm.dispose();
            } else if (cm.getMeso() < needMeso) {
                cm.sendOk("你没有" + needMeso + "金币,我不能帮你的忙哦.");
                cm.dispose();
            } else if (cm.getChar().getBossLog("转生") == count) {
                cm.sendOk("今天您已经无法转生了。");
                cm.dispose();
            } else {
                cm.askYesNo("#e您做得非常好,由于您是VIP#r" + cm.getVip() + "\r\n#b您转身后将会保留#r" + retap + "#k点属性.并且将变为新手职业!");
            }
        } else if (status == 2) {

            var item = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-10); //副手

            var item1 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-11); //副手
            if (item  || item1 != null) {
                if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull() == false) {
                    Packages.server.MapleInventoryManipulator.unequip(cm.getClient(), -10, cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNextFreeSlot());
Packages.server.MapleInventoryManipulator.unequip(cm.getClient(), -11, cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNextFreeSlot());
                } else {
                    cm.sendOk("你因为带有副手装备,但是装备栏没有空位,无法为你提供转生服务!");
                    cm.dispose();
                    return;
                }
            }

	//因戴着天使戒指转生为新手职业会导致掉线，因此在此处判断在转生的时候检测玩家是否戴有天使类戒指	
            var itemRing1 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-12); //戒指
            var itemRing2 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-13); //戒指
            var itemRing3 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-15); //戒指
            var itemRing4 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-16); //戒指
            var itemRing5 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-27); //戒指
            var itemRing6 = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-28); //戒指
            if (itemRing1 != null && checkRingMessage(12)) {
                cm.sendOk("你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!");
                cm.dispose();
                return;
            } else if (itemRing2 != null && checkRingMessage(13)) {
                cm.sendOk("你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!");
                cm.dispose();
                return;
            } else if (itemRing3 != null && checkRingMessage(15)) {
                cm.sendOk("你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!");
                cm.dispose();
                return;
            } else if (itemRing4 != null && checkRingMessage(16)) {
                cm.sendOk("你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!");
                cm.dispose();
                return;
            } else if (itemRing5 != null && checkRingMessage(27)) {
                cm.sendOk("你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!");
                cm.dispose();
                return;
            } else if (itemRing6 != null && checkRingMessage(28)) {
                cm.sendOk("你带有天使祝福戒指,和恶魔戒指，请取下后再进行转生!");
                cm.dispose();
                return;
            }
			cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.effect_NormalSpeechBalloon("\r\n#fs30#请稍等\r\n神正在为你进行转生中...\r\n此过程需要10-20秒",20000,0);
			cm.changeJob(0);
            cm.gainMeso(-needMeso);
            cm.gainItem(4031454, -1); //圣杯
            cm.gainItem(4310003, 1); //转生证明
            cm.gainNX(2, 1000); //抵用点卷
            cm.clearSkills(); //清理技能
            //cm.unequipEverything(); //脱装备语句，需要的去掉前面的“//”
            //p.resetAP();
			p.gainAp(- p.getRemainingAp());
			p.gainAp(retap - 80);
            p.getStat().setStr(14, p);
            p.getStat().setDex(14, p);
            p.getStat().setInt(14, p);
            p.getStat().setLuk(14, p);
            p.setLevel(2);
			cm.deleteskill();
            cm.gainRepairquency(); //转身次数记录
			cm.setRepairXW(cm.getRepairXW() + 10);
            cm.getPlayer().setBossLog("转生");
            //cm.fakeRelog(); //刷新人物数据
            p.levelUp();
            p.saveToDB(false, false);
            //cm.worldSpouseMessage(0x24, "『转生系统』" + " : " + "恭喜" + cm.getChar().getName() + ",转生了" + cm.getRepairquency() + "次,他又变强大了,羡慕吧!极品装备又进了一步");
			//cm.playerMessage(1,"您做得非常好, 您已经成功转生了,您现在的属性点情况如下：\r\n" + "   力量: " + p.getStat().getStr() + " 点" + "\r\n   敏捷: " + p.getStat().getDex() + " 点" + "\r\n   智力: " + p.getStat().getInt() + " 点" + "\r\n   运气: " + p.getStat().getLuk() + " 点" + "\r\n   未分配的AP: " + p.getRemainingAp() + " 点");
            cm.dispose();
			cm.openNpc(9300010,"转生剧情");
        }
    }
}

function checkRingMessage(slot) {
    var item = cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIPPED).getItem(-slot);
    if (item.getItemId() == 1112585 || item.getItemId() == 1112586 || item.getItemId() == 1112594 || item.getItemId() == 1112663 || item.getItemId() == 1113010 || item.getItemId() == 1113009 || item.getItemId() == 1113008 || item.getItemId() == 1113003) {
        return true;
    }
}
