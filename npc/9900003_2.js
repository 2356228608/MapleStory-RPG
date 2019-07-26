/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：传送
 *  @Author 娜娜 
 */

        var 城镇地图 = Array(
                Array(1000000, "#b彩虹岛#r"),
                Array(2000000, "#b彩虹岛#r"),
                Array(104020000, "#b金银岛#r"),
                Array(100000000, "#b弓箭手村#r"),
                Array(101000000, "#b魔法森林#r"),
                Array(102000000, "#b勇士部落#r"),
                Array(103000000, "#b废弃城市#r"),
                Array(104000000, "#b明珠港#r"),
                Array(105000000, "#b林中之城#r"),
                Array(120000000, "#b诺特勒斯#r"),
                Array(101050000, "#b埃欧雷#r"),
                Array(101020400, "#b魔法师协会#r"),
                Array(101071300, "#b艾利涅#r"),
                Array(106030000, "#b蘑菇城#r"),
                Array(120040000, "#b金海滩#r"),
                Array(130000200, "#b圣地#r"),
                Array(140000000, "#b里恩#r"),
                Array(200000000, "#b天空之城#r"),
                Array(211000000, "#b冰峰雪域#r"),
                Array(211060000, "#b狮子王之城#r"),
                Array(220000000, "#b玩具城#r"),
                Array(300000000, "#b艾琳森林#r"),
                Array(223000000, "#b梦幻主题公园#r"),
                Array(224000000, "#b童话村#r"),
                Array(230000000, "#b水下世界#r"),
                Array(860000000, "#b另一个水下世界#r"),
                Array(260000200, "#b阿利安特#r"),
                Array(261000000, "#b玛嘉提亚#r"),
                Array(250000000, "#b武陵#r"),
                Array(251000000, "#b百草堂#r"),
                Array(252000000, "#b黄金寺院#r"),
                Array(240000000, "#b神木村#r"),
                Array(240090000, "#b克鲁瑟斯#r"),
                Array(310000000, "#b埃德尔斯坦#r"),
                Array(310070000, "#b机械坟墓#r"),
                Array(270000000, "#b时间神殿#r"),
                Array(271010000, "#b破坏的射手村#r"),
                Array(273000000, "#b黄昏勇士部落#r"),
                Array(241000000, "#b克里蒂亚斯#r"),
                Array(241010000, "#b被破坏的克里蒂亚斯#r"),
                Array(410000000, "#b尖耳狐狸村#r"),
                Array(400000000, "#b万神殿#r"),
                Array(401000000, "#b赫里希安#r"),
                Array(320000000, "#b时空裂缝#r"),
                Array(301000000, "#b绯红#r"),
                Array(866000000, "#b灯笼树村#r"),
                Array(866190000, "#b大树村#r"),
                Array(867000000, "#b春日山谷#r"),
                Array(865000000, "#b凯梅尔兹共和国#r"),
                Array(865000000, "#b凯梅尔兹共和国#r"),
                Array(105300000, "#b堕落世界树#r")
                );

var 怪物地图 = Array(
        Array(50000, "#b1级~10级#r"),
        Array(100010100, "#b3级~10级#r"),
        Array(101020100, "#b8级~15级#r"),
        Array(102030000, "#b15级~20级#r"),
        Array(101030000, "#b20级~30级#r"),
        Array(120040100, "#b30级~40级#r"),
        Array(103030200, "#b40级~50级#r"),
        Array(102040000, "#b50级~60级#r"),
        Array(105020000, "#b60级~70级#r"),
        Array(211020000, "#b70级~80级#r"),
        Array(260020400, "#b80级~90级#r"),
        Array(261020100, "#b90级~100级#r"),
        Array(240020000, "#b100级~110级#r"),
        Array(220060201, "#b110级~120级#r"),
        Array(250010400, "#b120级~130级#r"),
        Array(240030000, "#b130级~140级#r"),
        Array(270020300, "#b130级~150级#r"),
        Array(271000200, "#b150级~160级#r"),
        //Array(703001200, "#b160级~170级#r"),
        Array(271030510, "#b170级~180级#r"),
        Array(241000214, "#b180级~190级#r"),
        Array(273040000, "#b190级~200级#r"),
        Array(310070310, "#b200级以上#r"),
        Array(450001010, "#b200级以上#r"),
		Array(450001011, "#b220级以上#r"),
		Array(450001012, "#b250级以上#r")
        );

