// ȫ�ֱ���
var status = -1; // status: ��ǰ���콻������
var selectionLog = new Array(); // ��¼ÿһ�ֵ�ѡ��

// ��ͷ
function start() {
	action(1, 0, 0);
}

function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var id = qm.getQuest();
		qm.askYesNo("�������Ŀ�ʼ�ű���û���޸�Ŷ�����Ľű�λ�ڣ� #b �ű�/����/56553.js#k\r\n\r\n���������Ȥ����ӭһ�����޸���\r\n\r\n��ô���ڣ���Ҫ���̿�ʼ���������");
	} else if (status == i++) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		im.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status == i++) {
		var id = qm.getQuest();
		qm.askYesNo("�������Ľ����ű���û���޸�Ŷ�����Ľű�λ�ڣ� #b /�ű�/����/#e" + id + "#n.js#k\r\n\r\n���������Ȥ����ӭһ�����޸���\r\n\r\n��ô���ڣ���Ҫ����������������");
	} else if (status == i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
