/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图://'魔法密林 : 魔法密林'
 *  脚本功能：[艾洛丁]桉的求助
 *  @Author 娜娜 
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
        if (status <= i++) {
            cm.dispose();
        } else if (status === i++) {
			cm.askAcceptDecline("你好？我是大贸易商金利奇。我想给你一个特别的机会。冒险岛最好的度假胜地金海滩度假村即将开业，在开业之前我想给你次体验的机会。你想现在就去吗？");
		} else if (status === i++) {
			cm.sendNext("好的，我现在就把你送到金海滩度假村去。");
		} else if (status === i++) {
			cm.forceStartQuest(2950);
			cm.forceCompleteQuest(2950);
			cm.warp(120040300, 0);
			//cm.OnStartNavigation(120040300,1,"1012110",2950);
			cm.dispose();
		} else {
			cm.dispose();
		} 
}
