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
    }else if (status === i++) {
		qm.sendNext_Bottom("#face6#不是全都逃走了吗？你为什么会在这里？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#勇士……你带在身上的东西，我看到了。\r\n那个东西……跟村外的废墟有什么关系吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#那又怎样？", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#我们卡鲁帕害怕废墟。\r\n因为会听到轰隆隆……咣当当的奇怪声音。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#怪声越来越严重，但我们卡鲁帕能做的事情……\r\n就是虔诚地举行祭典。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#谁也不想去弄清楚废墟中到底发生了什么事。\r\n因，因为害怕。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#呃啊……光是想想，就浑身发抖。\r\n但，但是总不能一直这样下去。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#必须有人……站出来，解决这件事。\r\n但是我太害怕了……勇士，你看上去好像很强……", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#所以，你到底想说什么？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#啊，我……我想说的是……\r\n那个……嗯……要是你不嫌弃我是个笨蛋，又很胆小……", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face1#勇士，请你带我去一起去进行调查！", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#哦，你又能帮上什么忙呢？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#那，那个……我也能帮上忙。虽然我不擅长战斗……\r\n但是对村子周围的地形很熟悉。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#还有……我认识一个长得有点奇怪，但很聪明的朋友……", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#那个人……叫高尔根。他是个怪人，一直在村外观察废墟。\r\n他的爱好是收集各种奇怪的东西。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0#去找那个家伙，说不定能知道一些有用的东西。\r\n嗯……我可以把你介绍给高尔根。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face0##b（虽然不喜欢跟人同行，但还是跟过去看看吧。\r\n说不定可以获得什么情报。）#k", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face6#我最讨厌跟人在一起。调查结束之后，不许再缠着我。", 1013358);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#啊，你的意思是……愿意带我一起去，是吗？\r\n谢谢你，勇士。我会尽量不给你添麻烦的。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#face2#好的，我马上把你带到高尔根那里去。\r\n请跟我来，嘿嘿。向着高尔根家，出发～！", 1013350);
	} else if (status === i++) {
		qm.setPartner(1,1013350,80002700,0);
		qm.forceStartQuest();//开始任务
		qm.forceCompleteQuest();//完成任务
		qm.forceStartQuest(35913);//开始任务
		qm.OnStartNavigation(100051030,1,"",35913);//开始导航
		//qm.gainItem(4036526, 10);//这掉落物要加到数据库里,不然怪不会掉 ,我这里直接给了.
		qm.dispose();
		//qm.warp(100051020, 0);//剧情直接跳过,不写了910090307
		
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
    } 
	//下面是另一个任务,我写错了
	
	else if (status === i++) {
		qm.sendNext_Bottom("1111111111111", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("1111111111111", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("1111111111111", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("1111111111111", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("1111111111111", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("1111111111111", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("1111111111111", 1013350);
	} else if (status === i++) {
		qm.gainItem(4036526, -10);//移除任务物品
		qm.gainExp(2500);//得到奖励经验
		//qm.forceCompleteQuest();//完成任务
        qm.dispose();//结束对话
		//qm.warp(910090306, 0);
    } else {
        qm.dispose();
    }
}
