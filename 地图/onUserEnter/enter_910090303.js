/*
 * 古迹猎人剧情1
 * 地图：//'勇士部落 : 废弃研究室' (910090300)
 * Npc名称：
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
			ms.effect_OnUserEff("UI/tutorial.img/4");//0x357 0x1D 提示动画
			ms.dispose();
        } else {
            ms.dispose();
        }
}