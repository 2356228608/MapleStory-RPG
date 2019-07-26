/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：武陵道场 入口 提示
 *  
 *  @Author Jackson 
 */

/* global ms */

var mulungEffects = [
    "我等你！ 还有勇气的话，欢迎再来挑战！",
    "想挑战武陵道场…还真有勇气！",
    "挑战武陵道场的家伙，我一定会让他(她)后悔！！",
    "真是的胆大包天！ 勇敢和无知请不要搞混了！！",
    "想被称呼为失败者吗？欢迎来挑战！"];

function start() {
    ms.startMapEffect(mulungEffects[Math.floor(Math.random() * mulungEffects.length)], 5120024);
    ms.dispose();
}