/* Dawnveil
[Root Abyss] An Urgent Summons
Neinheart
Made by Daenerys, jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Bottom("欢迎↗来→到↘蘑菇↗城→，陌生人↘\r\n谢谢你接受了我的邀请，来到这么远的地方。呵呵，当然，所有人只要一看到我美丽的女儿碧欧蕾塔的肖像画，就会无法控制自己的脚步。那是一种本能！");
	} else if (status === i++) {
		qm.sendNextS_Bottom("…当然，她本人的冲击力要比照片更强。");
	} else if (status === i++) {
		qm.sendNext_Bottom("是的，碧欧蕾塔拥有的魔性的魅力是不分男女的。我可以理解你所受到的冲击。你一定觉得很遗憾，无法成为碧欧雷塔的#r新郎#k！");
	} else if (status === i++) {
		qm.sendNextS_Bottom("公主的………新郎？完全不感兴趣（郑重其事）。");
	} else if (status === i++) {
		qm.sendNext_Bottom("你也看到了，这里的宴会场正在举行大会。大会的名字叫做#r博碧欧雷塔大会#k。很遗憾，从来没人见过我女儿碧欧蕾塔笑过。我这个做父亲的心情能好受吗？也许是为了不让其他人因为自己的美貌而患上相思病，所以碧欧蕾塔一直在忍着不笑……");
	} else if (status === i++) {
		qm.askAcceptDecline_Bottom("所以我下了决心，我要让能博公主一笑的人成为碧欧蕾塔的新郎，并把王位让给他。但是很遗憾，这个大会只有蘑菇才能参加。不过我可以破例给你一个和公主对话的机会！好了，你快去和公主谈谈吧。");
	} else if (status === i++) {
		qm.sendNext_Bottom("但是，注意别被公主的美貌给迷住。当然，那个不是自己可以控制的。");
	} else if (status === i++) {
		// 收尾
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceStartQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext_Bottom("你是收到了父王的邀请信之后来的？你是看到了附带的肖像画之才过来的吗？一定是这样的，我知道。这全都是我的错。啊，都怪我的脸都怪我长得太美了。请你原谅我！");
	} else if (status === i++) {
		qm.sendNext_Bottom("我的心情也无法平静，这让我感觉负担很重。但是这又能怪谁呢？一切全都是美丽惹的祸……父王只是为了博我一笑，宁愿舍弃王位，我真的感觉很对不起他。");
	} else if (status === i++) {
		// 收尾
		qm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		qm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		qm.forceCompleteQuest();
		qm.gainExp(31215);
		qm.dispose();
	} else {
		qm.dispose();
	}
}
