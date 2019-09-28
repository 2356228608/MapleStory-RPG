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
		if (ms.getServerGameMode() == 2 && !ms.isQuestFinished(30007)) {
			ms.warp(910700200, 0);
			ms.getMap().startSimpleMapEffect("这里的情况好像不对劲。还是先了解一下状况吧。", 5120124);
		} else {
			ms.effect_Text("#fn微软雅黑##fs24#◆ 主题副本 ◆\r\n#fn黑体##fs40#鲁塔比斯", 100, 2000, 4, 0, -150, 1, 4, 0, 0, 0);
			ms.dispose();
		}
	}
}
