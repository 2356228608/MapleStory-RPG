/* Dawnveil
[Ellinel Fairy Academy] The Final Rescue
Woonie and Tracy
Made by Daenerys
 */
var status = -1;

function action(mode, type, selection) {
	var em = cm.getEventManager("副本_妖精学院_Boss");
	var state = parseInt(em.getProperty("state"));
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (state > 1) {
			cm.sendNextNoESC("你来救我们……真是太感谢了。", 1500016);
		} else {
			cm.sendOk("请消灭那个凶恶的土地鼠！\r\n#b（消灭地鼠王后,重新进行对话。）");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.sendNextNoESC("我这辈子不会忘记你的大恩大德！", 1500018);
	} else if (status == 2) {
		cm.forceCompleteQuest(32128);
		cm.warp(101073200, 0);
		cm.gainExp(6000);
		cm.dispose();
	} else {
		cm.dispose();
	}
}
