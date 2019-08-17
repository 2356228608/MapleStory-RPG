/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	status++;
	if(ms.getPlayer().getPosition().getX()>-500){
		ms.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.playerMessage(-1, "本故事需要在1024*768以上的分辨率下进行。");
		ms.fieldEffect_PlayBGM("Bgm00/Silence");
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/welcome");
		ms.fieldEffect_ScreenMsg("Map/Effect.img/temaD/enter/mushCatle");
		ms.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		ms.fieldEffect_PlayBGM("Bgm38/MushroomCastle");
		// 收尾
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
	} else {
		ms.dispose();
	}
}
