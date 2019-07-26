/*
 * 米哈尔剧情 - 12
 * 米哈尔转职
 * 地图：秘密地图 - 杂货店后院 (913070050)
 * 任务：[转职]光之骑士……(20036)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    if (mode === 1) {
        status++;
    } else {
        status--;
    }

    var i = -1;
    if (status <= i++) {
        qm.dispose();
    } else if (status === i++) {
        qm.sendNextPrevNoESC("是的，女皇陛下说的总是对的。虽然还有很多不足之处，但这个少年好像确实继承了光之骑士的血。", 1106003);
    } else if (status === i++) {
        qm.sendNextPrevSNoESC("我父亲是光之骑士？我会成为光之骑士？我只是个平凡的少年。连名字都没有……");
    } else if (status === i++) {
        qm.sendNextPrevNoESC("选择权在你。但是你生来就带有光明之血，最好不要和自己的命运对抗。为了你，同时也是为了冒险岛世界。\r\n你愿意跟我走吗？");
    } else if (status === i++) {
        qm.sendNextPrevNoESC("你好像需要个名字。就用“从光明中诞生的人”的意思，起名叫#b#e“米哈尔”#k#n如何？好像很适合你。现在和我一起到圣地去吧。没有比那里更适合让你成为光之骑士的了。");
        qm.changeJob(5100);
        qm.gainItem(1142399, 1); //重生的光芒
        qm.gainItem(1052444, 1); //光之修炼骑士长袍
        qm.gainItem(1302077, 1); //新手战士之剑
        qm.gainSp(5);
        qm.teachSkill(50001245, 1, 1);
        //qm.forceCompleteQuest();
        var level = 10 - qm.getLevel();
        for (var i = 0; i < level; i++) {
            qm.levelUp();
        }
        qm.dispose();
        qm.warp(913070071, 0);
		qm.forceCompleteQuest();
    } else {
        qm.dispose();
    }
}