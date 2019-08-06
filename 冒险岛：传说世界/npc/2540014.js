/*
 *  起源之塔3F 右边的冒险家
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
	var bet = parseInt(em.getProperty("stage3_bet_egg_on_right"));
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		if (winner == 0 || bet == 0) {
			cm.askNumber("哼哼，这点挑战根本难不倒我！嗯，新面孔？怎么，想要参与我们的世纪决斗，押注到我这边吗？\r\n\r\n想押注多少#b#v4009237##v4009238#古代乌龟蛋#k都可以，等待会我胜利了，会给你回报的。", 1, 1, 999999);
			em.setProperty("stage3_winner", 0);
		} else if (winner == cm.getNpc()) {
			cm.sendOk("拿着，这是你的回报。");
			cm.gainItem(itemid[0], bet * 2);
			em.setProperty("stage3_winner", 0);
			em.setProperty("stage3_bet_egg_on_left", 0);
			em.setProperty("stage3_bet_egg_on_right", 0);
			cm.dispose();
		} else {
			cm.sendOk("可，可恶……这只是一点小小的意外，看我下一轮就把他打趴下！什么，回报？下一轮再说！");
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
			num += parseInt(em.getProperty("stage3_bet_egg_on_right"));
			cm.sendOk("行，你押注的" + num + "个#b#v4009237##v4009238#古代乌龟蛋#k我记下来了。等待会我胜利了，你再来找我。");
			em.setProperty("stage3_bet_egg_on_right", num);
			cm.dispose();
		} else {
			cm.sendOk("什么嘛，你的龟蛋根本不够啊。这样的水平想要参与到我们的世纪决斗里……你还需要多努力啊。");
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
