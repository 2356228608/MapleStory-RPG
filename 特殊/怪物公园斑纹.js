var maps = Array(952000000, 952010000, 952020000, 952030000, 952040000, 953000000, 953010000, 953020000);
var minLevel = Array(20, 45, 50, 55, 60, 70, 75, 85);
var maxLevel = Array(30, 55, 60, 65, 70, 80, 85, 95);
var id = -1;
function start() {
    var selStr = "你想进入哪个地方？\r\n#b(20级以上95级以下的玩家可以使用)\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "##m" + maps[i] + "# (" + minLevel[i] + " - " + maxLevel[i] + ")#l\r\n";
    }
    cm.askMenu(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("你想要进入的地区是组队游戏区域。可以通过#b队长#k入场。");
        } else {
            if (cm.isAllPartyMembersAllowedLevel(minLevel[selection], maxLevel[selection]) && cm.allMembersHere()) {
                var em = cm.getEventManager("MonsterPark");
                //id = maps[selection] + cm.getParty().getId();
                for (var i = 0; i < 16; i++) {
                    id = maps[selection] + i;
                    if (em.getInstance("MonsterPark" + id) == null) {
                        break;
                    } else if (i == 15) {
                        id = -1;
                    }
                }
                if (em == null || id == -1) {
                    cm.sendOk("怪物公园里面已经有人了。");
                } else {
                    //cm.setPartyPQLog("MonsterPark");
                    em.startInstance_Party("" + id, cm.getPlayer(), maxLevel[selection]);
                }
            } else {
                cm.sendOk("请确定你组员都在该地图,并且都在等级范围内。");
            }
        }
    }
    cm.dispose();
}