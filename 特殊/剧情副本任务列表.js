/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：转职任务35903 
 *  @Author 娜娜 
 */			
var status = 0;

var ttt2 = "#fUI/UIWindow/Quest/icon6/7#"; ////美化2
var tz2 = "#fEffect/CharacterEff/1082565/0/0#"; //兔子灰色
var tz3 = "#fEffect/CharacterEff/1082588/0/0#"; //红点
var tz4 = "#fEffect/CharacterEff/1082588/3/0#"; //蓝点


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
		cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
		cm.dispose();
	} else if (status == 0) {
		var selStr = "啊，来得正好。从外部发来了紧急请求，务必请勇士你帮忙啊。";
		var n = "\r\n";
		var zhuti= tz4 +"#b#fn微软雅黑##fs18#[剧情任务] ";
		selStr += n;
		selStr += "#L4#" + zhuti +"Lv.35金海滩#l"+n;
		selStr += "#L3#" + zhuti +"Lv.120艾洛丁#l"+n;
		selStr += "#L1#" + zhuti +"Lv.125鲁塔比斯#l"+n;
		selStr += "#L2#" + zhuti +"Lv.140起源之塔#l"+n;
		
		
		selStr +="";
		
		cm.askMenu(selStr);
		
	} else if (status == 1) {
		switch (selection) {
			case 1:
				if(cm.getLevel() < 125){
					cm.dispose();
					cm.sendOk("很遗憾，任务要求等级不够!");
				}
				cm.dispose();
				cm.openNpc(9900004,"鲁塔比斯");
				break;
			case 2:
				if(cm.getLevel() < 140){
					cm.dispose();
					cm.sendOk("很遗憾，任务要求等级不够!");
				}
				cm.dispose();
				cm.openNpc(9900004,"起源之塔");
				break;
			case 3:
				if(cm.getLevel() < 120){
					cm.dispose();
					cm.sendOk("很遗憾，任务要求等级不够!");
				}
				cm.dispose();
				cm.openNpc(9900004,"艾洛丁");
				break;
			case 4:
				if(cm.getLevel() < 35){
					cm.dispose();
					cm.sendOk("很遗憾，任务要求等级不够!");
				}
				cm.dispose();
				cm.openNpc(9900004,"金海滩");
				break;
		}
	}
}