var 旅游地图 = Array(
        Array(910800000, "#b世界旅行#r"),
        Array(500000000, "#b泰国#r"),
        Array(600000000, "#b新叶城#r"),
        Array(703000000, "#b2022年的新叶城#r"),
        Array(610050000, "#b黑门城#r"),
        Array(680000000, "#b西式结婚村庄#r"),
        Array(229010000, "#b闹鬼邸宅，暂未修复#r"),
        Array(693000000, "#b星之大陆#r"),
        Array(693000020, "#b星之大陆#r"),
        Array(693000040, "#b星之大陆#r"),
        Array(693000060, "#b星之大陆#r"),
        Array(219000000, "#b可口可乐村#r"),
        Array(701100000, "#b魔都上海#r"),
        Array(701210000, "#b嵩山镇#r"),
        Array(701220000, "#b少林寺#r"),
        Array(807000000, "#b日本：战国时代#r"),
        Array(800000000, "#b日本：江户时代#r"),
        Array(801000000, "#b日本：昭和时代#r"),
        Array(802000101, "#b日本：未来时代，未完全修复#r")
        );

var Boss地图 = Array(
        Array(105100100, "#b蝙蝠魔#r"),
        Array(211042300, "#b扎昆#r"),
        Array(211070000, "#b狮子王#r"),
        Array(300030300, "#b艾琳森林#r"),
        Array(220080001, "#b闹钟#r"),
        Array(230040410, "#b皮亚奴斯#r"),
        Array(240050400, "#b暗黑龙王#r"),
        Array(240093200, "#b蜘蛛女王#r"),
        Array(252030000, "#b六手邪神#r"),
        Array(272020110, "#b阿卡伊勒#r"),
        Array(271041000, "#b堕落的希纳斯#r"),
        Array(350060300, "#b斯乌#r"),
        Array(105200000, "#b鲁塔比斯，四大天王#r"),
        Array(105300303, "#b戴米安#r"),
        Array(800026000, "#b136新BOSS天狗#r"),
		Array(262030000, "#b希拉#r"),
		Array(910811001, "#b浓姬#r")
        );

var 副本地图 = Array(
        Array(106030000, "#b蘑菇城副本，未修复#r"),
        Array(141000000, "#b列娜海峡副本，未修复#r"),
        Array(933030000, "#b毒雾森林副本，未修复#r"),
        Array(933030000, "#b女神之塔峡副本，未修复#r"),
        Array(744000000, "#b枫之高校，未修复#r"),
        Array(744000020, "#b战国高中，未修复#r"),
        Array(330000000, "#b国际神兽学校，未修复#r"),
        Array(620105500, "#b疯人院副本，未修复#r"),
        Array(993000700, "#b雪龟岛副本，未修复#r"),
        Array(993000801, "#b尼哈沙漠自由贸易区，未修复#r"),
        Array(993001000, "#b控制之神副本，未修复#r"),
        Array(861000000, "#b次元入侵副本，未修复#r"),
        Array(811000000, "#b比睿山，未修复#r")





        );

var 活动地图 = Array(
        Array(100000202, "射手跳跳"),
        Array(209000000, "幸福村"),
        Array(220000006, "玩具城跳跳"),
        Array(280020000, "火山的心脏"),
        Array(109040001, "共4阶段"),
        Array(910130000, "忍苦树林"),
        Array(109030001, "上楼找出口"),
        Array(109040001, "高地第1阶段"),
        Array(910360000, "地铁B1"),
        Array(910360100, "地铁B2"),
        Array(910360200, "地铁B3")
        );
var 特色地图 = Array(
        Array(300020200, "“大量”蜗牛邮票"),
        Array(300010000, "大量星星"),
        Array(300010400, "大量定居金")
        );

