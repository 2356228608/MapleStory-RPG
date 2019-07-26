/*
 * 超能力者
 * 地图：私立英才学校 - 1层走廊 (331002000)
 */
function start() {
    if (ms.isQuestActive(22726) || ms.isQuestFinished(22726)) {
        ms.setSpineObjectEffect(["corridor", "night"], [2, 1]);
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#一楼走廊\r\n#fs14#-私立英才学校-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        ms.dispose();
    } else {
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#一楼走廊\r\n#fs14#-私立英才学校-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        ms.dispose();
    }
}

