/*  This source is made by BMS Team
 *  脚本功能：[新手任务]魔链影士系列
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
cm.sendNext("治疗应该结束了。现在我来教你影子商团的秘传技术。从现在起，你就是支部的正式成员了。", 3001200);
} else if (status === i++) {
cm.forceStartQuest(34656, "");
cm.forceCompleteQuest(34656);
cm.sendNextPrev("这段时间以来，你作为我的弟子展现出了优秀的战斗天赋，我认为你已经足够强大了。不过，如果能学会我刚才教给你的技术，你就会变得更加强大。", 3001200);
} else if (status === i++) {
cm.changeJob(6400);
cm.forceStartQuest(34695, "");
cm.forceCompleteQuest(34695);
cm.openUIWithOption(3, 3);
cm.sendNextPrev("我传授给了你影子商团成员的基本功，即讲价和返回商团技术。快去看看吧。使用返回商团，可以随时来到商团据点。", 3001200);
} else if (status === i++) {
cm.openUIWithOption(3, 3);
cm.sendNextPrev("另外，这是你最喜欢的战斗技术。根据你的喜好分配SP，发展技能树吧。每次升级均可获得SP。", 3001200);
} else if (status === i++) {
cm.sendNextPrev("技能栏可以使用基本快捷键(K)打开。为方便使用，可将技能放入快捷栏。", 3001200);
} else if (status === i++) {
cm.openUI(2);
cm.sendNextPrev("……还有，等级提高后能力值也会随之上升。点击基本快捷键(S)/选择型(C)分配能力点吧。", 3001200);
} else if (status === i++) {
cm.sendOk("希望你以后也能够继续脚踏实地，取得更大的进步。只要你不断磨练自己，终有一天所谓强大的技术都会变成无用之物的。", 3001200);
} else if (status === i++) {
cm.forceStartQuest(34604, "");
cm.forceCompleteQuest(34604);
cm.forceStartQuest(34605, "");
qm.dispose();
    } else {
        qm.dispose();
    }
}


function end(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
qm.onScriptMessage(3, 0, 0, 0,  "呼呼，找到了。嗯？那本书是……", 256, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 2560003,  "#face0#这不是你的书吗？#b“植物图鉴和神秘配方”#k", 257, 0, 36, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "不，不是的……\r\n啊，要是被米露看见了，一定又要怪我不该随便拿出来。必须快点还回去，哈哈哈……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.updateInfoQuest(32974, "exp=1");
qm.onScriptMessage(3, 0, 0, 0,  "还好身体好像没什么异常……必须去向队长报告……", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
qm.dispose()
	} else {
		qm.dispose();
	}
}
