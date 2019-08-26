/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：自动泡点 可在BMS后台修改
 *  @Author 娜娜 
 */

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += em.AutoPaodianItemtime();
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
    allPlayers = allPlayers.iterator();
    while (allPlayers.hasNext()) {//循环每一个玩家
        var player = allPlayers.next();
			if (player.getMapId() != em.AutoPaodianmapVIP() &&player.haveItem(em.AutoPaodianItem()) && em.AutoPaodianItemOn()) {
				var mode = em.AutoPaodianItemMode();
				var quantity = em.AutoPaodianItemQuantity();
				player.modifyCSPoints(mode, quantity);
				if (mode == 1) {
					player.dropMessage(-1, "[VIP神秘盒子全图泡点]：获得 [ " + quantity + " ] 点卷");
				}else if (mode == 2) {
					player.dropMessage(-1, "[VIP神秘盒子全图泡点]：获得 [ " + quantity + " ] 抵用卷");

				}else if (mode == 3) {
					player.dropMessage(-1, "[VIP神秘盒子全图泡点]：获得 [ " + quantity + " ] 消费币");
				} else {
					player.dropMessage(-1, "[VIP神秘盒子全图泡点]：获得 [ " + quantity + " ] 经验");
			}
		}
    }
}