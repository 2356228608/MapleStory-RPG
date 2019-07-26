/*
 * 超能力者
 * 地图：私立英才学校 - 2-1教室 (331002400)
 */
function start() {
    if (ms.isQuestActive(22726) || ms.isQuestFinished(22726)) {
        ms.setSpineObjectEffect(["classroom", "night"], [2, 1]);
        ms.setSpineObjectEffect(["class_dayObj", "night"], [2, 1]);
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#2-1教室\r\n#fs14#-私立英才学校-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        ms.dispose();
    } else {
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#2-1教室\r\n#fs14#-私立英才学校-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        ms.dispose();
    }
}
