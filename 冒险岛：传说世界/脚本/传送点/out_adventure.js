/*返回到以前的地图
 */

function enter(pi) {
	pi.warp(100000000);
	pi.playerMessage("从大冒险岛回到原来所在的地方。");
	return true;
}
