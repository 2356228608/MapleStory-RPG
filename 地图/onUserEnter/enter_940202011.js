/*
 * 地图：阿叙隆：阿叙隆入口(940202011)
 * @author 
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.addPopupSay(1540108, 2000, "请通过考验,不要触碰哨兵.");
		ms.dispose();
	} else {
        ms.dispose();
    }
}

