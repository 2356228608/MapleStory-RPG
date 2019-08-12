
/*
 *  起源之塔47F 探险家
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		cm.sendNext("哇噢！我们又见面了。竟能来到这里，你有两下子！");
	} else if (status === 1) {
		cm.sendNext("又想叫我帮忙？……最近我好像听到这样的请求太多次了，我得休息一下。所以这一层楼我就放心交给你了！");
	} else if (status === 2) {
		cm.sendNextS("……");
	} else if (status === 3) {
		cm.sendNext("……", 2540000);
	} else if (status === 4) {
		cm.sendOk("不要紧张！按照我说的方向走就行了：#b先往前走到底，再返回来走到底，然后再折过去走到底#k就能到达下一层了！怎么样，简单吧？");
	} else if (status === 5) {
		cm.sendNextS("#b（真不能指望这家伙啊……还是靠自己吧。）");
	} else {
		cm.dispose();
	}
}
