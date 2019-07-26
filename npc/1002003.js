var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("是吗……看来我的预感是错的，你好像没什么朋友啊？哈哈哈～玩笑，玩笑～如果你改变了主意，可以再来找我。等朋友多一点的时候……呵呵……");
            cm.safeDispose();
            return;
        } else if (status >= 1) {
            cm.sendNext("是吗……看来我的预感是错的，你好像没什么朋友啊？或者身上没有25万金币？如果你改变了主意，可以再来找我。等你有了钱的时候……呵呵……");
            cm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.askYesNo("希望今天客人能多一点……啊！等一下！你想增加好友目录吗？我一看你，就觉得你有很多朋友。怎么样……只要花一点钱，我就可以为你增加好友目录。但是不会应用于相同帐号的其他角色，所以一定要慎重。你想增加吗？");
    } else if (status == 1) {
        cm.askYesNo("好的！明智的决定。价格不贵，因为我下定决心，给你打了个#r大折扣#k。#b好友目录添加5名一共是25万金币#k。当然，绝不零售。只要购买一次，目录就可以永久增加。对好友目录不足的人来说，这个买卖应该不坏。怎么样？你愿意支付25万金币吗？");
    } else if (status == 2) {
        var capacity = cm.getBuddyCapacity();
        if (capacity >= 100 || cm.getMeso() < 250000) {
            cm.sendNext("你……确定自己有#b5万金币#k吗？如果有的话，请你确认一下好友目录是否已经增加到最大了。即使钱再多，好友目录的人数也无法增加到#b100个以上#k。");
        } else {
            var newcapacity = capacity + 5;
            cm.gainMeso(-250000);
            cm.updateBuddyCapacity(newcapacity);
            cm.sendOk("好的！你的好友目录已经增加了5个。你可以确认一下。如果好友目录还是不够的话，可以随时来找我。我可以随时帮你增加，不管多少次都行。当然不是免费的……那么再见~");
        }
        cm.safeDispose();
    }
}