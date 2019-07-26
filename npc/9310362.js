
        /*      
         
         NPC版权:                追忆冒险岛
         NPC名称: 		拍卖
         MAP(地图ID): 	        
         NPC类型: 		综合NPC
         制作人：故事丶
         
         */

        var status = 0;
var typede = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            if (cm.getPlayer().getLevel() > 9) {
                var zyms = "";
                zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n";

                zyms += "#L3##b快速转职#l #L4##b地图传送#l #L5##r等级送礼#l #L6##b药水商店#l\r\n\r\n";
                zyms += "                #L12##r新人过度装备推荐#l\r\n\r\n";
                zyms += "    #L1##b进入自由市场#l     #fMob/0130101.img/move/0#   #L9##r限时赞助礼包#l\r\n";
                zyms += "                #L2##b查询怪物掉落数据#l\r\n\r\n";
                zyms += "#L7##r提取金卷#l #L8##r首充礼包#l #L10##r赞助返点#l #L11##r赞助抽奖#l";

                //zyms += "#L12##v4310115##v4310115##v4310115##g夏季运动会火爆进行中#v4310115##v4310115##v4310115##l\r\n";
                cm.askMenu(zyms);
            } else {
                cm.warp(50000);
                cm.sendOk("10级才可以访问拍卖NPC。\r\n实力团队运营,独特的新玩法,真正的无挂防官方私服,修复完善,内容居多。欢迎各位新老玩家前来体验,让我们一起追忆那些年的感动。");
                cm.dispose();
            }


        } else if (selection == 1) { //传送自由市场
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk("你已经在自由市场了。");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
        } else if (selection == 2) { //怪物数据查询
            cm.dispose();
            cm.openNpc(9310362, 1);

        } else if (selection == 3) { //怪物数据查询
            cm.dispose();
            cm.openNpc(9310362, 2);

        } else if (selection == 4) {
            cm.dispose();
            cm.openNpc(2023000);

        } else if (selection == 5) {
            cm.dispose();
            cm.openNpc(9310362, 3);

        } else if (selection == 6) {
            cm.dispose();
            cm.openShop(61);

        } else if (selection == 7) {
            cm.dispose();
            cm.openNpc(9310362, 4);

        } else if (selection == 8) {
            if (cm.getZZ() < 10) {
                cm.sendOk("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#b#h0# #k首次赞助充值10元即可获得以下丰厚礼物:\r\n#v2049400#x20 #v2049300#x20 #v5062000#x10 #v5062002#x10 #v2340000#x10 \r\n#v5076000#x10 #v5360014#x3日权\r\n#v2431256#x1 (可随机抽取椅子一个#r含巨无霸#k)\r\n进入充值平台充值10元然后点击“拍卖”提取金卷后在来点击我即可领取,赶快进入官方网站平台充值吧。");
            } else if (cm.getSpace(2) < 4) {
                cm.sendOk("背包消耗栏有4个以上的空位才可以领取奖励。");
            } else if (cm.getBossLog("首次赞助", 1) < 1) {
                cm.gainItem(2049400, 20, 7);
                cm.gainItem(2049300, 20, 7);
                cm.gainItem(5062002, 10, 7);
                cm.gainItem(5062000, 10, 7);
                cm.gainItem(2340000, 10, 7);
                cm.gainItem(2431256, 1, 7);
                cm.gainItem(5076000, 10);
                cm.gainItem(5360014, 1, 3);
                cm.setBossLog("首次赞助");
                cm.sendOk("领取成功,祝您有些愉快。");
                cm.worldMessage("玩家[" + cm.getPlayer().getName() + "]完成了首次赞助任务获得了丰富奖励~");
            } else {
                cm.sendOk("您已经完成首次赞助任务,累积赞助可以点击“拍卖”查看赞助返点奖励。");
            }
            cm.dispose();


        } else if (selection == 9) {
            cm.dispose();
            cm.openNpc(9310362, 6);

        } else if (selection == 10) {
            cm.dispose();
            cm.openNpc(9310362, 7);

        } else if (selection == 11) {
            cm.dispose();
            cm.sendOk("该NPC正在紧急制作。\r\n\r\n如果您已经充值,请不要惊慌。脚本完成后就可以抽奖了。");

        } else if (selection == 12) {
            cm.dispose();
            cm.openNpc(9010047);


        }
    }
}

