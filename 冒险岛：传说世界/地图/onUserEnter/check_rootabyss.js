/* 鲁塔比斯
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 没完成剧情？强行遣送
		if (!ms.isQuestFinished(30007)) {
			ms.warp(910700200, 0);
			ms.getMap().startMapEffect("这里的情况好像不对劲。还是先了解一下状况吧。", 5120124);
		}
		ms.dispose();
	} else {
		ms.dispose();
	}
}
