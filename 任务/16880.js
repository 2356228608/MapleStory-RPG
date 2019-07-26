/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  地图:'勇士部落 : 废弃研究室' (910090305)
 *  脚本功能：//帮村民干活2
 *  @Author 娜娜 
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
		qm.askYesNo_Bottom("你好，#b#e#h0##n#k！\r\n我想为来自#e#b冒险岛世界#k#n的勇士提供一些帮助！", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("你知道#i2030059##e#b[回城卷轴]#k#n吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#e#b[回城卷轴]#k#n\r\n是可以从你当前所在位置移动到#r#e最近的村庄#k#n的道具。\r\n在狩猎的过程中想要回到村庄时使用，可以节约走路的时间，因此是非常有用的道具。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#e#r使用之后会立即移动#k#n到村庄，并消耗#e#r一个#k#n回城卷轴。\r\n此外，在部分#e#r无法传送的地区#k#n无法使用回城卷轴。希望你能记住这些。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("最后，#b[回城卷轴]#k#n可以在附近村庄的#b#e杂货商人#n#k那里购买。", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("现在我可以送你一些#b[回城卷轴]#k。\r\n你想现在领取#i2030059##e#b10个[回城卷轴]#k#n吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#i2030059##e#b10个[回城卷轴]#k#n已经送给你了", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("现在我可以送你一些#b[回城卷轴]#k。\r\n你想现在领取#i2030059##e#b10个[回城卷轴]#k#n吗？", 1013350);
	} else if (status === i++) {
		qm.sendNext_Bottom("#e#b#h0##k#n，希望在冒险的时候能对你有用.", 1013350);
	} else if (status === i++) {
		//qm.forceStartQuest();//开始任务
		qm.forceCompleteQuest();//完成任务
		//qm.forceStartQuest(35913);//开始任务
		//qm.OnStartNavigation(100051030,1,"",35913);//开始导航
		qm.gainItem(2030059, 10);
		qm.dispose();
		//qm.warp(100051020, 0);//剧情直接跳过,不写了910090307
		
    } else {
        qm.dispose();
    }
}
