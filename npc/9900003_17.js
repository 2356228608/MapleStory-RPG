/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：自由转职
 *  @Author 娜娜 
 */
var a = 0;
var text;
function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            if (cm.getXiuxian()) {
			text+="欢迎来到BMS职业学校，请问你想要做什么?\r\n# "
			text+="\r\n#b#L100# 正常转职(1-4转)#l";
			text+="\r\n#b#L2# 自由转职(仅冒险家)#l ";
			text+="\r\n#b#L3#一键5转#l ";
			text+="\r\n#b#L4#刷V核心碎片#l ";
			text+="\r\n#b#L5#打开V核心技能制作UI#l";
			if (cm.getPlayer().getIntNoRecord(99900) != 0) {
				text+="\r\n#L200#变回之前职业#l ";
			}else{
				text+="\r\n#L200#体验品克缤职业#l ";
			}
			
			cm.askMenu(text);
		} else if ((cm.getJob() == 112 || cm.getJob() == 122 || cm.getJob() == 132) || (cm.getJob() == 212 || cm.getJob() == 222 || cm.getJob() == 232) || (cm.getJob() == 512 || cm.getJob() == 522 || cm.getJob() == 532) || (cm.getJob() == 412 || cm.getJob() == 422 || cm.getJob() == 434) || (cm.getJob() == 312 || cm.getJob() == 322)) {
			
			text+="欢迎来到BMS职业学校，请问你想要做什么?\r\n# "
			text+="\r\n#b#L1# 正常转职(1-4转)#l";
			text+="\r\n#b#L2# 自由转职(仅冒险家)#l ";
			text+="\r\n#b#L3#一键5转#l";
			text+="\r\n#b#L4#刷V核心碎片#l ";
			text+="\r\n#b#L5#打开V核心技能制作UI#l";
			if (cm.getPlayer().getIntNoRecord(99900) != 0) {
				text+="\r\n#L200#变回之前职业#l ";
			}else{
				text+="\r\n#L200#体验品克缤职业#l ";
			}
			
                cm.askMenu(text);
            } else {
				
			text+="欢迎来到BMS职业学校，请问你想要做什么?\r\n# "
			text+="\r\n#b#L1# 正常转职(1-4转)#l";
			text+="\r\n#b#L3#一键5转#l ";
			text+="\r\n#b#L4#刷V核心碎片#l ";
			text+="\r\n#b#L5#打开V核心技能制作UI#l";
			if (cm.getPlayer().getIntNoRecord(99900) != 0) {
				text+="\r\n#L200#变回之前职业#l ";
			}else{
				text+="\r\n#L200#体验品克缤职业#l ";
			}
			
                cm.askMenu(text);
            }
        } else if (a == 1) {
            if (selection == 1) {
                cm.dispose();
                cm.openNpc(9900003, 4);
            } else if (selection == 2) {
                cm.dispose();
                //cm.warp(240010501, 0);
				cm.openNpc(9900003, "FreeTransfer");
            } else if (selection == 100) {
                cm.dispose();
                cm.openNpc(9900003, "自选职业");
            } else if (selection == 200) {
                cm.dispose();
				cm.openNpc(9900003, "体验品克缤职业");
            } else if (selection == 3) {
				if(cm.getPlayerStat("LVL") <199){
					cm.dispose();
					cm.playerMessage(1,"抱歉，你等级不够200级！");
				}else{
					cm.askYesNo("如果你愿意，我会引导你短暂观察下艾文达的流动。好了，请闭上眼……\r\n\r\n#b(如果接受的话，请根据旁观者的引导，集中精神。)#k");
				}
            }else if (selection == 4) {
				if(cm.getPlayerStat("LVL") <199){
					cm.dispose();
					cm.playerMessage(1,"抱歉，你等级不够200级！");
				}else{
					cm.getPlayer().gainvCorePiece(3000);
					cm.dispose();
					cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了3000V核心碎片!");
				}
            }else if (selection == 5) {
				if(cm.getPlayerStat("LVL") <199){
					cm.dispose();
					cm.playerMessage(1,"抱歉，你等级不够200级！");
				}else{
					cm.dispose();
					cm.openUI(1131);
				}
            }
        }else if (a == 2) {
			cm.playerMessage(1,"selection！"+selection);
			cm.forceCompleteQuest(1460);
            cm.forceCompleteQuest(1461);
            cm.forceCompleteQuest(1462);
            cm.forceCompleteQuest(1463);
            cm.forceCompleteQuest(1464);
            cm.forceCompleteQuest(1465);
            cm.forceCompleteQuest(1466);
			cm.forceCompleteQuest(1478);
			cm.gainItem(2436324, 100);
			//cm.showJob();
			cm.sendOk("逗你玩的，你已经获得了新力量，完成了5转。请打开技能面板查看。\r\n\r\n系统已送你100个5转核心宝石，可打开背包查看。")
			cm.dispose();
        }
		//a
    }//mode
}//f



