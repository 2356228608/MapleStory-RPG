// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
	var mapId = ms.getMapId();
	if (mapId == 867111012) {
		action12(mode, type, selection);
	} else if (mapId == 867111013) {
		action13(mode, type, selection);
	} else {
		action14(mode, type, selection);
	}
}

function action12(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(1012106, "oid=116570", 4800, -56, 4);
		ms.npc_ChangeController(1012003, "oid=116571", 3384, 124, 4);
		ms.npc_ChangeController(1012133, "oid=116572", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400033, "oid=1811047", 5260, 441, 0);
		ms.npc_SetSpecialAction("oid=1811047", "summon");
		ms.npc_ChangeController(9400032, "oid=1811048", 5379, 441, 0);
		ms.npc_SetSpecialAction("oid=1811048", "summon");
		ms.npc_ChangeController(9400031, "oid=1811049", 5540, 441, 1);
		ms.npc_SetSpecialAction("oid=1811049", "summon");
		ms.npc_ChangeController(9400062, "oid=1811050", 5600, 441, 1);
		ms.npc_SetSpecialAction("oid=1811050", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.npc_SetForceMove("oid=1811049", -1, 50, 100);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那个……你好……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("怎么了？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那个，我听说你丢失了乌龟。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我知道你一定很希望得到安慰……你一定感到非常难过……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……？奇怪的家伙。我可没空管小屁孩，你如果没见过乌龟，那就一边玩去吧。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("其实，我也弄丢了对我来说重要的青蛙嘟嘟！我是正在对此进行调查的侦探代号BT！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我现在想抓住一切线索，所以找到了你。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你能告诉我关于失踪的乌龟的事情吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我为什么要告诉你？而且，代号BT是什么啊……你没有别的名字吗？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("名字……有是有……但是，我……不想说……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("为什么啊？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我……被说过好多次……名字很土气……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那……那个！对不起，我似乎太着急了。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我弄丢了重要的朋友……所以想着这种失踪事件会不会有共同点，就找到了你。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你能告诉我一下事情的经过吗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯……乌龟和青蛙……我觉得应该没什么关联啊……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("而且，连自己的名字都不敢说的家伙，我为什么……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好吧……我知道了……如果你不想说，我也不能强迫你……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("等下，你要把别人说的话听完啊，你也太没礼貌了！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你不是说你要抓住一切线索吗，为什么这么快就放弃了！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#不……你看上去不是不想说吗……你干嘛这么凶啊！嘤！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我，我不是故意这么凶的……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("要说起来的话，我正在寻找以前生活在枫叶山丘的叫做奈奈的乌龟。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那家伙从来没有出过枫叶山丘……突然就不见了。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("有人说看见别人把它带走了。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊！我的嘟嘟也是！嘟嘟也从来没有离开过森林，然后被人带走了！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那个……我应该叫你什么呢？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊，我还没说我的名字啊。我叫做剑斗，好了，现在你可以去一边玩了。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嘿嘿，我刚才也说过，我叫做代号BT！是正在搜查嘟嘟失踪事件的侦探！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("原本……我是为了和平而战的勇士……不过现在得先找到消失的朋友！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……行了，如果你现在没什么事要找我，那就快走吧。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("剑斗，你怎么能对别人如此失礼呢。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊，吓死我了！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("神那，我说过好几次了，别这么突然出现……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("抱歉，我叫做神那，代号BT。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你能不能别用这么认真的表情说这个名字……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("代号神那！太帅了！你还带着小猫啊！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我可不喜欢这个小鬼。", 9400040);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("哇！还会说话？！", 9400062);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("说起失踪的动物们……", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我觉得应该是有人看中了奈奈的灵力，把它偷走了。其实，只有我和剑斗知道奈奈是灵物乌龟。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不过，我还是觉得有人知道了奈奈的能力，所以偷走了它。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("看来是有点奇怪啊，代号神那？代号剑斗？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("为什么连我都要这么叫啊。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("能够祈雨的嘟嘟和灵物奈奈……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这两个动物都有着神秘的能力……是不是有点奇怪呢？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("别，别无视我啊……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("看来有坏人正在偷取拥有特殊能力的动物！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("人多力量大，我们一起调查这个事件是不是比较好呢？！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("呃……和这种家伙……我拒绝。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("剑斗，嘟嘟和奈奈……似乎确实有什么关联。我们和她一起找吧，看上去我们应该没什么损失。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("要不然……我就只能诚实地报告说奈奈是因为某人所以不见了。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("……好吧，我们一起吧。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("哇！太好了！我们一起帅气地解决事件……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("就像是……侦探团一样！冒险岛第一的侦探团成立！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我可不怎么喜欢这个主意。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我挺满意的。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不过，如果能用代号来称呼就更好了！代号剑斗和代号神那！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("不要。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我觉得还不错啊。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face2#嘿嘿！好极了！那我们现在就开始正式搜查吧！", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("好，现在已经找到线索了！可以再增加一页了！");
	} else if (status === i++) {
		ms.updateInfoQuest(16157, "point=166");
		ms.forceCompleteQuest(59712);
		ms.fieldEffect_KinesisEXP(2447700);
		ms.updateInfoQuest(59762, "1=1;2=1;3=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.updateInfoQuest(18418, "B=167");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1811047");
		ms.npc_LeaveField("oid=1811048");
		ms.npc_LeaveField("oid=1811049");
		ms.npc_LeaveField("oid=1811050");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action13(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(1012106, "oid=116581", 4770, -56, 5);
		ms.npc_ChangeController(1012003, "oid=116582", 3302, 124, 3);
		ms.npc_ChangeController(1012133, "oid=116583", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400033, "oid=1812384", 5260, 441, 0);
		ms.npc_SetSpecialAction("oid=1812384", "summon");
		ms.npc_ChangeController(9400032, "oid=1812385", 5379, 441, 0);
		ms.npc_SetSpecialAction("oid=1812385", "summon");
		ms.npc_ChangeController(9400031, "oid=1812386", 5560, 441, 1);
		ms.npc_SetSpecialAction("oid=1812386", "summon");
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.npc_SetForceMove("oid=1812386", -1, 50, 100);
		ms.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("首先，我们既然结成了侦探团，那应该做些什么呢？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("等下，我都说了我不喜欢这个名字……", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嘤嘤，为什么……好不容易我才遇到了你们这样的同伴……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("首先，神那！你能感觉到奈奈的波动？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯……其实非常微弱……我不能确定这是不是奈奈的波动，不过……", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("在哪里？！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我感觉勇士部落那边应该有什么……", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("啊，勇士部落？之前明明女士说勇士部落有人正在贩卖珍稀动物。是不是有什么关联呢？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#难道嘟嘟会被卖了吗！！！", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face0#如果他们把奈奈卖了，我就要把那些家伙劈成两半！！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("哎呀……代号剑斗，看来你很珍惜奈奈啊……奈奈一定会感受到你的心意的……", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("#face1#谁喜欢那个慢吞吞的家伙啊！我只是因为别人偷了我的东西而不爽。", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你这样欺骗自己真的好吗，剑斗。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("怎么连你也这样！", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那我们就先去勇士部落看看吧。在这里也得不到什么东西了。", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好的，那我们现在就出发吧？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("在出发之前，先等一下。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我虽然在勇士部落那边感受到了奈奈的波动，但是太微弱了……", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("那要怎么办呢？", 9400032);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("我需要确认一下现在感觉到的波动是不是来自于奈奈。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("你要怎么……确认呢？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("奈奈的灵力很强，所以它在经过的地方都会留下灵力的粒子。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("这附近的动物很多，在动物体内可能会留下奈奈的粒子……", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("虽然只凭一个粒子无法断定就是奈奈，但是如果有多个粒子，应该就能确定了。", 9400033);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好的！那么，只要多多搜集那种粒子就行了吧？", 9400031);
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("嗯，尽可能多搜集一些，我就能更加确定。", 9400033);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("嗯，接下来是搜集灵力啊……现在还能有吗，让我搜集一下看看吧。");
	} else if (status === i++) {
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1812384");
		ms.npc_LeaveField("oid=1812384");
		ms.npc_LeaveField("oid=1812385");
		ms.npc_LeaveField("oid=1812386");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}

function action14(mode, type, selection) {
	if (status == 0 && mode == 0) {
		ms.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		ms.npc_ChangeController(1012106, "oid=116592", 4770, -56, 1);
		ms.npc_ChangeController(1012003, "oid=116593", 3350, 124, 1);
		ms.npc_ChangeController(1012133, "oid=116594", 5022, -56, 1);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, false, false);
		ms.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
		ms.setStandAloneMode(true);
		ms.inGameDirectionEvent_SetHideEffect(1);
		ms.npc_ChangeController(9400033, "oid=1662055", 5260, 441, 0);
		ms.npc_SetSpecialAction("oid=1662055", "summon");
		ms.npc_ChangeController(9400032, "oid=1662056", 5379, 441, 0);
		ms.npc_SetSpecialAction("oid=1662056", "summon");
		ms.npc_ChangeController(9400031, "oid=1662057", 5480, 441, 1);
		ms.npc_SetSpecialAction("oid=1662057", "summon");
		ms.sendNextNoESC_Bottom("这肯定就是奈奈，而且确实是朝着勇士部落的方向去了。", 9400033);
	} else if (status === i++) {
		ms.curNodeEventEnd(true);
		ms.sendNextNoESC_Bottom("那我们就快点去勇士部落，确认奈奈、嘟嘟的痕迹吧。还有明明女士说的商人！！！", 9400031);
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("好，接下来是勇士部落啊。我也得去找找那个商人的痕迹了。");
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("如果还能有痕迹就好了……先看看增加的内容吧？");
	} else if (status === i++) {
		ms.forceCompleteQuest(59714);
		ms.fieldEffect_KinesisEXP(2447700);
		ms.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1");
		ms.inGameDirectionEvent_AskAnswerTime(4200);
	} else if (status === i++) {
		ms.effect_Voice("Field.img/masteryBook/EnchantSuccess");
		ms.inGameDirectionEvent_SetHideEffect(0);
		ms.setInGameDirectionMode(false, false, false);
		ms.setStandAloneMode(false);
		ms.npc_LeaveField("oid=1662055");
		ms.npc_LeaveField("oid=1662056");
		ms.npc_LeaveField("oid=1662057");
		var mapId = parseInt(ms.getInfoQuest(59744).substr(4));
		ms.warp(mapId);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
