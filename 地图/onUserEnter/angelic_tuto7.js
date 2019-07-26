/*
 * 爆莉萌天使剧情 - 09
 * 地图：万神殿 - 大神殿内部 (940011070)
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
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextSNoESC("我……我把圣物弄没了？？我没那样的想法啊！！");
    } else if (status === i++) {
        ms.sendNextSNoESC("我既没魔力，也无一技之长……怎么会发生这样的事……");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(120);
        ms.effect_Direction("Effect/Direction10.img/angelicTuto/Scene1");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/5", 1200, 0, -120);
        ms.npc_ChangeController(3000152, 300, 10, 1);//78 61 00 01
        ms.npc_SetSpecialAction(3000152, "summon");
        ms.sendNextNoESC("#h0#！！等等！", 3000152);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2);
        ms.inGameDirectionEvent_AskAnswerTime(60);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0);
        ms.sendNextNoESC("#h0#！你别太伤心。原本圣物不会随便对人起反应的。要是对谁都能起反应，早就影响到那些祭司了。", 3000152);
    } else if (status === i++) {
        ms.sendNextSNoESC("可是圣物没了这个事实是板上钉钉的啊！");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_Effect("Effect/Direction10.img/effect/tuto/BalloonMsg0/6", 1200, 0, -120, 1, 0, 1, 3000152, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.npc_LeaveField(3000152);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011080, 0);
    } else {
        ms.dispose();
    }
}