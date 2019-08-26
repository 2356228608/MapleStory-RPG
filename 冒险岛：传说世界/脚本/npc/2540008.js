
/*
 *  起源之塔39F 问答
 *  @Author Jessefjxm
 */
// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
var Q = new Array(6); // Q A1 A2 A3 A4 正确答案
var rightResponse = ["你的知识储备很不错嘛。", "真的很了不起啊。", "真的很不错啊。"]

// 开头
function start() {
	action(1, 0, 0);
}

// 主体
function action(mode, type, selection) {
	// type: 0 = (sendNext, sendOk, sendNextPrev) 1 = (sendYesNo) 12 = (sendAcceptDecline) 3 = (sendGetNumber) 4 = (askMenu)
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	// mode: 1 = (下一页/是/同意) -1 = (结束对话) 0 = (返回/否/拒绝)(askMenu/sendGetNumber时，结束对话)
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	selectionLog[status] = selection;
	var em = cm.getEventManager("副本_起源之塔");
	var stage = parseInt(em.getProperty("stage39_stage"));
	if (stage == 0) {
		action0(mode, type, selection, em);
	} else if (stage == 1) {
		action1(mode, type, selection, em, stage);
	} else if (stage < 12) {
		action2(mode, type, selection, em, stage);
	} else {
		actionEnd(mode, type, selection, em, stage);
	}
}

