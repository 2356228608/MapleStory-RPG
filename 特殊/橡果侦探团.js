/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:
 *  脚本功能：橡果侦探团
 *  @Author 娜娜 
 */
var status = -1;
var selectionLog = new Array(); // 记录每一轮的选择

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	selectionLog[status] = selection;

    var i = -1;
        if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendNextNoESC("该内容只有分辨率达到1024*768以上时才能正常进行.", 9400031);
	} else if (status === i++) {
		cm.sendNext_Bottom("在背包里发现了一本旧笔记本，我什么时候得到了这种东西？", 9400031);
	} else if (status === i++) {
		cm.sendNext_Bottom("我有点记不清了，但是似乎又能想起来什么。", 9400031);
	} else if (status === i++) {
		cm.askMenu_Bottom("那就让我来看一下吧？\r\n#b#L0#打开笔记本。#l\r\n#L1#没必要看。#l", 9400031);
	} else if (status == i++) {
		if (selectionLog[4] == 0) {
			cm.sendNext_Bottom("嗯……只有几个字……读不懂啊。", 9400031);
		} else {
			cm.dispose();
		}
	} else if (status === i++) {
		cm.sendNext_Bottom("最后这一页上写的是什么？似乎写得很急啊。", 9400031);
	} else if (status === i++) {
		cm.sendNext_Bottom("[一定要阻止APORD！]", 9400031);
	} else if (status === i++) {
		cm.sendNext_Bottom("APORD是什么？这里面肯定有什么重要的信息，我得再调查一下。", 9400031);
		cm.forceStartQuest(59700);
		cm.forceCompleteQuest(59700);
		cm.fieldEffect_KinesisEXP(Math.pow(cm.getPlayer().getLevel(), cm.getPlayer().getLevel() / 25));
		cm.updateInfoQuest(59761, "1=1");
		cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess");
	} else if (status == i++) {
		cm.dispose();
	}else {
			cm.dispose();
		} 
}
