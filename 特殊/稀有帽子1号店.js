/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:椅子专卖
 *  @Author 娜娜 
 */
var status = 0;
var choice;
var scrolls = Array(

Array("桃太郎帽子",1004239, 10000),
Array("呼拉呼拉羽毛装饰",1004213, 10000),
Array("晶莹精致丝带",1004212, 10000),
Array("山茶花头饰",1004209, 10000),
Array("哈尼绒绒耳",1004211, 10000),
Array("风车头箍",1004196, 10000),
Array("夺命鲨鱼",1004197, 10000),
Array("太极发箍",1004198, 10000),
Array("菖蒲发卡",1004199, 10000),
Array("哆来咪耳麦",1004192, 10000),
Array("搞怪翅膀帽",1004193, 10000),
Array("蝴蝶结贝雷帽",1004194, 10000),
Array("足球发箍",1004195, 10000),
Array("蓝色小马憨憨针织帽",1004204, 10000),
Array("红色小马憨憨针织帽",1004205, 10000),
Array("夏日兔草帽",1004200, 10000),
Array("暗夜精灵战盔",1004201, 10000),
Array("隐武士战盔",1004202, 10000),
Array("喵星人的秘密",1004203, 10000),
Array("粉网球帽",1004183, 10000),
Array("头顶包包兔耳帽",1004182, 10000),
Array("糖果晚会丝带发卡",1004181, 10000),
Array("俏皮帽子",1004180, 10000),
Array("红色魔法帽",1004179, 10000),
Array("黑暗希纳斯",1004177, 10000),
Array("爱丽丝兔面具",1004176, 10000),
Array("粉红天使翅膀帽",1004191, 10000),
Array("微笑旋律耳机",1004190, 10000),
Array("企鹅王帽子",1004189, 10000),
Array("白雪人帽子",1004188, 10000),
Array("小猴子帽子",1004187, 10000),
Array("幼红独角狮帽子",1004186, 10000),
Array("蓝色蘑菇帽",1004185, 10000),
Array("偷水贼帽子",1004184, 10000),
Array("黑色蝴蝶结发箍",1004166, 10000),
Array("绿色恐龙帽",1004167, 10000),
Array("丝绸头盔",1004164, 10000),
Array("玫瑰闪耀",1004165, 10000),
Array("柴郡猫耳朵",1004162, 10000),
Array("爱丽丝表丝带",1004163, 10000),
Array("天使旋律",1004175, 10000),
Array("斑斓可爱的芭菲帽",1004170, 10000),
Array("旋转木马帽",1004171, 10000),
Array("呆萌猫咪帽",1004168, 10000),
Array("美味荷包蛋帽",1004169, 10000),
Array("Blavy天使之翼",1003853, 10000),
Array("呀吼鲜虾寿司",1003852, 10000),
Array("单叶帽子",1003855, 10000),
Array("新鲜三文鱼寿司",1003849, 10000),
Array("蓬松蛋卷寿司",1003848, 10000),
Array("鲑鱼子寿司",1003851, 10000),
Array("Q弹章鱼寿司",1003850, 10000),
Array("罗娜帽子",1003845, 10000),
Array("纳奥帽子",1003844, 10000),
Array("鬼剑士假发",1003847, 10000),
Array("丹珍帽子",1003846, 10000),
Array("奇怪的狐狸面具",1003843, 10000),
Array("女妖帽子",1003842, 10000),
Array("星光飘带帽子",1003865, 10000),
Array("神射太阳帽",1003867, 10000),
Array("赛丽亚假发",1003860, 10000),
Array("明星小皇冠",1003861, 10000),
Array("小熊丝带",1003862, 10000),
Array("满天星普赛克",1003859, 10000),
Array("乖巧发带",1003884, 10000),
Array("华尔兹丝带贝雷帽",1003883, 10000),
Array("变化无常小熊帽",1003882, 10000),
Array("纸船帽子",1003881, 10000),
Array("佩佩帽子",1003878, 10000),
Array("白雪人帽子",1003877, 10000),
Array("猴子帽",1003876, 10000),
Array("幼红独角狮帽子",1003875, 10000),
Array("蓝色蘑菇帽",1003874, 10000),
Array("偷水贼帽子",1003873, 10000),
Array("熊熊发夹",1003902, 10000),
Array("爆莉萌天使帽子",1003903, 10000),
Array("蓝色桃心透明帽子",1003900, 10000),
Array("勇敢兔子帽",1003901, 10000),
Array("贵族船长帽",1003899, 10000),
Array("树叶钻石",1003892, 10000),
Array("GM索利的帽子",1003890, 10000),
Array("变脸",1003891, 10000),
Array("原来我被控制了",1003889, 10000),
Array("僵尸猎人帽子",1003789, 10000),
Array("高尔夫遮阳帽",1003790, 10000),
Array("伶俐猫咪斗篷",1003777, 10000),
Array("海豹白白帽",1003776, 10000),
Array("爱丽丝兔兔帽",1003779, 10000),
Array("可爱猫咪斗篷",1003778, 10000),
Array("小恐龙绿豆帽子",1003802, 10000),
Array("稀奇恐龙帽子",1003803, 10000),
Array("桃心太阳镜",1003807, 10000),
Array("彪鲁帽",1003792, 10000),
Array("杜鹃花发簪",1003793, 10000),
Array("杜鹃花斗笠",1003794, 10000),
Array("甜蜜冰淇淋帽",1003796, 10000),
Array("黑暗伊卡尔特",1003819, 10000),
Array("黑暗伊莉娜",1003818, 10000),
Array("黑暗奥兹",1003817, 10000),
Array("黑暗米哈尔",1003816, 10000),
Array("黑暗胡克",1003820, 10000),
Array("魔术师黑色缎带",1003809, 10000),
Array("魔术师黑色礼帽",1003808, 10000),
Array("希拉头饰",1003815, 10000),
Array("彩色奥林匹亚假发",1003838, 10000),
Array("彩色核爆炸假发",1003839, 10000),
Array("彩色海螺包假发",1003836, 10000),
Array("彩色海带飘乱假发",1003837, 10000),
Array("苍恋玫瑰洋帽",1003830, 10000),
Array("卷卷绵羊发卡",1003831, 10000),
Array("兔耳管家礼帽",1003829, 10000),
Array("蓝色绸带蕾丝帽",1003972, 10000),
Array("时间旅行者的头巾",1003975, 10000),
Array("云朵羊帽子",1003968, 10000),
Array("蓝色绸带礼帽",1003971, 10000),
Array("豆豆犬帽子",1003983, 10000),
Array("符咒独眼野猪头",1003997, 10000),
Array("雪之猫女头",1003996, 10000),
Array("白巧克力兔耳",1003998, 10000),
Array("牛魔王头",1003993, 10000),
Array("印第安老斑鸠头",1003992, 10000),
Array("黑暗独角兽头",1003995, 10000),
Array("沃勒福头",1003994, 10000),
Array("灰色猫耳套头帽",1004004, 10000),
Array("岩炎头巾",1004002, 10000),
Array("粉红猫耳套头帽",1004003, 10000),
Array("黑暗小恶魔帽子",1004000, 10000),
Array("万圣节幻影帽子",1004001, 10000),
Array("找准感觉, 好好解开～！妖精",1004014, 10000),
Array("北极熊无边帽",1004029, 10000),
Array("黄猫无边帽",1004028, 10000),
Array("白猫无边帽",1004027, 10000),
Array("黑猫无边帽",1004026, 10000),
Array("绿猫猫帽子",1004025, 10000),
Array("胜利漂漂猪帽子",1003904, 10000),
Array("霸气漂漂猪帽子",1003905, 10000),
Array("胜利扎昆帽子",1003906, 10000),
Array("霸气扎昆帽子",1003907, 10000),
Array("活力苏打帽",1003909, 10000),
Array("小龙角帽子",1003910, 10000),
Array("今天是狗狗！",1003912, 10000),
Array("红色高级发带",1003913, 10000),
Array("水手太阳镜",1003914, 10000),
Array("烙饼帽子",1003915, 10000),
Array("粉红太阳镜帽",1003917, 10000),
Array("翅膀帽",1003918, 10000),
Array("花花绒线帽",1003919, 10000),
Array("咕噜噜鸭舌帽 ",1003921, 10000),
Array("夏威夷草帽",1003920, 10000),
Array("萌萌狐耳朵",1003935, 10000),
Array("影子斗篷",1003934, 10000),
Array("浪漫斗笠",1003937, 10000),
Array("荧光发箍-蓝色",1003942, 10000),
Array("好困啊，火鸟",1003943, 10000),
Array("卷发兔子",1003940, 10000),
Array("荧光发箍-粉色",1003941, 10000),
Array("冰蓝发卡",1003944, 10000),
Array("超级巨星王冠",1003945, 10000),
Array("熊宝宝帽子",1003950, 10000),
Array("欧黛特头箍",1003951, 10000),
Array("浪漫玫瑰",1003955, 10000),
Array("让头脑冷静！",1003954, 10000),
Array("神之子头冠",1003953, 10000),
Array("欧迪尔头箍",1003952, 10000),
Array("香草糯米冰",1003958, 10000),
Array("薄荷糯米冰",1003957, 10000),
Array("格子渔夫帽",1003962, 10000),
Array("巧可羊帽子",1003967, 10000),
Array("山茶花发簪",1003966, 10000),
Array("小鸡玩偶帽",1003965, 10000),
Array("星星格子帽",1003964, 10000),
Array("蓝宝石羽毛发饰",1003607, 10000),
Array("金属冠棒球帽",1003597, 10000),
Array("金属粉色棒球帽",1003596, 10000),
Array("卷发兔子",1003595, 10000),
Array("凉爽夏日潜水镜",1003594, 10000),
Array("玩具粉熊帽子",1003588, 10000),
Array("粉红丝带海军帽",1003587, 10000),
Array("薄荷星海军帽",1003586, 10000),
Array("荧光发箍-蓝色",1003640, 10000),
Array("荧光发箍-绿色",1003641, 10000),
Array("荧光发箍-金色",1003642, 10000),
Array("阴阳师的发饰",1003643, 10000),
Array("海螺",1003636, 10000),
Array("荧光发箍-粉色",1003639, 10000),
Array("剑豪的头盔",1003626, 10000),
Array("巧克力纸杯蛋糕发卡",1003546, 10000),
Array("冰激淋纸杯蛋糕发卡",1003547, 10000),
Array("草莓纸杯蛋糕发卡",1003544, 10000),
Array("哈密瓜纸杯蛋糕发卡",1003545, 10000),
Array("魔术师黑色礼帽",1003548, 10000),
Array("魔术师黑色缎带",1003549, 10000),
Array("纽扣控玩具帽",1003538, 10000),
Array("蓝色天使帽",1003539, 10000),
Array("露西娅帽子",1003536, 10000),
Array("草莓杏仁饼发卡",1003542, 10000),
Array("杏仁饼发卡",1003543, 10000),
Array("逆转兔帽子",1003541, 10000),
Array("西式风情帽",1003531, 10000),
Array("银河牛仔帽",1003530, 10000),
Array("黑暗奥尔卡军官帽",1003533, 10000),
Array("可爱丝线发带",1003520, 10000),
Array("蝴蝶伴舞头饰",1003581, 10000),
Array("猫咪洛丽塔帽子",1003730, 10000),
Array("超级兔子耳塞",1003729, 10000),
Array("蓝色精灵帽",1003728, 10000),
Array("蛇年嘻哈帽",1003743, 10000),
Array("黑暗小恶魔帽子",1003742, 10000)
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
                choices += "\r\n#L" + i + "##v" + scrolls[i][1] + "##z" + scrolls[i][1] + "#　#d需要#r" + scrolls[i][2] + "#d点卷#k#l";
            }
            cm.askMenuS("欢迎来到" + cm.getServerName() + "椅子专卖4号店,你想买我们商店的物品么?请选择吧：." + choices, 2);
        } else if (status == 1) {
            cm.askYesNo("你确定要购买#v" + scrolls[selection][1] + "##t" + scrolls[selection][1] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][2];
            if (cm.getPlayer().getCSPoints(1) < money) {
                cm.sendOk("抱歉，你没足够的点卷！");
                cm.dispose();
            } else {
                var gachaponItem = cm.gainGachaponItem(scrolls[choice][1], 1, "椅子专卖5号店", 3, true);
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
