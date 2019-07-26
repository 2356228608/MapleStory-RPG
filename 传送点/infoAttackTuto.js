/*
 * 冒险家剧情 - 15
 * 地图：枫叶路 - 小树林 (4000013)
 */
﻿function enter(pi) {
    if (pi.getQuestStatus(32205) == 1) {
        pi.effect_OnUserEff("UI/tutorial.img/20");
        return true;
    }
}
