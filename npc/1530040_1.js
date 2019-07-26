var status = 0;
var choice;
var display;

var needItemList = Array(//消耗物品
        Array(4310143, 200),
        Array(4002001, 50),
        Array(4001241, 5),
        Array(4001242, 5),
        Array(4004000, 50),
        Array(4004001, 50),
        Array(4004002, 50),
        Array(4004003, 50));

function start(){
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection){
		if (mode == -1){
			cm.dispose();
		}else{
			if (mode == 0){
				cm.dispose();
				return;
			}
			if (mode == 1)
				status++;
			if (status == 0){				
				var item1 = cm.getInventory(1).getItem(1);//获取背包第一格"装备对象"
				var dream = (item1.getAttribute())
				var str = (item1.getStr());	//获取力量	   
		  		var dex = (item1.getDex()); //获取敏捷
		   		var int = (item1.getInt()); //获取智力
		   		var luk = (item1.getLuk()); //获取运气
		   		var speed = (item1.getSpeed()); //获取速度
		   		var pad = (item1.getPAD()); //获取攻击力
		   		var mad = (item1.getMAD()); //获取魔法力
		  		var bdr = (item1.getBDR());	//获取首领伤害
				var imdr = (item1.getIMDR()); //获取无视防御
		   		var damr = (item1.getDamR()); //获取伤害
		   		var statr = (item1.getStatR()); //获取属性
				var name = (item1.getTitle()); //获取品质
				if(name == "★★无极★★"){
				cm.sendOk("品质已经是最高: " + name +" 无法继续提升品质！");
				cm.dispose();
				return;
				}else{
                text = "#d第一格装备(武器)：#k" + item1;//指定装备位置ID
				text +="\r\n#g☆升品前装备属性☆#k	";
				text +="\r\n#r力量：" + str; 
				text +="\r\n#r敏捷：" + dex;
				text +="\r\n#r智力：" + int;
				text +="\r\n#r运气：" + luk;
				text +="\r\n#r攻击力：" + pad;
				text +="\r\n#r魔法力：" + mad;
				text +="\r\n#r首领伤害：" + bdr + "%";
				text +="\r\n#r无视防御：" + imdr + "%";
				text +="\r\n#r伤害：" + damr + "%";
				text +="\r\n#r属性：" + statr + "%";
				text +="\r\n#r品质：" + name;
				cm.askMenu(text);}
			}else if (status == 1){
				text ="- #e#d提升品质需要的材料：#n#k\r\n\r\n#b";
				for (var key in needItemList) {
                var itemName = cm.getItemName(needItemList[key][0]);
                text += itemName;
                for (var i = 0; i <= 25 - itemName.getBytes().length; i++){
                    text += " ";}
                var currentItemQuantity = cm.getItemQuantity(needItemList[key][0]);
                var color = "#g";
                if (currentItemQuantity < needItemList[key][1])
                    color = "#r";
                text += color + currentItemQuantity + " / " + needItemList[key][1] + " 个#b\r\n";
            };
            text += "#k\r\n\r\n- #e#d管理提示：#n#b点是进行提升品质。点否关闭当前页面。#k";
            cm.askYesNo(text);
			}else if (status == 2){
            flag = true;
            for (var key in needItemList){
                	var itemId = needItemList[key][0];
                	var itemQuantity = needItemList[key][1];
                	if (!cm.haveItem(itemId, itemQuantity)){
                    	flag = false;
						break;}
            	}if (flag){
                	if (cm.getSpace(1) < 1){
                    	cm.sendOk("装备栏空间不足，请整理后重新制作！");
                    	cm.dispose();
                   		return;}
                for (var key in needItemList){
                    var itemId = needItemList[key][0];
                    var itemQuantity = needItemList[key][1];
                    cm.gainItem(itemId, -itemQuantity);}
			var item1 = cm.getInventory(1).getItem(1);//获取背包第一格"装备对象"
			var name = (item1.getTitle()); //获取品质
				if (name == ""||name == null){
					item1.setTitle("☆☆劣质☆☆");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());//再次获取 “标题”
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆劣质☆☆"){
					item1.setTitle("★☆劣质☆☆");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆劣质☆☆"){
					item1.setTitle("★☆劣质☆★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆劣质☆★"){
					item1.setTitle("★★劣质☆★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★劣质☆★"){
					item1.setTitle("★★劣质★★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★劣质★★"){
					item1.setTitle("☆☆普通☆☆");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆普通☆☆"){
					item1.setTitle("★☆普通☆☆");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆普通☆☆"){
					item1.setTitle("★☆普通☆★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆普通☆★"){
					item1.setTitle("★★普通☆★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★普通☆★"){
					item1.setTitle("★★普通★★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★普通★★"){
					item1.setTitle("☆☆优秀☆☆");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆优秀☆☆"){
					item1.setTitle("★☆优秀☆☆");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆优秀☆☆"){
					item1.setTitle("★☆优秀☆★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆优秀☆★"){
					item1.setTitle("★★优秀☆★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★优秀☆★"){
					item1.setTitle("★★优秀★★");
					item1.setStr(item1.getStr()+1);
					item1.setInt(item1.getInt()+1);
					item1.setDex(item1.getDex()+1);
					item1.setLuk(item1.getLuk()+1);
					item1.setPAD(item1.getPAD()+1);
					item1.setMAD(item1.getMAD()+1);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★优秀★★"){
					item1.setTitle("☆☆精良☆☆");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆精良☆☆"){
					item1.setTitle("★☆精良☆☆");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆精良☆☆"){
					item1.setTitle("★☆精良☆★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆精良☆★"){
					item1.setTitle("★★精良☆★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★精良☆★"){
					item1.setTitle("★★精良★★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★精良★★"){
					item1.setTitle("☆☆极品☆☆");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆极品☆☆"){
					item1.setTitle("★☆极品☆☆");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆极品☆☆"){
					item1.setTitle("★☆极品☆★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆极品☆★"){
					item1.setTitle("★★极品☆★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★极品☆★"){
					item1.setTitle("★★极品★★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★极品★★"){
					item1.setTitle("☆☆史诗☆☆");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆史诗☆☆"){
					item1.setTitle("★☆史诗☆☆");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆史诗☆☆"){
					item1.setTitle("★☆史诗☆★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆史诗☆★"){
					item1.setTitle("★★史诗☆★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★史诗☆★"){
					item1.setTitle("★★史诗★★");
					item1.setStr(item1.getStr()+2);
					item1.setInt(item1.getInt()+2);
					item1.setDex(item1.getDex()+2);
					item1.setLuk(item1.getLuk()+2);
					item1.setPAD(item1.getPAD()+2);
					item1.setMAD(item1.getMAD()+2);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★史诗★★"){
					item1.setTitle("☆☆传说☆☆");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆传说☆☆"){
					item1.setTitle("★☆传说☆☆");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆传说☆☆"){
					item1.setTitle("★☆传说☆★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆传说☆★"){
					item1.setTitle("★★传说☆★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★传说☆★"){
					item1.setTitle("★★传说★★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★传说★★"){
					item1.setTitle("☆☆神器☆☆");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆神器☆☆"){
					item1.setTitle("★☆神器☆☆");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆神器☆☆"){
					item1.setTitle("★☆神器☆★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆神器☆★"){
					item1.setTitle("★★神器☆★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★神器☆★"){
					item1.setTitle("★★神器★★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★神器★★"){
					item1.setTitle("☆☆魔王☆☆");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆魔王☆☆"){
					item1.setTitle("★☆魔王☆☆");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆魔王☆☆"){
					item1.setTitle("★☆魔王☆★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆魔王☆★"){
					item1.setTitle("★★魔王☆★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★魔王☆★"){
					item1.setTitle("★★魔王★★");
					item1.setStr(item1.getStr()+3);
					item1.setInt(item1.getInt()+3);
					item1.setDex(item1.getDex()+3);
					item1.setLuk(item1.getLuk()+3);
					item1.setPAD(item1.getPAD()+3);
					item1.setMAD(item1.getMAD()+3);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★魔王★★"){
					item1.setTitle("☆☆战神☆☆");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆战神☆☆"){
					item1.setTitle("★☆战神☆☆");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆战神☆☆"){
					item1.setTitle("★☆战神☆★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆战神☆★"){
					item1.setTitle("★★战神☆★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★战神☆★"){
					item1.setTitle("★★战神★★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★战神★★"){
					item1.setTitle("☆☆至尊☆☆");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆至尊☆☆"){
					item1.setTitle("★☆至尊☆☆");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆至尊☆☆"){
					item1.setTitle("★☆至尊☆★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆至尊☆★"){
					item1.setTitle("★★至尊☆★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★至尊☆★"){
					item1.setTitle("★★至尊★★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★至尊★★"){
					item1.setTitle("☆☆魔神☆☆");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆魔神☆☆"){
					item1.setTitle("★☆魔神☆☆");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆魔神☆☆"){
					item1.setTitle("★☆魔神☆★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆魔神☆★"){
					item1.setTitle("★★魔神☆★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★魔神☆★"){
					item1.setTitle("★★魔神★★");
					item1.setStr(item1.getStr()+4);
					item1.setInt(item1.getInt()+4);
					item1.setDex(item1.getDex()+4);
					item1.setLuk(item1.getLuk()+4);
					item1.setPAD(item1.getPAD()+4);
					item1.setMAD(item1.getMAD()+4);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★魔神★★"){
					item1.setTitle("☆☆耀世☆☆");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆耀世☆☆"){
					item1.setTitle("★☆耀世☆☆");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆耀世☆☆"){
					item1.setTitle("★☆耀世☆★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆耀世☆★"){
					item1.setTitle("★★耀世☆★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★耀世☆★"){
					item1.setTitle("★★耀世★★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★耀世★★"){
					item1.setTitle("☆☆不朽☆☆");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆不朽☆☆"){
					item1.setTitle("★☆不朽☆☆");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆不朽☆☆"){
					item1.setTitle("★☆不朽☆★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆不朽☆★"){
					item1.setTitle("★★不朽☆★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★不朽☆★"){
					item1.setTitle("★★不朽★★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★不朽★★"){
					item1.setTitle("☆☆永恒☆☆");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆永恒☆☆"){
					item1.setTitle("★☆永恒☆☆");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆永恒☆☆"){
					item1.setTitle("★☆永恒☆★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆永恒☆★"){
					item1.setTitle("★★永恒☆★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★永恒☆★"){
					item1.setTitle("★★永恒★★");
					item1.setStr(item1.getStr()+5);
					item1.setInt(item1.getInt()+5);
					item1.setDex(item1.getDex()+5);
					item1.setLuk(item1.getLuk()+5);
					item1.setPAD(item1.getPAD()+5);
					item1.setMAD(item1.getMAD()+5);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★永恒★★"){
					item1.setTitle("☆☆太上☆☆");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆太上☆☆"){
					item1.setTitle("★☆太上☆☆");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆太上☆☆"){
					item1.setTitle("★☆太上☆★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆太上☆★"){
					item1.setTitle("★★太上☆★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★太上☆★"){
					item1.setTitle("★★太上★★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★太上★★"){
					item1.setTitle("☆☆混沌☆☆");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆混沌☆☆"){
					item1.setTitle("★☆混沌☆☆");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆混沌☆☆"){
					item1.setTitle("★☆混沌☆★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆混沌☆★"){
					item1.setTitle("★★混沌☆★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★混沌☆★"){
					item1.setTitle("★★混沌★★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★混沌★★"){
					item1.setTitle("☆☆无极☆☆");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:"+name1);
					cm.dispose();}
				if (name == "☆☆无极☆☆"){
					item1.setTitle("★☆无极☆☆");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆无极☆☆"){
					item1.setTitle("★☆无极☆★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★☆无极☆★"){
					item1.setTitle("★★无极☆★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
				if (name == "★★无极☆★"){
					item1.setTitle("★★无极★★");
					item1.setStr(item1.getStr()+6);
					item1.setInt(item1.getInt()+6);
					item1.setDex(item1.getDex()+6);
					item1.setLuk(item1.getLuk()+6);
					item1.setPAD(item1.getPAD()+6);
					item1.setMAD(item1.getMAD()+6);
					item1.setBDR(item1.getBDR()+1);
					item1.setIMDR(item1.getIMDR()+1);
					item1.setDamR(item1.getDamR()+1);
					item1.setStatR(item1.getStatR()+1);
					cm.getPlayer().forceUpdateItem(item1);//刷新装备
					var name1 = (item1.getTitle());
					cm.sendOk("品质成功提升到:" + name1);
					cm.dispose();}
            }else{
                cm.sendOk("材料不足，无法提升品质！");
                cm.dispose();}
			}
	}}