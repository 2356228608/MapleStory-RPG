/*
 * 剑豪剧情 - 03 07
 * 地图：本能寺 - 本能寺东侧外墙 (807100001)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    switch (cm.getMapId()) {
        case 807100000: // 03
            cm.sendNextNoESC_Bottom("翻过本能寺外墙，打开东门。");
            cm.dispose();
            break;
        case 807100002: // 07
                var i = -1;
                if (status <= i++) {
                    cm.dispose();
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
		default:
	cm.dispose();
		break;
    }
}