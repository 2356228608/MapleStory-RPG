/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;

var scrolls = Array(
Array(" 1",1442274, 10000),
Array(" 2",1332279, 10000),
Array(" 2",1342104, 10000),
Array(" 2",1232113, 10000),
Array(" 2",1362140, 10000),
Array(" 2",1242122, 10000),
Array(" 2",1242121, 10000),
Array(" 2",1302343, 10000),
Array(" 2",1582023, 10000),
Array(" 2",1582023, 10000),
Array(" 2",1252098, 10000),
Array(" 2",1492235, 10000),
Array(" 2",1272017, 10000),
Array(" 2",1552119, 10000),
Array(" 2",1402259, 10000),
Array(" 2",1412181, 10000),
Array(" 2",1452257, 10000),
Array(" 2",1312203, 10000),
Array(" 2",1432218, 10000),
Array(" 2",1222113, 10000),
Array(" 2",1322255, 10000),
Array(" 2",1522143, 10000),
Array(" 2",1532150, 10000),
Array(" 2",1382265, 10000),
Array(" 2",1262039, 10000),
Array(" 2",1422189, 10000),
Array(" 2",1462243, 10000),
Array(" 2",1482221, 10000),
Array(" 2",1372228, 10000),
Array(" 2",1542117, 10000),
Array(" 2",1212120, 10000),
Array(" 2",1472265, 10000),
Array(" 2",1592020, 10000)
);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，欢迎下次继续光临！.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            choices = "\r\n点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d点卷#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "专卖店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
				var ii = cm.getItemInfo();
						var toDrop = ii.randomizeStats(ii.getEquipById(scrolls[choice][1])).copy();
						toDrop.setStr(32767); //装备力量
						toDrop.setDex(32767); //装备敏捷
						toDrop.setInt(32767); //装备智力
						toDrop.setLuk(32767); //装备运气
						toDrop.setPAD(999);
						toDrop.setMAD(999);
						toDrop.setPDD(999);
						toDrop.setMDD(999);
						toDrop.setSpeed(999);
						toDrop.setJump(999);
						toDrop.setIUC(2);//金锤子
						toDrop.setMaxDamageOver(9999999999);//伤害上限
						toDrop.setOption(40603,1,false);
						toDrop.setOption(40603,2,false);
						toDrop.setOption(40603,3,false);
						toDrop.setOption(40603,1,true);
						toDrop.setOption(40603,2,true);
						toDrop.setOption(40603,3,true);
						toDrop.setCHUC(25);//强化星星次数
						toDrop.setCUC(15);//已升级次数
						toDrop.setRUC(0);//可升级次数
						//toDrop.setReduceReq(0);//降低装备需求等级
						toDrop.setSpecialAttribute(4);//强化效果
						toDrop.setBDR(127);//BOSS伤害
						toDrop.setIMDR(127);//无视防御
						toDrop.setDamR(127);//总伤害
						toDrop.setStatR(127);//全属性
						//toDrop.setCuttable(v);//剪刀次数
						//toDrop.setAttribute(v);//道具属性 如封印 防滑 防冻 不可交易
						toDrop.setTitle("神级");
						cm.addFromDrop(cm.getClient(), toDrop, false);//false
				
					cm.gainNX(-money);
					cm.dispose();
					cm.sendOk("恭喜您成功购买#i" + scrolls[choice][1] + ":# #b#t" + scrolls[choice][1] + "##k。");
				
            }
        }
    }
}