function action0(mode, type, selection, em) {
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		cm.sendNext("你好吗？看样子你是要前往塔下一层的探险家。");
	} else if (status === 1) {
		cm.sendNext("我是立志把一生都奉献给问答的人。\r\n\r\n我原本是想将这里的怪物消灭的，直到有一天发现了问答的奥妙……");
	} else if (status === 2) {
		cm.sendNext("好吧，我把这里的问题全部都记录在身上了。只待有朝一日全部解开了它们的谜底，我就可以放心前进了。");
	} else if (status === 2) {
		cm.sendOk("40层有一个非常可怕的怪物。为了你的安全，你必须通过了我的问答挑战，我才能让你上去。\r\n\r\n如果你想挑战的话，就告诉我。");
	} else if (status === 3) {
		em.setProperty("stage39_stage", 1);
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function action1(mode, type, selection, em, stage) {
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		var text = "那么，你有什么事呢？\r\n\r\n";
		text += "#L1##b请为我说明详细的规则。#l\r\n";
		text += "#L2##b我想挑战问答。#l\r\n";
		text += "#L3##b没什么。#l\r\n";
		cm.askMenu(text);
	} else if (status === 1) {
		if (selectionLog[1] == 1) {
			cm.sendNext("规则很简单：你要累计答对我的#b10个精妙问题#k，我才能放你过关。\r\n\r\n但一旦你#r累计答错2个问题#k，就得从头开始计算。这是为了督促你不要放松你的头脑！");
		} else if (selectionLog[1] == 2) {
			cm.askYesNo("哦，你要挑战我的精妙问题啊。准备好了吗？");
		} else {
			cm.dispose();
		}
	} else if (status === 2) {
		if (selectionLog[1] == 1) {
			cm.sendOk("等你准备好，想挑战我的问题的话，就告诉我。");
		} else if (selectionLog[1] == 2) {
			em.setProperty("stage39_stage", 2);
			cm.sendOk("很好！我要开始提问了。");
		}
	} else if (status === 3) {
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function action2(mode, type, selection, em, stage) {
	var stage = parseInt(em.getProperty("stage39_stage"));
	if (status < 0) {
		cm.dispose();
	} else if (status === 0) {
		em.setProperty("stage39_total", parseInt(em.getProperty("stage39_total")) + 1);
		cm.sendNext("好的！接下来请听#b第" + (stage - 1) + "道问题#k。");
	} else if (status === 1) {
		generateQuestion();
		var text = "问题：" + Q[0] + "\r\n\r\n";
		text += "#L1##b1. " + Q[1] + "#l\r\n";
		text += "#L2##b2. " + Q[2] + "#l\r\n";
		text += "#L3##b3. " + Q[3] + "#l\r\n";
		text += "#L4##b4. " + Q[4] + "#l\r\n";
		cm.askMenu(text);
	} else if (status === 2) {
		if (selectionLog[2] == Q[5]) {
			if (stage - 1 == 10) {
				cm.sendNext("回答正确！现在你已经答对了10道问题，你在知识问答上很有天赋啊！");
			} else {
				cm.sendNext("回答正确！真的很了不起啊。");
			}
		} else {
			var wrong = parseInt(em.getProperty("stage39_wrong")) + 1;
			if (wrong == 2) {
				cm.sendOk("很遗憾，回答错误。正确答案是#b" + Q[5] + "." + Q[4] + "。现在你已经答错两次，必须重新开始考验。");
				em.setProperty("stage39_stage", 2);
				em.setProperty("stage39_wrong", 0);
			} else {
				cm.sendOk("很遗憾，回答错误。正确答案是#b" + Q[5] + "." + Q[4] + "。现在你已经答错一次，如果再错一次的话就要重新开始了。");
				em.setProperty("stage39_wrong", 1);
			}
		}
	} else if (status === 3) {
		if (selectionLog[2] == Q[5]) {
			if (stage - 1 == 10) {
				cm.sendNext("啊……不，原来你不是对问答，而是对冒险的知识很丰富啊。在追寻问答真理的道路上我难得遇到一个好对手……");
			} else {
				cm.sendOk("现在你已经答对#b" + (stage - 1) + "道题#k了。离完成我的考验还差#r" + (11 - stage) + "道题#k。要保持下去啊。");
			}
		} else {
			cm.dispose();
		}
	} else if (status === 4) {
		if (stage - 1 == 10) {
			cm.sendNext("不管怎么样，你已经充分证明了你的能力。我这就打开通往下一层的大门。");
		} else {
			em.setProperty("stage39_stage", stage + 1);
			cm.dispose();
		}
	} else if (status === 5) {
		cm.sendOk("在下一层，将会出现一个非常强大的敌人，你一定要做好心理准备。那么，期待我们再一次相遇吧。");
	} else if (status === 6) {
		em.setProperty("stage39_stage", stage + 1);
		em.setProperty("stage39", "clear");
		cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
		cm.dispose();
	} else {
		cm.dispose();
	}
}

function actionEnd(mode, type, selection, em) {
	cm.sendOk("你已经通过了我的考验，可以前往下一层了。祝你好运！");
	cm.dispose();
}

function generateQuestion() {
	switch (randomNum(1, 8)) {
	case 1:
		generateQuestionOzMob();
		break;
	case 2:
		generateQuestionJob();
		break;
	case 3:
		generateQuestionBoss();
		break;
	case 4:
		generateQuestionCity();
		break;
	case 5:
		generateQuestionConsume();
		break;
	case 6:
		generateQuestionLines();
		break;
	case 7:
		generateQuestionNpc();
		break;
	case 8:
		generateQuestionNpcNotHere();
		break;
	}
}

var mobsOz = ["艾利杰", "白刺熊", "白狼", "壁虎", "橙色古代金龟子", "橙色古代水灵", "丁满", "愤怒的蝴蝶精", "弗雷塔", "古代橙龟", "古代金龟子", "古代蓝龟", "古代蓝色水灵", "古代紫色水灵", "怪猫", "哈维", "豪猪", "褐刺熊", "褐色火山虫", "黑鳄鱼", "黑飞龙", "黑花石头人", "红独角狮", "红飞龙", "红螃蟹", "红色蘑菇蝙蝠", "红色沙漠矮人", "红色食虫花妖精", "猴子", "蝴蝶精", "花蘑菇", "花石头人", "黄独角狮", "黄色卷毛牛", "黄色蘑菇蝙蝠", "黄色食虫水灵", "火独眼兽", "火山怪", "火野猪", "金属甲虫", "巨大橙色水灵", "巨大紫色水灵", "蓝独角狮", "蓝飞龙", "蓝色古代水灵", "蓝色花牛", "蓝色火山虫", "蓝色食虫花妖精", "蓝色食虫水灵", "绿色花牛", "绿水灵", "绿水灵王", "泥人妖", "青螃蟹", "柔道猫熊", "沙漠毒蝎", "沙漠蛇先生", "沙漠土拨鼠", "受伤的冒险家", "秃鹫先生", "乌龟", "橡木甲虫", "小蜥蜴", "血腥哈维", "野狼", "猿公", "紫色卷毛牛", "棕熊"];
var mobsNonOz = ["古代红龟", "古代蘑菇蝙蝠", "古代食虫水灵", "克洛克", "蓝色蘑菇蝙蝠", "蓝色古代金龟子", "黄色花牛", "香肠嘴雪精灵", "罗兰", "黑刺熊"];
function generateQuestionOzMob() {
	Q[0] = "以下怪物没有在起源之塔出现的是：";
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = mobsNonOz[randomNum(0, mobsNonOz.length - 1)];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			Q[i] = mobsOz[randomNum(0, mobsOz.length - 1)];
		} while (haveRepeat(i));
	}
}

