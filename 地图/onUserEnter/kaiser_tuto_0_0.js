/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]狂龙战士系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
ms.updateInfoQuest(26900, "mt=1");
ms.updateInfoQuest(26900, "mt=1;al=1");
ms.updateInfoQuest(26900, "mt=1;id=0;al=1");
ms.updateInfoQuest(26900, "mt=1;id=0;al=1");
ms.updateInfoQuest(26902, "");
ms.updateInfoQuest(26903, "");
ms.updateInfoQuest(26904, "");
ms.updateInfoQuest(26905, "");
ms.updateInfoQuest(26900, "sf=0;mt=1;id=0;al=1");
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.onScriptMessage(3, 0, 1, 0,  "文化部《互联网文化管理暂行规定》第十七条\r\n互联网文化单位不得提供载有以下内容的文化产品：\r\n(一)反对宪法确定的基本原则的\r\n(二)危害国家统一、主权和领土完整的\r\n(三)泄露国家秘密、危害国家安全或者损害国家荣誉和利益的\r\n(四)煽动民族仇恨、民族歧视，破坏民族团结，或者侵害民族风俗、习惯的\r\n(五)宣扬邪教、迷信的\r\n(六)散布谣言，扰乱社会秩序，破坏社会稳定的\r\n(七)宣扬淫秽、赌博、暴力或者教唆犯罪的\r\n(八)侮辱或者诽谤他人，侵害他人合法权益的\r\n(九)危害社会公德或者民族优秀文化传统的\r\n(十)有法律、行政法规和国家规定禁止的其他内容的。\r\n 文化部网络游戏举报和联系电子邮箱wy@cms.gov.cn", 256, 0, 5, 0, 0, 9010000); // [类型] 普通对话
} else if (status === i++) {
ms.updateInfoQuest(16119, "");
ms.updateInfoQuest(16150, "");
ms.updateInfoQuest(27039, "");
ms.updateInfoQuest(56995, "state=0");
ms.updateInfoQuest(14756, "d=19/09/22/17/22");
ms.updateInfoQuest(14755, "");
ms.updateInfoQuest(52998, "");
ms.updateInfoQuest(65132, "");
ms.updateInfoQuest(56070, "LUT=19000101");
ms.updateInfoQuest(61585, "0=20190922");
ms.updateInfoQuest(26015, "");
ms.updateInfoQuest(26011, "");
ms.updateInfoQuest(32547, "lastDecTime=2019/09/22 17:22:19");
ms.updateInfoQuest(19019, "id=0");
ms.updateInfoQuest(19019, "date=0;id=0");
ms.updateInfoQuest(19019, "expired=1;date=0;id=0");
ms.forceStartQuest(14431, "");
ms.forceStartQuest(15148, "");
ms.updateInfoQuest(16019, "");
ms.forceStartQuest(16019, "");
ms.forceStartQuest(16021, "");
ms.forceStartQuest(16023, "");
ms.updateInfoQuest(16025, "");
ms.forceStartQuest(16025, "");
ms.updateInfoQuest(16027, "");
ms.forceStartQuest(16027, "");
ms.forceStartQuest(16029, "");
ms.forceStartQuest(16874, "");
ms.forceCompleteQuest(16874);
ms.forceStartQuest(16875, "");
ms.forceCompleteQuest(16875);
ms.forceStartQuest(16876, "");
ms.forceCompleteQuest(16876);
ms.forceStartQuest(18938, "");
ms.forceStartQuest(33189, "");
ms.forceStartQuest(33190, "");
ms.forceStartQuest(33243, "");
ms.forceStartQuest(33265, "");
ms.forceStartQuest(33267, "");
ms.forceStartQuest(39346, "");
ms.onScriptMessage(3, 0, 1, 0,  "#e 冒险岛ONLINE 基本操作法#n\r\n\r\n#b   ← → 方向键: #k左右移动\r\n#bAlt : #k跳跃\r\n#bCtrl : #k攻击\r\n#bZ键 : #k拣取地上的物品\r\n#b ↑↓方向键(梯,绳): #k 爬梯,吊绳\r\n#b↑方向键(跳转光门）: #k移动到另外地方\r\n#b鼠标双击 : #k跟NPC说话", 257, 0, 5, 0, 0, 9010000); // [类型] 普通对话
} else if (status === i++) {
ms.npc_ChangeController(3000107, "oid=9813561", -600, 20, 0);
ms.npc_SetSpecialAction("oid=9813561", "summon", 0, 0);
ms.npc_ChangeController(3000106, "oid=9813562", 500, 20, 1);
ms.npc_SetSpecialAction("oid=9813562", "summon", 0, 0);
ms.teachSkill(60001229, 1, 1);
ms.onScriptMessage(3, 0, 1, 3000107,  "糟糕了！！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 27);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(2501);
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction9.img/effect/tuto/BalloonMsg1/0", 7000, 0, -150, 1, 0, 1, "oid=9813561", 0, 0);
ms.npc_SetForceMove("oid=9813561",1,600,100);
ms.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
} else if (status === i++) {
ms.inGameDirectionEvent_AskAnswerTime(8422);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "树精族的首都沦陷了！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "(达勒摩尔终于惹出事端了……)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "现在格兰蒂斯里几乎没有任何势力能抵抗达勒摩尔了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "还剩下阿尼玛族……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "阿尼玛族和我们一样，原本就不是太大的势力。加上他们本性亲善，只要不受到攻击，绝对不会想要主动对抗达勒摩尔的。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "这么说来现在……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "没错，达勒摩尔下一个攻击目标就是我们的首都赫里希安。我这就前往赫里希安，准备抵抗达勒摩尔的侵略。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "我们有没有什么办法打败达勒摩尔？现在的达勒摩尔拥有能和神一较高下的力量，连时间之超越者克洛尼卡都被他打败，还被夺去了力量。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "赫里希安的防御膜还算坚固，达勒摩尔没那么容易攻进来，只守不攻应该没太大问题。虽然力量的差异显著，但绝对不能放弃希望。", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "卡塔利安，请你留在这里进行防守。", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "比起留在这里干着急，我更愿意出去战斗。我也是堂堂的诺巴战士啊。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "为了以防万一，万神殿里也得建立防御膜。另外，建成后的防御膜也有可能会从内部被破坏，所以得有人负责防止这一切的发生。你应该清楚，以现在的情况，你是不二人选。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000107,  "...", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "狂龙战士，你多保重。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "别担心，狼牙。我可是狂龙战士。", 256, 0, 17, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 3000106,  "(狂龙战士……)", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.setInGameDirectionMode(false, true, false);
ms.npc_LeaveField("oid=9813561");
ms.npc_LeaveField("oid=9813562");
ms.dispose();
ms.warp(940001010, 0);
    } else {
        ms.dispose();
    }
}