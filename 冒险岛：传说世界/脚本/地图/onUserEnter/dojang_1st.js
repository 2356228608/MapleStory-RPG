/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：武陵道场 第一层 初始化记录数据
 *  
 *  @Author Jackson 
 */

/* global ms, java */

function start() {
    var nowMillis = java.lang.System.currentTimeMillis();
    //ms.updateOneQuestInfo(7215, "sTime", nowMillis);
    //ms.forceSetQuestData(7214, "0");
		var mapID = ms.getMapId();
		var stage = parseInt(mapID % 10000 / 100);
		var mode = 2;
        var mobID = getMobID(mode, stage);
		ms.spawnMob(mobID, 286, 7);
		ms.dispose();
}

function getMobID(mode, stage) {
    var baseMobID = 9305100;
    var mobID = 9305100 + 100 * 2 + stage * Math.pow(2, 2 - mode) - 1;
    return mobID;
}