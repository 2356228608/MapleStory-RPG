function enter(pi) {
    if (pi.getMapId() == 240060100) {
        var em = pi.getEventManager("HorntailBattle");
        if (em != null) {
            var prop = em.getProperty("preheadCheck");
            if (prop != null && prop.equals("2")) {
                pi.mapMessage(6, "娲??ｆ繁澶???宸ㄥぇ?????戒?姝ｅ?ㄩ??杩?锛?")
                em.setProperty("preheadCheck", "3");
            }
        }
    } else {
        var em = pi.getEventManager("ChaosHorntail");
        if (em != null) {
            var prop = em.getProperty("preheadCheck");
            if (prop != null && prop.equals("2")) {
                pi.mapMessage(6, "娲??ｆ繁澶???宸ㄥぇ?????戒?姝ｅ?ㄩ??杩?锛?")
                em.setProperty("preheadCheck", "3");
            }
        }

    }
}