var jobs = [
	["冒险家", ["英雄", "黑骑士", "圣骑士", "冰雷", "火毒", "主教", "神射手", "箭神", "无影人", "侠盗", "暗影双刀", "冲锋队长", "船长", "火炮手", "古迹猎人"]],
	["骑士团", ["魂骑士", "米哈尔", "炎术士", "风灵使者", "夜行者", "奇袭者"]],
	["英雄", ["战神", "龙神", "双弩精灵", "幻影", "银月", "夜光法师", "隐月"]],
	["反抗者", ["恶魔猎手", "恶魔复仇者", "唤灵斗师", "豹弩游侠", "尖兵", "机械师"]],
	["诺巴", ["爆力萌天使", "狂龙战士", "魔链影士", "风灵使者", "夜行者", "奇袭者"]],
	["翼人族", ["影魂异人", "圣晶使徒"]],
	//["冒险岛世界", ["品克缤", "剑豪", "阴阳师", "龙的传人", "林之灵", "神之子"]],
	["冒险岛世界之外", ["恶魔猎人", "美工设计师", "死灵法师", "追风者"]]
];
function generateQuestionJob() {
	var jobGroup = randomNum(0, jobs.length - 1);
	Q[0] = "以下职业属于" + jobs[jobGroup][0] + "的是：";
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = jobs[jobGroup][1][randomNum(0, jobs[jobGroup].length - 1)];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			var randGroup = randomNum(0, jobs.length - 1);
		} while (randGroup == jobGroup);
		do {
			Q[i] = jobs[randGroup][1][randomNum(0, jobs[randGroup].length - 1)];
		} while (haveRepeat(i));
	}
}

var boss = ["扎昆", "半半", "小丑", "血腥女王", "贝伦", "麦格纳斯", "希拉", "班雷昂", "黑龙王", "森兰丸", "希纳斯", "阿卡伊勒", "帕普拉图斯", "品克缤", "黛米安", "斯乌", "路希德", "威尔", "敦凯尔", "黑魔法师", "蘑菇王", "蓝蘑菇王", "僵尸蘑菇王", "蝙蝠怪", "", "御龙魔", "大宇", "蜘蛛女王", "武公", "艾利杰"];
var bossNotHere = ["班.贝侬", "鸡蛇兽", "比尔泽布", "贝尔库里斯", "暗黑破坏神", "卡莉雪", "波提切利", "赛特斯"];
function generateQuestionBoss() {
	Q[0] = "以下首领怪物中，未曾在冒险岛世界出现过的是：";
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = bossNotHere[randomNum(0, bossNotHere.length - 1)];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			Q[i] = boss[randomNum(0, boss.length - 1)];
		} while (haveRepeat(i));
	}
}

var city = ["阿里安特", "明珠港", "射手村", "勇士部落", "废弃都市", "魔法密林", "林中之城", "埃欧雷", "天空之城", "冰封雪域", "水下世界", "玩具城", "神木村", "圣地", "埃德尔斯坦", "玛加提亚", "武陵", "里恩", "尖耳狐狸村", "万神殿", "童话村", "诺特勒斯"];
var cityNotHere = ["阿库亚", "玛格利特", "克雷亚蒂斯", "沉睡之地", "幻影林地", "狼牙"];
function generateQuestionCity() {
	Q[0] = "以下城市中，不属于冒险岛世界的是：";
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = cityNotHere[randomNum(0, cityNotHere.length - 1)];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			Q[i] = city[randomNum(0, city.length - 1)];
		} while (haveRepeat(i));
	}
}

