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
		cm.sendNext("#fs10#喂……喂……", 1012110);
	} else if (status === i++) {
		cm.sendNextS("嗯？好像有人在叫我……");
	} else if (status === i++) {
		cm.sendNext("嗯……能听到我的声音吗……", 1012110);
	} else if (status === i++) {
		cm.sendNext("我是在魔法密林进行研究的巴缇博士的女儿桉。", 1012110);
	} else if (status === i++) {
		cm.sendNext("我有件事想请你帮忙…你能答应我吗？", 1012110);
	} else if (status === i++) {
		cm.askYesNo("那么…请过来找我……拜托了……\r\n#r（接受时，移动到魔法密林的桉的前面。）", 1012110);
	} else if (status === i++) {
		cm.sendNext("我在魔法密林等你。", 1012110);
	} else if (status === i++) {
		cm.warp(101000000, 4);
		cm.forceStartQuest(37151);
		cm.OnStartNavigation(101000000,1,"1012110",37151);
		cm.dispose();
	}
}
