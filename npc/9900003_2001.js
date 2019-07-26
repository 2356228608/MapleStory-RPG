var status = -1;
var sr = null;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
		var text="";
		text+="#b#L1#获得装备制作名匠效果(需要10000点卷)#l#k\r\n";
		text+="#r#L2#获得饰品制作名匠效果(需要10000点卷)#l#k\r\n";
		text+="#r#L3#获得炼金术名匠效果(需要10000点卷)#l#k";
        cm.askMenu(text);
    } else if (status == 1) {
        switch (selection) {
			case 1:
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.sendOk("抱歉，你没足够的点卷！");
				} else {
					cm.gainNX(-10000);
					cm.teachSkill(92020000, 0x20000000, 20);
					cm.teachSkill(92030000, 0, 20);
					cm.teachSkill(92040000, 0, 20);
					cm.playerMessage(1,"装备制作名匠效果已升级完成.\n名匠效果开关控制的,好多人找不到,按B键就能看到,找仔细点");
				}
                break;
			case 2:
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					//cm.sendOk("抱歉，你没足够的点卷！");
					cm.playerMessage(1,"抱歉，你没足够的点卷！");
				} else {
					cm.gainNX(-10000);
					cm.teachSkill(92020000, 0, 20);
					cm.teachSkill(92030000, 0x20000000, 20);
					cm.teachSkill(92040000, 0, 20);
					cm.playerMessage(1,"装备制作名匠效果已升级完成.\n名匠效果开关控制的,好多人找不到,按B键就能看到,找仔细点");
				}
                break;
			case 3:
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.sendOk("抱歉，你没足够的点卷！");
				} else {
					cm.gainNX(-10000);
					cm.teachSkill(92020000, 0, 20);
					cm.teachSkill(92030000, 0, 20);
					cm.teachSkill(92040000, 0x20000000, 20);
					cm.playerMessage(1,"装备制作名匠效果已升级完成.\n名匠效果开关控制的,好多人找不到,按B键就能看到,找仔细点");
				}
                break;
		}
	  cm.dispose();
    }
}