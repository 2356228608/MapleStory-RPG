function act() {
	var id = rm.getReactor().getReactorId();
	var name = rm.getReactor().getName();
	rm.playerMessage(5, "这个反应堆 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： 脚本/反应堆/1058024.js 。【注意】修改完脚本后要重新登录或者切换频道才能生效！");
}
