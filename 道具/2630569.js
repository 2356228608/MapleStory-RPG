/*  This is mada by 雷霆宝宝    
 *  This source is made by BMS Team
 *  脚本功能：埃苏莱布斯防装交换箱子
 *  @Author 雷霆宝宝 
 */

 
/*
 便捷功能
 */
 var clothesList = [
 	1052882, 
	1052887,
	1052888, 
	1052889, 
	1052890
];
 var shoulderpadList = [
	1152177, 
	1152176,
	1152179, 
	1152178, 
	1152174
];

var hatList = [
 	1004422,
	1004423,
	1004424, 
	1004425,
	1004426
];

var glovesList = [
 	1082636,
	1082637,
	1082638, 
	1082639,
	1082640
];

var cloakList = [
 	1102775, 
	1102794, 
	1102795, 
	1102796, 
	1102797
];

var shoeList = [
 	1073030, 
	1073032, 
	1073033,
	1073034, 
	1073035
];

var allList = [
 	1052882, 
	1052887,
	1052888, 
	1052889, 
	1052890,
	
	1152177, 
	1152176,
	1152179, 
	1152178, 
	1152174,
	
 	1004422,
	1004423,
	1004424, 
	1004425,
	1004426,
	
 	1082636,
	1082637,
	1082638, 
	1082639,
	1082640,
	
 	1102775, 
	1102794, 
	1102795, 
	1102796, 
	1102797,

 	1073030, 
	1073032, 
	1073033,
	1073034, 
	1073035
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
            text = "#e 埃苏莱布斯防装交换箱子 #n\r\n\r\n#b";
            text += "#L0#交换包裹内埃苏莱布斯防装#l\r\n";
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
        text ="#e- 请选择要交换的防装 -#n\r\n\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
			if(allList.indexOf(item.getItemId()) > -1 ){
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

		weaponArray = allList;

		for (var i = 0; i < weaponArray.length; i++) {
				text += "#L" + i + "##v" + weaponArray[i] + "##z" + weaponArray[i] + "##l\r\n";
		}
		im.askMenu("请选择你要的：\r\n#r" + text);
    }
	else if (status == 4) {
        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
		cm.gainItem(weaponArray[selection], 1);
		cm.gainItem(2630569, -1);
        cm.sendOk(head + "交换成功，祝你游戏愉快~");
        cm.safeDispose();
    }
}
