/*
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择

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
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	// 初次对话
	if (status == 0) {
		对话首页();
	} else {
		switch (selectionLog[1]) {
		case 1:
			什么是冒险岛联盟();
			break;
		case 2:
			联盟等级();
			break;
		case 3:
			联盟级别();
			break;
		case 4:
			攻击队和战斗力();
			break;
		case 5:
			预设保存功能();
			break;
		case 6:
			战斗地图和角色积木();
			break;
		case 7:
			联盟突袭();
			break;
		case 8:
			每周获得联盟币排名();
			break;
		default:
			cm.dispose(); // 结束
			break;
		}
	}
}

function 对话首页() {
	text = "你说你想要了解有关#b冒险岛联盟#k的情况？\r\n有什么需要我告诉你的吗？\r\n\r\n";
	text += "#L1##b什么是冒险岛联盟？#l\r\n";
	text += "#L2##b联盟等级#l\r\n";
	text += "#L3##b联盟级别#l\r\n";
	text += "#L4##b攻击队和战斗力#l\r\n";
	text += "#L5##b预设保存功能#l\r\n";
	text += "#L6##b战斗地图和角色积木#l\r\n";
	text += "#L7##b联盟突袭#l\r\n";
	text += "#L8##b每周获得联盟币突袭#l\r\n";
	text += "\r\n";
	text += "#L9##e不再听取说明。#l";
	cm.askMenu(text);
}

function 什么是冒险岛联盟() {
	if (status == 1) {
		text = "#e<什么是冒险岛联盟？>#n\r\n\r\n";
		text += "#e冒险岛联盟#n指的是#b同一个世界内角色之间的组织#k。\r\n";
		text += "但并不是所有角色都能隶属于冒险岛联盟。\r\n";
		text += "#r必须是角色等级在60级以上/完成2转的角色#k才行。\r\n";
		text += "#r还有，相同世界内如果有超出40个角色#k，会以#b角色等级排名为基准，只有前40名#k会被认可为隶属于冒险岛联盟。\r\n\r\n";
		text += "另外#b神之子#k方面，#r只有130级以上等级最高的1个角色#k会被认可为隶属于冒险岛联盟。\r\n";
		text += "但并不是所有角色都能隶属于冒险岛联盟。\r\n";
		cm.askMenu(text);
	} else if (status == 2) {
		text = "#e<什么是冒险岛联盟？>#n\r\n\r\n";
		text += "隶属于#e冒险岛联盟#n的角色会根据#r等级#k的提升，而提升#b角色级别#k。\r\n\r\n";
		text += "#e<普通角色>#n\r\n";
		text += "#b#eB(60)->A(100)->S(140)->SS(200)->SSS(250)#n\r\n";
		text += "#e<神之子>#n\r\n";
		text += "#b#eB(130)->A(160)->S(180)->SS(200)->SSS(250)#n\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 联盟等级() {
	if (status == 1) {
		text = "#e<联盟等级>#n\r\n\r\n";
		text += "#b联盟等级#n指的是隶属于#b冒险岛联盟#k角色的#r等级合计值#k。\r\n\r\n";
		text += "只有联盟等级够高，才能够#r升级#k到更高的#b联盟级别#k，打造更加强大的冒险岛联盟。\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 联盟级别() {
	if (status == 1) {
		text = "#e<联盟级别>#n\r\n\r\n";
		text += "#b联盟级别#n是当#b联盟等级#k达到特定数值时，可以提升的一种#b成长尺度#k。\r\n\r\n";
		text += "#b联盟级别#k越高，就能够在#r更广阔的战斗地图上#k配置#r更多的攻击队员#k。\r\n\r\n";
		text += "将#b联盟等级升级#k到一定水准时，需要支付#i4310229##b#z4310229##k。\r\n\r\n";
		text += "#L1##b查看各级别所需等级/支付联盟币/攻击队队员人数#l\r\n";
		cm.askMenu(text);
	} else if (status == 2) {
		text = "#e<新手联盟>#n\r\n\r\n";
		text += "  #e-第1阶段 #bLv.500\t#r所需联盟币：无\t#b攻击队队员：9人\r\n\r\n";
		text += "  #e-第2阶段 #bLv.1000\t#r所需联盟币：120个\t#b攻击队队员：10人\r\n\r\n";
		text += "  #e-第3阶段 #bLv.1500\t#r所需联盟币：140个\t#b攻击队队员：11人\r\n\r\n";
		text += "  #e-第4阶段 #bLv.2000\t#r所需联盟币：150个\t#b攻击队队员：12人\r\n\r\n";
		text += "  #e-第5阶段 #bLv.2500\t#r所需联盟币：160个\t#b攻击队队员：13人\r\n\r\n";
		cm.askMenu(text);
	} else if (status == 3) {
		text = "#e<资深联盟>#n\r\n\r\n";
		text += "  #e-第1阶段 #bLv.3000\t#r所需联盟币：170个\t#b攻击队队员：18人\r\n\r\n";
		text += "  #e-第2阶段 #bLv.3500\t#r所需联盟币：430个\t#b攻击队队员：19人\r\n\r\n";
		text += "  #e-第3阶段 #bLv.4000\t#r所需联盟币：450个\t#b攻击队队员：20人\r\n\r\n";
		text += "  #e-第4阶段 #bLv.4500\t#r所需联盟币：470个\t#b攻击队队员：21人\r\n\r\n";
		text += "  #e-第5阶段 #bLv.5000\t#r所需联盟币：490个\t#b攻击队队员：22人\r\n\r\n";
		cm.askMenu(text);
	} else if (status == 4) {
		text = "#e<大师联盟>#n\r\n\r\n";
		text += "  #e-第1阶段 #bLv.5500\t#r所需联盟币：510个\t#b攻击队队员：27人\r\n\r\n";
		text += "  #e-第2阶段 #bLv.6000\t#r所需联盟币：930个\t#b攻击队队员：28人\r\n\r\n";
		text += "  #e-第3阶段 #bLv.6500\t#r所需联盟币：960个\t#b攻击队队员：29人\r\n\r\n";
		text += "  #e-第4阶段 #bLv.7000\t#r所需联盟币：1000个\t#b攻击队队员：30人\r\n\r\n";
		text += "  #e-第5阶段 #bLv.7500\t#r所需联盟币：1030个\t#b攻击队队员：31人\r\n\r\n";
		cm.askMenu(text);
	} else if (status == 5) {
		text = "#e<大宗师联盟>#n\r\n\r\n";
		text += "  #e-第1阶段 #bLv.8000\t#r所需联盟币：1060个\t#b攻击队队员：36人\r\n\r\n";
		text += "  #e-第2阶段 #bLv.8500\t#r所需联盟币：2200个\t#b攻击队队员：37人\r\n\r\n";
		text += "  #e-第3阶段 #bLv.9000\t#r所需联盟币：2300个\t#b攻击队队员：38人\r\n\r\n";
		text += "  #e-第4阶段 #bLv.9500\t#r所需联盟币：2350个\t#b攻击队队员：39人\r\n\r\n";
		text += "  #e-第5阶段 #bLv.10000\t#r所需联盟币：2400个\t#b攻击队队员：40人\r\n\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 攻击队和战斗力() {
	if (status == 1) {
		text = "#e<攻击队和战斗力>#n\r\n\r\n";
		text += "所谓#b攻击队#n，指的是联盟角色中，#b分配到战斗地图上的角色组织#k。\r\n\r\n";
		text += "成为#b攻击队队员#k的角色会参与#r联盟突袭#k，与强大的敌人展开战斗，并收集#b联盟币#k。\r\n\r\n";
		text += "另外攻击队队员还会触发角色固定的<#b攻击队队员效果#n>和战斗地图占领状态所产生的<#b攻击队战力效果#k>，对#r世界内所有角色#k带来#b能力值提升效果#k。\r\n\r\n";
		cm.askMenu(text);
	} else if (status == 2) {
		text = "#e<攻击队和战斗力>#n\r\n\r\n";
		text += "#b战斗力#n取决于#r角色等级#k和#r星之力数值#k。\r\n\r\n";
		text += "其中，#b攻击队战斗力#k就是#b攻击队队员#k们的战斗力综合。#b攻击队战斗力#k越高，在#r联盟突袭#k中给敌人造成的伤害越大，收集联盟币的速度也越快。\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 预设保存功能() {
	if (status == 1) {
		text = "#e<预设保存功能>#n\r\n\r\n";
		text += "你想根据各种情况变更#b战斗地图#n中配置的#r角色积木和内置8个能力值#k吗？\r\n";
		text += "使用#b联盟预设#k功能吧！\r\n";
		cm.askMenu(text);
	} else if (status == 2) {
		text = "#e<预设保存功能>#n\r\n\r\n";
		text += "使用#r纪念币商店#k里出售的#i2436884##b#z2436884##k，\r\n";
		text += "可以使#r最多3个预设#b保持30天的有效期#k。\r\n";
		cm.askMenu(text);
	} else if (status == 3) {
		text = "#e<预设保存功能>#n\r\n\r\n";
		text += "预设激活期间，#b点击预设按钮进行编辑#k后，\r\n";
		text += "可以#r在配置模式中载入并保存#k！\r\n";
		text += "#b再一次点击#k预设按钮即可返回配置模式。\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 战斗地图和角色积木() {
	if (status == 1) {
		text = "#e<战斗地图和角色积木>#n\r\n\r\n";
		text += "#b战斗地图#n是一种可以分配#r攻击队队员#k占领的地图，#b内部8个、#r外部8个#k，#e总共由16个地区#k组成。\r\n";
		text += "每个地区都拥有#b固定的能力值#k，根据各地区的#r占领格数#k，能力值也会有所提升。\r\n\r\n";
		text += "#b内部8个地区的能力值#k可以按需求#b进行更改，\r\n";
		text += "#r外部8个地区的能力值#k是固定的。\r\n";
		cm.askMenu(text);
	} else if (status == 2) {
		text = "#e<战斗地图和角色积木>#n\r\n\r\n";
		text += "将角色#e拖曳#n至#b战斗地图#n上，角色就会显示为#b积木#k，并占据一部分#b战斗地图#k。\r\n\r\n";
		text += "#e角色积木#n会根据#b等级#k和#b职业种类#k，以#b原有角色积木#k为中心成长，形状也会各不相同。\r\n";
		cm.askMenu(text);
	} else if (status == 3) {
		text = "#e<战斗地图和角色积木>#n\r\n\r\n";
		text += "第一次将角色配置在#b战斗地图#k上时，#r原有的角色积木#k一定要包含在#b中央四个地方之一#k。\r\n\r\n";
		text += "接下来才可以继续配置其他角色，让角色积木互相碰触或重叠，还可以#b翻转或转动#k角色积木，改变成自己想要的形状，#b通过点击鼠标右键还可以解除#k。\r\n\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 联盟突袭() {
	if (status == 1) {
		text = "#e<联盟突袭>#n\r\n\r\n";
		text += "#b联盟突袭#k是#b攻击队队员们#k进行的一种#r战斗玩法。#k\r\n\r\n";
		text += "隶属于攻击队的角色通过点击联盟UI的#e<参加战斗>按钮#n可以入场。#k。\r\n";
		text += "进入突装之后，#b攻击队队员们#k就会认真地展开战斗。\r\n\r\n";
		cm.askMenu(text);
	} else if (status == 2) {
		text = "#e<联盟突袭>#n\r\n\r\n";
		text += "#b联盟突袭#k中，大体上会出现#b两种怪物#k。#k\r\n\r\n";
		text += "#e第一种#n是位于战场中央的#b巨龙#k，\r\n";
		text += "#b攻击队队员#k会自动对中央的巨龙发起攻击。#k\r\n\r\n";
		text += "#r直接参与战斗的角色#k也可以攻击#b巨龙#k。#k\r\n";
		text += "但是当#r巨龙#k血量中的#b绿色进度条#k为空时，就会形成一道#b保护膜#k，直接参与的角色攻击将不被应用，只会#b应用剩下的攻击队队员的伤害#k。#k\r\n\r\n";
		text += "即便攻击队队员#b没有直接参加战斗#k，和巨龙的战斗#b依然会持续进行#k，还是可以收集#b联盟币#k的。#k\r\n\r\n";
		text += "#b联盟币#k会在从突袭中#r离开时进行清算#k，所以最好是周期性地进来#k回收攻击队队员收集到的联盟币。\r\n\r\n";
		cm.askMenu(text);
	} else if (status == 3) {
		text = "#e<联盟突袭>#n\r\n\r\n";
		text += "#e第二种#n是保护巨龙的#b迷你龙#k。\r\n\r\n";
		text += "这些家伙只会被#r直接参加战斗的角色#k攻击到，可以击败这些家伙，进行#b每日任务#k。\r\n";
		text += "在对付迷你龙的过程中，偶尔还会出现稀有的#b黄金飞龙#k。\r\n\r\n";
		cm.askMenu(text);
	} else if (status == 4) {
		text = "#e<联盟突袭>#n\r\n\r\n";
		text += "每当对#b巨龙#k造成的累积伤害达到#e1000亿#n时，就会获得一个#b联盟币#k。\r\n\r\n";
		text += "累积伤害会以#b每天为单位进行初始化#k。\r\n\r\n";
		text += "不同联盟级别都存在不同的#r极限值#k，当达到极限时，联盟币就不会再叠加，所以最好还是每天都确认一下吧？\r\n\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}

function 每周获得联盟币排名() {
	if (status == 1) {
		text = "#e<每周获得联盟币排名>#n\r\n\r\n";
		text += "#b每周获得联盟币排名#k是以世界内所有角色#b每周一00点30分#k到#r周日23点30分#k获得的#b联盟币#k数量为基准计算的排名。\r\n";
		cm.askMenu(text);
	} else if (status == 2) {
		text = "#e<每周获得联盟币排名>#n\r\n\r\n";
		text += "会以#b最后#k更新每周累积联盟币的#b角色名#k登陆排名，等到下一周时，再向排名#r第1到第100的联盟#k发送#b特别的礼物#k。\r\n";
		text += "通过#b每日任务#k所获得的联盟币会得到累积，所以最好常来看看吧？\r\n\r\n";
		cm.askMenu(text);
	} else {
		status = -1;
	}
}
