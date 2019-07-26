/*
 * 剑豪剧情 - 01 02 04 05 09 10
 * 地图：807100010
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    switch (ms.getMapId()) {
        case 807100010: // 01
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.fieldEffect_ScreenMsg("JPKenji/text0");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false, true);
                ms.dispose();
                ms.warp(807100000, 0);
            }
            break;
        case 807100000: // 02
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(3000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.sendNextNoESC_Bottom("这一时刻终于来到了。第六天魔王的化身——织田信长的传奇到今天终于要结束了。", 9131007);
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("之前的我没能护住自己侍奉的主公，没能保住自己的家门，就连姬儿都没能守护住……一想到今日终于能一雪前耻，我就激动得浑身发抖。");
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("能够一雪前耻当然是好事，但是切记，不要被复仇蒙蔽了你的双眼。我承认你确实很有本事，但是激动过头只会影响你的判断，并让你的动作出现破绽。", 9131007);
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("谢谢你的提醒，不知道能不能控制涌入我剑上的血。");
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("哈哈哈，你能这麽说就代表你还不错，那我就相信你的实力，把本能寺进攻第一步让你迈开可以吗？", 9131007);
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("你是说东门的开门吗？");
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("是喔，你翻过本能寺墙壁打开东门的话武田信玄骑马队进攻践踏魔王的手下的。", 9131007);
            } else if (status === i++) {
                ms.sendNextSNoESC_Bottom("我的切开云雾之剑只要敌人的血，不在乎任务，请交给我吧。");
            } else if (status === i++) {
                ms.sendNextNoESC_Bottom("哈哈哈，很强大的气魄！若可以的话就这样一直都把你留作我的手下，祝你好运，武田信玄骑马队很快会跟上去的！", 9131007);
            } else if (status === i++) {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.fieldEffect_SetObjectState("guide1");
                ms.fieldEffect_SetObjectState("guide2");
                ms.fieldEffect_SetObjectState("guide3");
                ms.fieldEffect_SetObjectState("guide4");
                ms.dispose();
            }
            break;
        case 807100011: // 04
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.fieldEffect_ScreenMsg("JPKenji/text1");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false, true);
                ms.dispose();
                ms.resetMap(807100001);
                ms.warp(807100001, 1);
            }
            break;
        case 807100001: // 05
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.spawnMonster(9421505, -630, 32);
                ms.spawnMonster(9421507, -450, 32);
                ms.spawnMonster(9421505, -270, 32);
                ms.spawnMonster(9421507, -90, 32);
                ms.spawnMonster(9421505, 90, 32);
                ms.spawnMonster(9421507, 270, 32);
                ms.spawnMonster(9421505, 450, 32);
                ms.spawnMonster(9421507, 630, 32);
                ms.teachSkill(40011183, 1, 1);
                ms.teachSkill(40011184, 1, 1);
                ms.teachSkill(40011185, 1, 1);
                ms.teachSkill(40011186, 1, 1);
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/1", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/2", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.topMsg("打倒所有敌兵，将东门开启吧！");
                ms.fieldEffect_ScreenMsg("aran/tutorialGuide2");
                ms.dispose();
            }
            break;
        case 807100012: // 09
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.fieldEffect_ScreenMsg("JPKenji/text2");
                ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(807100003, 1);
            }
            break;
        case 807100003: // 10
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1700);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.sendNextNoESC_Illus("喔啦啦，呼呼… 去抓老虎的路上遇到了鹿，看打扮不像是织田信长所属的武装，怎麽会来到本能寺呀？", 9131000);
            } else if (status === i++) {
                ms.sendNextSNoESC("(与温柔的外貌或者语气不同感觉一股杀气……是织田信长所属的将帅吗？)");
            } else if (status === i++) {
                ms.sendNextSNoESC("我是松山家族的山崎伴信的大儿子剑斗！我来是为了主家和一个家族报仇找回公主殿下 ！");
            } else if (status === i++) {
                ms.sendNextNoESC_Illus("松山，松山……好陌生的名字，当然若是不存在的名字记它又有什麽意义。", 9131000);
            } else if (status === i++) {
                ms.sendNextSNoESC("看你那傲慢且旁若无人的态度，不用知道名字也能肯定是魔王的手下，那麽我和切开云雾之剑也不用在犹豫啦。");
            } else if (status === i++) {
                ms.sendNextSNoESC("现在也不晚，想报上名字尽管报，这将是你在这个世界的最後的声音。");
            } else if (status === i++) {
                ms.sendNextNoESC_Illus("是喔，没必要知道名字啦。", 9131007);
            } else if (status === i++) {
                ms.npc_ChangeController(9131007, 135, 30, 1);
                ms.npc_SetSpecialAction(9131007, "summon");
                ms.sendNextSNoESC("信玄！");
            } else if (status === i++) {
                ms.sendNextNoESC_Illus("看你就知道这次混战从哪里开始的，难道不是吗？四天王，明智光秀！", 9131007);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/3", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/4", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.sendNextNoESC_Illus("喔啦啦，呼呼……果然武田信玄名不虚传呀，第一眼就知道我的真实身分，连我要谋反的事情也知道了。 ", 9131000);
            } else if (status === i++) {
                ms.sendNextNoESC_Illus("第一次亲自见你，但是根据我听到的传闻你不是那种可以在别人手下很长时间的人，怎麽样，若是把剑对准原来的主人，那麽考虑一下要不要联手啊？", 9131007);
            } else if (status === i++) {
                ms.sendNextSNoESC("信玄，就是那家伙把松山烧了！怎麽可以跟大仇人联手！ 明智光秀觉悟吧！");
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/5", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(1000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/6", 0, -100, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/7", 0, -100, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/8", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/9", 0, -100, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/10", 0, 0, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1300);
            } else if (status === i++) {
                ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
                ms.inGameDirectionEvent_AskAnswerTime(1300);
                ms.inGameDirectionEvent_OneTimeAction(1033, 0);
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/11", 0, -100, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/12", 0, -100, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/13", 0, 150, -120);
                ms.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === i++) {
                ms.npc_SetSpecialAction(9131007, "attack");
                ms.inGameDirectionEvent_AskAnswerTime(300);
            } else if (status === i++) {
                ms.inGameDirectionEvent_Effect("Effect/DirectionJP3.img/effect/kenjiTuto/shingenAttack/0", 0, 0, 0);
                ms.inGameDirectionEvent_AskAnswerTime(400);
            } else if (status === i++) {
                ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.npc_LeaveField(9131007);
                ms.dispose();
                ms.warp(807100004, 1);
            }
            break;
        case 807100005: // 13
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.playVideoByScript("JPHayato.avi");
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