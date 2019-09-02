function enter(pi) {
	var id = pi.getPortal().getId();
	var name = pi.getPortal().getName();
	pi.playerMessage(5, "这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： %SCRIPT_PATH% 【注意】修改完脚本后要在控制台重载才能生效！");
}
