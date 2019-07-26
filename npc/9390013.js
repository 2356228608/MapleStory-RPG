/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：每日任务 - 环任务20次
 *  @Author 娜娜 
	备注：任务初始ID 100100，子任务依次加1，新任务分类的初始ID需间隔100，如100200
 */

var chs;
var status = 0;
var text = "";
var questid = 100100;
var maxtimes = 20;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var hitemid = 0;
var hitemcs = 0;
var questitems = Array(
        4000439, //青苔石：苔藓树丛西部森林1  怪物掉落：石头虫
        4000438, //青藤条：苔藓丛林南部森林1  怪物掉落：苔藓木妖
        4000436, //苔藓蜗牛壳：苔藓丛林入口     怪物掉落：苔藓蜗牛
        4000001, //花蘑菇盖：梦境小道           怪物掉落：花蘑菇
        4000000, //蓝色蜗牛壳：明珠港郊外       怪物掉落：蓝蜗牛
        4000034, //蛇皮：沼泽地                 怪物掉落：青蛇
        4000048, //小白雪人皮：冰面1            怪物掉落：小白雪人
        4000052, //白狼之尾：冰雪峡谷2          怪物掉落：白狼 （不是白狼人）
        4000268, //飞龙的翅膀：龙的峡谷         怪物掉落：红飞龙
        4000014, //龙的头骨：潮湿的湿地         怪物掉落：土龙
        4000269, //飞龙的腮：飞龙的峡谷         怪物掉落：蓝飞龙
        4000270, //飞龙的指甲：飞龙的峡谷       怪物掉落：黑飞龙
        4000021, //动物皮                       怪物掉落：野猪的领土
        4000440, //粗糙的皮革：岩山洞穴         怪物掉落：原始野猪
        4000238, //哈维羽毛：天空之巢路口       怪物掉落：哈维
        4000239, //血腥哈维的王冠：天空之巢1    怪物掉落：血腥哈维
        4000330, //仙人掌的刺：仙人掌沙漠2      怪物掉落：仙人掌妈妈
        4000331, //仙人掌的花：仙人掌沙漠2      怪物掉落：仙人掌爸爸
        4000232, //半人马的火花：火焰半人马领土 怪物掉落：火焰半人马
        4000233, //半人马的净水：寒冰半人马领土 怪物掉落：寒冰半人马
        4000234, //半人马的骨头：火焰死亡战场   怪物掉落：暗黑半人马
        // 4001241,//暴力熊足                     怪物掉落：愤怒的暴力熊
        // 4001242,//心疤狮王足                   怪物掉落：愤怒的心疤狮王
        2000003, //蓝色药水
        4000006, //活力神水
        4001017, //火焰的眼
        4004000, //力量母矿
        4004002, //敏捷母矿
        4004001, //智慧母矿
        4160000, //宠物指令：小狗系列
        4160012, //宠物指令：小白雪人
        4160013, //宠物指令：小白虎
        4160014, //宠物指令：小企企
        4160015 //宠物指令：蝙蝠怪
        );

