/*
Care - 脚本调整 - 
脚本定制 仿制脚本 
唯一方式 50009219
*/

var Care = [16014];
function start() {
    for (var i = 0; i < Care.length; i++) {
        cm.forceCompleteQuest(16014);
          //cm.forceStartQuest(Care[i]);
    }
    cm.playerMessage(1, "恭喜\r\n\r\n已开始任务线程 [ " + i + " ]冒险岛联盟！\r\n 请找会计小姐完成任务即可！\r\n\r\n任务线程清理结束\r\n\r\n");
    cm.dispose();
}
