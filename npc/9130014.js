/*
 * Npc名称：织田3忍的悄然日记
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
        ms.dispose();
    } else if (status === i++) {
        cm.askMenu("#b织田军忍者的偷窥日记#k\r\n在这本书里，织田信长的忍者们用来记录了自己所刺探到的内情。\r\n#b#L0#查看织田3忍的介绍#l\r\n#b#L1#查看记录#k#l\r\n#r#L2#关闭#l#k");
    } else if (status === i++) {
        if (selection == 0) {

        } else if (selection == 1) {

        } else if (selection == 2) {

        }
    } else if (status === i++) {
        cm.sendNextSNoESC_Bottom("接下来要做的，就是破坏位于正殿地下的祭坛，彻底阻止仪式的进行……最好还是加快速度吧。");
    } else {
        cm.dispose();
    }
}