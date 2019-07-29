var status = 0;
var choice;
var display;
var slot = 1;


function start(){
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
		else
		{
			if (mode == 0)
			{
				cm.dispose();
				return;
			}
			if (mode == 1)
				status++;
			if (status == 0){
				var text ="#d你好，你需要进行装备品质提升吗?#k \r\n#g===================#k#d品质说明#k#g===================#k\r\n#b初级效果:				满级效果:#b     \r\n#r☆☆劣质☆☆			★★劣质★★#b\r\n#r☆☆普通☆☆			★★普通★★#b\r\n#r☆☆优秀☆☆			★★优秀★★#b\r\n#r☆☆精良☆☆			★★精良★★#b\r\n#r☆☆极品☆☆			★★极品★★#b\r\n#r☆☆史诗☆☆			★★史诗★★#b\r\n#r☆☆传说☆☆			★★传说★★#b\r\n#r☆☆神器☆☆			★★神器★★#b\r\n#r☆☆魔王☆☆			★★魔王★★#b\r\n#r☆☆战神☆☆			★★战神★★#b\r\n#r☆☆至尊☆☆			★★至尊★★#b\r\n#r☆☆魔神☆☆			★★魔神★★#b\r\n#r☆☆耀世☆☆			★★耀世★★#b\r\n#r☆☆不朽☆☆			★★不朽★★#b\r\n#r☆☆永恒☆☆			★★永恒★★#b\r\n#r☆☆太上☆☆			★★太上★★#b\r\n#r☆☆混沌☆☆			★★混沌★★#b\r\n#r☆☆无极☆☆			★★无极★★#b\r\n#g===================#k#d强品要求#k#g===================#k\r\n#r        不同类型的装备 强品后效果不同#b\r\n#g==============================================#k\r\n";
			
            text += "#b#L1#我要提升(装备)品质#l\r\n\r\n\r\n";
			text += "#g==============================================#k\r\n";
            //text += "\r\n#b#L2#提升(防具)品质#l";
            //text += "\r\n#b#L3#提升(饰品)品质#l";
            cm.askMenu(text);
			}
				else if (status == 1)
				{			
							var Equip = cm.getInventory(1).getItem(1);
							if (Equip == null)//识别是否为空
							{	
								cm.sendOk("\r\n抱歉你装备栏第一格没有道具");
								cm.dispose();
								return;
							}
							if (cm.isCash(Equip.getItemId()))//识别是否为点装 
							{
								cm.sendOk("\r\n抱歉现金道具不能进行升品");
								cm.dispose();
								return;
							}
					switch (selection)
					{
						case 1 :
							var Equip = cm.getInventory(1).getItem(1).getItemId();
							var type = Math.floor(Equip / 10000);
							var type1 = Math.floor(type / 10);							
							if(type1 == 12 || type1 == 13 || type1 == 14 || type1 == 15)//判断为武器
							{
								cm.dispose();
            					cm.openNpc(1530040,1);
								return;}
							if(type == 100 ||type == 104||type == 105||type == 106||type == 107||type == 108|| type == 110||type == 115)//判定为防具
							{
								cm.dispose();
            					cm.openNpc(1530040,2);
								return;}
							if(type == 111|| type == 112 || type == 113|| type == 103 ||type == 101||type == 102 ||  type == 119|| type == 114 || type == 116){//判定为饰品
								cm.dispose();
            					cm.openNpc(1530040,3);
								return;}
							cm.askMenuS(text);
}}}}					