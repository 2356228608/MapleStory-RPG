/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：修改角色属性
 *  @Author 娜娜 
 */
var status = 0;

function start() {
    status = -1;
	val = -1;
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
        var selStr = "亲爱的#r#h ##k您好，这里可以修改角色能力属性哦. #k\r\n";
		selStr += "#b#L1#力量#l \r\n";
        selStr += "#b#L2#敏捷#l \r\n";
        selStr += "#b#L3#智力#l \r\n";
        selStr += "#b#L4#运气#l \r\n";
		selStr += "#b#L5#最大HP#l \r\n";
		selStr += "#b#L6#最大MP#l \r\n";
        cm.askMenu(selStr);
    } else if (status == 1) {
		val = selection;
        switch (val) {
            case 1://
            case 2://
            case 3://
            case 4://
			cm.askNumber(selection +"请输入你想要修改的运气值,最高32767\r\n#k", 0, 0, 32767);
                break;
			case 5://
			case 6://
                cm.askNumber(selection +"请输入你想要修改的血量值,最高500000\r\n#k", 0, 0, 500000);
                break;
        }
    }else if (status == 2) {
		cm.playerMessage(1,"注意:为保证稳定性\r\n修改过程中请勿其他NPC操作\r\n否则容易掉线或者卡住.\r\n请稍等,正在修改中...");
		cm.修改能力属性(val, selection);
		cm.dispose();
		cm.playerMessage(1,"已经成功修改为 "+ selection);
		//cm.sendOk("已经成功修改为."+ selection);
	}
}


