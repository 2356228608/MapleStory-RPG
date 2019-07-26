/*
 * 狂龙剧情 - 03
 * 地图：秘密地图 - 万神殿东部 (940001050)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.setForcedStat();
        ms.teachSkill(60001229, 1, 1);
        ms.npc_ChangeController(3000107, -2950, 20, 0);
        ms.npc_SetSpecialAction(3000107, "summon");
        ms.sendNextSNoESC("没想到竟然连这里都出现了幽灵……");
    } else if (status === i++) {
        ms.sendNextNoESC("看来情况比想象的更严重！", 3000107);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("我有不好的预感。请你赶紧返回，立即建立防御膜，做好万全准备。");
    } else if (status === i++) {
        ms.sendNextNoESC("越是这种时候，我才更应该跟你一起去。虽然你是狂龙战士，可是单枪匹马对付他们……", 3000107);
    } else if (status === i++) {
        ms.sendNextSNoESC("卡塔利安，你是诺巴骑士。你难道忘了，比性命更宝贵的首要任务正是保卫诺巴族的安全？而且我是狂龙战士，从来只有我操心别人的，才没有弱到需要别人操心呢。");
    } else if (status === i++) {
        ms.sendNextNoESC("既然你这么坚持……那么只能祝你好运了。", 3000107);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.npc_LeaveField(3000107);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940001100, 0);
    } else {
        ms.dispose();
    }
}