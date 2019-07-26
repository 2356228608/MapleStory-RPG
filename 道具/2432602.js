var reward = [10, 12, 17, 9, 11, 16, 15];
var randitem = Math.floor(Math.random() * reward.length);
/*
 脚本功能：荣誉勋章 双击可以获得声望的荣誉勋章
 
 */

        function start() {
            im.gainItem(2432602, -1);
			if(randitem<=0){
				randitem=2;
			}
            im.gainHonorExp(+randitem, true);
            im.worldMessage(5, "『内在能力』 : 恭喜 " + im.getChar().getName() + " 使用 <荣誉勋章> 成功提高了"+randitem+"声望.");
            im.dispose();
        }