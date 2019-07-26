/*
 * 反抗者剧情 - 06
 * 地图：危险的捉迷藏 - 人迹罕至的岩山 (931000000)
 * Npc名称：小胖
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        cm.dispose();
    } else if (status === i++) {
        cm.sendOk("我是个拥有美丽背影的男人。我喜欢气球。我不能把气球送给你。");
    } else if (status === i++) {
        cm.dispose();
    } else {
        cm.dispose();
    }
}