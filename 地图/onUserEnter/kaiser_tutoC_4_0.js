/*
 * 狂龙剧情 - 16
 * 地图：万神殿 - 万神殿治疗室 (940001240)
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
        ms.npc_ChangeController(3000106, 150, 50, 0);//2D 15 87 01
        ms.npc_SetSpecialAction(3000106, "summon");
        ms.npc_ChangeController(3000107, 70, 50, 0);//2E 15 87 01
        ms.npc_SetSpecialAction(3000107, "summon");
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextNoESC("你清醒一些了吗？", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("狼牙？呃……这里是什么地方？我还活着？");
    } else if (status === i++) {
        ms.sendNextNoESC("你现在安全了。", 3000107);
    } else if (status === i++) {
        ms.sendNextSNoESC("卡塔利安？先别说我，迪奥怎么样了？");
    } else if (status === i++) {
        ms.sendNextNoESC("她很安全，就是遇到点麻烦……", 3000107);
    } else if (status === i++) {
        ms.sendNextSNoESC("您为什么对我说话这么客气……？");
    } else if (status === i++) {
        ms.sendNextNoESC("你是狂龙战士。所有诺巴族人都应该对狂龙战士表示尊敬。", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("狂龙战士？你说的是我？我不明白你说的话。");
    } else if (status === i++) {
        ms.sendNextNoESC("接到贝德罗斯的求援后，我和狼牙立即前往东侧圣殿，在那里发现了已经觉醒成为狂龙战士的你。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("我们赶到时，你已经把那里那些奇怪的祭司全部赶走，昏倒在地。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("迪奥没事，你不用担心。不过看样子迪奥受到圣物的诅咒，令我不太放心。", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("圣物的诅咒？比起这个，我还是不能相信你说我变成狂龙战士的话！");
    } else if (status === i++) {
        ms.sendNextNoESC("从我们到达时看见你周身包围的灵气和一些变身的征兆来判断，的的确确是狂龙战士。一下子可能很难接受，但你是被命运选中的孩子。", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("那么我……我会变成什么样？");
    } else if (status === i++) {
        ms.sendNextNoESC("你只要坦然接受赋予你的使命，按照命运的指引行动就行了。", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("你年龄还小，这条路会很艰难，但既然赋予了你伟大的力量，你当然要承担起相应的责任。", 3000106);
    } else if (status === i++) {
        ms.sendNextSNoESC("如果我真的具有那么强大的力量，我愿意承担责任。可我现在还什么也没感觉到啊。");
    } else if (status === i++) {
        ms.sendNextNoESC("你是狂龙战士转生，转生后会失去所有战斗能力和记忆。简单来说，身为狂龙战士的你现在还只是块带有无限潜力的原石。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("请你勤快修炼，早日成为不亚于先代的狂龙战士，领导我们诺巴族。", 3000107);
    } else if (status === i++) {
        ms.sendNextNoESC("你别太催他，卡塔利安。他还不能完全了解担在他肩上的沉重命运。你先休息一会儿吧。", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("你虽然成了狂龙战士，但现在还很虚弱，所以别跟别人说你是狂龙战士，那样你会很危险。", 3000107);
    } else if (status === i++) {
        ms.sendNextSNoESC("我更担心迪奥，她在哪儿？");
    } else if (status === i++) {
        ms.sendNextNoESC("她比你更早醒过来，知道自己的情况后，跑出了万神殿。克里昂跟着去了，不会有事的。", 3000107);
    } else if (status === i++) {
        ms.sendNextSNoESC("我现在脑子里一片乱麻。不过精神好一些了，我想自己整理一下思绪。");
    } else if (status === i++) {
        ms.sendNextNoESC("你别太辛苦了。", 3000106);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.gainItem(1142484, 1);  //幻生的狂龙战士
        ms.forceCompleteQuest(29987);
        ms.npc_LeaveField(3000106);
        ms.npc_LeaveField(3000107);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(400000000, 0);
    } else {
        ms.dispose();
    }
}