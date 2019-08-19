var status = 0;
var selectionLog = new Array(); // 记录每一轮的选择

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
	selectionLog[status] = selection;
	if (status == 0) {
		text = "#b#e[#n王美女老师的特别课题#e]#n\r\n\r\n";
		text += "#k#L1#寻找并带来孤独的朋友#\r\n";
		text += "#k#L2#分类回收可回收的物品#\r\n";
		cm.sendNext(text);
	} else if (status == 1) {
		if (selection[1] == 1) {
			cm.sendNext("打破教室里的桌子或家具，就可以找到躲藏着的孤独朋友。");
		} else {
			cm.sendNext("打破教室里的桌子或家具，就可以找到可回收的垃圾。");
		}
	} else if (status == 2) {
		if (selection[1] == 1) {
			cm.sendNext("离开冒险岛世界的话，你找到的朋友们会消失。因此，离开之前把他们带到老师这里来。");
		} else {
			cm.sendNext("离开冒险岛世界的话，你找到的分类回收物品会消失。因此，事先放进回收箱吧。");
		}
	} else if (status == 3) {
		if (selection[1] == 1) {
			cm.sendNext("找到30名朋友，然后带到我这里来。");
		} else {
			cm.sendNext("在可回收物品箱中放入50个，再来找我吧。");
		}
	} else {
		cm.dispose();
	}
}
