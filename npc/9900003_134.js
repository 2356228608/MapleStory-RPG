/*
 * [每日任务]击败200个悲伤艾尔达
 * @author 娜娜
 */
var status = -1;
var sel = 0;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else
    if (status == 0) {
        cm.dispose();
        status--;
    }
    if (status == 0) {
        if(cm.isQuestActive(34134)){
			cm.dispose();
			//cm.forceCompleteQuest(34134);
			cm.sendOk("#r你正在进行任务，击败200个悲伤艾尔达!\r\n完成后去无名村找NPC“劳拉”。");
		}else{
			cm.askYesNo("#b[每日任务]击败200个快乐艾尔达,想领取任务吗？\r\n[接受任务后无法放弃，考虑好了吗？]\r\n领取后我会送你去任务地图！");
		}
    } else if (status == 1) {
        cm.forceStartQuest(34134);
		cm.getPlayer().setInvincible1(true);
		cm.dispose();
		//cm.warp(450001016, 0);
		cm.sendOk("#e#r已成功领取任务，击败200个悲伤艾尔达!\r\n系统已赠送你无敌，请抓紧时间。。。");
    } else {
        cm.dispose();
        cm.sendOk("#e#r想好了再来找我");
    }
}
 
 
 
 
 
 
 
 
 
 
 