var consume = ["12周年万能充能冒险岛冰淇淋", "G药水", "Mini可口可乐", "MVP恢复药水", "NENE酱鸡", "NENE炸鸡", "阿拉斯加冰点心", "白巧克力", "白色药水", "白色药丸", "白星药水", "百事可乐", "棒棒冰", "包子", "杯装炒年糕", "被发掘的体力强化秘药", "被发掘的勇气秘药", "被发掘的祝福秘药", "被选择的祝福秘药", "必胜ＫＯＲＥＡ", "冰岛鱿鱼", "冰独眼兽尾巴辣汤", "饼干", "波罗糖", "菠萝吹雪水", "彩星药水", "草莓奶油蛋糕", "草莓糖", "超级药水", "炒栗子", "橙色药水", "橙色药丸", "橙汁", "橙子", "初级冒险家的红色药水", "初级冒险家的蓝色药水", "春卷", "大肚鱼", "大熱狗", "大英雄之秘药", "大祝福之秘药", "单身炸酱面", "蛋炒饭(双倍)", "蛋炒面", "蛋糕", "东方香水", "豆腐", "毒蘑菇", "发掘出的攻击力秘药", "发掘出的魔力秘药", "发掘出的魔力强化秘药", "发掘出的体力强化秘药", "饭团(明太鱼子)", "饭团(蘑菇)", "饭团(青鱼)", "饭团(水果)", "饭团(蟹肉)", "防御膜", "粉色松糕", "枫叶特制便当", "蜂蜜", "蜂蜜罐", "富氧离子水", "干酪蛋糕", "高级大英雄之秘药", "高级大祝福之秘药", "高级贯穿之秘药", "高级首领怪杀手之秘药", "高级职业红色药水", "高级职业蓝色药水", "工作人员O的激励", "攻击神水", "攻击药丸", "古木树液", "谷茶", "刮痧油", "拐杖棒棒糖", "管理者的祝福", "贯穿之秘药", "鬼节无敌秘药", "果汁糖", "海加顿之气息", "韩果", "汉堡", "黑巧克力", "黑色果实", "黑星药水", "红豆包子", "红豆刨冰", "红色果实", "红色药水", "红色药丸", "红星药水", "红枣", "花生巧克力棒", "华阳烤肉", "怀基基椰子", "黄昏之露", "黄金炸虾", "回避药膏", "活力神水", "活力神药", "火独眼兽尾巴卷", "火红玫瑰", "鸡蛋", "姜饼女士饼干", "姜饼先生饼干", "焦糖果", "饺子", "觉醒秘药", "金星药水", "经验累积秘药", "精灵威科的祝福", "竞技场清晨之露", "竞技场驯鹿奶", "九灵的气息", "桔梗浓缩液", "桔子天堂", "巨人秘药说明书", "聚财秘药", "烤红薯", "烤鳗鱼", "烤年糕", "烤肉", "可口可乐", "可口可乐低糖药片", "可口可乐无糖药片", "可口可乐药片", "可乐", "空气玲", "矿泉水", "拉面", "兰州拉面", "蓝色果实", "蓝色药水", "蓝色药丸", "蓝星药水", "浪漫樱花", "老虎软膏", "老虎药丸", "里恩特制红药水", "里恩特制蓝药水", "力量月光水晶", "栗子", "凉爽果汁", "灵魂祝福", "龙肉", "龙血", "龙渊香水", "罗杰的苹果", "绿豆粥", "冒险岛指南攻击力药水", "冒险岛指南命中药水", "冒险岛指南魔力药水", "美味肉肉", "敏捷药水", "敏捷药丸", "命中神水", "命中药膏", "命中药丸", "蘑菇棒棒糖", "蘑菇特制拉面", "魔法制炼术士的药水", "魔力神水", "魔力药膏", "魔力药丸", "魔力月光水晶", "乃米的饭盒", "南瓜", "南瓜片", "年糕串", "年糕汤", "柠檬", "蟠桃", "蟠桃罐头", "蟠桃汁", "泡泡糖", "披萨", "披萨包子", "苹果", "苹果派", "葡萄汁", "强效魔力水", "荞麦蒟蒻", "巧克力", "巧克力棒", "巧克力蛋糕", "巧克力盒子", "巧克力奶油蛋糕", "青苹果", "清晨之露", "清新的草莓汁", "情人节巧克力", "情人节巧克力(白)", "情人节巧克力(草莓)", "燃烧的残骸", "热狗堡", "壬辰年忍耐秘药", "忍耐秘药", "日本炒面", "日式拉面(海鲜)", "日式拉面(烤肉)", "日式拉面(猪排)", "三色糖膏", "森林的祝福", "沙拉", "沙漠露水", "山参浓缩液", "闪光的白星药水", "闪光的彩星药水", "闪光的黑星药水", "闪光的红星药水", "闪光的金星药水", "闪光的蓝星药水", "蛇尾人参汤", "蛇尾汤", "射手村俱乐部5倍巨人秘药", "神奇氦气体", "神仙汤", "圣诞树铃铛", "胜利祈祷", "十字猎人高级魔力药水", "十字猎人高级体力药水", "十字猎人魔力药水", "十字猎人体力药水", "十字猎人最高级魔力药水", "十字猎人最高级体力药水", "食人花的蜜", "柿子", "首领怪杀手秘药", "寿司", "寿司(青鱼子)", "蔬菜包子", "水果奶油蛋糕", "水果糖", "水梨", "松饼", "松糕", "酥干酪", "速度药水", "速度药丸", "太极战士", "泰国七彩饼", "汤年糕", "糖包", "糖膏", "糖葫芦", "特殊药水", "天使的脚步", "天使的柠檬", "天使的苹果", "甜饼干", "挑战者特殊药水", "吐司", "万病治疗药", "万能疗伤药", "万圣节糖果", "无敌秘药", "西瓜", "鲜果牛奶", "鲜果酸奶", "鲜奶蛋糕", "香肠", "香梭鱼", "香梭鱼(串)", "香梭鱼(盘)", "小鸡饼干", "小魔女", "星星糖", "星缘的魔法", "熊掌汤", "雪碧", "雪块蛋糕", "驯鹿奶", "妖精的蜂蜜", "妖精眼泪", "椰汁", "野菊花香水", "野山参炖鸡汤", "一盘松饼", "一盘月妙松饼", "遗物团员的疲劳恢复饮料", "异界秘药", "油瓜", "鱿鱼干", "幼龙的奶壶", "玉米", "月妙花形松饼", "增值药水", "炸鸡", "炸鸡翅", "章鱼串", "镇痛剂", "指南攻击力药水", "指南速度药水", "治疗药", "重启药水", "猪肉串", "专属网吧无限神水", "紫菜包饭", "钻石无限恢复药水"];
var consumeNotHere = ["熏制鲑鱼", "甲午年", "温热的果汁", "魔法师的药粉", "紫色药水", "妖精之露", "扎昆的气息", "巴克斯D", "派对用干酪"];
function generateQuestionConsume() {
	Q[0] = "以下不属于消耗道具的是：";
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = consumeNotHere[randomNum(0, consumeNotHere.length - 1)];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			Q[i] = consume[randomNum(0, consume.length - 1)];
		} while (haveRepeat(i));
	}
}

