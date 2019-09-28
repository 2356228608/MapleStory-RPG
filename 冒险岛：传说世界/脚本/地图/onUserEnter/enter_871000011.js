/**
 * 地图：我的小屋
 * @author 娜娜 871000010
 */
var status = -1;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE); //获取日

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
		// [2019/9/28 8:18:43] 切换地图: 从 cm.warp(871200197) -> 至: cm.warp(871000011)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, false);
		cm.Hidden_background("chair02", 0);
		cm.Hidden_background("chair03", 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.updateInfoQuest(26015, "");
		cm.updateInfoQuest(18790, "mod=22879604960;lastTime=190118101952;damage=518961259314;coin=0");
		cm.updateInfoQuest(18098, "lastTime=190928082019;coin=200");
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_ForcedFlip10(2, 720);
		cm.inGameDirectionEvent_AskAnswerTime(4500);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onTeleport(1, cm.getPlayer().getId(), -270, 110);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b…?", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/wind", 100);
		cm.inGameDirectionEvent_ForcedFlip10(2, 250);
		cm.onScriptMessage(3, 0, 1, 0, "#b难道是我走错了？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/whatl", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(1, 10);
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/what", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_Monologue("非常#fs30#小巧#fs20#，有点#fs30#朴素#fs20#……", 1);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_Monologue("为了让#fs20#新的主人的用回忆填满这个地方，\r\n#fs30#家里已经留下了#fs20#一些~#fs30#~空闲的地方。", 1);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b…", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/shade", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#b……我的50万金币！！！", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/shade", 3000, 0, 0, 1, 0, 1, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip10(1, 50);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.inGameDirectionEvent_OneTimeAction(29, 1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.Hidden_background("chair01", 0);
		cm.Hidden_background("chair02", 1);
		cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/crash", 100);
		cm.inGameDirectionEvent_MoveAction(4);
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/shade", 0, 0, 0, 1, 0, 1, 0, 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#b…", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 9897148);
		cm.npc_ChangeController(9400929, "oid=11110732", -270, 100, 0);
		cm.npc_SetSpecialAction("oid=11110732", "summon", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=11110732", 1, 100, 100);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Effect("Effect/OnUserEff.img/emotion/oh", 0, 0, 0, 1, 0, 1, "oid=11110732", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#吓死我了，你是谁啊？ ", 256, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b嗯……我是刚搬过来的人。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face3#搬家？嗯……我还以为这房屋没有主人呢，看来不是啊。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#我是住在旁边的人，叫埃尔宾。相见就是缘分，既然我们成了邻居，那就好好相处吧。很高兴见到你！ ", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#b我也很高兴……虽然不知道这个房屋能不能住人，但是以后也请多多指教了。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face2#嗯~~看起来很小巧，你一个人生活的话应该够了啊？只要整理一下就好了！我会帮忙的，你不用担心。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#首先把这个破椅子拿开吧。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.onScriptMessage(3, 0, 1, 0, "#face1#这个我来收拾，你把床搬到日照充足的地方去吧？", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHomeTuto/2", 0, 900, 0, -80, 12, 4, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face1#点击我的小屋菜单的#i3801392##t3801392#就能进入可以搬动家具的放置模式。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.updateInfoQuest(500400, "open=0;0_0=1;0_1=1");
		cm.onScriptMessage(3, 0, 1, 0, "#face1#在放置模式状态中，点击床后再点击你想要放置的位置即可！", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
		cm.onScriptMessage(3, 0, 1, 0, "#face2#你要不要试试？将床放到你想要放的地方后再和我对话吧。", 257, 0, 37, 0, 1, 9400921); // [类型] 普通对话
	} else if (status === i++) {
		cm.forceCompleteQuest(64591);
		cm.forceStartQuest(64592, "");
		cm.updateInfoQuest(500767, "3=1;7=1;managerXpos=100;managerYpos=100");
		cm.updateInfoQuest(18418, "B=61292");
		cm.setInGameDirectionMode(false, true, false);
		cm.npc_LeaveField("oid=11110732");
		// [2019/9/28 8:19:24] 即将切换地图: cm.warp(871000011) -> cm.warp(871200197)
		cm.warp(871200197);
		cm.dispose();
	} else {
		ms.dispose();
	}
}