var itemList = Array(
		Array(4000439, "青苔石：苔藓树丛西部森林1", "怪物掉落：石头虫"), 
		Array(4000438, "青藤条：苔藓丛林南部森林1", "怪物掉落：苔藓木妖"), 
		Array(4000436, "苔藓蜗牛壳：苔藓丛林入口", "怪物掉落：苔藓蜗牛"), 
		Array(4000001, "花蘑菇盖：梦境小道", "怪物掉落：花蘑菇"), 
		Array(4000000, "蓝色蜗牛壳：明珠港郊外", "怪物掉落：蓝蜗牛"), 
		Array(4000034, "蛇皮：沼泽地", "怪物掉落：青蛇"), 
		Array(4000048, "小白雪人皮：冰面1", "怪物掉落：小白雪人"), 
		Array(4000052, "白狼之尾：冰雪峡谷2", "怪物掉落：白狼 （不是白狼人）"), 
		Array(4000268, "飞龙的翅膀：龙的峡谷", "怪物掉落：红飞龙"), 
		Array(4000014, "龙的头骨：潮湿的湿地", "怪物掉落：土龙"), 
		Array(4000269, "飞龙的腮：飞龙的峡谷", "怪物掉落：蓝飞龙"), 
		Array(4000270, "飞龙的指甲：飞龙的峡谷", "怪物掉落：黑飞龙"),
		Array(4000021, "动物皮", "怪物掉落：野猪的领土"),
		Array(4000440, "粗糙的皮革：岩山洞穴", "怪物掉落：原始野猪"),
		Array(4000238, "哈维羽毛：天空之巢路口", "怪物掉落：哈维"),
		Array(4000239, "血腥哈维的王冠：天空之巢1", "怪物掉落：血腥哈维"),
		Array(4000330, "仙人掌的刺：仙人掌沙漠2", "怪物掉落：仙人掌妈妈"),
		Array(4000331, "仙人掌的花：仙人掌沙漠2", "怪物掉落：仙人掌爸爸"),
		Array(4000232, "半人马的火花：火焰半人马领土", "怪物掉落：火焰半人马"),
		Array(4000233, "半人马的净水：寒冰半人马领土", "怪物掉落：寒冰半人马"),
		Array(4000234, "半人马的骨头：火焰死亡战场", "怪物掉落：暗黑半人马"),
		Array(2000003, "蓝色药水", "所有怪"),
		Array(4000006, "活力神水", "所有怪"),
		Array(4004000, "力量母矿", ""),
		Array(4004002, "敏捷母矿", ""),
		Array(4004001, "智慧母矿", ""),
		Array(4160000, "宠物指令：小狗系列", ""),
		Array(4160012, "宠物指令：小白雪人", ""),
		Array(4160013, "宠物指令：小白虎", ""),
		Array(4160014, "宠物指令：小企企", ""),
		Array(4160015, "宠物指令：蝙蝠怪", "")
        );
		

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            playerid = cm.getPlayer().getId();
            accepttimes = cm.getPlayer().MissionGetFinish(playerid, questid);
            text = "\t\t\t\t#e日常任务 - 环任务20次#n\r\n\r\n  您今日可再接取次数：#r" + (maxtimes - accepttimes) + "#k 次\r\n  完成每环任务会获得如下奖励：\r\n\t#r10个#t4000463#、大量游戏经验、30个征服币、100000点卷\r\n\r\n#k";
            if (cm.getPlayer().MissionStatus(playerid, questid, 0, 4)) {  // 判断是否接取了任务
                if (cm.getPlayer().MissionStatus(playerid, questid, 0, 0)) { // 判断是否完成任务
                    if (cm.getPlayer().MissionStatus(playerid, questid, maxtimes, 3)) { // 判断是否超过完成次数
                        text += "您已经完成了今天的任务，请明天0点后再来吧~";
                    } else {
                        text += "#b#L0#接受任务#l#k\r\n";
						text += "#b#L4#查看掉落出处#l\r\n";
						text += "#b#L5#使用1000万金币初始化任务20次#l\r\n";
                        //cm.MissionReMake(playerid, questid, 1, 0, 0);
                    }
                } else {
                    hitemid = cm.getPlayer().MissionGetMobId(playerid, questid);
                    hitemcs = cm.getPlayer().MissionGetMaxNum(playerid, questid, 0);
                    text += "#e  当前第#r" + Math.max(1, accepttimes) + "#k环  收集 #r#z" + hitemid + "# " + hitemcs + "#k个#n\r\n\r\n\r\n";
                    if (cm.haveItem(hitemid, hitemcs)) {	// 判断是否满足任务条件
                        text += "#b#L1#完成任务#l\r\n";
						text += "#b#L4#查看掉落出处#l\r\n";
						text += "#b#L5#使用1000万金币初始化任务20次#l\r\n";
                    }
                    text += "#r#L2#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
					text += "#b#L4#查看掉落出处#l\r\n";
					text += "#b#L5#使用1000万金币初始化任务20次#l\r\n";
                }
            } else {
                text += "#b#L3#接受任务#l\r\n";
				text += "#b#L4#查看掉落出处#l\r\n";
				text += "#b#L5#使用1000万金币初始化任务20次#l\r\n";
            }
            cm.askMenu(text);
        } else if (status == 1) {
            if (selection == 0) {			// 重新接受任务 初始化
                questitemid = questitems[Math.floor(Math.random() * questitems.length)];	// 任务道具ID
                questitemcs = Math.floor(Math.random() * 15) + 20 + Math.floor(Math.random() * cm.getLevel());	// 任务道具数量
                text = "#e第#r" + (accepttimes + 1) + "#k环：\r\n\r\n任务条件： 收集#r#z" + questitemid + "# " + questitemcs + "个#k#n\r\n\r\n#k快去快回~";
                // 重新接受任务
                cm.getPlayer().MissionReMake(playerid, questid, 1, 0, 0);
                // 写入任务道具ID
                cm.getPlayer().MissionSetMobId(playerid, questid, questitemid);
                // 写入任务道具数量
                cm.getPlayer().MissionMaxNum(questid, questitemcs);
                cm.dispose();
				cm.sendOk(text);
            } else if (selection == 1) {	// 完成任务
                //accepttimes = cm.getPlayer().MissionGetFinish(playerid, questid);
                cm.getPlayer().MissionFinish(playerid, questid);
                var calcExp = Math.floor(Math.random() * 1000000 + 30000000000);
                cm.gainExp(calcExp);
                //cm.gainItem(5062002, 1);
                cm.gainItem(4000463, 10);
                cm.gainItem(4310036, 30);
                cm.getChar().modifyCSPoints(1, 100000);
                cm.gainItem(hitemid, -hitemcs);
                cm.finishActivity(120110);
                cm.worldSpouseMessage(0x0C, "[日常任务]" + " : " + "恭喜玩家【" + cm.getChar().getName() + "】,完成了【第" + accepttimes + "环】任务获得了丰厚的奖励。");
                cm.playerMessage(-1, "获得经验" + calcExp);
                cm.playerMessage(-1, "获得国庆纪念币10个");
                cm.playerMessage(-1, "获得征服币30个");
                //cm.playerMessage(-1, "获得高级神奇魔方1个");
                cm.playerMessage(-1, "获得100000点卷");
                cm.dispose();
				text = "恭喜您完成了任务~~";
                cm.sendOk(text);
            } else if (selection == 2) {	// 放弃任务
                cm.getPlayer().MissionFinish(playerid, questid);
                text = "任务已放弃……";
                cm.dispose();
				cm.sendOk(text);
            } else if (selection == 3) {	// 接受任务
                questitemid = questitems[Math.floor(Math.random() * questitems.length)];	// 任务道具ID
                questitemcs = Math.floor(Math.random() * 15) + 20 + Math.floor(Math.random());	// 任务道具数量
                text = "#e第#r" + (accepttimes + 1) + "#k环：\r\n\r\n任务条件： 收集#r#z" + questitemid + "# " + questitemcs + "个#k#n\r\n\r\n#k快去快回~";
                // 创建任务，写入任务道具ID
                cm.getPlayer().MissionMake(playerid, questid, 1, 0, 0, questitemid);
                // 写入任务道具数量
                cm.getPlayer().MissionMaxNum(questid, questitemcs);
                cm.dispose();
				cm.sendOk(text);
                
            }else if (selection == 4) {	// 查看掉落出处
                cm.dispose();
				var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好.";
				for (var i = 0; i < itemList.length; i++) {
					selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##b  " + itemList[i][2] + "#k#l";
				}
				cm.askMenu(selStr);
                
            }else if (selection == 5) {	// 初始化
                cm.getPlayer().MissionDelete(cm.getPlayer().getId(), questid);
				cm.sendOk("已恢复任务次数为"+ maxtimes +"次");
				cm.dispose();              
            }
        }
    }
}
