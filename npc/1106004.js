/*
 * 米哈尔剧情 - 04
 * 地图：秘密地图 - 杂货店阁楼 (913070010)
 * Npc名称：阁楼的药水箱
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (mode == 0 || mode == -1 && status == 0) {
        cm.sendNextS("一定是这个箱子…");
        cm.dispose();
        return;
    }

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        if (cm.itemQuantity(4033194) || cm.itemQuantity(4033195) >= 1) {
            cm.sendOk("我最好回到楼下把药水箱子交给林伯特。");
            cm.dispose();
            return;
        }
        if (cm.isQuestActive(20031)) {
            cm.askYesNo("装满了药水，覆盖着一层灰尘的药水箱。让人怀疑还能不能出售。\r\n要把药水箱拿出来吗？");
        } else {
            cm.sendOk("你看起来并不需要我的药水！");
            cm.dispose();
        }
    } else if (status === i++) {
        cm.gainItem(4033194, 1);
        cm.gainItem(4033195, 1);
		cm.sendOk("嗯？这封信是怎么回事？是林伯特大叔寄来的信吗？看上去好像很旧的样子。\r\n“库洛姆”寄……库洛姆是谁？好像在哪里听说过。记不起来了。没写收信人……先把他交给林伯特大叔看看吧。");
	} else if (status === i++) {
        cm.dispose();
    }
}