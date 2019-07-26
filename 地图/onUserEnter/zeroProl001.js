var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    switch (ms.getMapId()) {
        case 321000001:
            if (status == 0) {
                ms.curNodeEventEnd(true);
                ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
                ms.playVideoByScript("zero1.avi");
                ms.teachSkill(101120204, 0, 10); // ?i顶忌?返趵?
                ms.teachSkill(101120104, 0, 10); // ?i顶?H?a?r阑
                ms.teachSkill(101110203, 0, 10); // ?i顶臂?犯ǜ?辟
                ms.teachSkill(101110200, 0, 10); // ?i顶臂?帆媛嗯s
                ms.teachSkill(101110102, 0, 10); // ?i顶臂??
                ms.teachSkill(101100201, 0, 10); // ?i顶?j臂ぇ?b
                ms.teachSkill(101100101, 0, 10); // ?i顶?Z竟щ?Y
                ms.teachSkill(101000101, 0, 10); // ?i顶?陇O?_阑
            } else {
                ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
                ms.dispose();
                ms.warp(321000000, 0);
            }
            break;
        default:
            ms.dispose();
    }
}