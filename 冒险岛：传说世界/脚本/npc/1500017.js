/* Dawnveil
 [Ellinel Fairy Academy] The First Rescue
 Tosh the Fairy
 Made by Daenerys
 */
        var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendOk("救命啊……那些怪物吓得我一动都不敢动！\r\n\r\n#b（消灭所有怪物后，再进行对话吧。）");
        cm.dispose();
    }
}