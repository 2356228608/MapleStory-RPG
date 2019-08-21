var status = -1;

function action(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.askMenu("#e<组队任务：逃离>#n\r\n虽然我想现在就逃出去…但我不能无视他的请求。在这个城堡里面，被关在空中监狱里的人正在寻找能帮忙的人。\r\n\r\n#L1##b请你去帮助城里面被关住的冒险家！#l");
	} else {
		cm.dispose();
	}
}
