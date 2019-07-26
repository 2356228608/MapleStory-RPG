/*
 * 奖励结算
 * @author 娜娜
 */
var status = -1;
var mapFactory = cm.getChannelServer().getMapFactory();
var sizi = mapFactory.getMap(mapid).getCharactersSize();//获取当前地图人数

function action(mode, type, selection) {
    status++;
    switch (cm.getMapId()) {
		
        case 993010000: // 01
			cm.gainNX(1,10000*sizi);
            cm.dispose();
            break;
        default:
			//cm.gainNX(1,10000);
			//cm.gainItem(4310143, 20);
			//cm.warp(910000000,0);
            //cm.dispose();
			break;
    }
	cm.gainItem(2430051, 1);//玩具
	cm.gainItem(2430069, 1);//玩具
	//cm.warp(910000000,0);
    cm.dispose();
}