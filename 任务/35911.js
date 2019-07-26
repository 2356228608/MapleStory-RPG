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
		qm.sendNext_Bottom("#face2#都准备好了。现在好像可以举行仪式了。\r\n请你去告诉村长，说一切都已经准备就绪。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#小孩那边说已经准备好了。", 1013358);//1013358是古迹猎人NPC的图片 也就是你自己的意思
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#呵呵……多亏了你，准备工作比预计的更早完成。\r\n现在我要把大家叫出来，举行祭典仪式。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#地点就在村子旁边的石臼森林。\r\n我会带着村民们一起过去。你也跟着一起去吧。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（我都已经等不及了。\r\n在他们之前，先去看看那个石臼吧。）#k\r\n\r\n#r ※ 自动移动到任务地图。#k", 1013358);
	} else if (status === i++) {
		qm.forceStartQuest();//开始任务
		//qm.forceCompleteQuest();//完成任务
		//qm.OnStartNavigation(100051013,1,"",35910);//开始导航
		//qm.gainItem(4036526, 10);//这掉落物要加到数据库里,不然怪不会掉 ,我这里直接给了.
		qm.dispose();
		qm.warp(100051020, 0);//剧情直接跳过,不写了910090307
		
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
		qm.sendNext_Bottom("#face0##b（走近并喝下了灵药。感觉不祥的气息变得更强了。\r\n和触碰遗物时类似的感觉，瞬间击穿了我的身体。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face3#！？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#咦，咦……这个声音是！？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#村外那个凶物发出的声音，为什么……", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face3##b（诅咒依旧未变，但身体感觉到了某种奇妙的反应。\r\n这个村子一定和遗物有着某种联系。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#呃……感觉头都要裂开了……", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#紧，紧急情况！大，大家马上躲到村里去！", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（听到怪声之后，村民们几乎全都向村子逃去。\r\n除了村长和那个唠叨鬼之外。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#真是咄咄怪事……\r\n冒险家，为什么在你身上会听到废墟中的那种怪声呢？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face6##b（没想到喝下灵药之后，竟然会出现这种效果……看来和他们搞好关系的愿望落空了。\r\n既然这样，就不必再遮遮掩掩了。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#我想先问一个问题。这个遗物……到底是什么东西？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（从腰间拿出遗物给他们看。\r\n两人好像非常害怕，脸色一下子变得煞白。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#呃……冒险家，你为什么会带着那种凶物呢？\r\n快把它拿走。我马斯卡波……看错人了。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#把不祥之物带进村子，玷污了神圣的祭典……\r\n发出恐怖的声音，让村民们陷入了恐惧。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#这是绝对不可原谅的事情。我们不想再跟你有任何牵连。\r\n马上离开这里。", 1013350);
	} 
	
	else if (status === i++) {
		//qm.gainItem(4036526, -10);//移除任务物品
		qm.gainExp(500);//得到奖励经验
		qm.forceCompleteQuest();//完成任务
        qm.dispose();//结束对话
		qm.warp(100051020, 0);
    } else {
        qm.dispose();
    }
}
