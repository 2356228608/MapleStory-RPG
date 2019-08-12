/* Dawnveil
 [Ellinel Fairy Academy] The Second Escape
 Phiny and Ephony
 Made by Daenerys
 */
        var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendOk("呜呜呜……请想办法对付这些怪物吧！\r\n\r\n#b（消灭所有怪物后，再进行对话吧。）");
        cm.dispose();
    }
}