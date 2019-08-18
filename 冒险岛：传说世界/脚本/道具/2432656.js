/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var map = [106030000, 106030200, 106030210];
// diff <= 200
var loc = [[-431, 192], [1160, 22], [-1248, 142]];
var photo = [4034107, 4034108, 4034109];
// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	if (!im.isQuestActive(30055)) {
		im.sendOkS("别人的相机还是不要乱用为好。");
		im.dispose();
		im.gainItem(im.getItemId(), -im.itemQuantity(im.getItemId()));
		return;
	}
	var index = map.indexOf(im.getMapId());
	if (index < 0) {
		im.sendOkS("这里没法拍摄需要的碧欧蕾塔的照片。去其他地方看看吧。");
		im.dispose();
		return;
	}
	var x = im.getPlayer().getPosition().getX();
	var y = im.getPlayer().getPosition().getY();
	if (im.haveItem(photo[index])) {
		im.sendOkS("这里的照片已经拍过了，赶紧去交差吧。");
	} else if (Math.abs(x - loc[index][0]) > 200 || Math.abs(y - loc[index][1]) > 200) {
		im.sendOkS("离需要拍摄的内容太远了一点。我需要靠近些才能拍出有效的照片。");
	} else {
		im.gainItem(photo[index], 1);
		im.sendOkS("嗯，这张应该可以交差了。");
	}
	im.dispose();
}
