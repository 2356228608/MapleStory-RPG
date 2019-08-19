/*
Made by jessefjxm
 */
var status = -1;
function action(mode, type, selection) {
	cm.sendOk("空空荡荡的垃圾箱，里面什么也没有。谁说里面可能有好东西的？");
	cm.dispose();
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
