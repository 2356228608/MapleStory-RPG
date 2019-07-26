/*@author Jvlaple
 * Spawns Eak When 20 Clouds are Dropped.
 *2006000.js
 */

        function act() {
            rm.mapMessage(5, "?典?渡???嗡???????嚗?憟賢????鈭箏?箇?唬???");
            rm.spawnNpc(2013001);
            var em = rm.getEventManager("OrbisPQ");
            if (em != null) {
                rm.givePartyExp(6000);
                em.setProperty("pre", "1");
            }
        }