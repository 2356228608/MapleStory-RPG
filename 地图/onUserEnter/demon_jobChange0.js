/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;
var jobSelect = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    if (ms.getJob() == 3001 ) {
        var i = -1;
        if (status <= i++) {
            ms.dispose();
        } else if (status === i++) {
ms.curNodeEventEnd(true);
ms.setInGameDirectionMode(true, true, false);
ms.inGameDirectionEvent_MoveAction(2);
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 2159311,  "#b脑袋有点乱……", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "#b但是我拥有的力量几乎全部消失了，这个事实是不会改变的。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "#b哈哈哈，我在说什么啊？这不是曾经对黑魔法师使用过的力量吗？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "#b诅咒的力量几乎全部消失了，也许是命运在告诉我应该选择其他道路。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "#b我竟然会说出这种话，真让人寒心。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "#b好了……让我们先确定该怎么办吧，#h0#。是用曾经对黑魔法师使用过的精气的力量呢？还是使用对黑魔法师的愤怒的力量呢？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159311,  "#b好了……让我们先确定该怎么办吧，#h0#。是用曾经对黑魔法师使用过的精气的力量呢？还是使用对黑魔法师的愤怒的力量呢？", 0, 24, 1, 0, 0, 0); // [类型] 恶魔转职选择
} else if (status === i++) {
            ms.askSelectMenu(2159311);
        } else if (status === i++) {
            if (jobSelect == -1) {
                jobSelect = selection;
                while (ms.getLevel() < 10) {
                    ms.levelUp();
                }

                if (jobSelect == 0) {
                    ms.changeJob(3101);//恶魔复仇者1转
                    var gender = ms.getPlayerStat("GENDER");
                    ms.inGameDirectionEvent_Effect("Effect/Direction6.img/effect/tuto/avenger/" + gender, 2800, -350, -200, 1, 0, 1, 0, 1, 0);
                    ms.fieldEffect_PlayFieldSound("tutoCommon/JobChanged");
                    if (gender == 0) {
                        ms.unequip(1050191, true); //黑色恶魔套装
                        ms.unequip(1072518, true); //黑暗恶魔鞋
                        ms.equip(1050249, -5);     //恶魔古典连身衣
                        ms.equip(1070029, -7);     //恶魔古典靴
                    } else {
                        ms.unequip(1051236, true); //黑色恶魔套装
                        ms.unequip(1072518, true); //黑暗恶魔鞋
                        ms.equip(1051305, -5);     //恶魔古典连衣裙
                        ms.equip(1071046, -7);     //恶魔古典长靴
                    }
                    ms.unequip(1322123, true);     //末日权杖
                    ms.equip(1232001, -11);        //蓝色复仇者

                    ms.equip(1102505, -9);         //恶魔古典披风
                    ms.equip(1099006, -10);        //忍耐军团盾

                    ms.gainItem(1142553, 1);       //愤怒的第一步

                    ms.gainAp(23);
                    ms.gainSp(2);
                    ms.addHP(1550); //MAXHP 1744

                    ms.teachSkill(30010241, 0, -1); //野性狂怒
                    ms.teachSkill(30010242, 1, 1);  //血之契约
                    ms.teachSkill(30010230, 1, 1);  //超越
                    ms.teachSkill(30010231, 1, 1);  //高效吸收
                    ms.teachSkill(30010232, 1, 1);  //星之力转换
                    ms.teachSkill(31011000, 1, 20); //超越：十字斩
                    ms.teachSkill(31011001, 1, 20); //负荷释放
                    ms.teachSkill(31010002, 1, 10); //生命吸收

                    if (gender == 0) {
                        ms.setHair(36460); //黑色复仇者男发型
                        ms.setFace(20284); //孤独-男脸
                    } else {
                        ms.setHair(37450); //黑色复仇者女发型
                        ms.setFace(21280); //忧郁-女脸
                    }
                    ms.giveAvengerHpBuff();
                } else {
                    ms.changeJob(3100);     //恶魔猎手1转
                    ms.inGameDirectionEvent_Effect("Effect/BasicEff.img/JobChangedDemon", 0, 0, 0);
                    ms.fieldEffect_PlayFieldSound("tutoCommon/JobChanged");
                    ms.gainSp(5);

                    ms.unequip(1322123, true);      //末日权杖
                    ms.equip(1322122, -11);         //末日权杖
                    ms.equip(1099000, -10);         //忍耐军团盾

                    ms.teachSkill(30010111, 1, 1);  //死亡诅咒
                    ms.teachSkill(30010112, 0, -1); //恶魔之怒

                    ms.gainItem(1142341, 1);        //复活的魔族
                }
                ms.gainItem(2001527, 30);

            }
				ms.forceStartQuest(23230);
				ms.setInGameDirectionMode(false, true, false);
				ms.setStandAloneMode(false);
				ms.getRecalcLocalStats();
				ms.enableActions();
				ms.dispose();
				ms.forceStartQuest(23977, "1");
				ms.forceStartQuest(29958, "");
				ms.forceCompleteQuest(29958);
				ms.sendOk("#b为了向黑魔法师复仇，就算使用在军团长时期曾经用过的力量也在所不惜！！在离开之前，打开背包，确认一下消耗栏中的物品吧。背包可以通过#r“I”#b键打开。\r\n\r\n[恶魔提示]:如果提示无法在此地图中更换装备,或者是在此地图中无法使用的,请小退后再继续.");
				
        } 
    }else{
		ms.enableActions();
		ms.dispose();
	}
}