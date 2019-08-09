/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var item = cm.getPlayer().getItemAmount(4009234);
	if(item>=10){
		cm.gainItem(4009234, -10);
		cm.warp(992034000, 1);
		cm.addPopupSay(0, 2000, "你使用了10个黄色皮革。现在还剩下个"+item+"黄色皮革。");
	}else{
		cm.addPopupSay(0, 2000, "你身上只有"+item+"个黄色皮革，还不够激发传送点的。再去收集一些吧。");		
	}
	cm.dispose();
}
