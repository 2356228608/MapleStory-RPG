function start() {
	if (im.haveItem(im.getItemId(), 10)) {
		im.gainItem(im.getItemId(), -10);
		im.gainItem(2028273, 1);
	} else {
		im.playerMessage(5, "似乎要收集10个箱子碎片才能成功修复。再收集一点吧。");
	}
	im.dispose();
}
