/* 
 * 跑琪
 */
var status = 0;
var GP = Array(500,10000,8000,6000,4000,2000);//这里设置获得家族点数第一格代表不在前5名获得的点数，之后从第一名到第五名依次类推，如果不给就填0
var rewarditem = Array(
	Array(1,5062024,30),
	Array(1,5062503,30),
	Array(1,2430683,5),
	Array(2,5062024,20),
	Array(2,5062503,20),
	Array(2,2430683,3),
	Array(3,5062024,15),
	Array(3,5062503,15),
	Array(3,2430683,2),
	Array(4,5062024,10),
	Array(4,5062503,10),
	Array(4,2430683,1),
	Array(5,5062024,8),
	Array(5,5062503,8) //注意：最后一行括号后面不要加逗号。
);
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
        } 
    else if (status == 0) {
		var em = cm.getEventManager("biwu");
		var selStr = "#e           欢迎来到跑旗活动中心 \r\n";
			selStr +="#b此次活动排名:#k\r\n";
		for (var i =1;i<6 ;i++ ){
			selStr += "第 "+i+" 名玩家：#r"+em.getProperty("rank"+i)+"#k\r\n\r\n";
		}
		for (var d =1;d<6 ;d++ ){
			if (em.getProperty("rank"+d)==""+cm.getName()){
				selStr +="#r#L0#领取奖励#l\r\n";
				break;
			}
		}
			selStr +="#r#L1#查看奖励#l\r\n";
			selStr +="#r#L2#退出#l\r\n";
        cm.askMenu(selStr);
    } else if (status == 1) {
        if (selection==0) {
			var em = cm.getEventManager("biwu");
			for (var b=1;b<6 ;b++ ){
				if (em.getProperty("rank"+b)==cm.getName()){
					for (var a =0;a<rewarditem.length ; a++){
						if (rewarditem[a][0]==b){
							cm.gainItem(rewarditem[a][1],rewarditem[a][2]);
						}
					}
					break;
				}
			}
			em.setProperty("rank"+b,"0");
			em.setProperty("Round"+cm.getName(),"0");
			//cm.gainGP(GP[b]);
			cm.warp(910000000,0);
			cm.dispose();
		}
		if (selection==1) {
			var text ="\t\t              #r奖励中心#k\r\n";
			for (var i=1;i<6 ;i++ ){
				text += "#L"+i+"#查看#r第"+i+"名#k的物品奖励\r\n\r\n";
			}
			cm.askMenu(text);
		}
		if (selection==2){
			var em = cm.getEventManager("biwu");
			em.setProperty("rank"+b,"0");
			em.setProperty("Round"+cm.getName(),"0");
			//cm.gainGP(GP[0]);
			cm.warp(910000000,0);
			cm.dispose();
		}
    }else if(status == 2){
		var textt = "\t\t\t\t\t\t#b奖励如下#k\r\n\r\n";
		for (var s=0;s<rewarditem.length ;s++ ){
			if(rewarditem[s][0]==selection){
				textt += "物品:#v"+rewarditem[s][1]+"# 数量：#r"+rewarditem[s][2]+"#k\r\n\r\n";
			}
		}
		cm.askMenu(textt);
		cm.dispose();
	}
}
