/*
 * BOSS奖励结算
 * @author 娜娜
 */
var status = -1;

function action(mode, type, selection) {
    status++;
    switch (cm.getMapId()) {
        case 800024500: // 01
            var i = -1;
			cm.gainNX(1,10000);
            cm.dispose();
			cm.openNpc(9900003, "Spring");
            break;
        case 807100000: // 02
            break;
		case 450009400://至暗魔晶-普通
			cm.gainItem(2432069, 1);//暴君防具箱
			cm.gainItem(2432069, 1);//埃苏莱布斯武器箱
			break;
		case 450013750://威尔
			cm.gainItem(2432069, 1);//暴君防具箱
			cm.gainItem(2432069, 1);//埃苏莱布斯武器箱
			cm.gainItem(2433015, 1);//威尔专用箱
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
	cm.gainNX(1,10000);
	cm.gainItem(4310143, 20);//BOOS币
	cm.warp(910000000,0);
    cm.dispose();
}