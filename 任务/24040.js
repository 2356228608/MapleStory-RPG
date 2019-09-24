/*  This source is made by BMS Team
 *  脚本功能：[新手任务]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function start(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {
qm.forceStartQuest(24040, "");
qm.npc_LeaveField("oid=1328");
qm.npc_LeaveField("oid=1329");
qm.npc_LeaveField("oid=1330");
qm.npc_LeaveField("oid=1337");
qm.npc_LeaveField("oid=1338");
qm.npc_LeaveField("oid=1320");
qm.npc_LeaveField("oid=1324");
qm.npc_LeaveField("oid=1325");
qm.npc_LeaveField("oid=1326");
qm.npc_LeaveField("oid=1327");
qm.npc_LeaveField("oid=1332");
qm.forceStartQuest(24093, "1");
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, true, false);
qm.inGameDirectionEvent_Effect( "Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", 2000, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.inGameDirectionEvent_Effect( "Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", 2000, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "等等……好像有点奇怪？我的等级是多少？", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "10……级？！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.setInGameDirectionMode(false, true, false);
qm.onScriptMessage(3, 0, 0, 0,  "……到底是怎么回事？我的等级……怎么这么低？！只有10级？10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！", 256, 0, 16, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "哎呀！不是梦！这是黑魔法师的诅咒的影响吗？！……呃呃呃……可恶的黑魔法师！本来就没有任何好感，现在真的是不可原谅！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 500 exp", 257, 0, 16, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(24040, "");
qm.forceCompleteQuest(24040);
qm.forceStartQuest(11620, "0");
qm.updateInfoQuest(15710, "lasttime=19/09/20/20/38");
qm.effect_Direction("Effect/Direction5.img/mersedesQuest/Scene2", 0, 0, 0);
qm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/mercedes/q24040");
qm.forceStartQuest(29952, "");//曾经的英雄
qm.forceCompleteQuest(29952);//曾经的英雄
qm.gainItem(1142336,1);//曾经的英雄
qm.onScriptMessage(3, 0, 0, 0,  "啊……啊……冷静，冷静下来，双弩精灵。着急也没用。冷静地把现在的情况整理一下。", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "1. 黑魔法师的诅咒没有消失。从长老们和其他百姓们还困在冰里来看，这一点可以确认。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "2. 醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "3. 虽然想到外面去看看冒险岛世界的情况，但是不行。因为……我现在等级只有10级。这到底是怎么回事！我竟然只有10级！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "黑魔法师的最后一个诅咒……那个诅咒的影响当然会很大，看来我是太低估了。而且也不知道过了多长时间，被困在冰里这么长时间，身体也便僵硬了。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "受了伤，又受到诅咒，被困在冰里这么长时间，等级变低是当然的事情。当然的事情……怎么会这样！快让我恢复成原来的等级！我双弩精灵竟然只有10级！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "……呼，呼……冷，冷静。不是尖叫的时候！先确认一下身体状态。真的只有10级了吗？该不会还有伤没好吧？手脚还能动吗？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
qm.dispose();
	} else {
		qm.dispose();
	}
}



function end(mode, type, selection) {
    status++;
    var i = -1;
	if (status <= i++) {
		qm.dispose();
	} else if (status === i++) {

qm.forceStartQuest(24040, "");
qm.npc_LeaveField("oid=1328");
qm.npc_LeaveField("oid=1329");
qm.npc_LeaveField("oid=1330");
qm.npc_LeaveField("oid=1337");
qm.npc_LeaveField("oid=1338");
qm.npc_LeaveField("oid=1320");
qm.npc_LeaveField("oid=1324");
qm.npc_LeaveField("oid=1325");
qm.npc_LeaveField("oid=1326");
qm.npc_LeaveField("oid=1327");
qm.npc_LeaveField("oid=1332");
qm.forceStartQuest(24093, "1");
qm.curNodeEventEnd(true);
qm.setInGameDirectionMode(true, true, false);
qm.inGameDirectionEvent_Effect( "Effect/Direction5.img/effect/mercedesQuest/merBalloon/0", 2000, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.inGameDirectionEvent_Effect( "Effect/Direction5.img/effect/mercedesQuest/merBalloon/1", 2000, 0, -100, 1, 0, 0, "oid=undefined", undefined, undefined);
qm.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "等等……好像有点奇怪？我的等级是多少？", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 1, 0,  "10……级？！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.setInGameDirectionMode(false, true, false);
qm.onScriptMessage(3, 0, 0, 0,  "……到底是怎么回事？我的等级……怎么这么低？！只有10级？10级？不是100级，是10级？我还在做梦吗？掐一下自己的话，会醒来吗？啊！", 256, 0, 16, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "哎呀！不是梦！这是黑魔法师的诅咒的影响吗？！……呃呃呃……可恶的黑魔法师！本来就没有任何好感，现在真的是不可原谅！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 500 exp", 257, 0, 16, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.forceStartQuest(24040, "");
qm.forceCompleteQuest(24040);
qm.forceStartQuest(11620, "0");
qm.updateInfoQuest(15710, "lasttime=19/09/20/20/38");
qm.effect_Direction("Effect/Direction5.img/mersedesQuest/Scene2", 0, 0, 0);
qm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/mercedes/q24040");
qm.forceStartQuest(29952, "");//曾经的英雄
qm.forceCompleteQuest(29952);//曾经的英雄
qm.gainItem(1142336,1);//曾经的英雄
qm.onScriptMessage(3, 0, 0, 0,  "啊……啊……冷静，冷静下来，双弩精灵。着急也没用。冷静地把现在的情况整理一下。", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "1. 黑魔法师的诅咒没有消失。从长老们和其他百姓们还困在冰里来看，这一点可以确认。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "2. 醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "3. 虽然想到外面去看看冒险岛世界的情况，但是不行。因为……我现在等级只有10级。这到底是怎么回事！我竟然只有10级！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "黑魔法师的最后一个诅咒……那个诅咒的影响当然会很大，看来我是太低估了。而且也不知道过了多长时间，被困在冰里这么长时间，身体也便僵硬了。", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "受了伤，又受到诅咒，被困在冰里这么长时间，等级变低是当然的事情。当然的事情……怎么会这样！快让我恢复成原来的等级！我双弩精灵竟然只有10级！", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
qm.onScriptMessage(3, 0, 0, 0,  "……呼，呼……冷，冷静。不是尖叫的时候！先确认一下身体状态。真的只有10级了吗？该不会还有伤没好吧？手脚还能动吗？", 257, 0, 17, 0, 0, 0); // [类型] 普通对话
qm.dispose();
	} else {
		qm.dispose();
	}
}
