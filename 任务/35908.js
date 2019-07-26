/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：//帮村民干活1 35908
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
		qm.sendNext_Bottom("#face0#正如村长所说，现在还没准备好。\r\n要是有更多的人来帮忙，准备工作也许就能更快地完成，呵呵。", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#如果可以，你也能一起帮村里做事吗？\r\n那样很快就能和村民们熟悉起来。", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#哦……我就知道你一定会爽快地答应。\r\n我这就告诉你哪里需要人手。", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#请你去找一个叫布里的孩子。他正在准备制作灵药的材料。\r\n那是工作量最大的工作，一定需要其他人的帮助。", 1013353);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#啊，布里是我们之中最善良、最体贴的孩子，所以不用担心。\r\n那就拜托你了，冒险家。", 1013353);
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
		qm.sendNext_Bottom("#face0#嘿嘿，你就是救了马斯卡波的勇士吗？\r\n刚才看你们在那里聊天，我稍微偷听了一下。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#……果然就跟传闻中一样，有种阴森的感觉。\r\n但不知道为什么，我不觉得你是个坏人，嘻嘻。", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#因，因为我喜欢勇敢的人。虽然我很笨，也很胆小……", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（小孩突然低下了头，看上去非常沮丧。\r\n但好像很快就恢复了过来，露出了坚定的表情。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#啊，对了，忘了自我介绍了。我叫布里，嘿嘿。\r\n正在负责为节日做准备。", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#因为是为了祈求村子平安而举行的祭典，所以感觉压力很大。\r\n唉……希望今年那种怪声能够消失。", 1013352);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#啊，看我这记性。你是来帮我为节日做准备的吧？\r\n刚才好像扯得太远了。我马上把需要的材料告诉你。", 1013352);
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.gainExp(1000);
        qm.dispose();
		//qm.warp(910090306, 0);
    } else {
        qm.dispose();
    }
}
