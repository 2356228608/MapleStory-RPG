/*  This is mada by 雷霆宝宝    
 *  This source is made by BMS Team
 *  脚本功能：埃苏莱布斯箱子
 *  @Author 雷霆宝宝 
 */
 var status = -1;
 var weaponList = Array(
 	Array(1492231, "埃苏莱布斯枪"),
	Array(1472261, "埃苏莱布斯复仇斗拳"),
	Array(1242116, "埃苏莱布斯能量剑"),
	Array(1242120, "埃苏莱布斯能量剑"),
	Array(1322250, "埃苏莱布斯战锤"),
	Array(1332274, "埃苏莱布斯屠龙斩"),
	Array(1302333, "埃苏莱布斯军刀"),
	Array(1412177, "埃苏莱布斯大斧"),
	Array(1382259, "埃苏莱布斯长杖"),
	Array(1422184, "埃苏莱布斯大锤"),
	Array(1342101, "埃苏莱布斯之刃"),
	Array(1432214, "埃苏莱布斯穿透矛"),
	Array(1402251, "埃苏莱布斯宽大刀"),
	Array(1212115, "埃苏莱布斯双头杖"),
	Array(1362135, "埃苏莱布斯折叠手杖"),
	Array(1272016, "埃苏莱布斯锁链"),
	Array(1462239, "埃苏莱布斯弩"),
	Array(1442268, "埃苏莱布斯巨灵开山斧"),
	Array(1452252, "埃苏莱布斯弓"),
	Array(1592019, "埃苏莱布斯远古弓"),
	Array(1542108, "埃苏莱布斯武士刀"),
	Array(1522138, "埃苏莱布斯双弩枪"),
	Array(1222109, "埃苏莱布斯灵魂手铳"),
	Array(1262017, "埃苏莱布斯ESP限制器"),
	Array(1312199, "埃苏莱布斯战斧"),
	Array(1532144, "埃苏莱布斯大炮"),
	Array(1252093, "埃苏莱布斯魔法棒"),
	Array(1552110, "埃苏莱布斯扇子"),
	Array(1482216, "埃苏莱布斯拳甲"),
	Array(1232109, "埃苏莱布斯亡命剑"),
	Array(1372222, "埃苏莱布斯短杖")
 );

    function start() {
		action(1, 0, 0);
    }
	
	
	function action(mode, type, selection) {
		if (mode == 1) {
			status++;
		} else {
			if (mode == 0 && status == 0) {
				im.dispose();
				return;
			}
			status--;
		}
		if (status == 0) {
			var text = "";
			for (var i = 0; i < weaponList.length; i++) {
				text += "#L" + i + "##v" + weaponList[i][0] + "##z" + weaponList[i][0] + "##l\r\n";
			}
			im.askMenu("请选择你要的：\r\n#r" + text);
		} else if (status == 1) {
			var itemid = weaponList[selection][0];
			var itemnum = Math.floor(Math.random() * 1 + 1);
			var item = im.gainGachaponItem(itemid, itemnum, "埃苏莱布斯武器");
			cm.gainItem(2434340, -1);
			im.sendOk("恭喜您，获得了" + itemnum + "个#b#z" + itemid + "#");
			im.dispose();
		}
	}

