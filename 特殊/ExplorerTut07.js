/* RED 1st impact
 The Sangri-La
 Made by Daenerys
 */

        function action(mode, type, selection) {
            cm.warp(4000004);
            cm.gainExp(489);
            cm.gainExp(1242);
            cm.forceCompleteQuest(32216);
            cm.forceStartQuest(17901);
            cm.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
            cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        }