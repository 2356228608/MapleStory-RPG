/*
 * 2432589	起源之塔练习入场券
 * by Jessefjxm
 */

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var itemid = [4009237, 4009238];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	status++;
	var em = im.getEventManager("Map_TowerOfOz");
	var level = parseInt(em.getProperties().getProperty("state", "0"));
	var map = im.getMapId();
	var myInfo = getMyInfo();
	if (myInfo == null || myInfo.length == 0) {
		var maxlevel = -1;
	} else {
		var maxlevel = myInfo[0][0];
	}
	var text = "啊，是#b起源之塔练习入场券#k！通过它我就可以透过封印注入更强大的力量，把你直接传送到塔里的某一层。\r\n\r\n不过我能额外传送的力量也是有限的，最多只能帮你进入你#b曾经到达过的最深的层#k。此外，#r一部分层、守护者层，以及40层以上#k对于我来说也是未知的区域，没法传送到那里。\r\n\r\n";
	if (status < 0) {
		im.dispose();
	} else if (status === 0) {
		if (map < 992001000 || map >= 992040000) {
			text += "想要我施加力量的话，你需要先进入到#b起源之塔里我能触及到的一层#k才行。";
			im.sendOk(text, 2540000);
			im.dispose();
		} else if (maxlevel <= level) {
			text += "咦，现在你已经位于探索过的最深层了啊，看来这次我没法帮助你了。";
			im.sendOk(text, 2540000);
			im.dispose();
		} else {
			text += "那么，你现在想传送到哪一层呢？\r\n\r\n";
			for (var i = level + 1; i <= Math.min(39, maxlevel); i++) {
				text += "#L" + i + "##k前往#b第 " + i + " 层#l\r\n";
			}
			im.askMenu(text, 2540000);
		}
	} else if (status === 1) {
		var num = selection;
		if (num < level + 1 || num >= 40 || num == 10 || num == 20 || num == 30) {
			im.sendOk("我的力量没法延伸到 " + num + " 层。看来这次我没法帮助你了。", 2540000);
			im.dispose();
		}
		im.gainItem(im.getItemId(), -1);
		im.dispose();
		im.warp(992000000 + num * 1000, 0);
	} else {
		im.dispose();
	}
}

// 创建MYSQL表
function createTable() {
	var conn = im.getConnection();
	var ps = conn.prepareStatement("CREATE TABLE IF NOT EXISTS `oz_tower` ("
			 + "`characterid` int(11) NOT NULL DEFAULT '0' COMMENT '角色ID',"
			 + "`charactername` varchar(100) NOT NULL DEFAULT '无名' COMMENT '角色名称',"
			 + "`maxlevel` int(11) NOT NULL DEFAULT '0' COMMENT '最佳纪录通过层数',"
			 + "`time` int(11) NOT NULL DEFAULT '0' COMMENT '最佳纪录通过时间',"
			 + "`slots` int(11) NOT NULL DEFAULT '1' COMMENT '朦胧石栏位数量',"
			 + "`slot_stone_1` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.1',"
			 + "`slot_stone_2` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.2',"
			 + "`slot_stone_3` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.3',"
			 + "`slot_stone_4` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.4',"
			 + "`slot_stone_5` int(11) NOT NULL DEFAULT '0' COMMENT '朦胧石NO.5',"
			 + "PRIMARY KEY (`characterid`)" + ") ;");
	ps.executeUpdate();
	ps.close();
	conn.close();
}

// 搜索自己
function getMyInfo() {
	// 先检查一遍创建了没
	createTable();

	var conn = im.getConnection();
	var ps = conn.prepareStatement("SELECT `maxlevel`,`time`,`slots` FROM `oz_tower` WHERE `characterid`=" + im.getPlayer().getId() + " ;");
	var resultSet = ps.executeQuery();
	var myInfo = new Array();
	if (resultSet.next()) {
		myInfo.push([resultSet.getInt(1), resultSet.getInt(2), resultSet.getInt(3)]);
	}
	resultSet.close();
	ps.close();
	conn.close();
	return myInfo;
}
