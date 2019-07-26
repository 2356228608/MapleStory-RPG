/*
 Papulatus Reactor: Performs the Papulatus commands
 */

        function act() {
            try {
				if(rm.getPlayer().getMapId()==220080001){
					var eim = rm.getEventInstance();
				var em = rm.getEventManager("Populatus");
				if (eim != null && em != null) {
					em.setProperty("state", "2");
					rm.mapMessage(5, "普通闹钟已被召唤!请在一定时间内击退!");
					rm.fieldEffect_PlayBGM("Bgm09/TimeAttack");
					rm.spawnMonster(9500180, -410, -400);
					rm.getMap(220080001).setReactorState();
				}
					
				}else{
					
					var eim = rm.getEventInstance();
				var em = rm.getEventManager("Populatusjj");
				if (eim != null && em != null) {
					em.setProperty("state", "2");
					rm.mapMessage(5, "进阶闹钟已被召唤!请在一定时间内击退!");
					rm.fieldEffect_PlayBGM("Bgm09/TimeAttack");
					rm.spawnMonster(8500001, -410, -400);
					rm.getMap(220080100).setReactorState();
				}
					
				}
            } catch (e) {
                rm.mapMessage(5, "Error: " + e);
            }
        }