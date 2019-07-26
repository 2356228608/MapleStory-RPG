﻿/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：新手引导 任务
 *  @Author 娜娜 
 */

var status = -1;

function start() {
    cm.askMenu("等待！下面列出的信息都可以简单地通过第十级来获得，所以这不是你需要提前学习的东西。只有那些想提前学习的人应该从这里继续下去。OK，你想了解哪一个？  \n\r #b#L100#制作革命武器.#l \n\r\n\r=================================\n\r #L0#告诉我更多关于你的事.#l \n\r #b#L1#小地图#l \n\r #b#L2#任务窗口#l \n\r #b#L3#背包#l \n\r #b#L4#常规攻击#l \n\r #b#L5#拾取物品#l \n\r #b#L6#装备物品#l \n\r #b#L7#技能窗口#l \n\r #b#L8#如何使用快速插槽#l \n\r #b#L9#如何打破盒子?#l \n\r #b#L10#如何坐在椅子上?#l \n\r #b#L11#什么是世界地图?#l \n\r");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
    }
    if (status == 0) {
        if (selection == 0) {
            cm.sendNext("我目前正在服役神鸟，负责保护Queen Cygnus和埃列夫。神鸟命令我照顾女王的请求，这是为了引导到达枫树世界的灵魂们寻找成为天鹅骑士。这就是为什么我在这里，我将与你同在，直到你成为自己的骑士，或者，如果你达到11级。如果你有任何问题，请告诉我！");
        } else if (selection == 12) {
            cm.dispose();
			cm.sendOk("枫树的世界在很长一段时间里一直保持着和平，但我担心黑人巫师的存在正在慢慢地消失。为了阻止黑巫师，女王决定组建天鹅骑士团。一旦你达到10级，你就可以正式请求自己成为一个天鹅骑士。");
            
        } else if (selection == 100) {
            cm.dispose();
            cm.openNpc(9900003, "革命武器");
        } else if (selection == 101) {
            cm.dispose();
            cm.openNpc(9900003, 26);
        } else {
			cm.dispose();
            cm.hireTutorMsg(selection);
        }
    } else if (status == 1) {
		cm.dispose();
        cm.sendOk("但你真的不需要在这么短的时间内找出一切。我这里的所有信息都是游戏的基本知识，你可以通过玩游戏来简单地了解。事实上，我觉得你应该只问你是否在10级，但仍然不知道该怎么做，或者如果你只是想澄清，并仔细检查你已经知道。你真的不需要一下子就知道所有的事情，所以放松。");
		
    }else if (status == 2) {
		cm.dispose();
    }
}