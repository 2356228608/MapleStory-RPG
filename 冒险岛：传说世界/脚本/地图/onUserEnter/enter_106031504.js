/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数

// 主体
function action(mode, type, selection) {
	status++;
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.setInGameDirectionMode(true, false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		ms.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/chain");
		ms.npc_ChangeController(1302003, 830, 300, 0); //D5 F8 86 01
		ms.npc_SetSpecialAction(1302003, "summon");
		ms.inGameDirectionEvent_MoveAction(1);
		ms.inGameDirectionEvent_AskAnswerTime(0);
	} else if (status === i++) {
		ms.inGameDirectionEvent_MoveAction(0);
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("（力，力气可真大！但是如果能这么容易就把铁链解开的话，还有必要非得找到钥匙吗？）");
	} else if (status === i++) {
		ms.sendNextNoESC_Bottom("好了，我们快逃吧啊。但是……怎么办呢？我走不动了。我从小身体就很弱。没办法，我就给你一个背我的机会吧。", 1302001);
	} else if (status === i++) {
		ms.sendNextSNoESC_Bottom("我，我可以拒绝吗……呃？！\r\n#b（身上突然背负了重担）");
	} else if (status === i++) {
		ms.npc_LeaveField(1302003);
		ms.sendNextNoESC_Bottom("哥哥，快跑！", 1302001);
	} else if (status === i++) {
		// 收尾
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.warp(106031500, 0);
		ms.dispose();
	} else {
		ms.dispose();
	}
}
