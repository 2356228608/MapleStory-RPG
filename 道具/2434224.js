/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:新手快捷功能
 *  @Author 娜娜 
 */

var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#e#r#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k\r\n\r\n #e#r	      	" + im.getServerName() + "快捷NPC#k#n\r\n";
        selStr += "#d欢迎使用快捷特权,[可以把我放到键盘上用哦]\r\n本次给您带来快捷服务：#k\r\n";
        selStr += "#r#L8#" + z + " 在线刷物#l #L0#" + z + " 返回市场#l   #L1#" + z + " 打开拍卖#l\r\n\r\n";
		selStr += "#r#L2#" + z + "爆率查询#l #L3#" + z + " GM功能#l     #L4#" + z + " 快速美发#l  \r\n\r\n";
		selStr += "#r#L5#" + z + "特殊商城#l #L6#" + z + " BMS绝版商城#l#L7#" + z + " VIP功能#l \r\n\r\n";
        selStr += "\r\n\r\n#fEffect/ItemEff/1112811/0/0##fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k#fEffect/ItemEff/1112811/0/0##n#k";
        im.askMenu(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                if (im.getMapId() == 910000000) {
                    // npc 9000070 2022008箭头 2001006驴 9330084解梦 9330079 9310084 9105005 2161001
                    im.dispose();
                    im.addPopupSay(2013002, 2000, "[" + im.getServerName() + "]提示:你已经在市场了哦,亲...");
                } else {
                    im.dispose();
                    im.warp(910000000, 0);
                }
                break;
            case 1:
                im.dispose();
                im.openNpc(9900004);
                break;
            case 2:
                im.dispose();
                im.openNpc(9900003, 5);
                break;
			case 3:
                im.dispose();
                im.openNpc(9310073);
                break;
			case 4:
                im.dispose();
                im.openNpc(9310072);
                break;
			case 5:
                im.dispose();
                im.openNpc(9310074);
                break;
			case 6:
                im.dispose();
                im.openNpc(9000330);
                break;
			case 7:
                im.dispose();
				im.openNpc(9400373);
                //.addPopupSay(2013002, 2000, "[" + im.getServerName() + "]提示:作者正在开发中.期待下次开放,亲...");
                break;
			case 8:
			if(im.getPlayer().isGM()){
				im.dispose();
				im.openNpc(9400373,"AdvancedSearch4");
			}else{
                im.dispose();
				im.sendOk("我只为管理员服务。");
			}
                break;
        }
    }
}