/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function start() {
cm.updateInfoQuest(23200, "click=2");
cm.updateInfoQuest(23201, "click=1");
cm.onScriptMessage(3, 0, 0, 0,  "#b妈妈！！你在哪里！！#k", 256, 0, 16, 0, 0, 0); // [类型] 普通对话
cm.dispose();
}