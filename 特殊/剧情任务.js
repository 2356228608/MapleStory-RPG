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
		var ziti = "#b#fn微软雅黑##fs18#" + tz3;
		selStr += n;
		selStr += "#L1#" + ziti + "每日日常任务#l"+n+n;
		selStr += "#L2#" + ziti + "主题副本任务#l"+n+n;
		selStr += "#L3#" + ziti + "剧情副本任务#l"+n+n;
		selStr += "#L4#" + ziti + "小游戏_控制之神#l"+n+n;
		selStr +="";
		
		cm.askMenu(selStr);
		
	} else if (status == 1) {
		switch (selection) {
			case 1:
				cm.dispose();
				cm.openNpc(9900003,12);
				break;
			case 2:
				cm.dispose();
				cm.openNpc(9900004,"主题副本任务列表");
				break;
			case 3:
				cm.dispose();
				cm.openNpc(9900004,"剧情副本任务列表");
				break;
			case 4:
				cm.dispose();
				cm.openNpc(1,"小游戏_控制之神");
				cm.addPopupSay(1540108, 2000, "温馨提示:此游戏各地图可以最高跳跃\r\n连续按箭头← ←或→ → 可触发.");
				break;	
		}
	}
}