var lines = [["高卢", "用来点燃炉火的燃料不足"], ["瓦莱莉", "海盗最强！来比试一场吧"], ["艾比欧拉", "噗噗，这是什么气味"], ["坤", "看看我的肌肉，你难道不想变的和我一样强大吗"], ["副校长", "哼，我根本不能相信一个外人"], ["萨比特拉玛", "你在采草药啊"], ["伊莱克斯", "我是个很适合穿围裙的男人 "], ["巴班", "工作固然重要，不过品尝美味也是很重要的"], ["阿娘", "既然是我捡回来的 就有我来负责吧"], ["路德司", "如果你需要更坚固的防具,就进来看看啊"], ["基尼", "如果你有恶魔文件，就把它交给我保管怎么样"], ["桉", "一个人玩也是无聊"], ["魔法师库迪", "呃啊 我的研究材料哪去了"], ["拉克里斯", "大家必须齐心协力"], ["朵朵", "希望有人能我点吃的"], ["邱老头", "必须尽快把草药送往太上那里"], ["格什么", "天气好极了不是吗"], ["精灵罗雯", "据说朋友艾温给人类造成不便"], ["妖精维英", "又要做作业又要学习好忙啊"], ["妖精艾温", "虽然汉斯不是个坏人"], ["莉萨", "最近，怪物们变得越来越凶"], ["道功", "沧海桑田，随着岁月的流逝世界也发生了变化"], ["普诺", "你问我能看见前方吗？为什么明知故问"], ["哈利", "我是不会原谅那些偷盗的人的"], ["弗坦", "海平面必须停止上升才行啊"], ["桉", "一个人玩也是很无聊的"], ["诺功", "嗯，你要不要也试试得道修炼呢"], ["狼牙", "我正在侍奉古代诺巴之神。"]];
function generateQuestionLines() {
	var npcIndex = randomNum(0, lines.length - 1);
	Q[0] = "以下这句话是谁的口头禅：" + lines[npcIndex][1];
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = lines[npcIndex][0];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			Q[i] = lines[randomNum(0, lines.length - 1)][0];
		} while (haveRepeat(i));
	}
}

