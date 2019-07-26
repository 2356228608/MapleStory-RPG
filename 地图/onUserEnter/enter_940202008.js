 /*
 * 圣晶使徒 剧情 - 1
 * 地图：荒蛮终点站：垃圾场深处(940202008)
 * @author 娜娜
 */

var status = -1;

function action(mode, type, selection) {
	if (mode === 0) {
        status--;
    } else {
        status++;
    }
    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
		//ms.NUKNO_ENV1();
		//ms.NUKNO_ENV1("UI/UIWindow6.img/ArkPoint",0,16601);
        ms.curNodeEventEnd(true);//角色站立方向信息
        ms.setInGameDirectionMode(true, false); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.fieldEffect_InsertCanvas11(1, 255, 0, 0, 0, 0);//移动到角色位置
		ms.inGameDirectionEvent_AskAnswerTime(600);
        ms.curNodeEventEnd(true);
    } else if (status === i++) {
		ms.inGameDirectionEvent_ForcedFlip(1);//位置信息和头顶动画信息/延时 强制调整角色面对方向0x11
		ms.inGameDirectionEvent_PushMoveInfo(0,0,-3000,-600);//位置信息和头顶动画信息/延时 画面移动 0x5
		ms.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 1000);//移动到角色位置0x1F9
		ms.inGameDirectionEvent_AskAnswerTime(1000);//位置信息和头顶动画信息/延时 0x1
    } else if (status === i++) {
		ms.fieldEffect_InsertCanvas11(1, 255, 0, 0, 0, 500);//移动到角色位置0x1F9
		ms.inGameDirectionEvent_AskAnswerTime(1000);//位置信息和头顶动画信息/延时 0x1
	} else if (status === i++) {
		ms.effect_Text("#fnNanumGothicExtraBold##fs18#隐藏的平民翼人村，阿叙隆", 100, 2200, 6, -50, 0, 1, 4, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(3000);//位置信息和头顶动画信息/延时 0x1
	} else if (status === i++) {
		ms.inGameDirectionEvent_PushMoveInfo(5,100,-1950,50);//位置信息和头顶动画信息/延时 画面移动 0x5
		ms.inGameDirectionEvent_AskAnswerTime(6000);//位置信息和头顶动画信息/延时 0x1
	} else if (status === i++) {
		ms.inGameDirectionEvent_AskAnswerTime(6000);//位置信息和头顶动画信息/延时 0x1
	} else if (status === i++) {
		ms.sendNextNoESC("#face0#后来平民翼人……", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#平民翼人消除了阶级文化，分为了地位平等的三个领域吧？", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#嗯，天生没有魔法能力的人通过使用水晶以外的矿石，增强技术……", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face4#好。知道了，这样应该就足够了……");
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#说到‘平民翼人最后一战’，就要追溯到几十年以前……", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#利奥.....", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#是，主人");
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#你是想说……被打败的平民翼人幸存者利用水晶门悄悄生活在这里吧？这我知道啊。", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face4#那个……我们平民翼人为什么要隐居，除了这种不痛不痒的问题，你不觉得太敷衍了吗？");
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#为了了解得更透彻，我们有必要以史实为根据……", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#来，快去找配件吧！不能继续待在这傻等了～", 3001300);
    } else if (status === i++) {
		ms.sendNextNoESC("#face0#是，主人");
    } else if (status === i++) {
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		ms.warp(940202009, 0);
    } else {
        ms.dispose();
    }
	
	
	
	
}