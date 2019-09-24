/*
 * 阴阳师剧情 - 01 02 03 05 09 10
 * 地图：807100010
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    switch (ms.getMapId()) {
        case 807100110: // 01
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.teachSkill(40020000, 1, 1);//五行的加护
                ms.teachSkill(40020001, 1, 1);//无限的灵力
                ms.teachSkill(40020109, 1, 1);//花狐
                ms.fieldEffect_ScreenMsg("JPKanna/text0");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false, true);
                ms.dispose();
                ms.warp(807100100, 1);
            }
            break;
        case 807100100: // 02
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(2500);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.sendNextNoESC_Bottom("才刚一走进这里，立刻就能够感受到这里有多么阴森。", 9131003);
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("这里的气氛异常诡谲，真叫人起了一身的鸡皮疙瘩。");
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("而且，周围的声音如此嘈杂……看来我们并不是唯一的入侵者啊。");
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("敌人就在本能寺内……看来除了我们之外，还有人也是这么想的。", 9131003);
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("你知不知道是怎么回事？这里到底发生了什么啊？");
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("我这就去调查这里到底出了什么事。神那你还是尽快前去阻止仪式的进行吧。", 9131003);
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("负责攻占北侧佛堂的相马和次藤已经出发了。正如谦信大人所言，就请你直接前去阻止仪式，不要再分心去管周围的情况了。", 9131003);
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("你的任务就是破坏设置在西侧佛堂的结界，削弱正殿的气势。然后前往破坏掉正殿地下的祭坛，这样才能正式阻止仪式的进行。千万不要忘了这一点！", 9131003);
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("我明白了。");
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("要抓紧时间了，神那！", 9131003);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.fieldEffect_SetObjectState("guide1");
                ms.fieldEffect_SetObjectState("guide2");
                ms.fieldEffect_SetObjectState("guide3");
                ms.dispose();
            }
            break;
        case 807100111: // 03
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.fieldEffect_ScreenMsg("JPKanna/text1");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807100101, 0);
            }
            break;
        case 807100112: // 05
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.fieldEffect_ScreenMsg("JPKanna/text2");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.resetMap(807100102);
                ms.warp(807100102, 1);
            }
            break;
        case 807100102: // 06
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.spawnMonster(9421572, -450, 32);
                ms.spawnMonster(9421572, -360, 32);
                ms.spawnMonster(9421572, -270, 32);
                ms.spawnMonster(9421572, -180, 32);
                ms.spawnMonster(9421572, -90, 32);
                ms.spawnMonster(9421572, 0, 32);
                ms.spawnMonster(9421572, 90, 32);
                ms.spawnMonster(9421572, 180, 32);
                ms.spawnMonster(9421572, 270, 32);
                ms.spawnMonster(9421572, 360, 32);
                ms.spawnMonster(9421572, 450, 32);
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/1", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
                ms.curNodeEventEnd(true);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/2", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/3", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.addPopupSay(9130081, 5000, "#r消灭全部敌人吧！#n");//显示10秒
                ms.topMsg("打败所有的敌人！");
                ms.fieldEffect_ScreenMsg("aran/tutorialGuide2");
                ms.teachSkill(40021183, 1, 1);
                ms.teachSkill(40021184, 1, 1);
                ms.teachSkill(40021185, 1, 1);
                ms.teachSkill(40021186, 1, 1);
                ms.dispose();
            }
            break;
        case 807100103: // 09
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1500);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(6); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/4", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/5", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_OneTimeAction(1497, 0);
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121005/tile/begin", 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(1400);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121005/tile/0", 0, 0, 0);
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/6", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(1440);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121005/tile/end", 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(960);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(500);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807100104, 0);
            }
            break;
        case 807100104: // 10
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.npc_SetSpecialAction(9131004, "back");
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(3500);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(3);
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/7", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/8", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/9", 0, 250, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/10", 0, 0, -100);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_OneTimeAction(1499, 0);
                ms.inGameDirectionEvent_Effect("Skill/4200.img/skill/42001000/effect", 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(270);
            } else if (status === i++) {
                ms.inGameDirectionEvent_OneTimeAction(1500, 0);
                ms.inGameDirectionEvent_Effect("Skill/4200.img/skill/42001005/effect", 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(330);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121008/effect", 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(200);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807100105, 0);
            }
            break;
        case 807100105: // 11
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.playVideoByScript("JPKanna.avi");
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
                ms.dispose();
                ms.warp(807040000, 0);
            }
            break;
        default:
            ms.dispose();
    }
}