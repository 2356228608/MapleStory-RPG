function act() {
    var em = rm.getEventManager("Pirate");
    if (em != null) {
        rm.mapMessage(5, "?ュ?ｅ凡琚??抽??!");
        em.setProperty("stage4", parseInt(em.getProperty("stage4")) + 1);
        if (em.getProperty("stage4").equals("4")) { //all 5 done
            rm.mapMessage(6, "?????ュ?ｅ凡琚??抽??!");
        }
    }
}