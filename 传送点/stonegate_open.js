/*
 Stage 2: Key door - Guild Quest
 
 @Author Lerk
 */

        function enter(pi) {
            if (pi.getMap().getReactorByName("stonegate").getState() == 1) {
                pi.warp(990000430, 0);
                return true;
            } else {
                pi.playerMessage("?板?ㄥ?抽??浜?缂╁?扮?炽??");
                return false;
            }
        }