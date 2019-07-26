/*
 * 龙神剧情 - 25
 * 地图：隐藏地图 - 茂密的森林 (900020100)
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0)
        status--;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        //if (cm.getPlayer().getMapId() == 900020100) {
        //    cm.dispose();
		//	cm.sendOk("#b(请靠近一点再跟我说话。)"); // TODO make it gms like
       // } else {
            if (cm.itemQuantity(4032449) == 0) {
                cm.gainItem(4032449, 1);
				cm.gainItem(1372005, 1);
            }
            cm.removeNpc(1013200);
            cm.dispose();
			cm.sendOk("#b(已经拿到小猪了吧,快带回农场吧。)");
       // }
    }
}