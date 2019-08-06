/*
 *  起源之塔3F 中间的主持人
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
	var text = "当当当当~这里是世纪龟蛋大对决现场！今天对阵的双方是老练冒险家和新晋冒险家！究竟谁能取得这一轮的胜利，夺得最多的古代乌龟蛋呢？\r\n\r\n";
	text += "啊你问他们为什么要在这里用拼蛋的方式战斗？啊呀不要在意这么多细节，气氛一起来就停不下来了！\r\n\r\n";
	text += "怎么样？想参与真正冒险家之间的决斗吗？虽然现在报名已经太迟了，但是#b用#v4009237##v4009238#古代乌龟蛋押注你信任的人#k依然是可行的哟！说不定会有额外的回报呢！想押注的话，直接找对人就好了。\r\n\r\n";
	cm.askMenu(text);
	cm.dispose();
}
