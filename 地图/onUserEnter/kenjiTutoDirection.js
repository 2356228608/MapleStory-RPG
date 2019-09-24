/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]剑豪系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
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
	ms.setInGameDirectionMode(true, false, false);
	ms.setStandAloneMode(true);
	ms.fieldEffect_ScreenMsg("JPKenji/text0");
	ms.inGameDirectionEvent_AskAnswerTime(7000);
	} else {
	ms.setInGameDirectionMode(false, true, false);
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
	ms.setInGameDirectionMode(true, false, false);
	ms.inGameDirectionEvent_MoveAction(1);
	ms.inGameDirectionEvent_AskAnswerTime(3600);
	} else if (status === i++) {
	ms.curNodeEventEnd(true);
	ms.inGameDirectionEvent_MoveAction(0);
	ms.onScriptMessage(3, 0, 1, 9131007,  "#face0#这一时刻终于来到了。第六天魔王的化身——织田信长的传奇到今天终于要结束了。", 256, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "之前的我没能护住自己侍奉的主公，没能保住自己的家门，就连姬儿都没能守护住……一想到今日终于能一雪前耻，我就激动得浑身发抖。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "#face0#能够一雪前耻当然是好事，但是切记，不要被复仇蒙蔽了你的双眼。我承认你确实很有本事，但是激动过头只会影响你的判断，并让你的动作出现破绽。", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "是，这一点我一定会铭记于心。不过，我可不确定能否控制住自己沾满鲜血的刀剑。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "#face1#哈哈哈，还有心情说这种玩笑话，应该就没什么问题了。我很相信你的本事，率先冲入本能寺的任务可不可以就交给你来办了？", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "是要我负责打开东门对吧？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "#face0#没错。只要你越过本能寺的外墙并打开东门，武田骑马队就可以大举进攻，并将魔王的手下彻底打飞。 ", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "只要能得到敌人的鲜血，我的斩霞之刀是不会拒绝任何任务的。就请放心交给我吧。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 1, 9131007,  "#face1#哈哈哈，我就欣赏你的这种过人胆识！真希望你能加入我的门下啊。好了，祝你好运吧。武田骑马队也会立刻随你而去的！", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.setInGameDirectionMode(false, true, false);
	ms.OnStartNavigation(807100000, 0, "out00", 0);
	ms.dispose();
            }
            break;
        case 807100011: // 03
            var i = -1;
            if (status <= i++) {
                ms.dispose();
	} else if (status === i++) {
	ms.curNodeEventEnd(true);
	ms.setInGameDirectionMode(true, false, false);
	ms.fieldEffect_ScreenMsg("JPKenji/text1");
	ms.inGameDirectionEvent_AskAnswerTime(7000);
	} else if (status === i++) {
	ms.setInGameDirectionMode(false, false, false);
	ms.setStandAloneMode(false);
	ms.dispose();
	ms.openNpc(0,"本能寺_东侧外墙end");
	//ms.warp(807100001, 1);
            }
            break;
        case 807100001: // 04
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
	//这个吊NPC不出来
	ms.npc_ChangeController(9131009, "oid=109396", 514, 32, 1);
	ms.updateInfoQuest(57100, "npc9131009=1");
	ms.curNodeEventEnd(true);
	ms.setInGameDirectionMode(true, false, false);
	ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
	ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
	ms.curNodeEventEnd(true);
	ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/1", 0, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
	ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
	ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/2", 0, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
	ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
	ms.playerMessage(-1, "打倒所有敌兵，将东门开启吧！");
	ms.inGameDirectionEvent_ForcedFlip10(2, 200);
	ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
	ms.fieldEffect_ScreenMsg("aran/tutorialGuide2");
	ms.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
	ms.setInGameDirectionMode(false, true, false);
	ms.getTopMsgFont("打猎超出等级范围的怪物时，经验值和金币获得量将大幅减少。", 3, 20, 20, 0);
	ms.dispose();
        ms.warp(807100002, 1);
            }
            break;
	case 807100002: // 05
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
	ms.npc_ChangeController(9131007, "oid=109400", 152, 32, 1);
	ms.npc_ChangeController(9131008, "oid=109401", 274, 32, 1);
	ms.npc_ChangeController(9131008, "oid=109402", 359, 32, 1);
	ms.npc_ChangeController(9131008, "oid=109403", 447, 32, 1);
	ms.npc_ChangeController(9131008, "oid=109404", 542, 32, 1);
	ms.onScriptMessage(3, 0, 0, 9131007,  "#face0#你果然出色地完成了任务。我越来越想将你收入麾下了啊。", 256, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "这事并不困难。而且在战斗已经打响的时候，就更加轻而易举了……不过，这到底是怎么了？难道负责北方的上杉或者南方的士兵先闯进去了吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "#face0#这一次的突入作战，必须是位于各个方向的士兵同一时间冲进去才行。除非是有人想要恶意破坏作战，否则应该不会有人先一步进去的。不过我倒是已经心里有数了，就是还不能确定是否真是这么回事。总之，现在说什么也是白搭。", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "#face0#趁着境内局势混乱之际，我们顺利闯入了其中，眼下情况对我们十分有利。等拦下信长之后，再来查明真相也不迟。先一鼓作气攻入大殿吧。", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "好。那我先告辞了！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.OnStartNavigation(807100012, 0, "in00", 0);
	ms.onScriptMessage(3, 0, 0, 9131007,  "#face0#做得好。真是越来越想让你加入我的门下了。", 256, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "根本就没有什么难度。尤其是现在已经正式开战，就显得更加简单了。不过到底是怎么回事？难道是北侧的上杉军和南边的士兵们已经先一步冲进去了吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "#face0#原定计划是各方面同时闯入，只要没有人临时变卦无视行动信号，就不可能出现这种情况。虽然我心里隐隐有个猜测，不过……无法证实的事情，就算告诉你也没有意义。", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "#face0#本能寺内已经是一片混乱，我们也更容易冲进去了。就现状而言，对我们完全是有利无弊的。就等打倒信长之后再来研究这到底是怎么一回事吧。现在，先让我们趁势攻入本能寺的正殿吧。", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
	} else if (status === i++) {
	ms.onScriptMessage(3, 0, 0, 9131007,  "我明白了！那就上吧！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
	ms.dispose();
	ms.warp(807100012);
            }
            break;
	case 807100012: // 06
            var i = -1;
            if (status <= i++) {
                ms.dispose();
	} else if (status === i++) {
	ms.curNodeEventEnd(true);
	ms.setInGameDirectionMode(true, true, false);
	ms.fieldEffect_ScreenMsg("JPKenji/text2");
	ms.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
	ms.curNodeEventEnd(true);
	ms.setInGameDirectionMode(false, true, false);
	ms.dispose();
	ms.warp(807100003, 1);
            }
            break;
        case 807100003: // 07
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
ms.npc_ChangeController(9131000, "oid=109408", -105, 32, 0);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_ForcedFlip10(1, 280);
ms.inGameDirectionEvent_AskAnswerTime(2200);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 0,  "#face0#哎呀……我本想去猎虎，没想到会在途中碰到一头小鹿。看你这身打扮，应该并不是信长大人手下的武将吧……不知你特意跑来这已经闹成一团的本能寺，究竟所为何事呢？", 256, 0, 37, 0, 1, 9130009); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "（哼，这人的表情和口气虽然都十分平和，但却一直在散发着惊人的杀气……他是信长手下的武将吗？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "我乃松山家元老姐崎朝信的次子——姐崎剑斗！ 为了报主公及家门之仇，也为了夺回姬儿，特此前来！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#face0#松山，松山啊……似乎没听说过这个名字呢。就算记住这种已经不复存在的家名，也没有任何意义了吧。", 257, 0, 37, 0, 1, 9130009); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "即使你不自报家门，只要看到你这副旁若无人的傲慢态度，应该可以确定你就是魔王的手下了。那么，我和斩霞之刀就没有丝毫犹豫的理由了。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "你要想自报家门，那就尽管说吧。因为这会成为你在这个世界上说出的最后一句话。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_ChangeController(9131007, "oid=6412910", 135, 30, 1);
ms.npc_SetSpecialAction("oid=6412910", "summon", 0, 0);
ms.onScriptMessage(3, 0, 1, 0,  "#face0#看来是没有必要询问你的名字了。", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "信玄大人！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#face0#一看到你，我就能够猜到这场乱战究竟是因何而起的了。没错吧？织田四天王——明智光秀！", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/3", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/4", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#face0#哎呀呀，呵呵……真不愧是稀世的谋臣——武田信玄大人啊。不仅一眼看穿了我的真实身份，还猜到了是我起兵谋反……", 256, 0, 37, 0, 1, 9130009); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#face0#虽然我们是第一次见面，但是依据至今为止你的各种风评，我就猜到你绝不会长时间屈居人下……不过呢，既然你要起兵谋反自己的旧主，不妨在此和我们一起联手吧？", 257, 0, 37, 0, 1, 9130000); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "信玄大人，就是这个男人烧毁了松山家！我是绝对不会跟这种不共戴天的仇敌联手的！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/5", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/6", 0, -100, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/7", 0, -100, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/8", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/9", 0, -100, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/10", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(1300);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/11", 0, -100, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/12", 0, -100, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/13", 0, 150, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1400);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=6412910");
ms.dispose();
ms.warp(807100004, 1);
            }
            break;

        case 807100004: // 08
            var i = -1;
            if (status <= i++) {
                ms.dispose();
            } else if (status === i++) {
ms.npc_ChangeController(9131005, "oid=109412", 187, 51, 0);
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, false, false);
ms.inGameDirectionEvent_ForcedFlip10(1, 550);
ms.inGameDirectionEvent_AskAnswerTime(4200);
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 0,  "我无意对女性兵戎相向。速速退开吧。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#face0#哼，真是个没有礼貌的毛头小子。你知不知道我是什么人？我可是斋藤道三的女儿，第六天魔王织田信长的正室妻子——浓姬。", 257, 0, 37, 0, 1, 9131005); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "不要让我再次重复这句话。我无意对女性兵戎相向。快点给我退开。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 0,  "#face0#你还挺狂妄的嘛。那就让我来试试看，你的本事是不是和你的态度一样拽上天！", 257, 0, 37, 0, 1, 9131005); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=109412", "step", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1080);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/14", 0, -100, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/15", 0, -150, -150, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/16", 0, -150, -150, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms. inGameDirectionEvent_Effect( "Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/17", 0, 0, -120, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(1800);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(5);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.dispose();
ms.warp(807100005,0);
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