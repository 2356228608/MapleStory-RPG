/*
 *  功能：测试
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (askMenu)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(askMenu/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	// 初次对话
	cm.askMenu("说点啥");
	// 结束
	cm.dispose();
}

function test() {
	var item = cm.getInventory(1).getItem(1);
	var toDrop = item.copy();
	cm.removeSlot(1, 1, 1);
	cm.addFromDrop(cm.getClient(), toDrop, false);
	cm.startQuest(3982); //开始任务
	cm.completeQuest(3982);
	toDrop.setEnhance(toDrop.getCHUC() + 1); //星级
	toDrop.setYggdrasilWisdom(7); //激活成长能力 力量、智力、敏捷、运气……
	toDrop.setEnhanctBuff(7); //强化必定成功 卷轴、魔方、魔方+卷轴……
	toDrop.setTotalDamage(20); // 伤害
	toDrop.setAllStat(20); // 所有属性
	toDrop.setBossDamage(7); // BOSS
	toDrop.setIgnorePDR(7); // 无视
}
