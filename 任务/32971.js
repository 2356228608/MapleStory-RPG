/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术士
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
qm.sendNext_Bottom("#face0#这感觉像是队长说的话，哈哈。", 2560002);
} else if (status === i++) {
qm.sendNextS_Bottom("嗯……对了，队长说森林里诅咒气息很强，让我们小心。");
} else if (status === i++) {
qm.sendNext_Bottom("#face0#真的吗？呃……我还以为医务队会安全一点呢……", 2560002);
} else if (status === i++) {
qm.sendNext_Bottom("#face0#去执行任务吧。这次的目的地是#b区域2-A#k。\r\n我先去那里做好准备，你慢慢过来。", 2560002);
} else if (status === i++) {
qm.sendNextS_Bottom("嗯……");
} else if (status === i++) {
qm.forceStartQuest(32971, "");
qm.OnStartNavigation(307000200, 1, "2560104", 0);
qm.updateInfoQuest(32999, "01=h1;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;18=h0;19=h0");
qm.updateInfoQuest(32999, "01=h1;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h0;04=h1;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;18=h0;19=h0");
qm.npc_LeaveField("oid=22232");
qm.dispose();
    } else {
        qm.dispose();
    }
}

function end(mode, type, selection) { (mode == 1) ? status++:status--;
    var i = -1;
    if (status <= i++) {
        qm.dispose();
} else if (status === i++) {
qm.updateInfoQuest(32999, "01=h1;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h1;18=h0;19=h0");
qm.sendNextNoESC_Bottom("#face0#这么快就来啦？", 2560002);
} else if (status === i++) {
qm.sendNextNoESC_Bottom("#face0#我们必须消灭掉一些#b影子斧木妖#k。\r\n最近它们的数量越来越多，给采集绸缎蘑菇造成了困难。", 2560002);
} else if (status === i++) {
qm.sendNextNoESC_Bottom("#face0#哎呀，忘了把采集装备带来了。你先在这里消灭怪物，我去去就来。", 2560002);
} else if (status === i++) {
qm.dispose();
qm.forceCompleteQuest(32971);
qm.forceStartQuest(32972, "");
qm.updateInfoQuest(32971, "exp=1");
qm.forceCompleteQuest(62417);
qm.forceStartQuest(9571, "0");
qm.forceStartQuest(31190, "0");
qm.forceStartQuest(42102, "0");
qm.forceStartQuest(7621, "");
qm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
qm.OnStartNavigation(307000200, 0, "hunt00", 0);
	}else{
qm.dispose();
    }
}