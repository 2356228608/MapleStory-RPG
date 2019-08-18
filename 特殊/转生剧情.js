/*
 * 地图：彩虹岛 - 枫树山丘 (10000)
 * @author 狐狸糊涂
 */
/*
 * 龙神剧情 - 15
 * 地图：梦中 - 梦中的森林 (900010200)
 * Npc名称：龙
 */
var status = -1;
var p;

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
            //cm.curNodeEventEnd(true);//角色站立方向信息
            //cm.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            //cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
            //cm.inGameDirectionEvent_SetHideEffect(1);//隐藏角色,1=隐藏 0=显示
			//cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500);//创建一个遮布 0x10
            cm.inGameDirectionEvent_AskAnswerTime(500);
        } /*else if (status === i++) {
            cm.inGameDirectionEvent_Monologue("\r\n#fs60#请和修嘉完成对话领取新手礼包哦.", 1);
        }*/ else if (status === i++) {
            //cm.inGameDirectionEvent_SetHideEffect(0);//隐藏角色,1=隐藏 0=显示
			//cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500);//创建一个遮布 0x10
			cm.inGameDirectionEvent_OneTimeAction(2000, 0);
            cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001011/effect", 0, 0, 0);//11 13 14 19 20 21
			cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001012/effect", 0, 0, 0);//11 13 14 19 20 21
			cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001013/effect", 0, 0, 0);//11 13 14 19 20 21
			cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001014/effect", 0, 0, 0);//11 13 14 19 20 21
			cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001015/effect", 0, 0, 0);//11 13 14 19 20 21
			cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001019/effect", 0, 0, 0);//11 13 14 19 20 21
			cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001020/effect", 0, 0, 0);//11 13 14 19 20 21
			cm.inGameDirectionEvent_Effect("Skill/40000.img/skill/400001021/effect", 0, 0, 0);//11 13 14 19 20 21
            cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else if (status === i++) {
			p = cm.getPlayer();
			cm.curNodeEventEnd(true);//角色站立方向信息
            cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			//cm.enableActions2();
			//cm.addPlayeramuont();//增加修仙等级
			//cm.setRepairpoint(cm.getRepairpoint()-cm.getPlayeramuont()*1000);
			cm.effect_NormalSpeechBalloon("\r\n#fs30#恭喜:当前转数<"+cm.getRepairquency()+">",1,1,0,4000,0,0);
			cm.worldSpouseMessage(0x24, "『转生系统』" + " : " + "恭喜" + cm.getChar().getName() + ",转生了" + cm.getRepairquency() + "次,他又变强大了,羡慕吧!极品装备又进了一步");
			cm.playerMessage(1,"您做得非常好, 您已经成功转生了,您现在的属性点情况如下：\r\n" + "   力量: " + p.getStat().getStr() + " 点" + "\r\n   敏捷: " + p.getStat().getDex() + " 点" + "\r\n   智力: " + p.getStat().getInt() + " 点" + "\r\n   运气: " + p.getStat().getLuk() + " 点" + "\r\n   未分配的AP: " + p.getRemainingAp() + " 点");
            //cm.playerMessage(1,"温馨提示:如果称号未变化,请小退再进.");
			
            cm.dispose();
        } else {
            cm.dispose();
        }
}