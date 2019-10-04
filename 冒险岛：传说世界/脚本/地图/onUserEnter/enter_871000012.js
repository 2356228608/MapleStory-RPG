/**
-- BMS 地图脚本空白模板 ---------------------------------------------------------------------------
地图ID： 871000012
地图名称：
-- 更新日志 ---------------------------------------------------------------------------------------
2019-08-13 Jessefjxm 建立模板
2019-09-12 Jessefjxm 更新模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

// 开头

function action(mode, type, selection) {
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
		// [2019/9/28 8:21:14] 切换地图: 从 cm.warp(871200197) -> 至: cm.warp(871000012)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.npc_ChangeController(9400929, "oid=11111133", -830, 300, 0);
		cm.npc_SetSpecialAction("oid=11111133", "summon", 0, 0);
		cm.npc_ChangeController(9400928, "oid=11111134", -350, 300, 0);
		cm.npc_SetSpecialAction("oid=11111134", "summon", 0, 0);
		cm.npc_ChangeController(9400933, "oid=11111135", 70, 300, 1);
		cm.npc_SetSpecialAction("oid=11111135", "summon", 0, 0);
		cm.npc_ChangeController(9400932, "oid=11111136", 500, 300, 1);
		cm.npc_SetSpecialAction("oid=11111136", "summon", 0, 0);
		cm.npc_SetSpecialAction("oid=11111135", "special", -1, 0);
		cm.npc_ChangeController(9400935, "oid=11111137", 1300, 300, 1);
		cm.npc_SetSpecialAction("oid=11111137", "summon", 0, 0);
		cm.npc_ChangeController(9400936, "oid=11111138", 1350, 300, 1);
		cm.npc_SetSpecialAction("oid=11111138", "summon", 0, 0);
		cm.sendNewEffects(17, 0, 1000, 600, -800, 150);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.sendNewEffects(13, 5000, 1500, 0, 0, 0);
	} else if (status === i++) {
		cm.effect_Text("#fn黑体##fs20#凯兰西亚广场", 50, 2000, 6, -50, -50, 1, 4, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.sendNewEffects(17, 0, 500, 1000, 900, -450);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.sendNewEffects(12, 0, 800, 150, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.sendNewEffects(12, 0, -290, 150, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNewEffects(17, 0, 1000, 2000, -330, 320);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 0, "oid=undefined", undefined, undefined);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#b!!!", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.sendNewEffects(13, 0, -300, 0, 0, 0);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b等，等一下？！", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 400);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNewEffects(13, 2000, 300, 0, 0, 0);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", -1);
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, 1, 0, 1, "oid=11111134", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, "oid=11111134", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", 1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111134", 1, 100, 100);
		cm.onScriptMessage(3, 0, 1, 0, "#b哎，哎！我们来聊一下！ ", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face3#你……你干嘛呀！怎么了？！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", -1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", 1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111134", 1, 50, 100);
		cm.inGameDirectionEvent_ForcedFlip10(2, 170);
		cm.sendNewEffects(13, 2000, 150, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b抓住了！ ", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", -1);
		cm.onScriptMessage(3, 0, 1, 0, "#face3#哼，哼。怎么了？ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b你还记得我吧？\r\n这房屋和宣传单上的也太不一样了！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_LeaveField("oid=11111133");
		cm.npc_ChangeController(9400929, "oid=11111299", -550, 300, 0);
		cm.npc_SetSpecialAction("oid=11111299", "summon", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111299", 1, 250, 100);
		cm.onScriptMessage(3, 0, 1, 0, "#face3#虽然照片里看起来有点~大……但我不是说过了是个小巧朴素的家嘛！ ", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face3#艾米……？把房屋卖给#h0#的人是艾米？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/ddam", 0, 0, 0, 1, 0, 1, "oid=11111134", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face3#哥……哥哥？！哥哥你怎么在这里！？ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b你们俩认识？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#这是我双胞胎妹妹。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#等一下，艾米！那根本不是我们的房子，你怎么能卖给其他人呢？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#是我的房子！我买下来的！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#你哪里来的房屋……", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#之前买了这房屋的姐姐以5万金币的价格私下转手卖给了我呢！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b5万金币……？5万金币买进然后50万金币卖出吗？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#你这人看来不明白啊！不动产投资本来就是这样的！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#艾米……我可不是这么养育你的啊……", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#等一下，哥哥你又在说什么啊！我是自己长大的，可不是哥哥养我长大的哦？啊，又来了！别做出这种悲伤的表情啊！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#艾米……把钱还给人家。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#… ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#… ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b… ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#等一下，这可是正当交易啊~！还写了合同呢！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face4#但是……哥哥我还是觉得应该把差额还给人家。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#… \r\n#b#L0#把差额45万金币还给我。#l\r\n#L1#合同就是合同，即使不返还45万金币也可以。#l", 0, 6, 37, 0, 1, 9400920); // [类型] 选择菜单
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		selectionLog[666] = selection;
		if (selectionLog[666] == 0) {
			cm.onScriptMessage(3, 0, 1, 0, "#face3#……切，给你。这可真是赔本买卖，我还把它清理干净了来着！ ", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 1, 0, "#face2#真的吗？果然！勇士大人太帅了！我最初看到你的时候，就一下子感觉到了你的帅气哦！", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		}
	} else if (status === i++) {
		if (selectionLog[666] == 0) {
			cm.onScriptMessage(3, 0, 1, 0, "#face1#哎呀，你真是善良呢，艾米。 ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
			status++;
		} else {
			cm.onScriptMessage(3, 0, 1, 0, "#face2#以后我一定会对你很好的！", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#……不用对我很好也没关系。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		if (selectionLog[666] == 0) {
			cm.onScriptMessage(3, 0, 1, 0, "#face1#现在再来参观下广场吧？ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
		} else {
			cm.onScriptMessage(3, 0, 1, 0, "#face2#啊！你是来参观广场的吧？让我来带路吧！我们一起去！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
		}
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", 1);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111134", 1, 100, 100);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 110);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111299", 1, 100, 100);
		cm.sendNewEffects(13, 1000, 150, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#你好，米兰达。你今天也在画素描啊！今天的天气让人很容易迸发灵感吧？", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#你好，埃尔宾。你好，艾米。 \r\n多亏了你们，我想到了一个好主意。你们觉得说谎警示钟怎么样？ ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#呃……呃……你都看到了啊！ ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#能，能帮到米兰达的工作可真好呢……如果你画好了，一定要给我看看。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#对了，来打个招呼吧！这位是#h0#。今天刚搬到我们隔壁。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1##h0#，这位是米兰达。她是个多才多艺的艺术家，最近正在制作装修物品，对吧？ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#(点头) ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#很高兴见到你，#h0# ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#你有新做什么吗？我很喜欢米兰达的作品，让我们看看吧！", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#今天没有呢。 ", 257, 0, 37, 0, 1, 9400924); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#可惜了，那就下次再参观吧！再见", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111134", 1, 380, 100);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 420);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111299", 1, 350, 100);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.sendNewEffects(13, 3000, 450, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#咳，今天米兰达也很漂亮吧？", 256, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#要是被米兰达听见了，你就要被打了~", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#真是的，才不会呢。", 257, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#别幼稚了，打个招呼吧！这是新搬到我们隔壁的#h0#。", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#哈哈哈，你好，我是凯兰西亚最棒的木匠，我叫艾丹，哈哈", 257, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b哇！ 很高兴见到你，我叫#h0#。正好我家里需要很多家具，比如桌子……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#……啊！对了！我忘记了我还有事儿呢。那你们就慢慢参观，注意安全啊。哈哈。", 257, 0, 37, 0, 1, 9400923); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111136", -1, 500, 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", -1);
		cm.npc_LeaveField("oid=11111138");
		cm.npc_ChangeController(9400936, "oid=11111379", 50, 300, 0);
		cm.npc_SetSpecialAction("oid=11111379", "summon", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111379", 1, 200, 100);
		cm.onScriptMessage(3, 0, 1, 0, "#face3#艾丹这个傻瓜，说谎也太明显了！ ", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face0#艾米，你可不能这么说。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", 1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111134", 1, 450, 100);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(2, 500);
		cm.npc_SetForceMove("oid=11111299", 1, 450, 100);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111379", 1, 400, 100);
		cm.sendNewEffects(13, 4000, 500, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#很遗憾，艾丹还只是个学徒，所以不能制作家具售卖。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#他的师父卡朋特现在不在工坊，所以暂时由艾丹运营，修理一些破家具。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b真是可惜呢。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#这里是特鲁迪家的面包店。 ", 257, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#这里是建筑家凯尼斯的家。是向居民们开放的空间。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.sendNewEffects(13, 3000, 0, -650, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#嗯~~现在凯尼斯好像不在，之后再给你介绍吧。", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNewEffects(13, 0, 0, 650, 0, 0);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#只要再走一点就是艾丹家的家具工坊，过了工坊就是前往森林的入口。广场就差不多是这样了！", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.npc_SetForceMove("oid=11111137", -1, 250, 100);
		cm.sendNewEffects(13, 2000, 100, 0, 0, 0);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#哥哥啊啊啊啊~！姐姐啊啊啊啊~~！ 凯蒂~~！ ", 256, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#特鲁迪~小心不要跌倒了~", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#这是谁~？", 256, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#这是今天搬到哥哥家隔壁的勇士大人。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face0#勇……士大人？ ", 257, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=11111137", "eye", 5000, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#b见到你很高兴，特鲁迪？ ", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/flower", 10000, 0, 0, 1, 0, 1, "oid=11111137", 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#啊啊啊", 257, 0, 37, 0, 1, 9400926); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111137", 1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11111137", 1, 500, 100);
		cm.npc_SetForceMove("oid=11111379", 1, 1000, 100);
		cm.npc_LeaveField("oid=11111136");
		cm.onScriptMessage(3, 0, 1, 0, "#face2#怎，怎么了。特鲁迪现在是在害羞吗？啊啊啊！真可爱！", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#看来是因为你是陌生人吧。这个村子已经很久没有外人来过了。我也觉得很激动，很开心呢！总觉得会有什么更开心的事情发生呢。 ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=11111134", -1);
		cm.sendNewEffects(13, 2000, -100, 0, 0, 0);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#这~都是因为我啊。", 256, 0, 37, 0, 1, 9400920); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#哈哈，那就重新回到家里去吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.npc_setForceFlip("oid=11111299", -1);
		cm.sendNewEffects(13, 3000, -1000, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.forceCompleteQuest(64595);
		cm.setInGameDirectionMode(false, true, false);
		cm.npc_LeaveField("oid=11111134");
		cm.npc_LeaveField("oid=11111135");
		cm.npc_LeaveField("oid=11111137");
		cm.npc_LeaveField("oid=11111299");
		cm.npc_LeaveField("oid=11111379");
		cm.updateInfoQuest(18418, "B=61296");
		// [2019/9/28 8:22:33] 即将切换地图: cm.warp(871000012) -> cm.warp(871000000)
		cm.warp(871000000);
		cm.dispose();
	} else {
		ms.dispose();
	}
}
