/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]剑豪系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.npc_ChangeController(9130031, "oid=109315", 53, 32, 1);
qm.npc_ChangeController(9130082, "oid=109316", 53, 32, 1);
qm.onScriptMessage(3, 0, 0, undefined,  "呜……啊！这……这里是什么地方？ 姬儿，姬儿人呢！？我的斩霞之刀又跑到哪里去了？", 256, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "呜……不好。不仅斩霞之刀消失不见了，就连我身上的铠甲也被彻底破坏了。", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "先来冷静地整理一下现状吧。我记得在那个时候，我为了救出姬儿而进入了本能寺，并与信长进行了对峙……醒来后的姬儿呼唤了一声我的名字，瞬间就有一道强烈的光柱出现，我也随之昏了过去。", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "周围的景色看起来非常陌生……很明显，这里并不是本能寺。这究竟是怎么一回事啊？话说回来，在刚才醒来的时候，我似乎听到了有人说话的声音。先让我四周查探一下再说吧。", 0, 16, 56, 0, 1, 0); // [类型] 接受/拒绝
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "#face0#我自己没有出什么问题吧？虽说是昏厥了一段时间……脑子里还是有些呆呆的。身上也多少受了一点伤。但值得庆幸的是，并不是什么重伤。", 256, 0, 36, 0, 1, 9130024); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9130031, 0, undefined,  "我是共同参加本能寺攻略战的尼子家家臣，我名为山中幸盛。在说明事情的来龙去脉之前，可不可以告诉我你的名字呢？", 0, 16, 56, 0, 1, 0); // [类型] 接受/拒绝
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "我是松山家的家臣，姐崎朝信的儿子，名为姐崎剑斗。", 256, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "#face1#姐崎剑斗……真是久仰了。能见到鼎鼎有名的晓月流剑圣，实在是我的光荣。", 257, 0, 36, 0, 1, 9130024); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "阁下太客气了，能见到人称忠肝义胆的幸盛，才真是我的荣幸呢。如果知道你也参加了本能寺攻略战，我真应该早点过来和你打声招呼了。实在是太遗憾了。", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "#face0#虽然还有很多话想说，但我现在还是先简单说明一下本能寺攻略战时候发生的问题，以及现在的情况吧。等你做好心理准备之后，再来和我进行对话吧。", 257, 0, 36, 0, 1, 9130024); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "#face0#我本以为你会为弄不清现在究竟是什么状况而感到混乱……还是说，你已经察觉到了呢？现在我们所处的地方和我们原本所在的日本并不相同。虽说看起来有些相似，但其实是完全不一样的两个地方。", 257, 0, 36, 0, 1, 9130024); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "看起来有些相似，但其实是完全不一样的两个地方？", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "#face0#没错。说得再清楚一点吧，这里并不是日本。而是我们所不知道的完全陌生的世界。虽然不清楚究竟发生了什么事，但是在我们进行本能寺攻略战的途中，突然有一道耀眼的光柱从本堂方向射出。而后，我们就来到了这个完全未知的世界。而且，我们每个人所到达的时间点和位置都不一样。", 257, 0, 36, 0, 1, 9130024); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, undefined,  "未知的世界……？真的会有这样的事情发生吗？", 257, 0, 56, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(4, 9130031, 0, undefined,  "#face0#这个嘛，其实具体什么情况我也不太清楚。只不过，先我们一步到达这里的人聚在一起讨论的时候，得出了这样一个结果。先行到达的他们已经在这座丘陵之上建起了新的阵地。我们先一起到新的阵地去吧。", 0, 3, 36, 0, 1, 9130024); // [类型] 是/否
} else if (status === i++) {
qm.onScriptMessage(4, 9130031, 0, undefined,  "#face0#我们将新的据点称作枫叶山丘。这是一个飘散着鲜红枫叶的地方。好了，去营地看看吧。我来帮忙带路。", 0, 16, 36, 0, 1, 9130024); // [类型] 接受/拒绝
} else if (status === i++) {
qm.OnStartNavigation(807040100, 1, "9130024", 0);
qm.forceStartQuest(57102);
qm.dispose();

	}
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
		qm.onScriptMessage(4, 9130031, 0, undefined,  "#face0#我们将新的据点称作枫叶山丘。这是一个飘散着鲜红枫叶的地方。好了，去营地看看吧。我来帮忙带路。", 0, 16, 36, 0, 1, 9130024); // [类型] 接受/拒绝
	} else if (status === i++) {
		qm.forceCompleteQuest(57102);
		qm.gainExp(1242);
		qm.dispose();
	}
}
