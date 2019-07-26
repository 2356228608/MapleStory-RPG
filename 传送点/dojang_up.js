function enter(pi) {
    switch(pi.getMapId()){
		case 925070600:
		case 925071200:
		case 925072400:
		case 925073000:
		case 925073600:
		case 925073900:
			pi.openNpc(2091005,"武陵下一关");
		break;
	}
	
	if (!pi.getMonsterByID(9300216)) {
        pi.playerMessage("还有剩下的怪物。");
    } else {
		var map=pi.getMapId()+100;
        pi.dojo_getUp();
        pi.getMap().setReactorState();
		/*var target = pi.getMap(map);
		portal = target.getPortal(0);
		pi.getPlayer().changeMap(target, portal);
		pi.playerMessage("传送。");
		pi.openNpc(9300011,"武陵下一关");*/
		pi.dojoAgent_NextMap(true,true);
    }
}
