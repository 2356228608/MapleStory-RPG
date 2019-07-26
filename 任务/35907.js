/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：任务35905  42 E0 3E 36
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
		qm.sendNext_Bottom("#face0#我也没办法把村民们全都叫出来。\r\n你最好先去跟那边的村长谈谈。", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#如果你能先跟他熟悉起来，其他的朋友们也很快就会向你敞开心扉。\r\n好了，快去见见村长吧。", 1013353);
	} else if (status === i++) {
		qm.forceStartQuest();
		//qm.forceCompleteQuest();
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
		qm.sendNext_Bottom("#face0#呵呵……我说村里怎么乱糟糟的。原来是你把外地人带来了，马斯卡波。\r\n那个人到底为什么要到我们村来呢？", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（马斯卡波说明了之前发生的事。\r\n说是为了报答我的救命之恩，想邀请我参加村里的节日。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#让人感觉阴森森的外地人，嗯……\r\n但是不能光凭外表来判断一个人。", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#按马斯卡波所说，你应该不是个坏人……\r\n好吧，那就这样吧。我想邀请你一起参加我们的节日。", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#在此正式向你表示欢迎，外地人。这里是卡鲁帕村。\r\n我是这里的村长戈达。你是哪里人？", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（说是冒险岛世界的冒险家，正在各地旅行。\r\n还好村长对我好像不是很警惕。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#呵呵……我会记住的，冒险家。", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#什么时候才能看到那种灵药呢？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#节日还在准备中。距离举行仪式还有一段时间。\r\n如果等得无聊，你也可以帮我们一起准备，嗯哼。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face6##b（等放松下来之后，说不定会说到一些重要的事。\r\n啧……先装作帮助村里人，慢慢挖掘所需的情报吧。）#k", 1013358);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.gainExp(500);
        qm.dispose();
		//qm.warp(910090306, 0);
    } else {
        qm.dispose();
    }
}
