/*
 * 超能力者
 * 地图：大道 - 街心 (331000000)
 */
function start() {
    if (ms.isQuestActive(22726) || ms.isQuestFinished(22726)) {
        //setSpineBackEffect 04 00 63 69 74 79 02 00 00 00 05 00 6E 69 67 68 74 01 00
        //setSpineObjectEffect 08 00 73 69 6E 6B 48 6F 6C 65 01 00 00 00 00 00 00 00 00 00 00 00
        //setSpineObjectEffect 04 00 63 69 74 79 02 00 00 00 05 00 6E 69 67 68 74 01 00
        //setSpineObjectEffect 03 00 63 61 72 02 00 00 00 09 00 64 61 79 32 6E 69 67 68 74 00 00
        //setSpineObjectEffect 03 00 63 61 72 03 00 00 00 05 00 6E 69 67 68 74 01
        //setSpineObjectEffect 03 00 63 61 72 06 00 00 00 00
        //setSpineObjectEffect 07 00 65 61 73 74 53 75 62 02 00 00 00 05 00 6E 69 67 68 74 01 00
        //ms.setSpineBackEffect(["city", "night"], [2, 1]);
        ms.setSpineObjectEffect(["sinkHole"], [1, 0, 0]);
        ms.setSpineObjectEffect(["city", "night"], [2, 1]);
        ms.setSpineObjectEffect(["car", "day2night"], [2, 0]);
        ms.setSpineObjectEffect(["car", "night"], [3, 1]);
        ms.setSpineObjectEffect(["car"], [6, 1]);
        ms.setSpineObjectEffect(["eastSub", "night"], [2, 1]);
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#大道 - 街心\r\n#fs14#-晚上-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        if (ms.isQuestFinished(22728)) {
            ms.npc_ChangeController(1531010, 1170, 177, 1);
            ms.npc_SetSpecialAction(1531010, "summon");
        }
        if (ms.isQuestActive(22729)) {
            ms.setPartner(1, 1531003, 80001789, 0);
        }
        ms.dispose();
    } else {
        ms.effect_Text("#fnNanum Gothic ExtraBold##fs26#大道 - 街心\r\n#fs14#-白天-", 100, 2500, 4, 0, 0, 1, 4, 0, 0, 0);
        ms.dispose();
    }
}