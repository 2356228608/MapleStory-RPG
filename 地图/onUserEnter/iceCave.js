/*
 * 战神剧情 - 24
 * 地图：冰雪岛 - 冰洞 (140090000)
 */
function start() {
    ms.setInGameDirectionMode(true); //屏蔽/解锁操作台 true = 锁 false = 解
    ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
    ms.teachSkill(20000014, -1, 0);
    ms.teachSkill(20000015, -1, 0);
    ms.teachSkill(20000016, -1, 0);
    ms.teachSkill(20000017, -1, 0);
    ms.teachSkill(20000018, -1, 0);
    ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
    ms.effect_Direction("Effect/Direction1.img/aranTutorial/ClickLilin");
    ms.dispose();
}