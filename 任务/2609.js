/*
 * 暗影双刀剧情 - 10
 * 地图：金银岛之路 - 秘密修炼室入口 (103050500)
 * 任务：完成间谍教育(2609)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    if (status == 0 && qm.getQuestStatus(2608) == 2) {
        qm.useItem(2022963);
        qm.forceStartQuest();
        qm.dispose();
    } else {
        qm.dispose();
    }

}

function end(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        qm.sendNext("……#h0#？有什么事吗？脸色那么难看……什么？红雅给你投毒……？……这家伙，又在搞恶作剧了……我们暗影双刀怎么可能会给自己的同伴投毒呢，这只是红雅的恶作剧，你不用在意。我们很信任你的。");
    } else if (status === i++) {
        qm.sendNextPrev("当然，如果你用背叛来报答我们对你的信任，那就另说了。你不想永远与暗影双刀为敌，就不要试着背叛我们。");
    } else if (status === i++) {
        qm.askYesNo("话说回来，既然都搞起恶作剧，看来你的教育已经结束了吧。我能感觉到，无论是姿势还是眼神……你都已经准备好作为间谍潜入敌人内部了。你要#b转职为飞侠#k吗？也就是为了正式的任务而进入准备阶段。");
    } else if (status === i++) {
        if (mode == 1) {
            qm.changeJob(400);
            qm.changeSubcategory(1);
//            qm.gainItem(1332063, 1); //初级盗贼的短剑
//            qm.gainItem(1142107, 1); //新手冒险家勋章
            qm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
            qm.spawnNpcForPlayer(1057001, 489, 56);
            qm.forceCompleteQuest();
            qm.enableActions();
            qm.sendNext("现在你就是飞侠了，虽然还没学到双刀技术…也正因为如此，你现在才能作为飞花院的间谍，靠近达克鲁。");
            qm.dispose();
        } else {
            qm.sendNext("还没做好心理准备吗？原来是个胆小鬼啊……");
            qm.dispose();
        }
    } else if (status === i++) {
        qm.sendNext("即使是双刀，他的属性与普通飞侠没什么区别。飞侠是以运气（LUK）为核心属性，敏捷（DEX）为辅助属性的。如果你不知道该怎么分配属性，点击#b自动分配#k就可以了。");
    } else if (status === i++) {
        qm.sendNextPrev("哦，还有……想要当间谍，肯定还需要很多东西对吧？我增加了你的装备、其他物品保管盒的数量。背包越大，行动起来就越方便。");
    } else if (status === i++) {
        qm.sendNextPrev("那么，我能教你的只有这些了。现在开始，红雅会给你重新安排任务的，那么，我就等你的好消息了。");
        qm.dispose();
    } else {
        qm.dispose();
    }
}