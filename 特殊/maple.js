var cashitem;
var status = -1;
var select = -1;
var time;
var itemId;
var quantity;
var x = 0;
var id;
var str = "";
var itemList = Array(
        Array(2049501, 1, 10, 1),
        Array(5072000, 1, 10, 1),
        Array(2049500, 1, 20, 1),
        Array(5072000, 2, 20, 1),
        Array(2049501, 2, 30, 1),
        Array(5072000, 3, 30, 1),
        Array(2049500, 2, 40, 1),
        Array(5390005, 1, 40, 1),
        Array(2049501, 3, 50, 1),
        Array(2049500, 3, 60, 1),
        Array(5390005, 3, 60, 1),
        Array(1052613, 30, 70, 1),
        Array(2048308, 3, 80, 1),
        Array(2049700, 2, 90, 1),
        Array(2511107, 1, 100, 1),
//正义混沌卷40%
        Array(2049130, 2, 200, 1),
//惊人正义混沌卷40%
        Array(2049137, 2, 300, 1),
//70% 诅咒卷
        Array(2040304, 3, 400, 1),
        Array(2040810, 3, 400, 1),
        Array(2040808, 3, 400, 1),
        Array(2040814, 3, 400, 1),
        Array(2040916, 3, 400, 1),
        Array(2040921, 3, 400, 1),
        Array(2041034, 3, 400, 1),
        Array(2041036, 3, 400, 1),
        Array(2041048, 3, 400, 1),
        Array(2041040, 3, 400, 1),
        Array(2043004, 3, 400, 1),
        Array(2043006, 3, 400, 1),
        Array(2043104, 3, 400, 1),
        Array(2043204, 3, 400, 1),
        Array(2043304, 3, 400, 1),
        Array(2043704, 3, 400, 1),
        Array(2043804, 3, 400, 1),
        Array(2044004, 3, 400, 1),
        Array(2044104, 3, 400, 1),
        Array(2044204, 3, 400, 1),
        Array(2044304, 3, 400, 1),
        Array(2044404, 3, 400, 1),
        Array(2044504, 3, 400, 1),
        Array(2044604, 3, 400, 1),
        Array(2044704, 3, 400, 1),
//30% 诅咒卷
        Array(2040305, 3, 500, 1),
        Array(2040811, 3, 500, 1),
        Array(2040809, 3, 500, 1),
        Array(2040815, 3, 500, 1),
        Array(2040917, 3, 500, 1),
        Array(2040922, 3, 500, 1),
        Array(2041035, 3, 500, 1),
        Array(2041037, 3, 500, 1),
        Array(2041039, 3, 500, 1),
        Array(2041041, 3, 500, 1),
        Array(2043005, 3, 500, 1),
        Array(2043007, 3, 500, 1),
        Array(2043105, 3, 500, 1),
        Array(2043205, 3, 500, 1),
        Array(2043305, 3, 500, 1),
        Array(2043705, 3, 500, 1),
        Array(2043805, 3, 500, 1),
        Array(2044005, 3, 500, 1),
        Array(2044105, 3, 500, 1),
        Array(2044205, 3, 500, 1),
        Array(2044305, 3, 500, 1),
        Array(2044405, 3, 500, 1),
        Array(2044505, 3, 500, 1),
        Array(2044605, 3, 500, 1),
        Array(2044705, 3, 500, 1),
        Array(1003863, 1, 600, 1),
        Array(1132228, 1, 600, 1),
        Array(1012376, 1, 600, 1),
        Array(1052612, 1, 600, 1),
        Array(1113034, 1, 600, 1),
        Array(1102562, 1, 600, 1),
        Array(2511130, 1, 600, 2),
        Array(3010180, 1, 600, 3),
        Array(3010181, 1, 600, 3),
        Array(3010151, 1, 600, 3),
        Array(3010169, 1, 600, 3),
        Array(3010179, 1, 600, 3),
        Array(3010321, 1, 600, 3),
        Array(3010403, 1, 600, 3),
        Array(3010586, 1, 600, 3),
        Array(3010531, 1, 600, 3),
        Array(3010562, 1, 600, 3),
        Array(3010523, 1, 600, 3),
        Array(3010598, 1, 600, 3),
        Array(3010675, 1, 600, 3),
        Array(2511127, 1, 700, 1),
        Array(2511126, 1, 700, 1),
        Array(2511128, 1, 700, 1),
        Array(2511129, 1, 700, 1),
        Array(1112920, 1, 800, 1),
        Array(1112103, 1, 900, 1),
        Array(1112238, 1, 1000, 2),
        Array(1112135, 1, 1000, 2),
        Array(3010519, 1, 1000, 3),
        Array(3010520, 1, 1000, 3),
        Array(3010828, 1, 1000, 3),
        Array(3010832, 1, 1000, 3),
        Array(3010829, 1, 1000, 3)
        );


function start() {
    for (var i = 1; i <= 9; i++) {
        str += "#L" + i * 10 + "#[我要用" + (i * 10) + "个枫叶兑换奖励]#k\r\n";
    }
    for (var i = 1; i <= 10; i++) {
        var s = i * 100 + 200;
        str += "#L" + s + "#[我要用" + s + "个枫叶兑换奖励]#k\r\n";
    }
    cm.askMenu("#e你现在拥有 " + cm.getItemQuantity(4001126) + " 个枫叶#n\n\r\n" + str);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getItemQuantity(4001126) >= selection && cm.getSpace(1) >= 6 && cm.getSpace(2) >= 1 && cm.getSpace(3) >= 1) {
            var finalitem = Array();
            var finalitem2 = Array();
            var finalitem3 = Array();
            var random = new java.util.Random();
            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i][2] == selection) {
                    if (itemList[i][3] == 1) {
                        finalitem.push(itemList[i]);
                    } else if (itemList[i][3] == 2) {
                        finalitem2.push(itemList[i]);
                    } else {
                        finalitem3.push(itemList[i]);
                    }
                }
            }
            if (finalitem3.length > 0) {
                x = random.nextInt(3);
            }
            if (x == 0) {
                id = random.nextInt(finalitem.length);
                itemId = finalitem[id][0];
                quantity = finalitem[0][1];
            } else if (x == 1) {
                id = random.nextInt(finalitem2.length);
                itemId = finalitem2[id][0];
                quantity = finalitem2[0][1];
            } else {
                id = random.nextInt(finalitem3.length);
                itemId = finalitem3[id][0];
                quantity = finalitem3[0][1];
            }
            if (selection == 600 && x == 0) {
                for (var i = 0; i < finalitem.length; i++) {
                    itemId = finalitem[i][0];
                    quantity = finalitem[i][1];
                    cm.gainItem(itemId, quantity);
                }
            } else {
                cm.gainItem(itemId, quantity);
            }
            cm.gainItem(4001126, -selection);
            cm.sendOk("兑换成功！");
            cm.dispose();

        } else {
            cm.sendOk("你还没有满足条件，请确认你有足够的枫叶或者背包空间不足(装备栏需要6个以上空格)！！");
            cm.dispose();
        }
    } else if (status == 1) {

    } else if (status == 2) {

    } else {
        cm.dispose();
    }
}
