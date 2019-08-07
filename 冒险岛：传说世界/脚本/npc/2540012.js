/*
 *  起源之塔3F 左边的冒险家
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var itemid = [4009237, 4009238];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var em = cm.getEventManager("Map_TowerOfOz");
	var winner = parseInt(em.getProperty("stage3_winner"));
	var bet = parseInt(em.getProperty("stage3_bet_egg_on_left"));
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		if (winner == 0 || bet == 0) {
			cm.askNumber("哈，你也是来参加世纪龟蛋大决斗的吗？哦，是要押注到我这边吗？呵呵，你的眼光很准，待会等我赢了这次决斗，会给你回报的！\r\n\r\n想押注多少#b#v4009237##v4009238#古代乌龟蛋#k都可以。", 1, 1, 999999);
			em.setProperty("stage3_winner", 0);
		} else if (winner == cm.getNpc()) {
			cm.sendOk("拿着，这是你的回报。");
			cm.gainItem(itemid[0], bet * 2);
			em.setProperty("stage3_winner", 0);
			em.setProperty("stage3_bet_egg_on_left", 0);
			em.setProperty("stage3_bet_egg_on_right", 0);
			cm.dispose();
		} else {
			cm.sendOk("不，不要惊慌，只是一点小小的技术事故而已，看我马上就把他给拿下。回报等我待会赢得下一轮决斗就给你。");
			em.setProperty("stage3_winner", 0);
			em.setProperty("stage3_bet_egg_on_left", 0);
			em.setProperty("stage3_bet_egg_on_right", 0);
			cm.dispose();
		}
	} else if (status === 1) {
		var num = selection;
		var owns1 = cm.getPlayer().getItemAmount(itemid[0]);
		var owns2 = cm.getPlayer().getItemAmount(itemid[1]);
		if (owns1 + owns2 >= num) {
			if (owns1 >= num) {
				cm.gainItem(itemid[0], -num);
			} else {
				cm.gainItem(itemid[0], -owns1);
				cm.gainItem(itemid[1], owns1 - num);
			}
			num += parseInt(em.getProperty("stage3_bet_egg_on_left"));
			cm.sendOk("行，你押注的" + num + "个#b#v4009237##v4009238#古代乌龟蛋#k我记下来了。等会我胜利了再来找我就行。");
			em.setProperty("stage3_bet_egg_on_left", num);
			cm.dispose();
		} else {
			cm.sendOk("嘿，你手头没有那么多#b#v4009237##v4009238#古代乌龟蛋#k啊。想要参加世纪决斗，得有真材实料才行。");
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
