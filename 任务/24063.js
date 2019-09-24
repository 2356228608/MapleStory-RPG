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
qm.onScriptMessage(4, 1033101, 0, 0,  "双弩精灵！双弩精灵！我想见你！呜呜～虽然我装得很坦然，但我一直害怕我们再也不能见面了！", 256, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033101, 0, 0,  "你身体没事吧，#p1033101#？", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033101, 0, 0,  "是的！没事！就身体而言，我自信比任何精灵都要强壮！虽然没有自信能像以前那样使用技能，但是没有不舒服的地方！", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033101, 0, 0,  "太好了……", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 1033101, 0, 0,  "当然啦!很棒吧!独自生活在已经历经数百年时间的世界!那是多么苦闷的事情啊!呜哇!~ 从现在开始, 就让#p1033101#我来陪伴你吧!	\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 2000 exp", 0, 16, 0, 0, 0, 0); // [类型] 接受/拒绝
} else if (status === i++) {
qm.forceStartQuest(24063, "");
qm.forceCompleteQuest(24063);
qm.dispose();
	} else {
		qm.dispose();
	}
}



function end(mode, type, selection) {
qm.dispose();
}
