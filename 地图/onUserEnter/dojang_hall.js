// ȫ�ֱ���
var status = -1; // status: ��ǰ���콻������
var selectionLog = new Array(); // ��¼ÿһ�ֵ�ѡ��

// ��ͷ

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.playerMessage(5, "�����ͼ���봥���¼��Ľű���δ�޸����ű�λ�ڣ� �ű�/��ͼ/onUserEnter/dojang_hall.js");
		ms.dispose();
	} else {
		ms.dispose();
	}
}
