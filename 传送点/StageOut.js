function enter(pi) {
	var mapId = pi.	getMapId();
	if(mapId>= 992001000 && mapId<=992050000){
		var level = (mapId-992000000)/1000;		
		var em = pi.getEventManager("副本_起源之塔");
		var prop = em.getProperty("stage"+level);
		if (prop != null && prop.equals("clear")) {
			pi.playerMessage(-1, "传送到起源之塔的第"+(level+1)+"层。");
		    pi.warp(mapId==992050000?992000000:mapId+1000, 0);
		}else{
			pi.playerMessage(-1, "传送阵目前还处于无法使用的状态。");
		}
	    }
	}else{
		pi.openNpc(9330189, 1);
	}
    return true;
}
