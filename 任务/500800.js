/** This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：//[我的小屋]装修的第一步！
 *  @Author 娜娜 
 */
var status = -1;

function start(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNext("呵呵……呵呵！\r\n……我实在是太高兴了，忍不住要笑呢……终于……我终于能实现拥有家的梦想了！\r\n#h0#，你也听说了吧？#b[我的小屋]#k升级的消息！",9400920);
	} else if (status === i++) {
		qm.sendNext("终于能够在属于我的小小空间中，用我喜欢的家具打造我独有的风格，光是想象就觉得太幸福了！\r\n 对了，有这样的好事，我可不能什么都不做，所以我做了准备！ \r\n#b#fs20#“[我的小屋]DIY装修的第一步！”活动！",9400920);
	} else if (status === i++) {
		qm.sendNext("你认为装修家时最重要的是什么？就是寻找专属于自己的风格。\r\n 为了知道自己究竟喜欢什么，需要有很多的经验才行。\r\n 所以在活动期间，如果你能搜集#b30个家具，20个建筑图纸#k，每个世界内的账号就能获得一次礼物！ ",9400920);
	} else if (status === i++) {
		qm.sendNext("对了，[我的小屋]只有200级以上的角色才能参加。完成教程后，账号内的所有角色都能使用我的小屋，所以你可以用账号内的其他角色来进行，或者努力升级当前角色后来参加！你一定能做到的。",9400920);
	} else if (status === i++) {
		//qm.forceStartQuest();
		//qm.forceCompleteQuest(500763);
		//qm.updateInfoQuest(500763, "name="+qm.getPlayer().getName());
		qm.dispose();
	}
}

function end(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.forceCompleteQuest();
		qm.dispose();
	} else {
		qm.dispose();
	}
}
