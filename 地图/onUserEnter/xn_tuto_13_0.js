/*
 * 尖兵剧情 - 17
 * 地图：埃德尔斯坦 - 秘密广场 (931060070)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.sendNextNoESC("吉格蒙特！还好你没事。你不知道我有多担心。", 2159385);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("谢谢你，贝尔。", 2159384);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("但是……这家伙是谁？从刚才的情况看，好像不是敌人，所以也把他带来了。", 2159388);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("应该是格里梅尔的部下。刚见到的时候，他还想攻击吉格蒙特。……这段时间到底发生了什么事？刚才的情况真是让人看不懂。", 2159386);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("我也搞不太清楚，但他不是个坏人。他是我的救命恩人。不仅如此，他好像失去了记忆，被关在格里梅尔的研究所里。", 2159384);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("话虽这么说，但之前你不也看见了吗？我看这个人好像受到了格里梅尔的操纵。让他进入秘密广场真的没关系吗？要是他再次受到操纵，那该怎么办？", 2159387);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/story/BalloonMsg0/1", 1200, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextNoESC("那个装置，我应该可以拆除……", 2159380);
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, -250, -60, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 50, -90, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, -60, -50, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 130, -50, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, -340, -100, 1, 0, 1, 0, 1, 0);
        ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 0, -120);
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.sendNextSNoESC("那就马上拆除。总不能把那种危险的东西一直带在身上。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("但是这好像不是单纯用于操纵的装置……好像还包含有战斗系统。如果把它拆掉，系统就会失效，#h0#你会变得比现在弱得多。格里梅尔随时可能派出追踪者，那样做太危险了。", 2159380);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("没关系，鲁提。能拆掉的话，就拆掉吧。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("真的？你不后悔？", 2159380);
    } else if (status === i++) {
        ms.sendNextPrevSNoESC("系统只要慢慢修复就行，虽然会花费一点时间……。但是如果被操纵，那就完蛋了。所以带着那种装置反而更危险。我不想再被人操纵了。");
    } else if (status === i++) {
        ms.sendNextPrevNoESC("既然你这么说，明白了，我马上帮你拆除。", 2159380);
    } else if (status === i++) {
        ms.sendNextPrevNoESC("好的，拆掉了。刚开始会不太熟悉，可能会感觉有点困难。", 2159380);
    } else if (status === i++) {
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.teachSkill(30021238, -1, 0); //刀锋之舞
        ms.teachSkill(30020232, 1, 1);  //急速支援
        ms.teachSkill(30020234, 1, 1);  //多线程Ⅰ
        ms.teachSkill(36000004, 1, 1);  //多线程Ⅱ
        ms.teachSkill(30021237, 1, 1);  //自由飞行
        ms.teachSkill(30020240, 1, 1);  //伪装
        ms.changeJob(3600);
        ms.gainSp(4);
        ms.gainItem(2000018, 15);
        ms.gainItem(1142575, 1);
        ms.gainItem(3010585, 1);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.warp(310010000, 0);
        ms.dispose();
        ms.enableActions();
    } else {
        ms.dispose();
    }
}
