/*
 * 爆莉萌天使剧情 - 14
 * 地图：万神殿东部地区 - 东侧圣殿 (940011110)
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
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/2", 1200, 0, -100);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("哎，看起来挺漂亮的，别不好意思。拥有特殊力量的正义勇士就得有一身漂亮制服。", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("这……这好像不太适合我……");
        ms.effect_PlayMusic("Voice.img/Angelic_F/1");
    } else if (status === i++) {
        ms.npc_ChangeController(3000119, 150, 220, 1);//B2 67 00 01
        ms.npc_SetSpecialAction(3000119, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.npc_ChangeController(3000115, 250, 220, 1);//B3 67 00 01
        ms.npc_SetSpecialAction(3000115, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.npc_ChangeController(3000111, 350, 220, 1);//B4 67 00 01
        ms.npc_SetSpecialAction(3000111, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(90);
    } else if (status === i++) {
        ms.sendNextNoESC("原来放圣物的地方你没发现什么吗？", 3000119);
    } else if (status === i++) {
        ms.sendNextNoESC("我说，非得把那东西抢过来吗？圣物已经在圣殿里消失了啊。", 3000115);
    } else if (status === i++) {
        ms.sendNextNoESC("少废话！必须得把那东西抢过来，这样毁掉圣物才能成为我们的功劳！", 3000119);
    } else if (status === i++) {
        ms.sendNextNoESC("孩子，不好意思，你能不能把手上戴的圣物交给我们啊？", 3000111);
    } else if (status === i++) {
        ms.sendNextSNoESC("你们就是那时要偷圣物的坏祭司！");
    } else if (status === i++) {
        ms.sendNextNoESC("没错，我们正是坏人，所以快把你手上的圣物交出来，我们就不害你。", 3000111);
    } else if (status === i++) {
        ms.sendNextSNoESC("这东西我摘不下来。克里昂说现在还没办法摘掉它！");
    } else if (status === i++) {
        ms.sendNextNoESC("没法子啦。先把这孩子带走吧！", 3000119);
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#！快使用我给你的力量，打败他们！", 3000132);
    } else if (status === i++) {
        ms.sendNextSNoESC("我可以吗？");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg1/3", 900, 30, -100);
        ms.inGameDirectionEvent_AskAnswerTime(900);
    } else if (status === i++) {
        ms.sendNextNoESC("叽叽咕咕说什么啊！弟兄们！走！", 3000119);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(300);
    } else if (status === i++) {
        ms.npc_LeaveField(3000119);
        ms.mob_EnterField(9300560, 150, 239);
        ms.npc_LeaveField(3000115);
        ms.mob_EnterField(9300561, 250, 239);
        ms.npc_LeaveField(3000111);
        ms.mob_EnterField(9300562, 350, 239);
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/0");
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.dispose();
    } else {
        ms.dispose();
    }
}