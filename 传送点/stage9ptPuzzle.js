var startPortal = 41;
var answers = new Array();

function enter(pi) {
	var em = pi.getEventManager("Map_TowerOfOz");
	var curLevel = parseInt(em.getProperty("stage9_level"));	// 从0开始计数，共8层
	for(var i=0;i<8;i++){
		answers.push(startPortal + i*4 + parseInt(em.getProperty("stage9_puzzle_"+i)))
	}
	var curPortal = pi.mapMessage(pi.getPortal().getId());
	// 失败
	if (answers.indexOf(curPortal) < 0) {
		var fail = parseInt(em.getProperty("stage9_fail"))+1;
		em.setProperty("stage9_fail", fail);
		pi.warp(992009000, startPortal);
		pi.addPopupSay(2540000, 5000, "第"+fail+"次错误。虽然这全靠运气，但已经错了一次，所以请担心不要再错。");
	}else if(curLevel<8 && (curPortal == startPortal + curLevel*4 + answers[curLevel])){ // 成功解锁新一层
		curLevel++;
		em.setProperty("stage9_level", curLevel);
		pi.warp(992009000, startPortal + curLevel*4);
		var pos = pi.getPortal().getPosition();
		pi.spawnNpcForPlayer(10310, pos.getX(), pos.getY());
		// 通关
		if(curLevel==8){
			em.setProperty("stage9", "clear");
			pi.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/clear");
		}
	}else{	// 已经解锁过
		var next = Math.ceil((curPortal+1-startPortal)/4);
		pi.warp(992009000, startPortal + next*4);
	}
}

