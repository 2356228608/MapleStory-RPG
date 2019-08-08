/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var BGM = [["阿里安特", "Bgm14/Ariant"], ["明珠港", "Bgm02/AboveTheTreetops"], ["射手村", "Bgm00/FloralLife"], ["勇士部落", "Bgm00/Nightmare"], ["废弃都市", "Bgm01/BadGuys"], ["魔法密林", "Bgm02/WhenTheMorningComes"], ["林中之城", "Bgm00/SleepyWood"], ["埃欧雷", "Bgm25/WindAndFlower"], ["天空之城", "Bgm04/Shinin'Harbor"], ["冰封雪域", "Bgm03/SnowyVillage"], ["水下世界", "Bgm11/Aquarium"], ["玩具城", "Bgm06/FantasticThinking"], ["神木村", "Bgm13/Leafre"], ["圣地", "Bgm18/QueensGarden"], ["埃德尔斯坦", "Bgm22/EdelsteinCity"], ["玛加提亚", "Bgm12/Dispute"], ["武陵", "Bgm15/MureungHill"], ["里恩", "Bgm19/RienVillage"], ["尖耳狐狸村", "Bgm36/foxvillage"], ["万神殿", "Bgm27/Pantheon"], ["童话村", "Bgm11/DownTown"]];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	var id = cm.getNpc();
	if (id < 1 || id > 4) {
		cm.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.askText("你要仔细想想现在听到的音乐是哪个村庄的背景音乐。\r\n然后将村庄的名字写在下面的空格内。\r\n对了，我可是无比严格的女人哦。哈哈哈！", 2540010);
	} else if (status === i++) {
		var text = cm.getText();
		var sound = parseInt(em.getProperty("stage24_bgm_" + id));
		if (text.equals(BGM[sound][0])) {
			if (randomNum(1, 2) == 1) {
				cm.sendOk("嗯~挺厉害的嘛。你看上去可不怎么聪明。", 2540010);
			} else {
				cm.sendOk("真了不起！你是怎么答对的？", 2540010);
			}
		} else {
			
		}
	} else if (status === i++) {
		cm.warp(992024000, id + 1);
		var nextSound = parseInt(em.getProperty("stage24_bgm_" + (id + 1)));
		ms.fieldEffect_PlayBGM(BGM[nextSound][1]);
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
