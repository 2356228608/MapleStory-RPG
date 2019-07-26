/*
 * 战神剧情 - 25
 * 地图：冰雪岛 - 冰洞 (140090000)
 */
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() != 140090000) {
        if (status == 0) {
            cm.askMenu("有什么你想知道的事情吗？#b#l\r\n#L0#我是谁？#l #l\r\n#L1#这里是哪里？#l #l\r\n#L2#你是谁？#l#l\r\n#L3#告诉我现在应该做些什么？#l #l\r\n#L4#讲解一下背包的使用。#l #l\r\n#L5#怎样提高技能？#l #l\r\n#L6#怎样配置装备？#l #l\r\n#L7#怎样使用快捷键？#l #l\r\n#L8#怎样才能打碎箱子？#l #l\r\n#L9#我想坐下来。#l#k");
        } else {
            if (selection == 0) {
                cm.sendNextPrev("你是数百年前，从黑魔法师手中拯救冒险岛世界的众多英雄中的一个。因为被黑魔法师所诅咒而失去了所有的记忆。");
            } else if (selection == 1) {
                cm.sendNextPrev("这里就是你被诅咒后陷入沉睡的里恩岛。是一个天寒地冻的小岛。这里的居民大多为企鹅。");
            } else if (selection == 2) {
                cm.sendNextPrev("我是遵从预言之说在这里等待你苏醒的里恩一族的利琳。以后也会一直做你的向导。");
            } else if (selection == 3) {
                cm.sendNextPrev("详细情况到了村子再向你说明。咱们不能一直待在这里，得赶紧回村子里。只要顺着指示牌，就能回到村子里。");
            } else if (selection == 4) {
                cm.hireTutorMsg(0x0E);
            } else if (selection == 5) {
                cm.hireTutorMsg(0x0F);
            } else if (selection == 6) {
                cm.hireTutorMsg(0x10);
            } else if (selection == 7) {
                cm.hireTutorMsg(0x11);
            } else if (selection == 8) {
                cm.hireTutorMsg(0x12);
            } else if (selection == 9) {
                cm.hireTutorMsg(0x13);
            }
            cm.dispose();
        }
    } else {
        if (cm.getInfoQuest(21019).equals("")) {
            if (status == 0) {
                cm.sendNext("你终于醒了！");
            } else if (status == 1) {
                cm.sendNextPrevS("……你是？");
            } else if (status == 2) {
                cm.sendNextPrev("我一直在等你，等着你这个和黑魔法师战斗的英雄醒来！");
            } else if (status == 3) {
                cm.sendNextPrevS("……你在说什么？你到底是谁？");
            } else if (status == 4) {
                cm.sendNextPrevS("等等……我是谁？我怎么什么都想不起来……啊……！头好疼！");
            } else if (status == 5) {
                cm.updateInfoQuest(21019, "helper=clear");
                cm.effect_Direction("Effect/Direction1.img/aranTutorial/face");
                cm.effect_Direction("Effect/Direction1.img/aranTutorial/ClickLirin");
                cm.dispose();
            }
        } else {
            if (status == 0) {
                cm.sendNext("还好吗？");
            } else if (status == 1) {
                cm.sendNextPrevS("我……我什么都记不起来……这是哪里？你又是谁？");
            } else if (status == 2) {
                cm.sendNextPrev("镇静一点。黑魔法师的诅咒让你失去了记忆……不过你用不着担心。你想知道的事情，我都会一一告诉你。");
            } else if (status == 3) {
                cm.sendNextPrev("你是我们的英雄。数百年前，你勇敢地和黑魔法师战斗，并拯救了冒险岛世界。不过，在最后时刻你中了黑魔法师的诅咒，被封冻在冰块里沉睡了好久好久。所以，记忆也渐渐消失了。");
            } else if (status == 4) {
                cm.sendNextPrev("黑魔法师把你封冻在了这里。在黑魔法师的诅咒下，不论四季变化，这里永远都是冰封雪飘。我们是在冰窟的最深处发现你的。");
            } else if (status == 5) {
                cm.sendNextPrev("我叫利琳，属于里恩一族。里恩一族从很久以前就遵照预言在这里等待着英雄的归来。然后……我们终于发现了你。就在这个地方……");
            } else if (status == 6) {
                cm.sendNextPrev("我是不是一次说了太多？理解起来有些困难？没关系，慢慢你就会明白……#b咱们赶紧回村子里吧#k。回村子的路上，我再慢慢给你解释。");
            } else if (status == 7) {
                cm.hireTutor(true);
                cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
                cm.warp(140090100, 1);
                cm.dispose();
            }
        }
    }
}