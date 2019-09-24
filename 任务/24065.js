/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.onScriptMessage(4, 1033102, 0, 0,  "现在我们……精灵的三位长老全部聚齐了。虽然其他百姓们还被黑魔法师的诅咒困在冰里……但是有国王在，有我们在，我们就不会害怕任何人。", 0, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "现在精灵的三位长老全部聚齐了……你还记得吗？双弩精灵，我们的国王？三位长老全部聚齐的话，就能使用一个魔法。名叫#b纯白净化#k……", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "纯白净化的话，我应该……", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "本来是在国王遇到危急情况，无法使用力量的时候使用的魔法。可以将所有精灵精神深处最纯洁最高贵的力量召唤出来。使用之后，其他陷入诅咒的人一定就会醒来。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "你们也因为诅咒的影响而变弱了……没关系吗？", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "纯白净化可以通过精神共鸣将精灵们连接在一起，增强相互的力量……虽然不是很简单，但只需消耗很少的力量就行。现在马上就可以使用。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033100, 0, 0,  "如果那个魔法可以成功……大家就都能醒来吗？那就别再犹豫了。三位长老，请把困在冰里的百姓从痛苦中拯救出来。", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(24065, "");
qm.fieldEffect_ScreenMsg("mercedes/frame");
qm.fieldEffect_ScreenMsg("mercedes/elfElder");
qm.forceStartQuest(11620, "0");
qm.updateInfoQuest(15710, "lasttime=19/09/21/03/34");
qm.forceCompleteQuest(24065);
qm.dispose();
	} else {
		qm.dispose();
	}
}



function end(mode, type, selection) {
qm.dispose();
}
