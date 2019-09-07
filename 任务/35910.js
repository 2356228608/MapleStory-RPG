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
		//qm.sendNext_Bottom("#face2#勇士。主线任务没有了,体验去官方玩吧...", 1013350);
		qm.sendNext_Bottom("#face0#我需要#b10个#k从#r#o2300202##k身上可以获得的#b#i4036526# #t4036526##k。\r\n毒毒花生活在#r#m100051013##k。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#那就拜托你了，勇士。\r\n啊，毒毒花含有剧毒，一定要小心。明白了吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#我去,你这糟老头子坏得很,叫我去找毒毒花的东西,我信你个鬼!!!", 1013350);
	} else if (status === i++) {
		qm.forceStartQuest();//开始任务
		//qm.forceCompleteQuest();//完成任务
		qm.OnStartNavigation(100051013,1,"",35910);//开始导航
		qm.gainItem(4036526, 10);//这掉落物要加到数据库里,不然怪不会掉 ,我这里直接给了.
		qm.dispose();
		//qm.warp(100051000, 0);
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
		qm.sendNext_Bottom("#face2#嘻嘻，毒毒花叶子搜集到啦。那我就收下了。\r\n毒毒花叶子也可以用秘方做成制作灵药的材料。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（这些材料好像没什么特别的嘛。\r\n用这些东西制作传说中的灵药？到底是什么秘方呢？）#k", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#啊，在村子旁边有个用石头做成的石臼。\r\n那是历代村长代代相传的宝物。只要用它把材料捣碎，就能变成灵药。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#现在节日的准备全部完成了。\r\n我要最后再确认一下是否有遗漏。请稍等一下。", 1013350);
	}else if (status === i++) {
		qm.gainItem(4036526, -10);//移除任务物品
		qm.gainExp(2500);//得到奖励经验
		qm.forceCompleteQuest();//完成任务
        qm.dispose();//结束对话
		//qm.warp(910090306, 0);
    } else {
        qm.dispose();
    }
}
