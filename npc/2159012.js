/*
 * 反抗者剧情 - 17
 * 地图：危险的捉迷藏 - 奇怪的实验室 (931000010)
 * Npc名称：贝比蒂
 * @author 狐狸糊涂
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
        cm.sendNext("嗯……实验好像进展很顺利。只要能得到足够的镥，一切就不会有问题。和黑色之翼联手，果然是明智的选择……呵呵呵。");
    } else if (status === i++) {
        cm.sendNextPrev("格里梅尔大人果然有先见之明。", 2159008);
    } else if (status === i++) {
        cm.sendNextPrev("黑色之翼所说的智能机器人马上就能完成了。现在我得开始下一阶段的实验了。我要做出比他们所说的更有趣的东西。");
    } else if (status === i++) {
        cm.sendNextPrev("下一阶段？", 2159008);
    } else if (status === i++) {
        cm.sendNextPrev("呵呵……你还不知道吗？看了这个实验室你应该就能知道了吧？我想做的东西是什么。和纯粹机械的无趣的智能机器人不同，是更有意思的……");
    } else if (status === i++) {
        cm.sendNextPrev("嗯？这个实验室？你是想用这些实验体来做什么吗？", 2159008);
    } else if (status === i++) {
        cm.sendNextPrev("以你的眼光，可能无法看到这个实验的伟大之处，我可以理解。你只要做好自己的任务就行了。只要看好这里的实验体，不让他们逃跑就行。");
    } else if (status === i++) {
        cm.sendNextPrev("……嗯？你有没有听到什么奇怪的声音？");
    } else if (status === i++) {
        cm.sendNextPrev("嗯？奇怪的声音？嗯，好像是有什么东西在响？……？", 2159008);
    } else if (status === i++) {
        cm.fieldEffect_Tremble(0, 500, 30);
        cm.effect_Direction("Effect/Direction4.img/Resistance/TalkInLab");
        cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        cm.updateInfoQuest(23007, "vel00=2;vel01=1");
        cm.dispose();
		cm.warp(931000012);
    }
}