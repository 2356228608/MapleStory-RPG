/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：//帮村民干活2
 *  @Author 娜娜 
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
		qm.sendNext_Bottom("#face0#我需要#b10个#k可以从#r#o2300201##k身上获得的#b#i4036525# #t4036525##k。\r\n胖胖花就生活在#r#m100051013##k。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#那就拜托你了，勇士。\r\n啊，胖胖花的刺很尖，小心别被戳到。明白了吗？请往左边走哦.", 1013353);
	} else if (status === i++) {
		qm.forceStartQuest();
		//qm.forceCompleteQuest();
		qm.OnStartNavigation(100051013,1,"",35909);
		qm.gainItem(4036525, 10);
		qm.dispose();
		//qm.warp(100051000, 0);
		//qm.openNpc(1013358,"转职任务35903");
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
		//qm.sendNext_Bottom("这么快就完成任务了啊,下面给你的忠告:\r\n由于任务困难系数过大,此职业主线任务到此结束.", 1013350);
		qm.sendNext_Bottom("#face0#咦，胖胖花茎干已经搜集到了吗？\r\n这么快……勇士，你真是太强了。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#胖胖花茎干非常硬、非常粗糙，\r\n但是用代代相传的秘方，就能做成制作灵药的材料。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#在节日的最后，会祈祷村子平安，然后把灵药分给大家喝。\r\n你也想尝尝看吗？虽然味道非常苦。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#好了……我来告诉你接下来需要帮忙的事。\r\n准备好了之后，请重新和我对话，嘿嘿。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（把灵药分给大家喝……）#k", 1013350);
	} else if (status === i++) {
		qm.gainItem(4036525, -10);
		qm.gainExp(1500);
		qm.forceCompleteQuest();
        qm.dispose();
		//qm.warp(910090306, 0);
    } else {
        qm.dispose();
    }
}
