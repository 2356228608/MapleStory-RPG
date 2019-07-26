/*
 * 爆莉萌天使剧情 - 01
 * 地图：诺巴的圣域 - 万神殿 (940011000)
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
        ms.sendNextNoESC("喂！#h0#！你别哭了。", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("呜呜……可是孩子们又嘲笑我。", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("你的名字#h0#是白叫的吗？他们每次嘲笑你没有魔力你就哭，这怎么行。", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("贝德罗斯，你别这么严厉。 #h0#你不是出生的时候就没有魔力吗。", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("可是……我既讨厌看#h0#被欺负，也讨厌看你哭", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("贝德罗斯……别说了。那些孩子都走了。", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯……知道了，我以后不哭了。", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("(可怜的#h0#……)", 3000106);
    } else if (status === i++) {
        ms.sendNextNoESC("不管怎么说，#h0#还有我们呢。", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("我们到村外玩儿去吧？去换换心情。", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯！", 3000100);
    } else if (status === i++) {
        ms.sendNextNoESC("#h0#，你笑起来多好看。", 3000101);
    } else if (status === i++) {
        ms.sendNextNoESC("我也同意。", 3000102);
    } else if (status === i++) {
        ms.sendNextNoESC("你们干嘛啊，别笑我了。", 3000100);
    } else if (status === i++) {
        ms.inGameDirectionEvent_SetHideEffect(0);
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
        ms.dispose();
        ms.warp(940011010, 0);
    } else {
        ms.dispose();
    }
}