﻿var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.sendOk("考虑好后再来找我吧。");
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        switch (status) {
            case 0:
                qm.sendNext("请稍等下。在你出发前往<神秘河畔>之前，我有话要对你说。");
                break;
            case 1:
                qm.sendNextPrev("你还记得这里的一位名叫#b卡奥#k的神官吗？\r\n\r\n#b#L0#记得#l");
                break;
            case 2:
                qm.sendNextPrev("#fNpc/3003131.img/stand/0#\r\n那个孩子最终还是没能查清楚自己的真实身份。之前为了查出自己的真实身份，他付出了很多努力，不惜做任何事情。");
                break;
            case 3:
                qm.sendNextPrev("我们神官随着艾尔达的异常流动，前往现在之门另一边时，那个孩子也一起消失了。\r\n我试图想挽留那个孩子，可是已经太迟了。\r\n\r\n#b#L0#我这就去现在之门的另一边找他#l");
                break;
            case 4:
                qm.sendNextPrev("请等一下。神秘河畔的怪物出生在艾尔达密度极高的河水中...\r\n\r\n你必须拥有#e<神秘力量>#n，才能发挥出所有的力量。\r\n\r\n#b#L0#<神秘力量>？#l");
                break;
            case 5:
                qm.sendNextPrev("百闻不如一见，请你先去试着狩猎那个地方的怪物吧。在那之后，我会重新去找你的。\r\n\r\n#b(前往现在之门另一边的神秘河畔，试着狩猎第一个见到的怪物，然后再获得旁观者的帮助吧。)#k");
                break;
            case 6:
                qm.forceStartQuest();
                qm.dispose();
                break;
            default:
                qm.dispose();
                break;
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        switch (status) {
            case 0:
                qm.sendNext("现在你已经做好获得新力量的准备啦…");
                break;
            case 1:
                //cm.updateOneInfo(1477, "count", "200");
                //qm.show5thJobEffect();
                //qm.gainItem(1712000, 1);//这个东西报38
                qm.forceCompleteQuest();
                qm.dispose();
                break;
            default:
                qm.dispose();
                break;
        }
    }
}