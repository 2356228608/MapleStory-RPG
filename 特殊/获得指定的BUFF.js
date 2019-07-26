/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var n1;
var n2;
var n3;

var scrolls = Array(
Array(" 霰弹炮",5321054, 10000,"攻击段数微提高3倍"),
Array(" 敛财术",4211003, 10000,"获得更多的金币"),
Array(" 抗震防御",1211014, 10000,"提高所有攻击魔法伤害"),
Array(" 精神力",2101001, 10000,"增加魔力"),
Array(" 祝福",2301004, 10000,"增加攻击力、魔力、防御力"),
Array(" 神圣祈祷",2311003, 10000,"可以获得更多的经验值"),
Array(" 魔法盾",2001002, 10000,"减少受到的伤害，用MP来代替部分伤害"),
Array(" 水盾",23111005, 10000,"提高对所有状态异常的抗性的效果")
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
                choices += "\r\n#L" + i + "##L" + scrolls[i][1] + "##s" + scrolls[i][1] + "#　#d#r" + scrolls[i][3] + "#d#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "专卖店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            //cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            //choice = selection;
			cm.Skillbuff(selection);
            cm.dispose();
			cm.sendOk("已获得BUFF");
        }
    }
}

