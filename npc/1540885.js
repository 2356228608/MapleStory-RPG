// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.updateInfoQuest(33915, "act1=350112400;act2=350120000;act3=350130200;act4=350160000");
		cm.Hidden_background("party_Tuto", 0);
		cm.Hidden_background("party_Tuto2", 0);
		cm.Hidden_background("party_Tuto3", 0);
		cm.onScriptMessage(3, 0, 0, 0, "哦，你来了啊，林博士！多亏了你，这座浩瀚博物馆才能够形成如此盛况。", 256, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "你来找我是有什么事情吗？", 257, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "(该怎么拿到门禁卡呢？)\r\n#b#L0#偷窃#l\r\n#L1#说谎#l\r\n#L2#堂堂正正地提出要求#l", 0, 6, 37, 0, 1, 1540891); // [类型] 选择菜单
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "啊，不好意思，不过你不要靠得太近，\r\n你知道这样我会很有压力的啊？", 256, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "(恩……这种挑剔的性格，实在是很难偷窃啊。)", 257, 0, 37, 0, 1, 1540891); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "哦，你来了啊，林博士！多亏了你，这座浩瀚博物馆才能够形成如此盛况。", 256, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "你来找我是有什么事情吗？", 257, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "(该怎么拿到门禁卡呢？)\r\n#b#L0#偷窃#l\r\n#L1#说谎#l\r\n#L2#堂堂正正地提出要求#l", 0, 6, 37, 0, 1, 1540891); // [类型] 选择菜单
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "这是什么意思，保安系统有异常，你想要确认一下？", 256, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "如果保安系统有问题，我肯定会收到消息的，我看你是担心得有点多余了吧，如果你真的担心，一会就和我一起去看看吧。", 257, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "(看来对博物馆了如指掌的人很难说谎啊。)", 257, 0, 37, 0, 1, 1540891); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "哦，你来了啊，林博士！多亏了你，这座浩瀚博物馆才能够形成如此盛况。", 256, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "你来找我是有什么事情吗？", 257, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "(该怎么拿到门禁卡呢？)\r\n#b#L0#偷窃#l\r\n#L1#说谎#l\r\n#L2#堂堂正正地提出要求#l", 0, 6, 37, 0, 1, 1540891); // [类型] 选择菜单
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "恩？你说门禁卡吗？呵呵，你的研究欲望可真是了不起啊，\r\n这么会儿工夫都忍不住，就想去看极限石了？", 256, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "你知道我是信任你的吧？宴会结束之前你可一定要还给我哦。\r\n我会继续在这里欣赏完音乐……", 257, 0, 37, 0, 1, 1540885); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 0, 0, "(#b门卡#k已经到手了，现在去#b右侧#k，试着变装成#b吴馆长#k吧？)", 257, 0, 37, 0, 1, 1540891); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check=1");
		cm.updateInfoQuest(33995, "disguise=3");
		cm.Hidden_background("party_Tuto4", 0);
		cm.forceStartQuest(33993, "");
		cm.dispelBuff(2210196);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