var status;
var select;
var MapType;
var event = "#fUI/CashShop.img/CSEffect/event/0#";  //活动图标
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var fanghui = false;
var text = "请选择您要传送的地方：\r\n#r#e";

function start() {
    status = -1;
    str = "";
    str += "#e#h0#，这里可以传送到很多地方：#b";
    str += "\r\n#L0# " + icon + " 城镇地图";
    str += "\r\n#L1# " + icon + " 旅游地图";
    str += "\r\n#L2# " + icon + " 练级地图";
    str += "\r\n#L3# " + icon + " 活动地图";
    str += "\r\n#L4# " + icon + " #e#r特色地图#b";
    str += "\r\n#L5# " + icon + " #e#rBOSS地图#b";
    str += "\r\n#L6# " + icon + " #e#r副本BOSS地图#b";
    str += "\r\n#L7# " + icon + " 豹弩游侠(坐骑抓获地图)";
    str += "\r\n#L8# " + icon + " 转蛋卷抽奖地图";
    str += "\r\n#L9# " + icon + " 进家族中心(创建家族)\r\n";



    cm.askMenu(str);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            switch (selection) {
                case 0:
                    for (var i = 0; i < 城镇地图.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + 城镇地图[i][0] + "# (" + 城镇地图[i][1] + ")\r\n";
                    }
                    MapType = 0;
                    fanghui = true;
                    cm.askMenu(text);
                    break;
                case 1:
                    for (var i = 0; i < 旅游地图.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + 旅游地图[i][0] + "# (" + 旅游地图[i][1] + ")\r\n";
                    }
                    MapType = 1;
                    needMoney = true;
                    cm.askMenu(text);
                    break;
                case 2:
                    for (var i = 0; i < 怪物地图.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + 怪物地图[i][0] + "# (" + 怪物地图[i][1] + ")\r\n";
                    }
                    MapType = 2;
                    cm.askMenu(text);
                    break;
                case 3:
                    for (var i = 0; i < 活动地图.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + 活动地图[i][0] + "# (" + 活动地图[i][1] + ")\r\n";
                    }
                    MapType = 3;
                    needMoney = true;
                    cm.askMenu(text);
                    break;
                case 4:
                    for (var i = 0; i < 特色地图.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + 特色地图[i][0] + "# (" + 特色地图[i][1] + ")\r\n";
                    }
                    MapType = 4;
                    needMoney = true;
                    cm.askMenu(text);
                    break;
                case 5:
                    for (var i = 0; i < Boss地图.length; i++) {
                        text += "#L" + i + "# " + icon + " #m" + Boss地图[i][0] + "# (" + Boss地图[i][1] + ")\r\n";
                    }
                    MapType = 5;
                    needMoney = true;
                    cm.askMenu(text);
                    break;
                case 6:
                    cm.dispose();
					cm.openNpc(9900004,7);
                    break;
                case 7:
                    cm.dispose();
                    cm.warp(931000500);
                    break;
                case 8:
                    cm.dispose();
                    cm.warp(749050400);
                    break;
                case 9:
                    cm.dispose();
                    cm.warp(200000301, 0);
                    break;

            }
            //cm.askMenu(text);
            break;
        case 1:
            select = selection;
            cm.askYesNo("在这里的事情办完了？确定要传送到您想去的地方吗？");
            break;
        case 2:
            if (cm.getMeso() < 500) {
                cm.sendOk("对不起，你的金币不足。\r\n需要500金币才能进行。");
                cm.dispose();
                return;
            } else {
                cm.gainMeso(-500);
            }

            switch (MapType) {
                case 0:
                    cm.warp(城镇地图[select][0]);
                    break;
                case 1:
                    cm.warp(旅游地图[select][0]);
                    break;
                case 2:
                    cm.warp(怪物地图[select][0]);
                    break;
                case 3:
                    cm.warp(活动地图[select][0]);
                    break;
                case 4:
                    cm.warp(特色地图[select][0]);
                    break;
                case 5:
                    cm.warp(Boss地图[select][0]);
                    break;
                case 6:
                    cm.warp(副本地图[select][0]);
                    break;
            }
            cm.dispose();
            break;
        default:
            cm.dispose();
    }
}