/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：制作装备
 *  @Author 娜娜 
 */


var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
        1242080, //革命锁链剑
        1212079,//革命双头杖
		1222074,//革命灵魂手铳
		1472226,//革命拳甲
		1072853,//革命鞋子
		1552074,//革命扇
		1052647,//革命战斗服
		1452216,//革命弓
		1102612,//革命披风
		1232074,//革命恶魔剑
		1542074,//革命刀
		1312165,//革命战斧
		1372188,//革命短杖
		1322215,//革命铁瓜锤
		1412147,//革命双手战斧
		1462204,//革命暗黑弩
		1432178,//革命之矛
		1132242,//革命腰带
		1332238,//革命切割者
		1522105,//革命双翼弩
		1402210,//革命双手剑
		1492080,//革命枪
		1382101,//革命长杖
		1382222,//革命圣杖
		1462093,//革命弩
		1422152,//革命巨锤
		1442234,//革命长戟
		1482179,//革命冲拳
		1532109,//革命手炮
		1492190,//革命红杰克
		1003946,//革命帽子
		1302289,//革命剑
		1362101,//革命手杖
		1082540,//革命手套
		1252046//革命猫梳魔法棒
        );
var needItemList = Array(
        Array(4000019, 200)
        );
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var selStr = "#d我这里可以制作140级防具，请选择想要制作的装备：#n#k\r\n";
            for (var key in weaponList) {
                var item = weaponList[key];
                selStr += "#r#L" + key + "#制作 #b#z" + item + "# #r[查看详情]\r\n";
            }
            cm.askMenu(selStr);
        } else if (status == 1) {
            weaponId = selection;
            var text = "- #e#d#z" + weaponList[weaponId] + "#需要的材料：#n#k\r\n\r\n#b";
            for (var key in needItemList) {
                var itemName = cm.getItemName(needItemList[key][0]);
                text += itemName;
                for (var i = 0; i <= 25 - itemName.getBytes().length; i++)
                {
                    text += " ";
                }
                var currentItemQuantity = cm.getItemQuantity(needItemList[key][0]);
                var color = "#g";
                if (currentItemQuantity < needItemList[key][1])
                    color = "#r";
                text += color + currentItemQuantity + " / " + needItemList[key][1] + " 个#b\r\n";
            }
            text += "#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k";
            cm.askYesNo(text);
        } else if (status == 2) {
            flag = true;
            for (var key in needItemList) {
                var itemId = needItemList[key][0];
                var itemQuantity = needItemList[key][1];
                if (!cm.haveItem(itemId, itemQuantity))
                {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                if (cm.getSpace(1) < 1) {
                    cm.sendOk("装备栏空间不足，请整理后重新制作！");
                    cm.dispose();
                    return;
                }
                for (var key in needItemList) {
                    var itemId = needItemList[key][0];
                    var itemQuantity = needItemList[key][1];
                    cm.gainItem(itemId, -itemQuantity);
                }
                cm.gainItem(weaponList[weaponId], 1);
                cm.sendOk("恭喜您合成#z" + weaponList[weaponId] + "#一把.");
                cm.worldSpouseMessage(0x20, "[任务公告] : 恭喜 " + cm.getChar().getName() + " 制作了一件 <" + cm.getItemName(weaponList[weaponId]) + ">.");
                cm.dispose();
            } else {
                cm.sendOk("材料不足，无法完成制作！");
                cm.dispose();
            }
        }
    }
}