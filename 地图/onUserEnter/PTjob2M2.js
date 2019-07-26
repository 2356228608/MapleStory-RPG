/*
 * 尖兵剧情 - 01
 * 地图：秘密地图 - 商标 (931060089)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
		if(ms.getMapId()==915010001){
			ms.dispose();
			return;
		}else{
        ms.warp(910000000, 0);
        ms.dispose();
		}
    } else {
        ms.dispose();
    }
}
