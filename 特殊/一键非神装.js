/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：一键神装
 *  @Author 娜娜 
 */

var status = 0;
var select = 0;
var 套装="";

//装备等级
//var grade = Array(1082695,1004809);

var 战士套装 = Array(1082695,1073158,1004808,1152196,1053063,1102940);
var 法师套装 = Array(1053064,1073159,1004809,1152197,1082696,1102941,1282017);
var 弓箭手套装 = Array(1053065,1073160,1004810,1152198,1082697,1102942);
var 飞侠套装 = Array(1053066,1073161,1004811,1152199,1082698,1102943);
var 海盗套装 = Array(1053067,1073162,1004812,1152200,1082699,1102944);


var grade = Array(1082695,1004809,1004808,1004811,1442274,1004810,1082697,1004812,1082696,1332279,1082699,1082698,1102944,1342104,1232113,1362140,1242122,1242121,1302343,1053065,1053064,1053067,1053066,1582023,1252098,1152200,1492235,1152198,1152199,1152196,1552119,1152197,1102943,1102942,1102941,1053063,1102940,1302219,1402259,1412181,1452257,1312203,1362063,1432218,1222113,1322255,1073159,1073158,1522143,1532150,1073161,1073160,1142505,1073162,1472265,1382265,1322156,1262039,1422189,1462243,1482221,1542117,1372228,1212120
);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            //str = selection;
			var sel = "亲爱的#r#h ##k您好，我这里可以为您领取一套神秘套装(非神装)哦#k\r\n";
			sel += "#b#L1#我要领取<<战士神秘套装(非神装)>>(需要100000点卷)#l\r\n\r\n";
			sel += "#b#L2#我要领取<<法师神秘套装(非神装)>>(需要100000点卷)#l\r\n\r\n";
			sel += "#b#L3#我要领取<<弓箭手神秘套装(非神装)>>(需要100000点卷)#l\r\n\r\n";
			sel += "#b#L4#我要领取<<飞侠神秘套装(非神装)>>(需要100000点卷)#l\r\n\r\n";
			sel += "#b#L5#我要领取<<海盗神秘套装(非神装)>>(需要100000点卷)#l\r\n\r\n";
			sel += "#b#L6#我要领取<<神秘武器(非神装)>>(需要100000点卷)#l\r\n\r\n";
			cm.askMenu(sel);
            break;
        case 1:
            switch (selection) {
                case 1:
					var selStr="你将获得一套战士套装<神级>如下:\r\n";
					for (var i = 0; i < 战士套装.length; i++) {
						selStr +="#v"+战士套装[i]+"##z"+战士套装[i]+"#         x1个\r\n";
					}
					套装=战士套装;
					select=1;
					cm.askMenu(selStr);
					break;
				case 2:
					var selStr="你将获得一套法师套装<神级>如下:\r\n";
					for (var i = 0; i < 法师套装.length; i++) {
						selStr +="#v"+法师套装[i]+"##z"+法师套装[i]+"#         x1个\r\n";
					}
					套装=法师套装;
					select=1;
					cm.askMenu(selStr);
					break;
				case 3:
					var selStr="你将获得一套弓箭手套装<神级>如下:\r\n";
					for (var i = 0; i < 弓箭手套装.length; i++) {
						selStr +="#v"+弓箭手套装[i]+"##z"+弓箭手套装[i]+"#         x1个\r\n";
					}
					套装=弓箭手套装;
					select=1;
					cm.askMenu(selStr);
					break;
				case 4:
					var selStr="你将获得一飞侠套装<神级>如下:\r\n";
					for (var i = 0; i < 飞侠套装.length; i++) {
						selStr +="#v"+飞侠套装[i]+"##z"+飞侠套装[i]+"#         x1个\r\n";
					}
					套装=飞侠套装;
					select=1;
					cm.askMenu(selStr);
					break;
				case 5:
					var selStr="你将获得一海盗套装<神级>如下:\r\n";
					for (var i = 0; i < 海盗套装.length; i++) {
						selStr +="#v"+海盗套装[i]+"##z"+海盗套装[i]+"#         x1个\r\n";
					}
					套装=海盗套装;
					select=1;
					cm.askMenu(selStr);
					break;
				case 6:
					cm.dispose();
					cm.openNpc(9001000, "武器非神装")
					break;
                default:
                    cm.sendOk("信息 "+selection);
            }
            break;
        case 2:
            switch (select) {
                case 1:
					for (var i = 0; i < 套装.length; i++) {
						cm.gainItem(套装[i], 1);
					}
					
					cm.gainNX(1, -10000);
					cm.dispose();
					cm.sendOk("成功领取神装。");
					break;
                default:
					cm.dispose();
                    cm.sendOk("信息 "+select);
            }
			
            default:
                cm.dispose();
        
    }
}





