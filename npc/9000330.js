var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
        cm.dispose();
    } else if (status == 0) {
        var selStr; 
		selStr= "            #d#e欢迎来到" + cm.getServerName() + "时装店,#n\r\n" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff ;
		
		selStr+="       #L11##r" + tz20 + "新加时装" + tz20 + "#l#L1#" + tz20 + "稀有武器" + tz20 + "#l #L2#" + tz20 + "稀有披风" + tz20 + "#l\r\n";
		
		selStr+="       #L3##b" + tz20 + "稀有帽子" + tz20 + "#l#L4#" + tz20 + "稀有衣服" + tz20 + "#l #L5#" + tz20 + "稀有裤子" + tz20 + "#l\r\n";
		
		selStr+="		#L6##d" + tz20 + "稀有鞋子" + tz20 + "#l#L7#" + tz20 + "稀有手套" + tz20 + "#l #L8#" + tz20 + "稀有效果" + tz20 + "#l\r\n";
		
		selStr+="		#L9##g" + tz20 + "稀有戒指" + tz20 + "#l#L10#" + tz20 + "情侣专卖" + tz20 + "#l #L13#" + tz20 + "#r骑宠专卖" + tz20 + "#l#k\r\n";
		
		selStr+="#b#L12#" + tz20 + "	 椅子专卖1号店" + tz20 + "#l    #L14#" + tz20 + "椅子专卖2号店" + tz20 + "#l#k\r\n";
		
		selStr+="	 #r#L15#" + tz20 + "椅子专卖3号店" + tz20 + "#l    #L16#" + tz20 + "椅子专卖4号店" + tz20 + "#l\r\n";
		
		selStr+="	 #r#L150#" + tz20 + "椅子专卖5号店" + tz20 + "#l    ";
		
		selStr+="#r#L160#" + tz20 + "坚韧的灵魂结晶" + tz20 + "#l\r\n";
		
		selStr+="     #r#L17#" + tz20 + "BMS特殊新加1号店" + tz20 + "#l #L18#" + tz20 + "BMS特殊新加2号店" + tz20 + "#l\r\n";
		selStr+="    #b#L19# " + tz20 + "伤害字型专卖店" + tz20 + "#l  #L20# " + tz20 + "宠物专卖"+ tz20 + "#l\r\n\r\n" ;
		
		selStr+= dxxx + "#g 本周时装推荐#v1102778##v1702581##v1050361##v1051431##v1051410##v1051411#           \r\n" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "" + eff + "";
        cm.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
			case 160:
                cm.dispose();
                cm.openNpc(9310376, "坚韧的灵魂结晶");
                break;
            case 1:
                cm.dispose();
                cm.openNpc(9310376, 1);
                break;
            case 100:
                cm.dispose();
                cm.openNpc(9310376, 110);
                break;
            case 2:
                cm.dispose();
                cm.openNpc(9310376, 2);
                break;
            case 3:
                cm.dispose();
                cm.openNpc(9310376, 4);
                break;
            case 4:
                cm.dispose();
                cm.openNpc(9310376, 5);
                break;
            case 5:
                cm.dispose();
                cm.openNpc(9310376, 6);
                break;
            case 6:
                cm.dispose();
                cm.openNpc(9310376, 3);
                break;
            case 7:
                cm.dispose();
                cm.openNpc(9310376, 7);
                break;
            case 8:
                cm.dispose();
                cm.openNpc(9310376, 8);
                break;
            case 9:
                cm.dispose();
                cm.openNpc(9310376, 9);
                break;
            case 10:
                cm.dispose();
                cm.openNpc(9310376, 10);
                break;
            case 11:
                cm.dispose();
                cm.openNpc(9310376, 11);
                break;
            case 12:
                cm.dispose();
                cm.openNpc(9310376, "椅子专卖1");
                break;
			case 13:
                cm.dispose();
                cm.openNpc(9310376, "骑宠物专卖");
                break;
			case 14:
                cm.dispose();
                cm.openNpc(9310376, "椅子专卖2");
                break;
			case 15:
                cm.dispose();
                cm.openNpc(9310376, "椅子专卖3");
                break;
			case 16:
                cm.dispose();
                cm.openNpc(9310376, "椅子专卖4");
                break;
			case 17:
                cm.dispose();
                cm.openNpc(9310376, "BMS特殊新加1号店");
                break;
			case 18:
                cm.dispose();
                cm.openNpc(9310376, "BMS特殊新加2号店");
                break;
			case 19:
                cm.dispose();
                cm.openNpc(9310376, "伤害字型专卖");
                break;
			case 20:
                cm.dispose();
                cm.openNpc(9310376, "宠物专卖");
                break;
			case 150:
                cm.dispose();
                cm.openNpc(9310376, "椅子专卖5");
                break;

        }
    }
}