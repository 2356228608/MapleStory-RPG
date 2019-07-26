/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：骑宠专卖店
 *  @Author 娜娜 
 */

var status = 0;
var choice;
var scrolls = Array(
		Array("鸟叔邮递员骑宠", 2431915, 10000),
		Array("休彼德蔓的热气球", 2430275, 10000),
		Array("狮子王", 2430117, 10000),
		Array("田园红卡车", 2430118, 10000),
		Array("恶魔石像", 2430119, 10000),
		Array("雄狮骑宠", 2430262, 10000),
		Array("魔女的扫把", 2430264, 10000),
		Array("玩具坦克", 2430323, 10000),
		Array("妮娜的魔法", 2430316, 10000),
		Array("青蛙", 2430318, 10000),
		Array("无辜水牛", 2430322, 10000),
		Array("维京战车", 2430326, 10000),
		Array("打豆豆机器人", 2430328, 10000),
		Array("暴风摩托", 2430330, 10000),
		Array("玩具木马", 2430332, 10000),
		Array("老虎只是传说", 2430334, 10000),
		Array("莱格斯的豺犬", 2430336, 10000),
		Array("鸵鸟", 2430338, 10000),
		Array("跑车", 2430340, 10000),
		Array("拿破仑的白马", 2430342, 10000),
		Array("女女机车", 2430347, 10000),
		Array("男男机车", 2430349, 10000),
		Array("赛车", 2430351, 10000),
		Array("巨无霸兔子", 2430355, 10000),
		Array("兔兔加油", 2430357, 10000),
		Array("兔子车夫", 2430359, 10000),
		Array("走路鸡", 2430361, 10000),
		Array("机动巡逻车", 2430345, 10000),
		Array("警车", 2430367, 10000),
		Array("双梦魇骑宠", 2430933, 10000),
		//Array("蓝焰梦魇", 2432499, 10000),
		Array("冒险骑士团高速电车", 2430392, 10000),
		Array("福袋", 2430232, 10000),
		Array("GO兔冒险", 2430537, 10000),
		Array("圣诞雪橇", 2430199, 10000),
		Array("赛车", 2430211, 10000),
		Array("超级兔子", 2430508, 10000),
		Array("蓝色电单车", 2431491, 10000),
		Array("布莱克缤", 2431474, 10000),
		Array("和品克缤一起旅行", 2431777, 10000),
		Array("双粉红飞马", 2436291, 10000),
		Array("二连跳青蛙", 2431490, 10000),
		Array("幻龙", 2432110, 10000),
		Array("与你相伴阿幻影", 2432105, 10000),
		Array("与你相伴阿莉亚", 2431134, 10000),
		Array("玛瑙美洲豹", 2431268, 10000),
		Array("礼物雪球", 2431362, 10000),
		Array("蝴蝶秋千", 2431415, 10000),
		Array("滑板", 2431358, 10000),
		Array("僵尸压榨", 2431485, 10000),
		Array("黑蛇", 2431390, 10000),
		Array("舞狮", 2431391, 10000),
		//Array("贝伦", 2432296, 10000),
		Array("小龟龟", 2430320, 10000),
		Array("与天使同在", 2432170, 10000),
		Array("提拉", 2430080, 10000),
		Array("热气球", 2430292, 10000),
		Array("飞船", 2430294, 10000),
		Array("天马", 2430296, 10000),
		Array("暗光龙", 2430298, 10000),
		Array("魔法扫帚", 2430300, 10000),
		Array("筋斗云", 2430302, 10000),
		Array("骑士团战车", 2430304, 10000),
		Array("梦魔", 2430306, 10000),
		Array("透明蝙蝠", 2430309, 10000),
		Array("猫头鹰", 2430312, 10000),
		Array("直升机", 2432751, 10000),
		Array("国庆热气球", 2430464, 10000),
		Array("黑飞龙", 2431353, 10000),
		Array("天空自行车", 2431423, 10000),
		Array("雪花骑宠", 2433707, 10000),
		Array("雨和云骑宠", 2433707, 10000),
        Array("蝙蝠", 2432167, 10000),
        Array("飞行床", 2432151, 10000),
        Array("摇摇木马", 2431779, 10000),
		Array("小行星", 2432451, 10000),
		Array("蜜蜂小火车", 2431697, 10000),
		Array("南瓜马车", 2432294, 10000),
		Array("沙云", 2431883, 10000),
		Array("沙云", 2432015, 10000),
		Array("月亮", 2431464, 10000),
		Array("雨和云骑宠", 2431462, 10000)
		
		
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
            choices = "\r\n我账户点卷：#r" + cm.getPlayer().getCSPoints(1) + "#k (#r买后不支持退货哟亲#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d点卷#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "骑宠专卖店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
				var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 1, "骑宠专卖店", 3, true);
				if (gachaponItem != -1) {
					cm.gainNX(-money);
					cm.dispose();
					cm.sendOk("恭喜您成功购买#i" + scrolls[choice][1] + ":# #b#t" + scrolls[choice][1] + "##k。");
				} else {
					cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
				}
            }
        }
    }
}
