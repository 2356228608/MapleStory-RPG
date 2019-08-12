var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.dispose();
        } 
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("怎么样？很简单吧？哈哈~");
        } else if (status == 1) {
            qm.sendNextPrev("不错！学得很好应该给你礼物。这些都是在旅途中必需的，谢谢我吧！危机的时候好好使用。");
        } else if (status == 2) {
            var text="";
			text+="获得的任务道具奖励如下：\r\n";
			text+="#v1712006#  #t1712006# x1个\r\n";
			text+="10000000 exp\r\n";
			qm.sendNextPrev(text);
        } else if (status == 3) {
            qm.gainExp(10000000);
            qm.gainItem(1712006, 1);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}