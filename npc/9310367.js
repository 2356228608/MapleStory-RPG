var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var vvv4 = "#fUI/UIWindow4/PQRank/rank/gold#";
var z1 = "#fEffect/ItemEff/1112811/0/0#";//黄金音符
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
cztp = 0;
var targetLevel = 250;
var reward = [100, 120, 170, 190, 200, 210, 220];
var randitem = Math.floor(Math.random() * reward.length);



function start() {
    status = -1;
	select = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
		var mapFactory = cm.getClient().getChannelServer().getMapFactory();
		var sizi = mapFactory.getMap(cm.getMapId()).getCharactersSize();//获取当前地图人
		var dianjuan=10000*sizi*randitem;
		em = cm.getEventManager("Eventjiangli");
		emgate = cm.getEventManager("EventjiangliOpen");
	
	
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

		
        var txt = "#d亲,这里是活动中心,请先登记,登记人数越多获得的奖励就越多#k\r\n";
		txt += "　#d" + vvv + " 当前总登记人数为"+em.getProperty("renshu")+"人.\r\n"; 
        txt += "　#r#L1#" + vvv4 + " #r我要登记#l\r\n"; 
        txt += "　#r#L2#" + vvv4 + " #r领取奖励#l\r\n"; 
		txt += "　#r#L3#" + vvv4 + " #r有事先回去一趟#l\r\n"; 
		if (cm.getPlayer().isGM() || cm.getGMNPC()) {
            cm.askMenu(txt);
        } else {
			cm.dispose();
            cm.askMenu("你想做什么呢？\r\n我只为管理员服务。");
        }
    } else if (status == 1) {
        switch (selection) {
			case 1:
			if(cm.getBossLog("点卷活动1登记")>=1){
				cm.playerMessage(1,"你今天登记过了,请明天再来.");
			}else{
				var j = parseInt(em.getProperty("renshu"));
				if(j<=0){
					j=1;
				}
				em.setProperty("renshu",j+1);
				cm.setBossLog("点卷活动1登记",1);
				cm.playerMessage(1,"登记成功.当前总登记人数为:"+em.getProperty("renshu"));
				cm.spouseMessage(0x24, cm.getChar().getName()+"点卷活动1登记已登记,参加的人数越多获得的奖励就越多哦!");
			}
				break;
			case 2:
				if(cm.getBossLog("点卷活动1登记")>=1){
				cm.playerMessage(1,"你今天参加过活动了,请明天再来.");
			}else{
				if (em.getProperty("Exct") == "1") {
					cm.gainMeso(1000000);
					cm.gainItem(2430051, 1);//玩具
					cm.gainItem(2430069, 1);//玩具
					cm.gainNX(1,dianjuan);
					cm.dispose();
					cm.warp(910000000,0);
					cm.addPopupSay(1540104, 15000,"活动已结束\r\n当前参加的活动人数为"+sizi+"人,\r\n活动获得奖励箱子*2个,\r\n活动获得金币100万\r\n活动获得点卷为:"+dianjuan+"\r\n参加的人数越多分配的点卷就越多哦!");//显示180秒的活动介绍
					cm.spouseMessage(0x24, "[活动已结束]\r\n"+cm.getChar().getName()+"获得点卷为:"+dianjuan+"\r\n参加的人数越多分配的点卷就越多哦!。");
				}else{
					cm.dispose();
					cm.addPopupSay(1540104, 5000,"活动还未结束.");
				}
			}
                break;
			case 3:
				cm.warp(910000000,0);
				break;
		}
		cm.dispose();
	}
}