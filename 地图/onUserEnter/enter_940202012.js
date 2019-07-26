/*
 * 地图：荒蛮终点站：垃圾场尽头(940202012)
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
		ms.updateInfoQuest(34800, "back=1;weapon=1");
		ms.updateInfoQuest(34800, "back=1;weapon=1;out=1");
		ms.updateInfoQuest(34800, "back=1;weapon=1;out=1;012=1");
        ms.dispose();
    }  else {
        ms.dispose();
    }
}

