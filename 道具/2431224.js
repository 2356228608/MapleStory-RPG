var psrw = Array(
        Array(1012025, 1),
        Array(1000020, 1),
        Array(3010516, 1),
        Array(3010517, 1),
        Array(3010518, 1),
        Array(3010407, 1)
        );
var rand = Math.floor(Math.random() * psrw.length);

function start() {
    var ii = Packages.server.MapleItemInformationProvider.getInstance();
    im.gainItem(psrw[rand][0], +psrw[rand][1]); //随机这个道具
    im.gainItem(2431224, -1); //减少1个使用的这个道具
    im.sendOk("获取了 #v" + psrw[rand][0] + "# " + psrw[rand][1] + "个")
    im.dispose();
}