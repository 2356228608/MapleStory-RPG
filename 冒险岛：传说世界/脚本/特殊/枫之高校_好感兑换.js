/*
 *  枫之高校_好感图腾
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
// 材料
var 通用强化材料 = 4001878;
var 升星材料 = 4036084;
var 超星强化材料 = [4036518, 4031466, 4001879, 4001890];
// UI图片
var z = "#fEffect/ItemEff/1112811/0/0#"; //"+z+"//美化
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var itemIcon = "#fUI/Basic.img/Cursor/32/0#";
// 好感菜单
var name = ["乔","海丽蜜","小龙","李卡司"];
var totem = [[1202026,1202025,1202024,1202023],[1202030,1202029,1202028,1202027],[1202034,1202033,1202032,1202031],[1202038,1202037,1202036,1202035]];
var likeReq = [500,1000,2000,4000];

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (sendSimple)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(sendSimple/sendGetNumber时，结束对话)
	(mode == 1) ?status++:status--;
	selectionLog[status] = selection;
	// 初次对话
	if (status == 0) {
		好感菜单();
	}else{
		if(selectionLog[1]<=4){
			提升好感();
		}else{
			兑换收藏();
		}
	}
}

function 好感菜单() {
	// 格式： 1;2;3;4
	var info = cm.getInfoQuest(52367);
	var likes = info ? info.split(';').map(function(item) {
		return parseInt(item, 10);
	}) : [0,0,0,0];
	var likeLevel = getLikeLevel(likes, likeReq);

		text = "#e#b[四大天王的秘密储藏柜]#n#k\r\n\r\n";
		text += "这里存放着四大天王珍藏的绝版图腾。但是只要与他们好感度提升到一定程度，就可以以巨资说服他们忍痛割爱了。\r\n如何提升#r#i3800452##z3800452##k呢？自然是战斗了！友谊只有在对决中才能得到提升。\r\n\r\n";
		
		text += "#k#e┌\t\t       ─ " + "#v4031515#" + "#b枫之高校 ─   \t\t  ┐#n\r\n\r\n";
		for(var i=0;i<4;i++){
			text += "#i"+totem[i][likeLevel[i]]+"#\t\t";
		}
		text += "\r\n";
		for(var i=0;i<4;i++){
			text += name[i]+"\t\t";
		}
		text += "\r\n";
		for(var i=0;i<4;i++){
			text += likes[i]+"\t\t";
		}
		text += "\r\n";
		for(var i=1;i<=4;i++){
			text += "#L"+i+"#提升好感#l\t\t";
		}
		text += "\r\n";
		for(var i=5;i<=8;i++){
			text += "#L"+i+"#兑换收藏#l\t\t";
		}
		text += "#e\r\n\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		cm.askMenu(text);
}

function 提升好感() {
	// 格式： 1;2;3;4
	var info = cm.getInfoQuest(52367);
	var likes = info ? info.split(';').map(function(item) {
		return parseInt(item, 10);
	}) : [0,0,0,0];
	var likeLevel = getLikeLevel(likes, likeReq);

		text = "#e#b[四大天王的秘密储藏柜]#n#k\r\n\r\n";
		text += "这里存放着四大天王珍藏的绝版图腾。但是只要与他们好感度提升到一定程度，就可以以巨资说服他们忍痛割爱了。\r\n如何提升#r#i3800452##z3800452##k呢？自然是战斗了！友谊只有在对决中才能得到提升。\r\n\r\n";
		
		text += "#k#e┌\t\t       ─ " + "#v4031515#" + "#b枫之高校 ─   \t\t  ┐#n\r\n\r\n";
		for(var i=0;i<4;i++){
			text += "#i"+totem[i][likeLevel[i]]+"#\t\t";
		}
		text += "\r\n";
		for(var i=0;i<4;i++){
			text += name[i]+"\t\t";
		}
		text += "\r\n";
		for(var i=0;i<4;i++){
			text += likes[i]+"\t\t";
		}
		text += "\r\n";
		for(var i=1;i<=4;i++){
			text += "#L"+i+"#提升好感#l\t\t";
		}
		text += "\r\n";
		for(var i=5;i<=8;i++){
			text += "#L"+i+"#兑换收藏#l\t\t";
		}
		text += "#e\r\n\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
		cm.askMenu(text);
}

function getLikeLevel(value, goal) {
	var res = new Array();
	value.forEach(function(e){
		for(var i=0;i<goal.length;i++){
			if(e<goal[i]){
				res.push(Math.min(0, i-1));
				return;
			}
		}
		res.push(goal.length-1);
	});
	return res;
}
