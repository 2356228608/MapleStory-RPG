/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]林之灵系列
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
	status++;
	if (!ms.isQuestFinished(59000)) {
		action1(mode, type, selection);
	} else {
		ms.dispose();
	}
}

function action1(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
ms.npc_ChangeController(9390308, "oid=114721", -710, 28, 0);
ms.npc_ChangeController(9390307, "oid=114722", -1041, 28, 1);
ms.npc_ChangeController(9390304, "oid=114723", 125, 28, 1);
ms.npc_ChangeController(9390305, "oid=114724", 577, 28, 1);
ms.npc_ChangeController(9390306, "oid=114725", 714, -72, 1);
ms.npc_ChangeController(9390309, "oid=114726", -647, -166, 1);
ms.npc_ChangeController(9390310, "oid=114727", 765, 28, 1);
ms.updateInfoQuest(59000, "tuto1=1");
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
ms.updateInfoQuest(62483, "eNum=0;lastDate=19/09/24");
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
ms.updateInfoQuest(62497, "lastDate=19/09/24");
ms.updateInfoQuest(62499, "lastDate=19/09/24");
ms.updateInfoQuest(63033, "dayNW=0");
ms.updateInfoQuest(63120, "dayNR=0");
ms.updateInfoQuest(63042, "dayNR=0");
ms.updateInfoQuest(62457, "date=19/09/24");
ms.updateInfoQuest(62457, "sing=0;date=19/09/24");
ms.forceStartQuest(62458, "");
ms.updateInfoQuest(62459, "date=19/09/24");
ms.updateInfoQuest(62459, "date=19/09/24;sing1=0");
ms.forceStartQuest(62460, "");
ms.updateInfoQuest(62461, "date=19/09/24");
ms.updateInfoQuest(62461, "han=0;date=19/09/24");
ms.forceStartQuest(62462, "");
ms.updateInfoQuest(62463, "date=19/09/24");
ms.updateInfoQuest(62463, "date=19/09/24;han1=0");
ms.forceStartQuest(62464, "");
ms.updateInfoQuest(62153, "lastday=19/09/24");
ms.updateInfoQuest(58977, "");
ms.updateInfoQuest(58977, "lastDay=19/09/24/00/59");
ms.updateInfoQuest(58980, "");
ms.updateInfoQuest(500773, "bonusTalk=0");
ms.updateInfoQuest(500773, "askR=1;bonusTalk=0");
ms.updateInfoQuest(500773, "askR=1;bonusTalk=0;affDown=19/09/24");
ms.updateInfoQuest(500773, "askR=1;bonusTalk=0;s5=0;affDown=19/09/24");
ms.updateInfoQuest(500773, "askR=1;bonusTalk=0;s5=0;resetDate=19/09/24;affDown=19/09/24");
ms.forceCompleteQuest(16884);
ms.updateInfoQuest(18793, "q1Date=19/09/24");
ms.updateInfoQuest(18793, "q1=0;q1Date=19/09/24");
ms.updateInfoQuest(18793, "q1=0;q1Date=19/09/24;q2Date=19/09/24");
ms.updateInfoQuest(18793, "q1=0;q2=0;q1Date=19/09/24;q2Date=19/09/24");
ms.updateInfoQuest(18793, "q1=0;q2=0;q1Date=19/09/24;pqDate=19/09/24;q2Date=19/09/24");
ms.updateInfoQuest(18793, "q1=0;pq=0;q2=0;q1Date=19/09/24;pqDate=19/09/24;q2Date=19/09/24");
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
ms.updateInfoQuest(18192, "val2=0;tDate=19/09/24/00/59;val=0");
ms.updateInfoQuest(18192, "count=0;val2=0;tDate=19/09/24/00/59;val=0");
ms.updateInfoQuest(500208, "val=0");
ms.updateInfoQuest(500208, "val2=0;val=0");
ms.updateInfoQuest(500208, "val2=0;tDate=19/09/24/00/59;val=0");
ms.updateInfoQuest(500208, "count=0;val2=0;tDate=19/09/24/00/59;val=0");
ms.updateInfoQuest(500209, "val=0");
ms.updateInfoQuest(500209, "val2=0;val=0");
ms.updateInfoQuest(500209, "val2=0;tDate=19/09/24/00/59;val=0");
ms.updateInfoQuest(500209, "count=0;val2=0;tDate=19/09/24/00/59;val=0");
ms.updateInfoQuest(18282, "count=0");
ms.updateInfoQuest(18282, "count=0;last=19/09/24");
ms.updateInfoQuest(7708, "win=0");
ms.updateInfoQuest(7708, "lose=0;win=0");
ms.updateInfoQuest(7708, "draw=0;lose=0;win=0");
ms.forceStartQuest(7019, "0");
ms.forceCompleteQuest(7707);
ms.forceCompleteQuest(500550);
ms.updateInfoQuest(64346, "new=1");
ms.updateInfoQuest(500028, "start=0");
ms.updateInfoQuest(100194, "check=1");
ms.updateInfoQuest(16860, "new=1");
ms.updateInfoQuest(55801, "new=1");
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
ms.updateInfoQuest(131, "uiOpen=0");
ms.updateInfoQuest(18793, "q0=0;q1=0;pq=0;q2=0;q1Date=19/09/24;pqDate=19/09/24;q2Date=19/09/24");
ms.forceCompleteQuest(62417);
ms.updateInfoQuest(15458, "lastdate=19/09/24");
ms.updateInfoQuest(15458, "check=0;lastdate=19/09/24");
ms.updateInfoQuest(15459, "gold=0");
ms.updateInfoQuest(15459, "gold=0;tpoint=0");
ms.updateInfoQuest(61389, "Wedding=0");
ms.updateInfoQuest(18709, "dailyA=0");
ms.updateInfoQuest(18709, "dailyA=0;dailyB=0");
ms.updateInfoQuest(18709, "dailyA=0;dailyB=0;date=19/09/24");
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
ms.updateInfoQuest(15157, "guide=0;gDate=19/09/24");
ms.updateInfoQuest(9, "check1=0");
ms.updateInfoQuest(9, "check1=0;cDate=19/09/24");
ms.updateInfoQuest(18368, "state=0");
ms.updateInfoQuest(18344, "state=0");
ms.updateInfoQuest(18343, "state=0");
ms.forceStartQuest(59025, "");
ms.forceCompleteQuest(59025);
ms.forceStartQuest(52387, "4");
ms.forceStartQuest(52388, "1");
ms.forceStartQuest(52389, "1");
ms.forceStartQuest(52390, "1");
ms.forceStartQuest(52347, "1");
ms.forceStartQuest(52394, "24");
ms.updateInfoQuest(14470, "state=0");
ms.updateInfoQuest(18331, "state=0");
ms.updateInfoQuest(26551, "check=1");
ms.updateInfoQuest(13887, "MPAttend=0");
ms.updateInfoQuest(13887, "lastGame=19/09/24;MPAttend=0");
ms.updateInfoQuest(18131, "send=0");
ms.updateInfoQuest(13261, "born=190924");
ms.updateInfoQuest(18079, "index=1");
ms.updateInfoQuest(18079, "index=1;lastR=19/09/24");
ms.updateInfoQuest(18079, "index=1;lastR=19/09/24;sn1=0");
ms.updateInfoQuest(13271, "sn2=0");
ms.updateInfoQuest(18080, "num=0");
ms.updateInfoQuest(18100, "count=0");
ms.updateInfoQuest(18101, "count=0");
ms.updateInfoQuest(18102, "count=0");
ms.updateInfoQuest(13251, "count=0");
ms.forceStartQuest(5402, "0");
ms.forceStartQuest(5403, "24");
ms.updateInfoQuest(18055, "SM=0");
ms.updateInfoQuest(18055, "SM=0;MH=0");
ms.updateInfoQuest(18055, "ALP=0;SM=0;MH=0");
ms.updateInfoQuest(18055, "ALP=0;SM=0;DB=0;MH=0");
ms.updateInfoQuest(18055, "RG=0;ALP=0;SM=0;DB=0;MH=0");
ms.updateInfoQuest(18055, "RG=0;ALP=0;SM=0;DB=0;CD=0;MH=0");
ms.updateInfoQuest(18578, "miss=0");
ms.updateInfoQuest(18578, "rewardDay=00/01/01;miss=0");
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
ms.forceStartQuest(100194, "");
ms.balloonMsg("任务快捷键,按下#e#b[Q]#k#n 可开启或关闭任务视窗.", 150, 5);
ms.balloonMsg("#e#b[←],[→]#k#n 按下方向键即可移动", 150, 5);
ms.sendNextPrevNoESC("那是你做的吧?\r\n这会让#b#p9390305##k很为难的。",9390304); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("赶紧过去和#b#p9390305##k道歉吧。",9390304); // [类型] 普通对话
} else if (status === i++) {
ms.sendNextPrevNoESC("知错能改,也是作为英雄的一个条件哦。",9390304); // [类型] 接受/拒绝
} else if (status === i++) {
ms.sendNextPrevNoESC("英雄的条件!\r\n是!那我赶紧回去道歉。",9390304); // [类型] 普通对话
} else if (status === i++) {
ms.forceStartQuest(59000, "");
ms.openUI(6);
ms.dispose();

	}
}

function action2(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {

	} else if (status === i++) {
		// 收尾
		ms.warp(992000000, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// NPC离场
		ms.npc_LeaveField(2540000);
	} else {
		ms.dispose();
	}
}
