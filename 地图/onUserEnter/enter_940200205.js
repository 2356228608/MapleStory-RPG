/*
 * 尖兵剧情 - 15
 * 地图：视频 - 教程0 (940200205)
 * @author 狐狸糊涂
 */
﻿var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
		ms.dispose();
		ms.openNpc(3003250,"路西德");
    } else {
        ms.dispose();
        ms.enableActions();
    }
}
