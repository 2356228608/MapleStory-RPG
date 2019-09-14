/*  This is mada by 雷霆宝宝    
 *  This source is made by BMS Team
 *  脚本功能：SS级埃苏莱布斯披风箱
 *  @Author 雷霆宝宝 
 */
 var status = -1;
 var weaponList = Array(
 	Array(1102775, "埃苏莱布斯骑士披风"),
	Array(1102794, "埃苏莱布斯魔法师披风"),
	Array(1102795, "埃苏莱布斯弓箭手披风"),
	Array(1102796, "埃苏莱布斯飞侠披风"),
	Array(1102797, "埃苏莱布斯海盗披风")
 );
 var potList = Array(
		Array(40603, "攻击BOSS时伤害：+40%"),
		Array(40602, "攻击BOSS时伤害：+35%"),
		Array(40601, "攻击BOSS时伤害：+30%"),
		Array(40292, "无视怪物40%的防御率"),
		Array(40291, "无视怪物35%的防御率"),
        Array(40051, "攻击力：+9%"),
        Array(40053, "魔法力：+9%"),
        Array(40041, "9%力量"),
        Array(40042, "9%敏捷"),
        Array(40043, "9%智力"),
        Array(40044, "9%运气"),
		Array(40045, "9%maxHP"),
        Array(40046, "9%maxMp"),
        Array(40047, "9%命中率"),
        Array(40048, "9%回避率"),
		Array(40051, "9%攻击力"),
		Array(40052, "9%魔法攻击力"),
		Array(40053, "9%物理防御力"),
		Array(40054, "9%魔法防御力"),
        Array(40055, "爆击率 9%"),
		Array(40057, "爆击最大伤害：15%"),
        Array(40056, "爆击最小伤害：15%"),
		Array(40091, " 每10级攻击力（魔力）加1"),
		Array(42094, " 每10级加2运气"),
		Array(42093, " 每10级加2智力"),
		Array(42092, " 每10级加2敏捷"),
		Array(42091, "每10级加2力量"),
		Array(40070, "总伤害：12%"),
        Array(40086, "9%所有属性率"),
		Array(42086, "4%所有属性"),
		Array(42087, "9%所有属性"),
		Array(60002, "20%所有属性"),
		Array(60004, "5%所有属性"),
        Array(60005, "10%所有属性")
);

    function start() {
		action(1, 0, 0);
    }
	
	
	function action(mode, type, selection) {
		if (mode == 1) {
			status++;
		} else {
			if (mode == 0 && status == 0) {
				im.dispose();
				return;
			}
			status--;
		}
		if (status == 0) {
			var text = "";
			for (var i = 0; i < weaponList.length; i++) {
				text += "#L" + i + "##v" + weaponList[i][0] + "##z" + weaponList[i][0] + "##l\r\n";
			}
			im.askMenu("请选择你要的：\r\n#r" + text);
		} else if (status == 1) {
			if (im.getInventory(1).isFull(1)) {
				im.playerMessage(1, "【SS级埃苏莱布斯披风箱】\r\n(SS级埃苏莱布斯披风箱)\r\n\r\n装备栏空间不足，需要一格空间。");
				cm.safeDispose();
				return;
			}
			var itemid = weaponList[selection][0];
			var itemnum = Math.floor(Math.random() * 1 + 1);
			sentWeapon(itemid);
			cm.gainItem(2437540, -1);
			im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从SS级埃苏莱布斯披风箱中获得了SS级"+weaponList[selection][1]+"一个");
			im.sendOk("恭喜您，获得了" + itemnum + "个SS级#b#z" + itemid + "#");
			im.dispose();
		}
	}
	
	  function sentWeapon(id) {
            var ii = im.getItemInfo();
            var toDrop = ii.randomizeStats(ii.getEquipById(id)).copy();            //生成一个Equip类
			//潜能 
			toDrop.setOption(potList[Math.floor(Math.random()*potList.length)][0],1,false);
			toDrop.setOption(potList[Math.floor(Math.random()*potList.length)][0],2,false);

			//更新状态 false = 更新潜能 , true = 更新附加潜能
			toDrop.updateState(false);
			im.addFromDrop(im.getClient(), toDrop, false);		
    }

