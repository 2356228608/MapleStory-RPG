/* [冒险岛联盟]冒险岛联盟的开端
Made by Jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("风吹来了奇怪的宣传单。\r\n乍一看，上面画着射手村的蘑菇屋……要不要仔细看看？\r\n\r\n - 奖励 - \r\n #i2670004:##t2670004:#\r\n #i2670005:##t2670005:#\r\n #i2670006:##t2670006:#\r\n #i2670007:##t2670007:#\r\n\r\n#b※ [我的小屋]#r世界内每个账号只能进行1次#b教程任务，完成教程后，#r世界内的所有角色都能使用[我的小屋]。#b在进行剧情的时候，无法更改角色，请慎重决定！", 9010010);
	} else if (status === i++) {
		qm.sendNext("风吹来了奇怪的宣传单。\r\n乍一看，上面画着射手村的蘑菇屋……要不要仔细看看？", 9010010);
	} else if (status === i++) {
		qm.sendOk("在冒险岛世界居然有我的家，这是梦还是现实？\r\n快去家里看看吧。\r\n\r\n\r\n#b#e[我的小屋入场方法]\r\n#n1. 使用角色快捷栏的[前往我的小屋]按键\r\n2. 使用我的角色信息栏的[前往我的小屋]按键", 9010010);
	} else if (status === i++) {
		//qm.forceStartQuest();
		//qm.updateInfoQuest(500763, "selfStart");
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
