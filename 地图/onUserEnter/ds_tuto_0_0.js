/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

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
ms.setStandAloneMode(true);
ms.inGameDirectionEvent_MoveAction(0);
ms.teachSkill(30011109, 1, 1); //恶魔之翼
ms.teachSkill(30010110, 1, 1); //恶魔跳跃
ms.teachSkill(30010185, 1, 1); //恶魔之血
ms.npc_ChangeController(2159307, "oid=12830789", 1430, 50, 1);
ms.npc_SetSpecialAction("oid=12830789", "summon", 0, 0);
ms.sendPyramidEnergy("mastema", "6471518");
ms.fieldEffect_ScreenMsg("demonSlayer/back");
ms.fieldEffect_ScreenMsg("demonSlayer/text0");
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.updateInfoQuest(16119, "");
ms.updateInfoQuest(16150, "");
ms.updateInfoQuest(27039, "");
ms.updateInfoQuest(56995, "state=0");
ms.updateInfoQuest(14756, "d=19/09/22/14/56");
ms.updateInfoQuest(14755, "");
ms.updateInfoQuest(52998, "");
ms.updateInfoQuest(65132, "");
ms.updateInfoQuest(56070, "LUT=19000101");
ms.updateInfoQuest(61585, "0=20190922");
ms.updateInfoQuest(1025, "0=20190922;1=20190921;2=20190920;3=20190919;4=20190918;5=20190917;6=20190916;7=20190915;8=20190912");
ms.updateInfoQuest(26015, "");
ms.updateInfoQuest(26011, "");
ms.updateInfoQuest(32547, "lastDecTime=2019/09/22 14:56:58");
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
ms.fieldEffect_ScreenMsg("demonSlayer/text1");
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text2");
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text3");
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text4");
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text5");
ms.inGameDirectionEvent_AskAnswerTime(4000);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text6");
ms.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
ms.fieldEffect_ScreenMsg("demonSlayer/text7");
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.updateInfoQuest(64346, "new=0");
ms.updateInfoQuest(500773, "bonusTalk=0");
ms.updateInfoQuest(500773, "askR=0;bonusTalk=0");
ms.updateInfoQuest(500773, "askR=0;bonusTalk=0;affDown=19/09/22");
ms.updateInfoQuest(500773, "askR=0;bonusTalk=0;s5=0;affDown=19/09/22");
ms.updateInfoQuest(500773, "askR=0;bonusTalk=0;s5=0;resetDate=19/09/22;affDown=19/09/22");
ms.updateInfoQuest(500028, "start=0");
ms.updateInfoQuest(62153, "lastday=19/09/22");
ms.updateInfoQuest(100194, "check=1");
ms.updateInfoQuest(16860, "new=1");
ms.updateInfoQuest(16862, "check=1");
ms.updateInfoQuest(16862, "check=1;reset=1");
ms.updateInfoQuest(16772, "reset=1");
ms.updateInfoQuest(16035, "");
ms.updateInfoQuest(16774, "reset=1");
ms.updateInfoQuest(500262, "check=0");
ms.updateInfoQuest(500262, "check=0;reset=1");
ms.updateInfoQuest(16807, "count=0");
ms.updateInfoQuest(16842, "check=1");
ms.updateInfoQuest(32429, "");
ms.updateInfoQuest(32430, "");
ms.updateInfoQuest(32431, "");
ms.updateInfoQuest(32432, "");
ms.updateInfoQuest(32433, "");
ms.updateInfoQuest(32434, "");
ms.updateInfoQuest(32435, "");
ms.updateInfoQuest(32436, "");
ms.updateInfoQuest(32437, "");
ms.updateInfoQuest(32438, "");
ms.updateInfoQuest(32439, "");
ms.updateInfoQuest(32440, "");
ms.updateInfoQuest(32441, "");
ms.updateInfoQuest(32442, "");
ms.updateInfoQuest(32443, "");
ms.updateInfoQuest(32444, "");
ms.updateInfoQuest(32445, "");
ms.updateInfoQuest(32446, "");
ms.updateInfoQuest(32447, "");
ms.updateInfoQuest(32448, "");
ms.updateInfoQuest(32449, "");
ms.updateInfoQuest(32450, "");
ms.updateInfoQuest(32451, "");
ms.updateInfoQuest(32452, "");
ms.updateInfoQuest(32453, "");
ms.updateInfoQuest(32454, "");
ms.updateInfoQuest(32455, "");
ms.updateInfoQuest(32456, "");
ms.updateInfoQuest(32457, "");
ms.updateInfoQuest(32458, "");
ms.updateInfoQuest(32459, "");
ms.updateInfoQuest(32460, "");
ms.updateInfoQuest(32461, "");
ms.updateInfoQuest(32462, "");
ms.updateInfoQuest(32463, "");
ms.updateInfoQuest(32464, "");
ms.updateInfoQuest(32465, "");
ms.updateInfoQuest(32466, "");
ms.updateInfoQuest(32467, "");
ms.updateInfoQuest(32468, "");
ms.updateInfoQuest(32469, "");
ms.updateInfoQuest(32470, "");
ms.updateInfoQuest(32471, "");
ms.updateInfoQuest(32472, "");
ms.updateInfoQuest(32473, "");
ms.updateInfoQuest(32474, "");
ms.updateInfoQuest(32475, "");
ms.updateInfoQuest(32476, "");
ms.updateInfoQuest(32477, "");
ms.updateInfoQuest(32478, "");
ms.updateInfoQuest(32479, "");
ms.updateInfoQuest(39101, "");
ms.updateInfoQuest(39102, "");
ms.updateInfoQuest(39103, "");
ms.updateInfoQuest(39104, "");
ms.updateInfoQuest(39105, "");
ms.updateInfoQuest(39106, "");
ms.updateInfoQuest(39107, "");
ms.updateInfoQuest(39108, "");
ms.updateInfoQuest(39109, "");
ms.updateInfoQuest(39110, "");
ms.updateInfoQuest(39111, "");
ms.updateInfoQuest(39112, "");
ms.updateInfoQuest(39113, "");
ms.updateInfoQuest(39114, "");
ms.updateInfoQuest(39115, "");
ms.updateInfoQuest(39116, "");
ms.updateInfoQuest(39117, "");
ms.updateInfoQuest(39118, "");
ms.updateInfoQuest(39119, "");
ms.updateInfoQuest(39120, "");
ms.updateInfoQuest(39121, "");
ms.updateInfoQuest(39122, "");
ms.updateInfoQuest(39123, "");
ms.updateInfoQuest(39124, "");
ms.updateInfoQuest(39125, "");
ms.updateInfoQuest(39126, "");
ms.updateInfoQuest(39127, "");
ms.updateInfoQuest(39128, "");
ms.updateInfoQuest(39129, "");
ms.updateInfoQuest(39130, "");
ms.updateInfoQuest(39131, "");
ms.updateInfoQuest(39132, "");
ms.updateInfoQuest(39133, "");
ms.updateInfoQuest(39134, "");
ms.updateInfoQuest(39135, "");
ms.updateInfoQuest(39136, "");
ms.updateInfoQuest(39137, "");
ms.updateInfoQuest(39138, "");
ms.updateInfoQuest(39139, "");
ms.updateInfoQuest(39140, "");
ms.updateInfoQuest(39141, "");
ms.updateInfoQuest(39142, "");
ms.updateInfoQuest(39143, "");
ms.updateInfoQuest(39144, "");
ms.updateInfoQuest(39145, "");
ms.updateInfoQuest(39146, "");
ms.updateInfoQuest(39147, "");
ms.updateInfoQuest(39148, "");
ms.updateInfoQuest(39149, "");
ms.updateInfoQuest(39150, "");
ms.updateInfoQuest(39151, "");
ms.updateInfoQuest(39152, "");
ms.updateInfoQuest(39153, "");
ms.updateInfoQuest(39154, "");
ms.updateInfoQuest(39155, "");
ms.updateInfoQuest(39156, "");
ms.updateInfoQuest(39157, "");
ms.updateInfoQuest(39158, "");
ms.updateInfoQuest(39159, "");
ms.updateInfoQuest(39160, "");
ms.updateInfoQuest(39161, "");
ms.updateInfoQuest(39162, "");
ms.updateInfoQuest(39163, "");
ms.updateInfoQuest(39164, "");
ms.updateInfoQuest(39165, "");
ms.updateInfoQuest(39160, "start=1");
ms.updateInfoQuest(39165, "start=1");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39100, "");
ms.updateInfoQuest(39002, "");
ms.updateInfoQuest(39003, "");
ms.updateInfoQuest(39004, "");
ms.updateInfoQuest(39005, "");
ms.updateInfoQuest(39006, "");
ms.updateInfoQuest(39007, "");
ms.updateInfoQuest(39008, "");
ms.updateInfoQuest(39009, "");
ms.updateInfoQuest(39010, "");
ms.updateInfoQuest(39011, "");
ms.updateInfoQuest(39012, "");
ms.updateInfoQuest(15708, "");
ms.updateInfoQuest(15418, "");
ms.updateInfoQuest(1072, "reset=1");
ms.updateInfoQuest(18793, "q0=0");
ms.updateInfoQuest(18793, "q0=0;q1Date=19/09/22");
ms.updateInfoQuest(18793, "q0=0;q1=0;q1Date=19/09/22");
ms.updateInfoQuest(18793, "q0=0;q1=0;q1Date=19/09/22;q2Date=19/09/22");
ms.updateInfoQuest(18793, "q0=0;q1=0;q2=0;q1Date=19/09/22;q2Date=19/09/22");
ms.updateInfoQuest(18793, "q0=0;q1=0;q2=0;q1Date=19/09/22;pqDate=19/09/22;q2Date=19/09/22");
ms.updateInfoQuest(18793, "q0=0;q1=0;pq=0;q2=0;q1Date=19/09/22;pqDate=19/09/22;q2Date=19/09/22");
ms.forceCompleteQuest(62417);
ms.updateInfoQuest(15458, "lastdate=19/09/22");
ms.updateInfoQuest(15458, "check=0;lastdate=19/09/22");
ms.updateInfoQuest(15459, "gold=0");
ms.updateInfoQuest(15459, "gold=0;tpoint=0");
ms.updateInfoQuest(61389, "Wedding=0");
ms.updateInfoQuest(18709, "dailyA=0");
ms.updateInfoQuest(18709, "dailyA=0;dailyB=0");
ms.updateInfoQuest(18709, "dailyA=0;dailyB=0;date=19/09/22");
ms.updateInfoQuest(14285, "");
ms.updateInfoQuest(14285, "start=0");
ms.updateInfoQuest(14285, "start=0;start2=0");
ms.updateInfoQuest(15373, "resetData=1");
ms.updateInfoQuest(18829, "a1=n");
ms.updateInfoQuest(18829, "s1=n;a1=n");
ms.updateInfoQuest(18829, "s1=n;a1=n;g1=n");
ms.updateInfoQuest(18829, "m1=n;s1=n;a1=n;g1=n");
ms.updateInfoQuest(18829, "m1=n;s1=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18829, "m1=n;s1=n;s2=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18829, "g2=n;m1=n;s1=n;s2=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18829, "g2=n;m1=n;m2=n;s1=n;s2=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18829, "g2=n;m1=n;m2=n;s1=n;s2=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(18829, "g2=n;m1=n;m2=n;s1=n;s2=n;s3=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(18829, "g2=n;g3=n;m1=n;m2=n;s1=n;s2=n;s3=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(18829, "g2=n;g3=n;m1=n;m2=n;m3=n;s1=n;s2=n;s3=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(18830, "a1=n");
ms.updateInfoQuest(18830, "s1=n;a1=n");
ms.updateInfoQuest(18830, "s1=n;a1=n;g1=n");
ms.updateInfoQuest(18830, "m1=n;s1=n;a1=n;g1=n");
ms.updateInfoQuest(18830, "m1=n;s1=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18830, "m1=n;s1=n;s2=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18830, "g2=n;m1=n;s1=n;s2=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18830, "g2=n;m1=n;m2=n;s1=n;s2=n;a1=n;a2=n;g1=n");
ms.updateInfoQuest(18830, "g2=n;m1=n;m2=n;s1=n;s2=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(18830, "g2=n;m1=n;m2=n;s1=n;s2=n;s3=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(18830, "g2=n;g3=n;m1=n;m2=n;s1=n;s2=n;s3=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(18830, "g2=n;g3=n;m1=n;m2=n;m3=n;s1=n;s2=n;s3=n;a1=n;a2=n;a3=n;g1=n");
ms.updateInfoQuest(15157, "guide=0");
ms.updateInfoQuest(15157, "guide=0;gDate=19/09/22");
ms.updateInfoQuest(9, "check1=0;cDate=19/09/22");
ms.updateInfoQuest(18368, "state=0");
ms.updateInfoQuest(18344, "state=0");
ms.updateInfoQuest(18343, "state=0");
ms.forceStartQuest(52387, "1");
ms.forceStartQuest(52388, "3");
ms.forceStartQuest(52389, "0");
ms.forceStartQuest(52390, "0");
ms.forceStartQuest(52347, "0");
ms.forceStartQuest(52394, "22");
ms.updateInfoQuest(14470, "state=0");
ms.updateInfoQuest(18331, "state=0");
ms.updateInfoQuest(26551, "check=1");
ms.updateInfoQuest(13887, "MPAttend=0");
ms.updateInfoQuest(13887, "lastGame=19/09/22;MPAttend=0");
ms.updateInfoQuest(18131, "send=0");
ms.updateInfoQuest(13261, "born=190922");
ms.updateInfoQuest(18079, "index=1");
ms.updateInfoQuest(18079, "index=1;lastR=19/09/22");
ms.updateInfoQuest(18079, "index=1;lastR=19/09/22;sn1=0");
ms.updateInfoQuest(13271, "sn2=0");
ms.updateInfoQuest(18080, "num=0");
ms.updateInfoQuest(18100, "count=0");
ms.updateInfoQuest(18101, "count=0");
ms.updateInfoQuest(18102, "count=0");
ms.updateInfoQuest(13251, "count=0");
ms.forceStartQuest(5402, "0");
ms.forceStartQuest(5403, "22");
ms.updateInfoQuest(18055, "SM=0");
ms.updateInfoQuest(18055, "SM=0;MH=0");
ms.updateInfoQuest(18055, "ALP=0;SM=0;MH=0");
ms.updateInfoQuest(18055, "ALP=0;SM=0;DB=0;MH=0");
ms.updateInfoQuest(18055, "RG=0;ALP=0;SM=0;DB=0;MH=0");
ms.updateInfoQuest(18055, "RG=0;ALP=0;SM=0;DB=0;CD=0;MH=0");
ms.updateInfoQuest(18189, "eTime=12/12/31/00/00");
ms.updateInfoQuest(18578, "miss=0");
ms.updateInfoQuest(18578, "rewardDay=00/01/01;miss=0");
ms.updateInfoQuest(18578, "rewardDay=00/01/01;miss=0;fixedDay=19/09/22/00/00");
ms.updateInfoQuest(26415, "val=0");
ms.updateInfoQuest(26416, "val=0");
ms.updateInfoQuest(26417, "val=0");
ms.updateInfoQuest(3155, "reset=1");
ms.forceStartQuest(9571, "0");
ms.forceStartQuest(20760, "0");
ms.forceStartQuest(31190, "0");
ms.forceStartQuest(42102, "0");
ms.updateInfoQuest(42102, "date=00/00/00/00/00");
ms.updateInfoQuest(7264, "dojangRank=0");
ms.updateInfoQuest(7264, "dojangRankJob=0;dojangRank=0");
ms.forceStartQuest(7621, "");
ms.gainItem(2450130, 1);
ms.gainItem(2450130, 1);
ms.gainItem(2450130, 1);
ms.gainItem(2450130, 1);
ms.forceStartQuest(100194, "");
ms.onScriptMessage(3, 0, 1, 2159307,  "军团长！这段时间联系都没有，你到哪儿去了？你也知道，#p2159309#老是喜欢挑我的毛病，经常为难我……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "真让人气愤。你去时间神殿抓到了女神，他一定是在嫉妒你。哼！#p2159309#做的事情只不过是蒙蔽了女神的眼睛而已，而且还是利用原来的地位！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 2159307,  "嗯？……平时的话，你应该会责备我，让我别说这种废话的啊……发生什么事了吗？我现在才发现，你的脸色好像非常不好……有什么地方不舒服吗？在之前的战斗中受伤了吗？！", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "……#p2151009#。你……在黑魔法师和我之中，你是谁的部下？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "嗯？干嘛突然问这种问题……？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "请你回答。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "当……当然是效忠于那位伟大的人。但是自从你救了我之后，我就决定为你献出生命……！你不是知道吗？！为什么要问这个……？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "……我想拜托你一件事。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "请帮我把这封信……交给他们，被称为#r英雄#k的人。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "嗯？为什么要把这个交给他们……光是你这段时间不在，可能就已经不太好了。如果和他们接触的事情被人知道，你一定会背上背叛黑魔法师的污名！一定会那样的！你在想什么啊，军团长！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "……我已经不再是军团长了。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "难道……你背叛了黑魔法师？！原来比谁都忠诚的你？！占领时间神殿才刚刚不久！现在应该是领取奖励的时候……为什么……为什么？！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "……没时间了。如果你觉得太为难，就算了……我不想和你战斗。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "没什么为难的！我只是担心你……！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "......", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "家人们你想怎么处理呢？！这样的话，家人们也许会受到危害……！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "不要再说了！这件事就说到这里！", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "……为什么……难道……难道他们出了什么事……？", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "......", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "你又这样……不说话了……好吧，你本来就不喜欢说这些。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "好的。我就是拼了命，也会把这封信交给他们。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "对不起，#p2151009#……", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "用不着道歉。我的生命是为你而存在的。你能把这件事交给我，我感到很高兴。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159307,  "既然接到了命令，我马上就走。希望你能实现自己的目标……", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.npc_SetSpecialAction("oid=12830789", "teleportation", 0, 1);
ms.inGameDirectionEvent_AskAnswerTime(720);
} else if (status === i++) {
ms.npc_LeaveField("oid=12830789");
ms.onScriptMessage(3, 0, 1, 2159307,  "(真是谢谢你了，#p2151009#。)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.updateInfoQuest(64533, "num=0");
ms.updateInfoQuest(64539, "Photo=0");
ms.updateInfoQuest(64539, "Photo=0;already=0");
ms.updateInfoQuest(65097, "lehellen=0");
ms.updateInfoQuest(62563, "RunAct=0");
ms.updateInfoQuest(62564, "count=0");
ms.updateInfoQuest(62565, "count=0");
ms.updateInfoQuest(62566, "count=0");
ms.updateInfoQuest(64497, "dayCnt=0");
ms.updateInfoQuest(64194, "count=3");
ms.updateInfoQuest(64270, "");
ms.updateInfoQuest(63862, "");
ms.updateInfoQuest(62483, "eNum=0");
ms.updateInfoQuest(62483, "eNum=0;lastDate=19/09/22");
ms.updateInfoQuest(62484, "clear=0");
ms.updateInfoQuest(62485, "clear=0");
ms.updateInfoQuest(62486, "0=0");
ms.updateInfoQuest(62486, "0=0;1=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0");
ms.updateInfoQuest(62486, "0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
ms.updateInfoQuest(62486, "10=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
ms.updateInfoQuest(62486, "10=0;11=0;0=0;1=0;2=0;3=0;4=0;5=0;6=0;7=0;8=0;9=0");
ms.updateInfoQuest(62487, "sc=0");
ms.updateInfoQuest(62487, "a12=0;sc=0");
ms.updateInfoQuest(62489, "gotKey=0");
ms.updateInfoQuest(62497, "lastDate=19/09/22");
ms.updateInfoQuest(62499, "lastDate=19/09/22");
ms.updateInfoQuest(63033, "dayNW=0");
ms.updateInfoQuest(63120, "dayNR=0");
ms.updateInfoQuest(63042, "dayNR=0");
ms.updateInfoQuest(62457, "date=19/09/22");
ms.updateInfoQuest(62457, "sing=0;date=19/09/22");
ms.forceStartQuest(62458, "");
ms.updateInfoQuest(62459, "date=19/09/22");
ms.updateInfoQuest(62459, "date=19/09/22;sing1=0");
ms.forceStartQuest(62460, "");
ms.updateInfoQuest(62461, "date=19/09/22");
ms.updateInfoQuest(62461, "han=0;date=19/09/22");
ms.forceStartQuest(62462, "");
ms.updateInfoQuest(62463, "date=19/09/22");
ms.updateInfoQuest(62463, "date=19/09/22;han1=0");
ms.forceStartQuest(62464, "");
ms.updateInfoQuest(58977, "");
ms.updateInfoQuest(58977, "lastDay=19/09/22/14/58");
ms.updateInfoQuest(58980, "");
ms.forceCompleteQuest(16884);
ms.updateInfoQuest(18681, "present=0");
ms.updateInfoQuest(7907, "point=0");
ms.updateInfoQuest(7907, "lastW=15;point=0");
ms.updateInfoQuest(26589, "coinCount=0");
ms.updateInfoQuest(26589, "RGive1=0;coinCount=0");
ms.updateInfoQuest(26589, "RGive1=0;RGive2=0;coinCount=0");
ms.updateInfoQuest(26553, "count=0");
ms.updateInfoQuest(26453, "val=0");
ms.updateInfoQuest(18192, "val=0");
ms.updateInfoQuest(18192, "val2=0;val=0");
ms.updateInfoQuest(18192, "val2=0;tDate=19/09/22/14/58;val=0");
ms.updateInfoQuest(18192, "count=0;val2=0;tDate=19/09/22/14/58;val=0");
ms.updateInfoQuest(500208, "val=0");
ms.updateInfoQuest(500208, "val2=0;val=0");
ms.updateInfoQuest(500208, "val2=0;tDate=19/09/22/14/58;val=0");
ms.updateInfoQuest(500208, "count=0;val2=0;tDate=19/09/22/14/58;val=0");
ms.updateInfoQuest(500209, "val=0");
ms.updateInfoQuest(500209, "val2=0;val=0");
ms.updateInfoQuest(500209, "val2=0;tDate=19/09/22/14/58;val=0");
ms.updateInfoQuest(500209, "count=0;val2=0;tDate=19/09/22/14/58;val=0");
ms.updateInfoQuest(18282, "count=0");
ms.updateInfoQuest(18282, "count=0;last=19/09/22");
ms.updateInfoQuest(7708, "win=0");
ms.updateInfoQuest(7708, "lose=0;win=0");
ms.updateInfoQuest(7708, "draw=0;lose=0;win=0");
ms.forceStartQuest(7019, "0");
ms.forceCompleteQuest(7707);
ms.curNodeEventEnd(true);
ms.dispose();
ms.warp(927000080, 0);
    } else {
        ms.dispose();
    }
}
