/*  This is mada by 雷霆宝宝    
 *  This source is made by BMS Team
 *  脚本功能：埃苏莱布斯武器箱子
 *  @Author 雷霆宝宝 
 */
 var status = -1;

 var weaponList = Array(
	Array(1322256, "埃苏莱布斯战锤s"),
	Array(1242123, "埃苏莱布斯能量剑s"),
	Array(1492236, "埃苏莱布斯枪s"),
	Array(1472266, "埃苏莱布斯复仇斗拳s"),
	Array(1242124, "埃苏莱布斯能量剑s"),
	Array(1412182, "埃苏莱布斯大斧s"),
	Array(1372229, "埃苏莱布斯短杖s"),
	Array(1302344, "埃苏莱布斯军刀s"),
	Array(1382266, "埃苏莱布斯长杖s"),
	Array(1422190, "埃苏莱布斯大锤s"),
	Array(1402260, "埃苏莱布斯宽大刀s"),
	Array(1342105, "埃苏莱布斯之刃s"),
	Array(1432219, "埃苏莱布斯穿透矛s"),
	Array(1592028, "埃苏莱布斯远古弓s"),
	Array(1272021, "埃苏莱布斯锁链s"),
	Array(1362141, "埃苏莱布斯折叠手杖s"),
	Array(1212121, "埃苏莱布斯双头杖s"),
	Array(1262040, "埃苏莱布斯ESP限制器s"),
	Array(1582027, "埃苏莱布斯拳炮s"),
	Array(1312204, "埃苏莱布斯战斧s"),
	Array(1532148, "埃苏莱布斯大炮s"),
	Array(1222114, "埃苏莱布斯灵魂手铳s"),
	Array(1442276, "埃苏莱布斯巨灵开山斧s"),
	Array(1462244, "埃苏莱布斯弩s"),
	Array(1452258, "埃苏莱布斯弓s"),
	Array(1522144, "埃苏莱布斯双弩枪s"),
	Array(1482222, "埃苏莱布斯拳甲s")
 );
 var potList = Array(
		Array(30602, "攻击BOSS时伤害：+30%"),
		Array(30291, "无视怪物30%的防御率"),
        Array(30051, "攻击力：+9%"),
        Array(30053, "魔法力：+9%"),
        Array(30041, "9%力量"),
        Array(30042, "9%敏捷"),
        Array(30043, "9%智力"),
        Array(30044, "9%运气"),
		Array(30045, "9%maxHP"),
        Array(30046, "9%maxMp"),
        Array(30047, "9%命中率"),
        Array(30048, "9%回避率"),
		Array(30051, "9%攻击力"),
		Array(30052, "9%魔法攻击力"),
		Array(30053, "9%物理防御力"),
		Array(30054, "9%魔法防御力"),
        Array(30055, "爆击率 9%")
);
var godman = [10000, 10100, 10110, 10111, 10112];

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
		if(godman.indexOf(cm.getJob()) > -1){
			im.sendOk("此道具神之子无法使用!");
		}else{
			var text = "";
			for (var i = 0; i < weaponList.length; i++) {
				text += "#L" + i + "##v" + weaponList[i][0] + "##z" + weaponList[i][0] + "##l\r\n";
			}
			im.askMenu("请选择你要的：\r\n#r" + text);
		}
    } else if (status == 1) {
        var itemid = weaponList[selection][0];
        var itemnum = Math.floor(Math.random() * 1 + 1);
        var item = im.gainGachaponItem(itemid, itemnum, "S级埃苏莱布斯武器");
		if (item != -1) {
			cm.gainItem(2436289, -1);
			im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱子中获得了S级"+weaponList[selection][1]+"一个");
			im.sendOk("恭喜您，获得了" + itemnum + "个#b#z" + itemid + "#");
       } else {
            cm.sendOk("你确实有#b#t"+weaponList[selection][0]+"##k吗？如果是，请你确认在背包的装备窗口中是否有一格以上的空间。");
       }
       cm.safeDispose();
    }
}

