
        var status = 0;
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindowBT.img/WorldMap/BtQsearch/mouseOver/0#";

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
        var selStr = "\r\n#e#d您好，当前推荐的升级路线..#n#l#k\r\n";
        selStr +="\r\n#d===================【跳跳地图】=======================#k\r\n";
        selStr += "#L0#" + ttt7 + " #r#e#n#bOX问答 #r\r\n";
        selStr += "#L1#" + ttt7 + " #r#e#n#b射手跳跳 #r\r\n";
        selStr += "#L2#" + ttt7 + " #r#e#n#b玩具城跳跳 #r\r\n";
        selStr += "#L3#" + ttt7 + " #r#e#n#b火山的心脏 #r\r\n";
        selStr += "#L4#" + ttt7 + " #r#e#n#b林中之城跳跳共4阶段#r\r\n";
        selStr += "#L5#" + ttt7 + " #r#e#n#b忍苦树林 共2阶段#r\r\n";
        selStr += "#L6#" + ttt7 + " #r#e#n#b上楼找出口 #r\r\n";
        selStr += "#L7#" + ttt7 + " #r#e#n#b高地第1阶段 #r\r\n";
        selStr += "#L8#" + ttt7 + " #r#e#n#b地铁B1 #r\r\n";
        selStr += "#L9#" + ttt7 + " #r#e#n#b地铁B2 #r\r\n";
        selStr += "#L10#" + ttt7 + " #r#e#n#b地铁B3 #r\r\n";
        selStr += "#L11#" + ttt7 + " #r#e#n#b跑旗赛 #r\r\n";




        cm.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.warp(910048000);
                break;
            case 1:
                cm.dispose();
                cm.warp(100000202);
                break;
            case 2:
                cm.dispose();
                cm.warp(220000006);
                break;
            case 3:
                cm.dispose();
                cm.warp(280020000);
                break;
            case 4:
                cm.dispose();
                cm.warp(109040001);
                break;
            case 5:
                cm.dispose();
                cm.warp(910130000);
                break;
            case 6:
                cm.dispose();
                cm.warp(109030001);
                break;
            case 7:
                cm.dispose();
                cm.warp(109040001);
                break;
            case 8:
                cm.dispose();
                cm.warp(910360000);
                break;
            case 9:
                cm.dispose();
                cm.warp(910360100);
                break;
            case 10:
                cm.dispose();
                cm.warp(910360200);
                break;

            case 11:
                cm.dispose();
                cm.warp(932200001);
                break;
        }
    }
}
