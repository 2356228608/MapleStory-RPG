/*
 * 夜光剧情 - 22
 * 地图：秘密地图 - 破坏的拉尼娅的家前院 (910141030)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_ChangeController(1032203, 0, 0, 1);
        ms.npc_SetSpecialAction(1032203, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextSNoESC("……我，我做了什么？");
        ms.effect_Voice("Voice.img/Luminous_M/0");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 500, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextSNoESC("拉尼娅……");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(0, 500, 500, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextSNoESC("房子……");
    } else if (status === i++) {
        ms.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        ms.sendNextSNoESC("还有森林……这些全都是我做的？");
    } else if (status === i++) {
        ms.sendNextSNoESC("黑魔法师最后说的话原来是这个意思。那时候流泻的黑暗力量一直藏在我的身体里。");
    } else if (status === i++) {
        ms.sendNextSNoESC("但为什么是现在？难道黑魔法师解开封印啦？不然黑暗力量不会突然爆发的。");
    } else if (status === i++) {
        ms.sendNextSNoESC("怎么办？失去了光之力量的我，我……");
    } else if (status === i++) {
        ms.sendNextSNoESC("……黑暗力量占据了我的身体。那种感觉，是在光之力量从未感受过的原始而冲动的……");
    } else if (status === i++) {
        ms.sendNextSNoESC("拉尼娅，可惜我们的缘分只能到这里了。潜藏在我身体的黑暗力量，现在仍在肆虐。 咳咳。");
    } else if (status === i++) {
        ms.inGameDirectionEvent_Effect("Effect/Direction8.img/effect/tuto/floodEffect/0", 5000, 0, 0, 1, -5, 0, 0, 0, 0);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
        ms.effect_Voice("Voice.img/Luminous_M/1");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1);
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        while (ms.getLevel() < 10) {
            ms.levelUp();
        }
        ms.changeJob(2700);
        ms.teachSkill(20040216, 1, 1); //太阳火焰
        ms.teachSkill(20040217, 1, 1); //月蚀
        ms.teachSkill(20040221, 1, 1); //光之力量
        ms.teachSkill(20041222, 1, 1); //光之传送
        ms.teachSkill(27000207, 1, 5); //光明/黑暗魔法强化
        ms.teachSkill(27001201, 1, 20);//黑暗降临
        ms.teachSkill(27001100, 1, 20);//耀眼光球
        ms.teachSkill(20041239, 1, 1); //光明/黑暗模式转换
        ms.gainItem(1142479, 1);
        ms.npc_LeaveField(1032203);
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.warp(101020100, 9);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
