/* 绝版抵用卷商店 脸饰*/

        var status = -1;
var itemList = Array(
        Array(3010767, 30000), //椅子雪人
        Array(3010760, 120000), //古代浴池椅子
        Array(3010761, 20000), //古代战车椅子
        Array(3014006, 120000), //南国度假信息椅子
        Array(3015000, 80000), //玻璃瓶里的怪物
        Array(3010459, 50000), //天使舞台椅
        Array(3010613, 80000), //美式冰梦想
        Array(3010958, 30000), //美式冰梦想
        Array(3010066, 30000), //深蓝色绒毛沙发
        Array(3010071, 20000), //神兽椅
        Array(3010073, 25000), //baby品克缤
        Array(3010140, 36000), //早日康复床
        Array(3015004, 50000), //维丽尔明星抱枕椅
        Array(3010825, 80000), //金星椅子
        Array(3010755, 50000), //小丫丫坐便器椅子
        Array(3010753, 100000), //暖暖的被炉椅子
        Array(3010959, 30000), //SOS
        Array(3010493, 30000), //那就是我
        Array(3013001, 30000), //けいおん
        Array(3015097, 35000), //鲤鱼椅
        Array(3010587, 50000), //时间胶囊 
        Array(3010545, 60000), //千年狐椅子
        Array(3010048, 50000), //圣诞树椅子
        Array(3010135, 70000), //节日独角兽椅子
        Array(3010403, 50000), //埃欧雷的小音乐会
        Array(3010596, 60000), //放风筝坐垫
        Array(3015027, 100000), //安德洛墨达椅子
        Array(3010212, 100000), //藏獒椅子
        Array(3010043, 90000), //魔女的飞扫把
        Array(3010375, 120000), //奥妙的超级药水椅子
        Array(3010522, 120000), //兔子旋风
        Array(3010703, 120000), //彩虹椅子
        Array(3010719, 150000), //小幽灵卡斯珀
        Array(3015031, 170000), //闪耀冒险岛椅
        Array(3010848, 640000), //红地毯主人公椅子
        Array(3010361, 200000), //购物小推车椅子
        Array(3010589, 200000), //需要充电
        Array(3010708, 200000), //满目韩文椅子
        Array(3010661, 250000), //欢乐相框椅子 
        Array(3014005, 200000), //荣誉的象征
        Array(3014009, 350000), //黑板椅子
        Array(3015130, 250000), //土豪婴儿推车
        Array(3010681, 650000), //特大西瓜椅子（巨无霸）
        Array(3010417, 650000), //巨无霸企鹅王
        Array(3010723, 300000), //法式贵族扶手椅
        Array(3015133, 350000), //亚敏下午茶椅
        Array(3015089, 350000), //训练师庭院椅子
        Array(3015108, 280000), //樱花陶醉椅子
        Array(3015131, 280000), //巨大鼻涕泡椅子
        Array(3010983, 150000), //家庭聚餐椅子
        Array(3010984, 160000)//皇宫盛宴椅子
        );
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望购买的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k抵用卷#l";
        }
        cm.askMenu(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.askYesNo("您是否购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(2) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "抵用卷商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX(2, -selectedCost);
                cm.sendOk("恭喜您成功购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("购买失败，请您确认在背包所有栏目窗口中是否有一格以上的空间。");
            }
        } else {
            cm.sendOk("您没有那么多抵用卷。\r\n\r\n购买#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 抵用卷。");
        }
        cm.dispose();
    }
}
