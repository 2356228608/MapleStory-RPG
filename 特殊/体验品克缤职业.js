    /*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：体验品克缤职业
 *  @Author 娜娜 
     */
    var status = 0;

    function start() {
        status = -1;
        action(1, 0, 0);
    }

    function action(mode, type, selection) {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } else if (status == 0) {
			//cm.getPlayer().getQuestNAdd(cm.getQuestById(99900)).setCustomData("0");
            var selStr = "亲爱的#r#h ##k您好，我这里可以为您转职业#k\r\n";
            
			if (cm.getPlayer().getIntNoRecord(99900) != 0) {
				selStr += "#b#L2##b我想变正常玩家职业#l\r\n";
			}else{
				selStr += "#b#L1##b如果你愿意，我会把你变成动物皮卡丘(品克缤职业)#l\r\n";
			}
            cm.askMenu(selStr);
			//cm.sendOk("."+cm.getQuestStatus(99900))
			
			//cm.askYesNo(selStr);
        } else if (status == 1) {
            switch (selection) {
                case 1://
					cm.getPlayer().getQuestNAdd(cm.getQuestById(99900)).setCustomData(cm.getJob());
					cm.changeJob(13100);
					cm.playerMessage(1,"神的力量已把你变成动物原形.");
					cm.dispose();
                    break;
				case 2:
					cm.changeJob(cm.getPlayer().getIntNoRecord(99900));
					cm.getPlayer().getQuestNAdd(cm.getQuestById(99900)).setCustomData("0");
					cm.playerMessage(1,"已成功变回正常人.");
					cm.dispose();
					break;
				default:
					cm.dispose();
					cm.playerMessage(1,"#bselection#k"+selection);
            }
            //cm.dispose();
        } else if (status == 2) {
			cm.dispose();
			cm.playerMessage(1,"#bselection#k"+selection);
		}
    }
