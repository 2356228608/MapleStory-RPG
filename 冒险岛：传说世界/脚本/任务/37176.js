/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.sendNextNoESC("你能再帮我带来干净的泉水和莲花吗？");
	} else if (status === i++) {
		qm.sendNextNoESC("请帮我带回#r21滴#k干净的泉水……灌满这个小水瓶就行了。\r\n莲花要多采一些，要#r10朵#k才够……");
	} else if (status === i++) {
		qm.sendNextNoESC("这次我给你的水瓶在你#r获得干净的泉水时，会自动灌水#k。这样你就不用亲自去灌了。");
	} else if (status === i++) {
		qm.sendNextSNoESC("……那你干嘛不一开始就给我这种水瓶啊？");
	} else if (status === i++) {
		qm.sendNextNoESC("......");
	} else if (status === i++) {
		qm.sendNextNoESC("要有诚意！诚意才是最重要的！\r\n唔……你要是愿意亲手灌水也不是……");
	} else if (status === i++) {
		qm.sendNextSNoESC("……不不，有这个水瓶就方便多了。");
	} else if (status === i++) {
		qm.sendNextNoESC("啊！又要喝刚才的水，吃刚才的花吗？\r\n哇……太棒了！", 1501010);
	} else if (status === i++) {
		qm.sendNextSNoESC("哈哈……");
	} else if (status === i++) {
		qm.forceStartQuest();
		qm.gainItem(4220198, 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
		//qm.forceCompleteQuest();
		qm.dispose();
}
