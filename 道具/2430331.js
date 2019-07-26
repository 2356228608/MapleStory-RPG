/* 
 * 2431390 - 坐骑 玩具木马 永久
 */
        var period = 90;
var mountSkillId = 30001025;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId);
    im.dispose();
}