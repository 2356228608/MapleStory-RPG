// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {

	if(ms.getInfoQuest(33990) == "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check11=1;check=1"){
		action2(mode, type, selection);
	}else{
		action1(mode, type, selection);
	}
	
}

function action1(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "好吧，那就开始变装吧？\r\n#b(完美变装成相同的模样。)#k", 256, 0, 0, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		//cm.dispose();
		cm.setBianZhuang(0, 1, 3, 0);
	}  else if (status === i++) {
		cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check=1");
		cm.useSkill(2210196,1);
		cm.playerMessage(5, "谁也没有发现小心翼翼的执行任务吧!");
		cm.onScriptMessage(3, 0, 0, 0, "现在去#b左侧#k，找到#b吴馆长#k，拿到门卡就可以了吧。", 256, 0, 37, 0, 1, 1540891); // [类型] 普通对话
	}  else if (status === i++) {
		cm.Skillbuff(2210196);
	} else {
		cm.dispose();
	}
}

function action2(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "好吧，那就开始变装吧？\r\n#b(完美变装成相同的模样。)#k", 256, 0, 0, 0, 1, 1540879); // [类型] 普通对话
	} else if (status === i++) {
		//cm.dispose();
		cm.setBianZhuang(1, 2, 1, 1);
	}  else if (status === i++) {
		cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check9=1;check11=1;check=1");
		cm.useSkill(2210197,1);
		cm.playerMessage(5, "谁也没有发现小心翼翼的执行任务吧!");
		cm.onScriptMessage(3, 0, 0, 0,  "现在去#b右侧#k，找到#b林博士#k，拿到#b门卡#k应该就可以了吧。", 256, 0, 37, 0, 1, 1540892); // [类型] 普通对话
		cm.dispose();
	} else {
		cm.dispose();
	}
}
