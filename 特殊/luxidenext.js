var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.askYesNo("呵呵，好吧，你继续玩吧。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		switch (cm.getMapId()) {
                case 1:
					
					break;
		}
        cm.askYesNo("怎么？这就想出去了？还有很多有趣的事情呢？");
		
        cm.warp(863000100,0);
        cm.dispose();
    }
}