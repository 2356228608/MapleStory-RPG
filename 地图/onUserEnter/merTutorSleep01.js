/*  This source is made by BMS Team
 *  �ű����ܣ�[��������]˫����ϵ��remake
 *  @Author ������
 *  �����ṩ��Jessefjxm
 */

// ȫ�ֱ���
var status = -1; // status: ��ǰ���콻������

// ����
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
        } else if (status === i++) {
	ms.curNodeEventEnd(true);
	ms.setInGameDirectionMode(true, false, false);
	ms.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene1", 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(3300);
	ms.warp(101050010);
	} else if (status === i++) {
	ms.warp(101050010);
	ms.setInGameDirectionMode(false, false, false);
	ms.dispose();
	ms.warp(101050010);
	}
}