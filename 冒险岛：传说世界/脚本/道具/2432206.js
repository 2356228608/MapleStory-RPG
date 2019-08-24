var status = -1;
var item = [1032227, 1032227, 1113089, 1113089, 1122274, 1122274, 4310010, 4310010, 2000004, 2000004, 2000005, 2000005, 2001556, 2001556, 2001528, 2001528, 2001531, 2001531, 2049117, 2049117, 2049400, 2049400];

function start() {
	im.gainItem(item[randomNum(0, item.length - 1)], 1);
	im.dispose();
	im.gainItem(im.getItemId(), -1);
}

function action(mode, type, selection) {
	im.dispose();
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
