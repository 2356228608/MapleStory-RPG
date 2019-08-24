var status = -1;

function action(mode, type, selection) {
	if (cm.isQuestFinished(3165) && !cm.isQuestFinished(3139) && !cm.haveItem(4032832)) {
		cm.sendOk("这是#t4032832#。如果不小心丢了，我可以重新为你制作，你只要来找我就行。……反正我很闲。");
		cm.gainItem(4032832, 1);
	} else if (cm.isQuestFinished(3166) && !cm.isQuestFinished(3140) && !cm.haveItem(4032833)) {
		cm.sendOk("#t4032833#啊，如果弄丢了就回来找我吧，做过一次的钥匙是很容易重新制做的。反正我留在这里就是为了给你制作钥匙，你不用过意不去。");
		cm.gainItem(4032833, 1);
	} else if (cm.isQuestFinished(3167) && !cm.isQuestFinished(3141) && !cm.haveItem(4032834)) {
		cm.sendOk("喏，你找的#t4032834#来了。你一定要打败#o8210007#，帮助人们。如果弄丢了钥匙就回来找我，重做一把还是很简单的。");
		cm.gainItem(4032834, 1);
	} else {
		cm.sendOk("你一定要打败这里的怪物，帮助人们。如果弄丢了钥匙就回来找我，重做一把还是很简单的。");
	}
	cm.dispose(); //cm.askMenu("#e<组队任务：逃离>#n\r\n虽然我想现在就逃出去…但我不能无视他的请求。在这个城堡里面，被关在空中监狱里的人正在寻找能帮忙的人。\r\n\r\n#L1##b请你去帮助城里面被关住的冒险家！#l");
}
