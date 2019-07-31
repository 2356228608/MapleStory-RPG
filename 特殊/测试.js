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

// 剧情专用单向事件
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		// 5120008 枫叶
		// 5120012 圣诞礼盒
		// 5120016 老虎
		// 5120017 女法师
		// 5120019 云朵
		// 5120026 标准黄框
		// 5120027 高科技信息框
		// 5120030 棒棒糖
		// 5120034 披萨盒子和可乐
		// 5120052 白毛斗士
		// 5120053 胡子大叔
		// 5120055 阿卡伊勒
		// 5120059 希拉国度的女灵魂
		// 5120080 拿剑的女战士
		// 5120081 拿法杖的女法师
		// 5120085 
		// 5120093 拿锤子的恶魔猎手？
		// 5120124 被铁链捆绑的木框
		// 5120130	BBQ
		// 5120161 兽人大酋长
		// 5120187	黑暗传令兵
		// 5120184	迷宫向导
		// 5120179	小坏蛋冒险萌
		// 5120178	怪物出租车司机
		// 5120177	帕普拉图斯指南
		// 5120176	金币哗啦啦水槽骑宠
		// 5120175	石精灵
		// 5120173	布莱克缤提示栏
		// 5120172	圣诞节任务用
		// 5121000 火影
		// 5121027 金元宝
		// 5121037 鲜花
		// 5121050 花蘑菇
		// 5121052 星星
		cm.getMap().startMapEffect("和沉睡的血腥女皇说话吧。", 5120085);
	} else {
		cm.dispose();
	}
}
function action普通(mode, type, selection) {
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

	// 结束
	cm.dispose();
}

function test() {
	var item = cm.getInventory(1).getItem(1);
	var toDrop = item.copy();
	toDrop.setArc(5000);
	cm.removeSlot(1, 1, 1);
	cm.addFromDrop(cm.getClient(), toDrop, false);
	cm.askMenu("result: " + cm.getReqLevel(item.getItemId()));

	cm.askMenu("说点啥");
}
