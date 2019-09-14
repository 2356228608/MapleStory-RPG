/*  This is mada by 雷霆宝宝    
 *  This source is made by BMS Team
 *  脚本功能：埃苏莱布斯箱子
 *  @Author 雷霆宝宝 
 */

var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化

function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		if (im.getInventory(1).isFull(1)) {
			im.playerMessage(1, "【埃苏莱布斯箱子】\r\n(埃苏莱布斯箱子)\r\n\r\n装备栏空间不足，需要一格空间。");
			cm.safeDispose();
			return;
		} 
        var selStr = "请选择你需要的物品\r\n";
        selStr += "#r#L0#" + "#v1232109" + "#" + " #z1232109" + "##l\r\n";//埃苏莱布斯亡命剑
        selStr += "#r#L1#" + "#v1332274" + "#" + " #z1332274" + "##l\r\n";//埃苏莱布斯屠龙斩
        selStr += "#r#L2#" + "#v1362135" + "#" + " #z1362135" + "##l\r\n";//埃苏莱布斯折叠手杖
        selStr += "#r#L3#" + "#v1242116" + "#" + " #z1242116" + "##l\r\n";//埃苏莱布斯能量剑
        selStr += "#r#L4#" + "#v1342101" + "#" + " #z1342101" + "##l\r\n";//埃苏莱布斯之刃
        selStr += "#r#L5#" + "#v1372222" + "#" + " #z1372222" + "##l\r\n";//埃苏莱布斯短杖
        selStr += "#r#L6#" + "#v1242120" + "#" + " #z1242120" + "##l\r\n";//埃苏莱布斯能量剑
        selStr += "#r#L7#" + "#v1582017" + "#" + " #z1582017" + "##l\r\n";//埃苏莱布斯雷神
        selStr += "#r#L8#" + "#v1492231" + "#" + " #z1492231" + "##l\r\n";//埃苏莱布斯枪
        selStr += "#r#L9#" + "#v1552110" + "#" + " #z1552110" + "##l\r\n";//埃苏莱布斯扇子
        selStr += "#r#L10#" + "#v1442268" + "#" + " #z1442268" + "##l\r\n";//埃苏莱布斯巨灵开山斧
        selStr += "#r#L11#" + "#v1432214" + "#" + " #z1432214" + "##l\r\n";//埃苏莱布斯穿透矛
        selStr += "#r#L12#" + "#v1412177" + "#" + " #z1412177" + "##l\r\n";//埃苏莱布斯大斧
        selStr += "#r#L13#" + "#v1542108" + "#" + " #z1542108" + "##l\r\n";//埃苏莱布斯武士刀
        selStr += "#r#L14#" + "#v1252093" + "#" + " #z1252093" + "##l\r\n";//埃苏莱布斯魔法棒
        selStr += "#r#L15#" + "#v1312199" + "#" + " #z1312199" + "##l\r\n";//埃苏莱布斯战斧
        selStr += "#r#L16#" + "#v1462239" + "#" + " #z1462239" + "##l\r\n";//埃苏莱布斯弩
        selStr += "#r#L17#" + "#v1522138" + "#" + " #z1522138" + "##l\r\n";//埃苏莱布斯双弩枪
        selStr += "#r#L18#" + "#v1322250" + "#" + " #z1322250" + "##l\r\n";//埃苏莱布斯战锤
        selStr += "#r#L19#" + "#v1402251" + "#" + " #z1402251" + "##l\r\n";//埃苏莱布斯宽大刀
        selStr += "#r#L20#" + "#v1532144" + "#" + " #z1532144" + "##l\r\n";//埃苏莱布斯大炮
        selStr += "#r#L21#" + "#v1302333" + "#" + " #z1302333" + "##l\r\n";//埃苏莱布斯军刀
        selStr += "#r#L22#" + "#v1472261" + "#" + " #z1472261" + "##l\r\n";//埃苏莱布斯复仇斗拳
        selStr += "#r#L23#" + "#v1382259" + "#" + " #z1382259" + "##l\r\n";//埃苏莱布斯长杖
        selStr += "#r#L24#" + "#v1222109" + "#" + " #z1222109" + "##l\r\n";//埃苏莱布斯灵魂手铳
        selStr += "#r#L25#" + "#v1482216" + "#" + " #z1482216" + "##l\r\n";//埃苏莱布斯拳甲
        selStr += "#r#L26#" + "#v1422184" + "#" + " #z1422184" + "##l\r\n";//埃苏莱布斯大锤
        selStr += "#r#L27#" + "#v1212115" + "#" + " #z1212115" + "##l\r\n";//埃苏莱布斯双头杖
        selStr += "#r#L28#" + "#v1262017" + "#" + " #z1262017" + "##l\r\n";//埃苏莱布斯ESP限制器 
        selStr += "#r#L29#" + "#v1452252" + "#" + " #z1452252" + "##l\r\n";//埃苏莱布斯弓

        im.askMenu(selStr);

    } else
    if (status == 1) {
        switch (selection) {
            case 0:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1232109)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 171);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯短杖一个");

                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯短杖" + "#k" + "1个");
                im.dispose();
                break;
            case 1:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1332274)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 128);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯屠龙斩一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯屠龙斩" + "#k" + "1个");
                im.dispose();
                break;
            case 2:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1362135)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 160);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯折叠手杖一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯折叠手杖" + "#k" + "1个");
                im.dispose();
                break;
            case 3:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1242116)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 153);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯能量剑一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯能量剑" + "#k" + "1个");
                im.dispose();
                break;
            case 4:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1342101)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk + 30);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 81);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯之刃一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯之刃" + "#k" + "1个");
                im.dispose();
                break;
            case 5:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1372222)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 201);
                toDrop.setPAD(lvwatk + 119);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯短杖一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯短杖" + "#k" + "1个");
                im.dispose();
                break;
            case 6:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1242120)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 171);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp + 2000);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯能量剑一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯能量剑" + "#k" + "1个");
                im.dispose();
                break;
            case 7:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1582017)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 164);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯雷神一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯雷神" + "#k" + "1个");
                im.dispose();
                break;
            case 8:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1492231)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 164);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯枪一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯枪" + "#k" + "1个");
                im.dispose();
                break;
            case 9:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1552110)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 204);
                toDrop.setPAD(lvwatk + 126);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯扇子一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯扇子" + "#k" + "1个");
                im.dispose();
                break;
            case 10:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1442268)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 164);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯巨灵开山斧一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯巨灵开山斧" + "#k" + "1个");
                im.dispose();
                break;
            case 11:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1432214)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 160);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯穿透矛一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯穿透矛" + "#k" + "1个");
                im.dispose();
                break;
            case 12:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1412177)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 128);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯大斧一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯大斧" + "#k" + "1个");
                im.dispose();
                break;
            case 13:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1542108)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 128);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯武士刀一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯武士刀" + "#k" + "1个");
                im.dispose();
                break;
            case 14:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1252093)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 86);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯魔法棒一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯魔法棒" + "#k" + "1个");
                im.dispose();
                break;
            case 15:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1312199)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 164);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯战斧一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯战斧" + "#k" + "1个");
                im.dispose();
                break;
            case 16:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1462239)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 171);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯弩一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯弩" + "#k" + "1个");
                im.dispose();
                break;
            case 17:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1522138)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 204);
                toDrop.setPAD(lvwatk + 126);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯双弩枪一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯双弩枪" + "#k" + "1个");
                im.dispose();
                break;
            case 18:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1322250)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 201);
                toDrop.setPAD(lvwatk + 119);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯战锤一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯战锤" + "#k" + "1个");
                im.dispose();
                break;
            case 19:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1402251)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 128);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯宽大刀一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯宽大刀" + "#k" + "1个");
                im.dispose();
                break;
            case 20:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1532144)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 164);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯大炮一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯大炮" + "#k" + "1个");
                im.dispose();
                break;
            case 21:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1302333)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 175);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef + 121);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯军刀一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯军刀" + "#k" + "1个");
                im.dispose();
                break;
            case 22:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1472261)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 125);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯复仇斗拳一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯复仇斗拳" + "#k" + "1个");
                im.dispose();
                break;
            case 23:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1382259)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 171);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯长杖一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯长杖" + "#k" + "1个");
                im.dispose();
                break;
            case 24:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1222109)).copy();
                toDrop.setStr(lvstr + 40);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 164);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯灵魂手铳一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯灵魂手铳" + "#k" + "1个");
                im.dispose();
                break;
            case 25:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1482216)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 201);
                toDrop.setPAD(lvwatk + 119);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯拳甲一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯拳甲" + "#k" + "1个");
                im.dispose();
                break;
            case 26:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1422184)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex + 40);
                toDrop.setInt(lvint);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk);
                toDrop.setPAD(lvwatk + 160);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯大锤一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯大锤" + "#k" + "1个");
                im.dispose();
                break;
            case 27:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1212115)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 201);
                toDrop.setPAD(lvwatk + 119);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯双头杖一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯双头杖" + "#k" + "1个");
                im.dispose();
                break;
            case 28:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1262017)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 201);
                toDrop.setPAD(lvwatk + 119);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯ESP限制器一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯ESP限制器" + "#k" + "1个");
                im.dispose();
                break;
            case 29:
                var lvstr = Math.floor(Math.random() * 50) - 5;
                var lvdex = Math.floor(Math.random() * 50) - 5;
                var lvint = Math.floor(Math.random() * 50) - 5;
                var lvluk = Math.floor(Math.random() * 50) - 5;
                var lvwatk = Math.floor(Math.random() * 30) - 5;
                var lvmatk = Math.floor(Math.random() * 30) - 5;
                var lvhp = Math.floor(Math.random() * 2200) - 200;
                var lvmp = Math.floor(Math.random() * 1100) - 100;
                var lvwdef = Math.floor(Math.random() * 100) - 20;
                var lvmdef = Math.floor(Math.random() * 100) - 20;
                var lvbossDamage = Math.floor(Math.random() * 20) - 2;
                var lvIgnorePDR = Math.floor(Math.random() * 10) - 2;
                var lvtotalDamage = Math.floor(Math.random() * 15) - 4;
                var lvallStat = Math.floor(Math.random() * 15) - 4;
                var lvUpgradeSlots = Math.floor(Math.random() * 6);
                var ii = im.getItemInfo();
                var toDrop = ii.randomizeStats(ii.getEquipById(1452252)).copy();
                toDrop.setStr(lvstr);
                toDrop.setDex(lvdex);
                toDrop.setInt(lvint + 40);
                toDrop.setLuk(lvluk + 40);
                toDrop.setMAD(lvmatk + 201);
                toDrop.setPAD(lvwatk + 119);
                toDrop.setBDR(lvbossDamage + 30);
                toDrop.setIMDR(lvIgnorePDR + 10);
                toDrop.setDamR(lvtotalDamage);
                toDrop.setStatR(lvallStat);
                toDrop.setMaxHP(lvhp);
                toDrop.setMaxMP(lvmp);
                toDrop.setPDD(lvwdef);
                toDrop.setMDD(lvmdef);
                toDrop.setCHUC(lvUpgradeSlots + 8);
                im.addFromDrop(im.getClient(), toDrop, false);

                im.worldMessage("公告事项" + " : " + "恭喜玩家 " + im.getChar().getName() + " 从埃苏莱布斯武器箱中获得了埃苏莱布斯弓一个");

                im.gainItem(2435690, -1);
                im.sendOk("恭喜您，获得了" + "#r" + "埃苏莱布斯弓" + "#k" + "1个");
                im.dispose();
                break;



        }
    }
}



             