/*
 * 功能: 黛米安副本离开
 * Form: 芬芬时尚潮流
 */
function enter(pi) {
    var eim = pi.getEventInstance();
    if (eim == null) {
        pi.dropMessage(11, "[错误] 副本出错，请联系管理员!");
    }
    pi.openNpc(1540809);
}