var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    switch (ms.getMapId()) {
        case 807100110:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
                ms.teachSkill(40020000, 1, 1);//五行的加護
                ms.teachSkill(40020001, 1, 1);//無限的靈力
                ms.teachSkill(40020109, 1, 1);//花狐
                ms.showEffect(false, "JPKanna/text0");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.dispose();
                ms.warp(807100100, 0);
            }
            break;
        case 807100100:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(2500);
            } else if (status == 1) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.sendNextS("快要進入境內時， 就能感覺到濃濃的黑暗氣息。", 1, 9131003, 9131003);
            } else if (status == 2) {
                ms.sendNextPrevS("可怕的失魂落魄。", 3);
            } else if (status == 3) {
                ms.sendNextPrevS("況且這個騷動… 好像入侵者不僅僅是我。", 3);
            } else if (status == 4) {
                ms.sendNextPrevS("敵人在本能寺… 似乎不單單是我們的口令。", 1, 9131003, 9131003);
            } else if (status == 5) {
                ms.sendNextPrevS("有感覺到什麼了嗎？到底在發生什麼事情？", 3);
            } else if (status == 6) {
                ms.sendNextPrevS("請讓我查這個騷動的真相吧，神那抓緊時間阻止儀式吧。", 1, 9131006, 9131006);
            } else if (status == 7) {
                ms.sendNextPrevS("負責北邊法堂的小友馬和負責西南邊的小豆已經出發了。 就像上杉謙信說的不要擔心周圍，抓緊時間去阻止儀式吧。", 1, 9131003, 9131003);
            } else if (status == 8) {
                ms.sendNextPrevS("你的任務就是消除在西邊法堂內的魔術減弱集中在本堂的氣息，破壞本堂地下祭壇阻止儀式本身。", 1, 9131003, 9131003);
            } else if (status == 9) {
                ms.sendNextPrevS("我知道了。", 3);
            } else if (status == 10) {
                ms.sendNextPrevS("要抓緊時間了， 神那！", 1, 9131003, 9131003);
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.fieldEffect("guide1");
                ms.fieldEffect("guide2");
                ms.fieldEffect("guide3");
                ms.dispose();
            }
            break;
        case 807100111:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
                ms.showEffect(false, "JPKanna/text1");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807100101, 0);
            }
            break;
        case 807100112:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
                ms.showEffect(false, "JPKanna/text2");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.resetMap(807100102);
                ms.warp(807100102, 0);
            }
            break;
        case 807100102:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
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
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/1", 0, 0, -120, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
                ms.curNodeEventEnd(true);
            } else if (status == 1) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/2", 0, 0, -120, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status == 2) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/3", 0, 0, -120, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.topMsg("打敗所有的敵人！");
                ms.showEffect(false, "aran/tutorialGuide2");
                //ms.teachSkill(40021183, 1, 1);
                //ms.teachSkill(40021184, 1, 1);
                //ms.teachSkill(40021185, 1, 1);
                //ms.teachSkill(40021186, 1, 1);
                ms.dispose();
            }
            break;
        case 807100103:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1500);
            } else if (status == 1) {
                ms.inGameDirectionEvent_MoveAction(6);
                ms.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status == 2) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/4", 0, 0, -120, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status == 3) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/5", 0, 0, -120, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status == 4) {
                ms.inGameDirectionEvent(0, 1043, 0);
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121005/tile/begin", 0, 0, 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(1400);
            } else if (status == 5) {
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121005/tile/0", 0, 0, 0, 0, 0);
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/6", 0, 0, -120, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(1440);
            } else if (status == 6) {
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121005/tile/end", 0, 0, 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(960);
            } else if (status == 7) {
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status == 8) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(500);
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807100104, 0);
            }
            break;
        case 807100104:
            if (status == 0) {
                ms.spawnNPCRequestController(9131004, 228, 71);
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
                ms.setNPCSpecialAction(9131004, "back");
                ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(3500);
            } else if (status == 1) {
                ms.inGameDirectionEvent_MoveAction(3);
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/7", 0, 0, -100, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status == 2) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/8", 0, 0, -100, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status == 3) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/9", 0, 250, -150, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status == 4) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/10", 0, 0, -100, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status == 5) {
                ms.inGameDirectionEvent(0, 1045, 0);
                ms.inGameDirectionEvent_Effect("Skill/4200.img/skill/42001000/effect", 0, 0, 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(270);
            } else if (status == 6) {
                ms.inGameDirectionEvent(0, 1046, 0);
                ms.inGameDirectionEvent_Effect("Skill/4200.img/skill/42001005/effect", 0, 0, 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(330);
            } else if (status == 7) {
                ms.inGameDirectionEvent_Effect("Skill/4212.img/skill/42121008/effect", 0, 0, 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(200);
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807100105, 0);
            }
            break;
        case 807100105:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true);
                ms.playVideoByScript("JPKanna.avi");
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807040000, 0);
            }
            break;
        default:
            ms.dispose();
    }
}