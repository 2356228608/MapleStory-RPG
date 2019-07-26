/*
 * 恶魔剧情 - 06
 * 地图：秘密地图 - 恶魔猎手的老家 (924020000)
 * @author 狐狸糊涂
 */
function action(mode, type, selection) {
    ms.forceStartQuest(23200);
    ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
    ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon1");
    ms.dispose();
}