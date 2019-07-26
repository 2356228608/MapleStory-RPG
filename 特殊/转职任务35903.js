/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：转职任务35903 
 *  @Author 娜娜 
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
            cm.dispose();
        } else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0##b（和遗物接触后，古代之力进入了我的身体。\r\n……但同时也多了诅咒这个大问题。）#k", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face6##b（好吧，事情都已经发生了，还能怎么办呢。\r\n后悔也没办法解决问题。还是应该保持一颗平常心。）#k", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0##b在开始调查之前，先来检查一下状态吧。\r\n集中精神，感觉身体内部发生的变化。）#k", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0##b（受到诅咒之后，就能使用远古弓了。\r\n以后就用这个吧。）#k", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0##b（触碰遗物之后，获得了一些新技能。\r\n按基本键(K)，试着分配SP吧。常用的技能可以添加到快捷栏中。）#k", 1013358);
		} else if (status === i++) {
			cm.changeJob(301);
			cm.sendNextNoESC_Bottom("#face0##b（接下来……用基本快捷键(S) / 选择型(C)分配AP吧。\r\n这段时间等级提升了，应该会有一些AP。）#k", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face3#好像已经准备好了。那就去周围……", 1013358);
		} else if (status === i++) {
			cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/mascapo");//22A 0x5 播放声音
			cm.sendNextNoESC_Bottom("#face3#好像已经准备好了。那就去周围……", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0#……我！", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0#……救我！", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0#咕哎哎！", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face0#!?", 1013358);
		} else if (status === i++) {
			cm.sendNextNoESC_Bottom("#face3#那边传来了奇怪的声音。\r\n准备好之后，去确认一下发生了什么事吧。", 1013358);
		} else if (status === i++) {
			cm.forceCompleteQuest(35903);
			cm.dispose();
        } else {
            cm.dispose();
        }
}
