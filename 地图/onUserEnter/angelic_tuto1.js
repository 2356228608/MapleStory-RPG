/*
 * 爆莉萌天使剧情 - 02
 * 地图：万神殿西部地区 - 赫里希安攻击队基地 (940011010)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.inGameDirectionEvent_SetHideEffect(1);
        ms.sendNextNoESC("哇！！终于完成了！！", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("呵呵呵，真漂亮。", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("你要给它起什么名字？", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯……起什么好呢？我不喜欢幼稚的名字……", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("叫“正义勇士据点”怎么样？", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("哈哈哈，又提正义啊？你也太喜欢“正义”了吧。", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("幼稚。", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("那你说叫什么？", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯，就叫“赫里希安攻击队”吧。", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("赫里希安攻击队？", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("我们的目标是夺回麦格纳斯占领的暴君城堡，使其重归赫里希安！", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("好！太帅了，贝德罗斯！", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("卡伊尔，你觉得怎么样？", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("我随便咯。", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("那这里就是“赫里希安攻击队据点”啦！！", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("好！就这么定了！", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("那贝德罗斯当队长咯？", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("我当队长？", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("我同意。贝德罗斯是我们之中最厉害的！", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("真的可以吗？", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("当然可以！队长！", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("哈哈哈。好，赫里希安攻击队！开始进攻！！", 3000101);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940012010, 0);
    } else {
        ms.dispose();
    }
}