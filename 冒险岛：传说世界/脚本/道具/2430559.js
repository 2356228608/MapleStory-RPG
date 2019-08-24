/*
Made by jessefjxm
 */
var status = -1; // status: 当前聊天交互轮数
var itemid = [4009237, 4009238];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		im.dispose();
	} else if (status === i++) {
		im.askMenu("我会把能手册20和30都给你。\r\n\r\n#L1#获取能手册#l\r\n#L2#不获取能手册#l\r\n",2161002);
	} else if (status === i++) {
		if (selection == 1) {
			im.gainItem(im.getItemId(), -1);
			im.gainItem(2431943, 1);
			im.gainItem(2431944, 1);
		}
		im.dispose();
	}
}
