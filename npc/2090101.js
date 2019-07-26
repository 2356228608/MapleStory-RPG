/* 
 * 丽秀秀-美发店助理
 * 武陵美发店
 */
        var status = -1;
var beauty = 0;
var card = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.askMenu("如果您有#b#t5150053##k或者#b#t5151035##k，就让我来为您打造新的形象吧！下面做出您的选择吧。\r\n#b#L0#美发（使用#b#t5150053#）#l\r\n#L1#染发（使用#b#t5151035#）#l");
            break;
        case 1:
            if (selection == 0) {
                var hair = cm.getPlayerStat("HAIR");
                hair_Colo_new = [];
                beauty = 1;

                if (cm.getPlayerStat("GENDER") == 0) {
                    hair_Colo_new = [30250, 30110, 30230, 30050, 30280, 30410, 30730, 30160, 30200];
                } else {
                    hair_Colo_new = [31150, 31310, 31220, 31300, 31260, 31160, 31730, 31410, 31410];
                }
                for (var i = 0; i < hair_Colo_new.length; i++) {
                    hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
                }
                hair_Colo_new = cm.getCanHair(hair_Colo_new);
                cm.askYesNo("使用#b#t5150053##k可以随机改变发型。您确定要换发型吗？");
            } else if (selection == 1) {
                var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
                hair_Colo_new = [];
                beauty = 2;

                for (var i = 0; i < 8; i++) {
                    hair_Colo_new[i] = currenthaircolo + i;
                }
                hair_Colo_new = cm.getCanHair(hair_Colo_new);
                cm.askYesNo("使用#b#t5151035##k可以随机改变发色。您确定要换发色吗？");
            }
            break;
        case 2:
            if (beauty == 1) {
                if (cm.setRandomAvatar(5150053, hair_Colo_new) == 1) {
                    cm.sendOk("好了，让朋友们赞叹您的新发型吧！");
                    card = 1;
                } else {
                    cm.askYesNo("嗯……您好像没有#b#t5150053##k啊？是否消费480点券直接美发？");
                }
            } else {
                if (cm.setRandomAvatar(5151035, hair_Colo_new) == 1) {
                    cm.sendOk("好了，让朋友们赞叹您的新发色吧！");
                    card = 1;
                } else {
                    cm.askYesNo("嗯……您好像没有#b#t5151035##k啊？是否消费480点券直接染发？");
                }
            }
            break;
        case 3:
            if (card == 0) {
                if (cm.getPlayer().getCSPoints(1) >= 480) {
                    if (cm.setRandomAvatar(hair_Colo_new) == 1) {
                        cm.getPlayer().modifyCSPoints(1, -480);
                        if (beauty == 1) {
                            cm.sendOk("好了，让朋友们赞叹您的新发型吧！");
                        } else {
                            cm.sendOk("好了，让朋友们赞叹您的新发色吧！");
                        }
                    }
                }
            }
            cm.dispose();
            break;
        default:
            cm.dispose();
            break;
    }
}