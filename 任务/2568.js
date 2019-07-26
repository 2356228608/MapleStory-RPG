/*
 * 神炮王剧情 - 14
 * 地图：可可岛 - 遇险者小屋 (3000200)
 * 任务：开始逃出(2568)
 * @author 狐狸糊涂
 */
var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
        qm.sendNextNoESC("你来啦。在你去做事的时候，我已经把点火装置装到了大炮上。好了，事不宜迟！我们马上出发吧！");
    } else if (status == 1) {
        qm.warp(912060200, 0);
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}