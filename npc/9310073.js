var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var vvv4 = "#fUI/UIWindow4/PQRank/rank/gold#";
var z1 = "#fEffect/ItemEff/1112811/0/0#";//黄金音符
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
cztp = 0;
var targetLevel = 250;
function start() {
    status = -1;
	select = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {

        var txt = "#d┏━━━━BMS服务端GM权限中心（管理员可见）━━━━┓#k\r\n";
        //   txt += "#r\t\t\t\t#L0#累计充值抽奖系统#l\r\n";
        txt += "　#r#L2#" + vvv4 + " #r刷点卷#l　#r#L1#" + vvv4 + " 刷积分#r　#L3#" + vvv4 + " 刷抵用卷#k#l\r\n";
        txt += "　#b#L6#" + vvv4 + " 刷金币#k#l　#b#L5#" + vvv4 + " 刷余额#b#l　#b#L4#" + vvv4 + " 刷在线时间#k#l\r\n";
        txt += "　#d#L7#" + vvv4 + " 刷经验#k#l　#d#L8#" + vvv4 + " 刷人气#b#l　#d#L9#" + vvv4 + " 修改属性#b#l\r\n";
        txt += "　#d#L10#" + vvv4 + " 满技能#k#l  #d#L11#" + vvv4 + " 高级刷物#b#l#d#L12#" + vvv4 + " 去任意地图#b#l\r\n";
		txt += "　#d#L15#" + vvv4 + " 刷声望#b#l  #d#L19#" + vvv4 + " 刷核心碎片#b#l#d#L14#" + vvv4 + " 一键刷级#b#l\r\n#l";
        txt += "  #d#L13#" + vvv4 + "综合在线刷物#b#l";
		txt += "　     #d#L22#" + vvv4 + "一键获取神装#b#l\r\n";
		txt += "  #d#L25#" + vvv4 + "一键获取神秘套装(非神装)#b#l\r\n";
		txt += "　#d#L23#" + vvv4 + "(获取/取消)无敌#b#l ";
		txt += "　 #d#L20#" + vvv4 + "(获取/取消)GM等级#b#l \r\n";
		
		txt += "　#d#L24#" + vvv4 + "(获取/取消)超级无敌#b#l";
		txt += "#d#L26#" + vvv4 + "(获取BUFF道具无限用)#b#l \r\n";
		txt += "  #d#L27#" + vvv4 + "(一键开第2个项链栏)#b#l";
		txt += "     #d#L28#" + vvv4 + "(一键开口袋栏)#b#l \r\n\r\n";
        txt += "#d┗━━━需要关闭此功能的在后台功能开关里━━━━━┛#k\r\n\r\n";
        if (cm.getPlayer().isGM() || cm.getGMNPC()) {
            cm.askMenu(txt);
        } else {
			cm.dispose();
            cm.askMenu("你想做什么呢？\r\n我只为管理员服务。");
        }
    } else if (status == 1) {
        switch (selection) {
			case 28:
				cm.getPlayer().forceCompleteQuest(6500);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r扩充成功");
                break;
			case 27:
				cm.一键扩充项链();
                cm.dispose();
				cm.sendOk("#r扩充成功,请小退到登录界面再进游戏或者更换频道刷新角色.");
                break;
			case 26:
                cm.dispose();
				cm.gainItem(2431094, 1)
                break;
			case 25:
                cm.dispose();
				cm.openNpc(9310376, "一键非神装")
                break;
			case 24:
				if(cm.getPlayer().isInvincible()){
					cm.getPlayer().setInvincible1(false);
					cm.dispose();
					cm.sendOk("\r\n\r\n\t\t\t#e#r超级无敌模式关闭");
				}else{
					cm.getPlayer().setInvincible1(true);
					cm.dispose();
					cm.sendOk("\r\n\r\n\t\t\t#e#超级无敌模式开启!");
				}
                break;
			case 23://#v"+战士套装[i]+"##z"+战士套装[i]+"#
                if(cm.getPlayer().isInvincible()){
					cm.getPlayer().setInvincible(false);
					cm.dispose();
					cm.sendOk("\r\n\r\n\t\t\t#e#r无敌模式关闭");
				}else{
					cm.getPlayer().setInvincible(true);
					cm.dispose();
					cm.sendOk("\r\n\r\n\t\t\t#e#无敌模式开启!");
				}
                break;
            case 22:
                cm.dispose();
				cm.openNpc(9310376, "一键神装")
                break;
			case 20:
				if(!cm.getPlayer().isGM()){
					cm.getPlayer().setGmLevel(4);
					cm.dispose();
					cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你已是GM了\r\nGM特权请查看后台GM命令或者游戏里输入!帮助");
				}else{
					cm.getPlayer().setGmLevel(0);
					cm.dispose();
					cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你已是普通平民了!");
				}
                break;
			case 2://抽奖
                cm.gainNX(999999);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了999999点卷!");
                break;
            case 1://充值
                cm.gainPlayerPoints(999999);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了999999积分!");
                break;
            case 3://中介系统
                cm.gainNX(2, 99999);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999点卷!");
                break;
            case 4://金额点卷
                //cm.gainPlayerEnergy(999999);
                cm.getPlayer().gainGamePoints(99999);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999在线时间点数!");
                break;
            case 5://充值礼包
                cm.addHyPay(-999999,true)
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了999999余额!");
                break;
            case 6://理财系统
                cm.gainMeso(210000000);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了2E金币!");
                break;
            case 7://理财系统
                cm.gainExp(+1000000000);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了10E经验!");
                break;
            case 8://人气
                cm.getPlayer().addFame(9999);
				cm.dispose();
                break;
            case 9://修改属性
                cm.dispose();
                cm.openNpc(9001000, "修改角色属性")
				//cm.sendOk("\r\n\r\n\t\t\t#e#r请在后台用GM管理工具修改装备!");
                break;
            case 10://满技能
                cm.dispose();
                cm.openNpc(9310072, 555)
                break;
            case 11://刷物品
                cm.dispose();
                cm.openNpc(9310376, "AdvancedSearch1")
                break;
            case 12://去任意地图
                cm.dispose();
                cm.openNpc(9310376, "AdvancedSearch2")
                break;
            case 13://BMS综合高级查询工具
                cm.dispose();
                cm.openNpc(9310376, "AdvancedSearch")
                break;
            case 14://指定升级;
                if(cm.getJob() == 3001){
					cm.dispose();
					cm.sendOk("请先1转后再来找我!");
				}else if(cm.getLevel() <= cm.getplayermaxLevel()){
					cm.askNumber("请输入你想要升级到多少等级.最高"+cm.getplayermaxLevel()+"级,\r\n注意:升级过程中请勿其他NPC操作,\r\n#k", 0, 0, cm.getplayermaxLevel());
					select=1;
				}else{
					cm.dispose();
					cm.sendOk("你的等级已是最高级了!");
				}
                break;
            case 15://理财系统;
                cm.getPlayer().gainHonorExp(10000, true);
                cm.dispose()
				cm.sendOk("#b恭喜您成功提高了声望#r+10000!");
                break;
            case 16://理财系统;
                cm.gainItem(4001839, 30000);
                cm.dispose()
				cm.sendOk("#r恭喜您获得#i4001839##z4001839#!");
                break;
            case 17://理财系统;
                cm.unequipEverything();
                // cm.fakeRelog(); //刷新人物
                cm.dispose();
                break;
            case 18://理财系统;
                cm.gainItem(2431093, 1)
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#r#v2431093# 可设置键盘上快捷升级!");
                break;
			case 19://金额点卷
                //cm.gainPlayerEnergy(999999);
                cm.getPlayer().gainvCorePiece(3000);
                cm.dispose();
				cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了3000V核心碎片!");
                break;

        }
    } else if (status == 2) {
        if(select = 1){
			cm.playerMessage(1,"注意:为保证稳定性,升级过程中请勿其他NPC操作,否则容易掉线或者卡住.");
			//cm.setInGameDirectionMode(true,false,false); //屏蔽/解锁操作台 true = 锁 false = 解
            //cm.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
			while (cm.getLevel() < selection) {
                if (cm.getLevel() < cm.getplayermaxLevel()) {
                    //cm.getPlayer().gainExp(cm.getPlayer().getNeededExp() - cm.getPlayer().getExp(), true, false, true);
					cm.levelUp();
                }
				cm.effect_NormalSpeechBalloon("\r\n#fs30#正在刷级,当前等级:<"+cm.getLevel()+">",1,1,0,2000,0,0);
            }
			cm.playerMessage(1,"已升级完成.");
			//cm.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
            //cm.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
			cm.dispose();
		}
		if (cztp == 1) {
            switch (selection) {
                case 10://金额充值点卷
                    if (cm.getHyPay(1) < 1) {
						cm.dispose();
                        cm.sendOk("#r#e抱歉 ！您的余额数目 [0] 不能进行充值 ");
                        status = -1;
                    } else {
                        var revenue0 = cm.getHyPay(1);
                        cm.askText("#r#e★★★★★★★★★『充值中心』★★★★★★★★★#d\r\n\r\n请入你需充值点卷的数量 [ 1：3000 ]\r\n\r\n当前 [ #r#h ##d ] 玩家持有金额：" + revenue0.formatMoney(0, "") + " 元\r\n\r\n#k ");
                    }
                    break;
                case 0://理财系统
                    cm.dispose();
                    cm.openNpc(9000111, "yue");
                    break;
            }
        }
    } else if (status == 3) {
        if (cm.getHyPay(1) - cm.getText() < 0) {
            cm.sendOk("#r#e抱歉 ！充值后余额低于 [ 0 ] ");
            cm.dispose();
        } else {
            cm.addHyPay(+cm.getText());
            cm.gainNX(cm.getText() * 3000);
            cm.sendOk("#d#e恭喜您\r\n\r\n购买点卷数量：#r" + cm.getText() * 3000 + "#k#n\r\n ");
            cm.dispose();

        }
    }
}

Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "　";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
            negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};