var npc = [["阿里安特的护肤员的名字是", "拉尔啦"], ["阿里安特的整形外科医生的名字是", "阿尔丁"], ["阿里安特的武器商人的名字是", "塞尔德"], ["守护万神殿老奶奶", "塞琳"], ["居住在万神殿的商人后继者的名字是", "卡琳"], ["废都地铁的公益工作人员的名字是", "冬青"], ["诺特勒斯杂货店商人是是", "咖喱"], ["诺特勒斯的武器商人的名字是", "摩根"], ["埃德尔斯坦保洁员的名字是", "韩利泰"], ["埃德尔斯坦现任议会长的名字是", "安苏尼"], ["埃德尔斯坦的小熊兼职的名字是", "切奇"], ["玩具城的仓库守卫是", "舍琵"], ["玩具城的好友目录管理员的名字是", "哈尔里"], ["里恩的仓库守卫是", "普斯啦"], ["居住在马加提亚的后街小贩是", "韩"], ["居住在玛加提亚的人造人的名字是", "人造人A"], ["居住在金海滩度假村的杂货商人的名字是", "梅森"], ["居住在废弃都市的道具制造者的名字是", "后街吉姆"], ["居住在战士圣殿的展示转职官是", "武术教练"], ["黄金寺院的杂货商人的名字是", "汤大妈"], ["站在黄金寺院入口处的小僧侣的名字是", "诺娅"], ["勇士部落的武器商人的名字是", "格里巴"], ["坐在天空之城次元之镜右侧的狗的名字是", "波达"], ["站在林中之城旅馆入口处的道具制作者是", "克利斯拉码"], ["百草堂的移动导向是", "鹤"], ["魔法密林的宠物大师的名字是", "妖精玛丽"], ["里娜海峡冰川观测总部的舵手的名字是", "舵手达涅"]];
function generateQuestionNpc() {
	var npcIndex = randomNum(0, npc.length - 1);
	Q[0] = npc[npcIndex][0] + "：";
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = npc[npcIndex][1];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			Q[i] = npc[randomNum(0, npc.length - 1)][1];
		} while (haveRepeat(i));
	}
}

var npcNotHere = ["杰奎琳","海伊兹","卡伊乔","卡诺","塞维尔","亚古兽","查尔斯","DJ酷","史蒂奇","巨人乔"];
function generateQuestionNpcNotHere() {
	Q[0] = "不是居住在冒险岛世界的人是：";
	Q[5] = randomNum(1, 4);
	Q[Q[5]] = npcNotHere[randomNum(0, npcNotHere.length - 1)];
	for (var i = 1; i <= 4; i++) {
		if (i == Q[5])
			continue;
		do {
			Q[i] = npc[randomNum(0, npc.length - 1)][1];
		} while (haveRepeat(i));
	}
}

function haveRepeat(index) {
	for (var j = 1; j < index; j++) {
		if (j == Q[5])
			continue;
		if (Q[j] == Q[index])
			return true;
	}
	return false;
}

function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}
generateQuestionJob();
Q
