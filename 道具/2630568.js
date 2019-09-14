/*  This is mada by 雷霆宝宝    
 *  This source is made by BMS Team
 *  脚本功能：埃苏莱布斯武器交换箱子
 *  @Author 雷霆宝宝 
 */
 
/*
 便捷功能
 */
 var weaponNoSList = [
 	1492231, 
	1472261,
	1242116, 
	1242120,
	1332274,
	1302333,
	1412177,
	1382259, 
	1422184,
	1342101,
	1432214,
	1402251,
	1212115,
	1362135, 
	1272016,
	1462239, 
	1442268, 
	1452252, 
	1592019,
	1542108,
	1522138,
	1222109,
	1262017,
	1312199, 
	1532144,
	1252093,
	1552110,
	1482216, 
	1232109,
	1372222
];
 var weaponList = [
	1322256,
	1242123,
	1492236,
	1472266,
	1242124, 
	1412182, 
	1372229,
	1302344, 
	1382266, 
	1422190, 
	1402260, 
	1342105, 
	1432219,
	1592028, 
	1272021,
	1362141, 
	1212121,
	1262040, 
	1582027,
	1312204,
	1532148,
	1222114,
	1442276,
	1462244,
	1452258,
	1522144,
	
	1482222
];
 
var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var weaponArray;
var deleteQuantity;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = "#e 埃苏莱布斯武器交换箱子 #n\r\n\r\n#b";
            text += "#L0#交换包裹内埃苏莱布斯武器#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
            cm.sendOk(text);
        } else {
			deleteItemBySlot(selection);
        }
    }
}

function deleteItemBySlot(selection) {
	if (status == 1) {
        inventoryType = 1;
        itemList = cm.getInventory(inventoryType).list().iterator();
        text ="#e- 请选择要交换的武器 -#n\r\n\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
			if(weaponNoSList.indexOf(item.getItemId()) > -1 || weaponList.indexOf(item.getItemId()) > -1){
				text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
				if (indexof > 1 && indexof % 5 == 0) {
					text += "\r\n";
				}
				indexof++;
			}
        }
        cm.askMenu(text);
    } else if (status == 2) {
        var item = cm.getInventory(inventoryType).getItem(selection);
        deleteSlot = selection;
        deleteQuantity = item.getQuantity();
        text ="#e确定要交换#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？";
        cm.sendNextPrev(text);
    } else if (status == 3) {
		text = "";
		var item = cm.getInventory(inventoryType).getItem(deleteSlot);
		if(weaponNoSList.indexOf(item.getItemId()) > -1){
			weaponArray = weaponNoSList;
		}else{
			weaponArray = weaponList;
		}
		for (var i = 0; i < weaponArray.length; i++) {
				text += "#L" + i + "##v" + weaponArray[i] + "##z" + weaponArray[i] + "##l\r\n";
		}
		im.askMenu("请选择你要的：\r\n#r" + text);
    }
	else if (status == 4) {
        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
		cm.gainItem(weaponArray[selection], 1);
		cm.gainItem(2630568, -1);
        cm.sendOk(head + "交换成功，祝你游戏愉快~");
        cm.safeDispose();
    }
}