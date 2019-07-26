/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能:还原伤害皮肤道具
 *  @Author 娜娜 
 */
var status = -1;
function start() {
    var getCustomData = im.getQuestCustomData(7291);
        im.topMsg("还原伤害皮肤道具成功。");
		im.gainItem(2431965, -1);
		im.getPlayer().setDamageSkin(0);
        im.enableActions();
        im.dispose();
}