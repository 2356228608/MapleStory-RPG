function enter(pi) {
	var id = pi.getPortal().getId();
	var name = pi.getPortalName();
	pi.playerMessage(5, "这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： 脚本/传送点/100051043_in00.js 【注意】修改完脚本后要在控制台重载才能生效！");
}
