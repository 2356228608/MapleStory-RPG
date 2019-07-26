/*
 * 剑豪剧情 - 15 17
 * 地图：枫叶山丘 - 陌生的山坡 (807040000)
 * 地图：枫叶山丘 - 枫叶山丘入口 (807040100)
 * @author 狐狸糊涂
 */
function enter(pi) {
    switch (pi.getMapId()) {
        case 807040000: // 陌生的山坡
            if (pi.getPlayer().getJob() == 4100) {
                if (pi.isQuestActive(57104)) {
                    pi.warp(807040100, 0);
                } else {
                    pi.playerMessage(5, "和山中幸盛进行对话吧。");
                }
            } else {
                if (pi.isQuestActive(57402)) {
                    pi.warp(807040100, 0);
                } else {
                    pi.playerMessage(5, "和直江兼续进行对话吧。");
                }
            }
            break;
        case 807040100: // 枫叶山丘入口
            if (pi.getPlayer().getJob() == 4100) {
                if (pi.isQuestFinished(57104)) {
                    pi.warp(807000000, 0);
                } else {
                    pi.playerMessage(5, "和山中幸盛进行对话吧。");
                }
            } else {
                if (pi.isQuestFinished(57402)) {
                    pi.warp(807000000, 0);
                } else {
                    pi.playerMessage(5, "和直江兼续进行对话吧。");
                }
            }
            break;
    }
}