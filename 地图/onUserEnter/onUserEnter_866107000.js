/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
ms.npc_ChangeController(9390463, "oid=114742", 231, 60, 1);
ms.sendNextPrevNoESC("像刚才一样挥舞着树枝来消灭野狼吧喵。",9390300); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("还有，你要时刻注意不要让自己体力耗尽啊。\r\n画面下方的#b血量#k是象征着生命的#b体力#k。\r\n#i03800626#\r\n最后，如果血量不足，就来找我啊！我会像这次一样#b帮你恢复啦#k！",9390300); // [类型] 普通对话
} else if (status === i++) {
ms.forceStartQuest(59005, "");
ms.forceStartQuest(59005, "001");
ms.updateInfoQuest(59005, "mob=1");
ms.forceStartQuest(59005, "002");
ms.updateInfoQuest(59005, "mob=2");
ms.forceStartQuest(59005, "003");
ms.updateInfoQuest(59005, "mob=3");
ms.forceStartQuest(59005, "004");
ms.updateInfoQuest(59005, "mob=4");
ms.forceStartQuest(59005, "005");
ms.updateInfoQuest(59005, "mob=5");
ms.sendNextPrevNoESC("喵!我好感动啊喵!真没想到你做到了喵",9390463); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextSNoESC("呃!!!不过,你这是不分青红皂白,就让我去对付野狼是吗?"); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("喵!我再说一次,我叫阿尔喵,冒险岛动物英雄团的……",9390463); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextSNoESC( "别转移话题,你个臭猫!!!"); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("#b#h0##k你住在这旁边的大树村？",9390463); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextSNoESC("嗯,就住在大树村罗斯娜奶奶家。"); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("我知道了喵。那你回去等着吧。\r\n#b我会和同伴们一起去找你的喵#k。",9390463); // [类型] 接受/拒绝
} else if (status === i++) {
ms.sendNextSNoESC("好的。我会准备好吃的鱼，你快点来。猫咪。"); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("我不是猫咪，我叫#b阿尔#k！！还有，我可是只吃素食的猫。鱼还是给#b波波#k那家伙吃吧。",9390463); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextSNoESC("#b波波#k？"); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("喵喵！！！#b波波#k也是我们冒险岛动物英雄团的一员。波波很强大的！！！",9390463); // [类型] 普通对话
} else if (status === i++) {
ms.forceStartQuest(11620, "0");
ms.updateInfoQuest(15710, "lasttime=19/09/24/01/02");
ms.updateInfoQuest(25980, "normal=#");
ms.updateInfoQuest(25980, "normal=#;hard=#");
ms.updateInfoQuest(26900, "sf=0;mt=1;al=1;id=0");
ms.updateInfoQuest(26902, "");
ms.updateInfoQuest(26903, "");
ms.updateInfoQuest(26904, "");
ms.updateInfoQuest(26905, "");
ms.npc_ChangeController(9390463, "oid=114742", 231, 60, 1);
ms.updateInfoQuest(16119, "");
ms.updateInfoQuest(16150, "");
ms.updateInfoQuest(27039, "");
ms.updateInfoQuest(14756, "d=19/09/24/01/03");
ms.updateInfoQuest(14755, "");
ms.updateInfoQuest(52998, "");
ms.updateInfoQuest(65132, "");
ms.forceCompleteQuest(62417);
ms.updateInfoQuest(18189, "eTime=12/12/31/00/00");
ms.updateInfoQuest(18578, "miss=0;rewardDay=00/01/01;fixedDay=19/09/24/00/00");
ms.forceStartQuest(9571, "0");
ms.forceStartQuest(31190, "0");
ms.forceStartQuest(42102, "0");
ms.forceStartQuest(7621, "");
ms.updateInfoQuest(26015, "");
ms.updateInfoQuest(26011, "");
ms.forceStartQuest(59006, "");
ms.updateInfoQuest(59006, "ap=1");
ms.forceCompleteQuest(59006);
ms.forceStartQuest(11620, "0");
ms.updateInfoQuest(15710, "lasttime=19/09/24/01/03");
ms.forceStartQuest(59007, "");
ms.forceStartQuest(11620, "0");
ms.forceCompleteQuest(59007);
ms.forceStartQuest(59008, "");
ms.forceCompleteQuest(59005);
ms.dispose();
	} else {
		ms.dispose();
	}
}
