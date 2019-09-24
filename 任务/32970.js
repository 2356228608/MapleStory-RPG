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
        qm.updateInfoQuest(32970, "s1=1;s2=1");
        qm.curNodeEventEnd(true);
        qm.setInGameDirectionMode(true, false, false);
        qm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        qm.setStandAloneMode(true);
        qm.OverlapScreenDetail19(0, 1000, 3000, 1);
        qm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
    } else if (status === i++) {
        qm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        qm.fieldEffect_RemoveOverlapScreenDetail(1000);
        qm.onTeleport(1, qm.getPlayer().getId(), -85, -20);
        qm.inGameDirectionEvent_ForcedFlip(1);
        qm.sendNextSNoESC_Bottom("米露，你不好奇吗？");
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#嗯？外面的世界吗？", 2560002);
    } else if (status === i++) {
        qm.sendNextSNoESC_Bottom("我只是有点好奇。\r\n进入#r镜世界#k之后，外面的记忆不是全都失去了吗？");
    } else if (status === i++) {
        qm.sendNextSNoESC_Bottom("原来的我是什么样子的呢？");
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#这个嘛？都说镜世界是为了困住#r不洁者#k……但是……\r\n其实对我来说，这里更像是现实世界。", 2560002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#虽然医务队的事情很麻烦……但我还是喜欢这个地方。", 2560002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#如果没有某个家伙……", 2560002);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#你该不会是在说我吧？", 2560006);
    } else if (status === i++) {
        qm.npc_ChangeController(2560006, "oid=18767374", -300, -20, 0);
        qm.npc_SetSpecialAction("oid=18767374", "summon");
        qm.npc_ChangeController(2560004, "oid=18767375", -430, -20, 0);
        qm.npc_SetSpecialAction("oid=18767375", "summon");
        qm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        qm.inGameDirectionEvent_ForcedFlip( - 1);
        qm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#怎，怎么会。", 2560002);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#不管怎样都好，你能安静一下吗？\r\n要是有怪物出现，还不是得由我们解决。", 2560006);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#你们医务队员只要去采采果实就行了。", 2560006);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#……哈哈哈，说得没错。不好意思。", 2560002);
    } else if (status === i++) {
        qm.sendNextSNoESC_Bottom("我们也在努力训练……");
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#训练？也是，估计没有人比你更擅长用勺子了，哈哈哈。", 2560006);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#够了，肯。", 2560004);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#影子怪物马上就会出现，队长让我们马上回去。\r\n#r艾特#k会展开歼灭作战。", 2560004);
    } else if (status === i++) {
        qm.sendNextSNoESC_Bottom("艾特……");
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#反正我们已经传达到了。别给我们惹事～", 2560006);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        qm.npc_LeaveField("oid=18767374");
        qm.sendNextNoESC_Bottom("#face0#肯，你这家伙总是……", 2560004);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#你们俩小心点。\r\n如果遇到了影子怪物，别忘了吃#b中和剂#k。", 2560004);
    } else if (status === i++) {
        qm.sendNextNoESC_Bottom("#face0#嗯，我们也不想因为诅咒而变成怪物。", 2560002);
    } else if (status === i++) {
        qm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        qm.inGameDirectionEvent_ForcedFlip(1);
        qm.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        qm.npc_LeaveField("oid=18767375");
        qm.setStandAloneMode(false);
        qm.setInGameDirectionMode(false, false, false);
        qm.sendNext_Bottom("#face0#不过真遗憾。要是再搜集一些，就能搜集到需要的量了。", 2560002);
    } else if (status === i++) {
        qm.sendNextS_Bottom("我再搜集一些。你先回去吧。");
    } else if (status === i++) {
        qm.sendNext_Bottom("#face0#是吗？那我先回去整理一下。其余的材料就拜托你了。", 2560002);
    } else if (status === i++) {
        qm.sendNext_Bottom("#face0##i4036341##t4036341#从#b#m307000010##k的#b#o8230062##k身上很容易就能搜集到。", 2560002);
    } else if (status === i++) {
        qm.forceStartQuest(32970, "");
        qm.updateInfoQuest(32999, "01=h0;10=h0;11=h0;20=h0;02=h0;03=h0;12=h0;21=h0;04=h0;13=h0;05=h0;14=h0;06=h0;15=h0;07=h0;16=h0;17=h0;18=h0;19=h0");
        qm.OnStartNavigation(307000000, 0, "pt00", 0);
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
	qm.sendNextSNoESC_Bottom(" 事情全都做完了……要稍微逛逛吗？");
} else if (status === i++) {
	qm.sendNextSNoESC_Bottom("反正只要不接触就没关系……");
} else if (status === i++) {
        qm.gainExp(31215);
        qm.dispose();
	qm.updateInfoQuest(32970, "s1=1;s2=1;e1=1");
        qm.warp(307090010); //地区 1-A
    }
}