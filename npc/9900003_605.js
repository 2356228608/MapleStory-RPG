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
			cm.dispose();
            cm.openNpc(9310144, 1000);
        }  else {
            cm.dispose();
        }
}