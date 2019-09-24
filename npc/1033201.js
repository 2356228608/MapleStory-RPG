/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]双弩精灵系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
        if (status <= i++) {
            cm.dispose();
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "阿弗利埃！你没事吧？弗里德呢！？……呼，只是昏过去了……", 256, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "双弩精灵……你还活着啊。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "当然！封印成功了，总不能一直坐在这里吧！但是……你看上去好像不太好？没事吧？其他人呢？大家去哪儿了？", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "虽然#b封印黑魔法师成功了#k，但是因为他最后使用的魔法引起的爆炸，所有的东西都分崩离析。我们能在相同的地方，好像只是偶然。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "啊，是啊。飞了好远。但还好没事……", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "是因为放松下来了吗？没有力气……不，不仅仅是没有力气……感觉很冷。", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "……这里原来就是经常下雪的地方吗？四周都在燃烧，却在下雪……真奇怪……", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "……你没有感觉到吗，双弩精灵？这#r可怕的诅咒#k……黑魔法师对你和弗里德，以及所有其他人的诅咒。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "诅……咒？", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "我看到可怕的寒气在包围你。在体力充沛的时候也许还好……但是战斗让我们变弱了，现在非常危险……黑魔法师好像不会那么轻易放过我们……", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "其他人都会没事的，因为大家都很强壮！但是我担心弗里德……那个家伙，体力本来就很弱。", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "弗里德由我来照顾，别担心……不过，我更担心的是你，双弩精灵。你是#b精灵之王#k。对你的诅咒……#r就是对所有精灵的诅咒#k，不是吗？", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "...!", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "你快到#b埃欧雷#k去。如果#b黑魔法师的诅咒真的会给全体精灵造成影响#k的话……身为国王的你必须去看一看。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "知道了！阿弗利埃……我们还能再见面吗？", 257, 0, 2, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(4, 1033201, 0, 0,  "……希望如此。", 257, 0, 0, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
cm.updateInfoQuest(24006, "Afrien=o");
cm.onScriptMessage(4, 1033201, 0, 0,  "#b(虽然很担心同伴们……但是现在只能相信他们。使用回城技能，回村子去吧。)", 0, 3, 2, 0, 0, 0); // [类型] 是/否
} else if (status === i++) {
cm.dispose();
cm.warp(910150001,0);
    }
}

