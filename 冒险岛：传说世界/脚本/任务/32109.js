/* Dawnveil
[Ellinel Fairy Academy] Cootie's Suggestion
Cootie
Made by Daenerys
 */

var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (mode == 0 && type == 0) {
		status--;
	} else if (mode == -1) {
		qm.dispose();
		return;
	} else {
		status++;
	}
	selectionLog[status] = selection;
	if (status == 0) {
		var text = "呜呜……你们是来帮忙找孩子们吗？你们打算怎么帮忙？\r\n\r\n";
		text += "#L1##b想在湖中寻找。#l\r\n";
		text += "#L2##b想用魔法来搜寻孩子们的行踪。#l\r\n";
		text += "#L3##b想在孩子们生活过的地方寻找线索。#l\r\n";
		qm.askMenu(text);
	} else if (status == 1) {
		if (selectionLog[1] == 1) {
			qm.sendNext("你们刚刚没有仔细观察湖泊吗？很显然，水上很难留下什么证据。什么也无法找到。");
			status -= 2;
		} else if (selectionLog[1] == 2) {
			qm.sendNext("我们已经试过用魔法搜寻他们了。但是毫无收获……");
			status -= 2;
		} else {
			qm.sendNext("你打算以此来推断孩子们消失去了哪里吗？这个方案好像不错……");
		}
	} else if (status == 2) {
		qm.sendNextPrev("你还打算偷东西？校长先生，没必要听这个异邦人的话。", 1500002);
	} else if (status == 3) {
		qm.sendNextPrev("虽然我也是半信半疑。可毕竟,孩子们的安全才是首位的，因此现在必须得试试。");
	} else if (status == 4) {
		qm.sendNextPrev("你叫#b#h ##k吧？我将允许你在妖精字院艾利里的建筑内部进行搜索。2楼是男生宿舍，3楼是女生宿舍。但是这个建筑从一开始就是以防止外人入侵为目的进行设计的。所以，你得注意的是，除了艾利涅的老师或学生，其他人进入的话，建筑就会自动发动攻击。");
	} else if (status == 5) {
		qm.sendNextPrev("哼，你可别要花样，我会盯着你的！", 1500002);
	} else if (status == 6) {
		qm.sendNextPrev("一定能够找到孩子们的，请不用担心。#h #,我先到上面一层等你。\r\n#b(前往艾利涅2楼，与库迪见面。)", 1500000);
	} else if (status == 7) {
		qm.forceCompleteQuest();
		qm.gainExp(3600);
		qm.dispose();
	}
}
