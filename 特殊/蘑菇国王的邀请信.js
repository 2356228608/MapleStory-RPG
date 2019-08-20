/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:
 *  脚本功能：蘑菇国王的邀请信
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
			cm.askAcceptDecline("从蘑菇国王那里收到了邀请信。看看到底是什么内容吧。\r\n");
		} else if (status === i++) {
			cm.sendNext("蘑菇国王说这段时间禁止外部人员出入的蘑菇王国又重新开放了。王国中有一件非常重要的事情，让我直接去确认一下。在邀请信中还附带了一张碧欧蕾塔的照片，让人怀疑这不是邀请信，而是决斗申请。不过既然受到了邀请，就应该去看看，不是吗？\r\n\r\n#r小贴士. 双击消耗栏中的蘑菇国王的邀请信道具，可以移动到蘑菇城入口处。");
		} else if (status === i++) {
			cm.forceStartQuest(30050);
			cm.gainItem(2432655, 1);
			//cm.warp(120040300, 0);
			//cm.OnStartNavigation(120040300,1,"1012110",2950);
			cm.dispose();
		} else {
			cm.dispose();
		} 
}
