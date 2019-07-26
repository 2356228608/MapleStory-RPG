/*function enter(pi) {
 pi.playPortalSE();
 pi.warp(340000010);
 return true;
 }*/

        function enter(pi) {
            try {
                var mapid = pi.getMapId();

                if (mapid == 340000010) {
                    if (pi.getPortal().getName().startsWith("center01_2")) {
                        pi.playerMessage(-1, "涓?澶?骞垮?衡??瑗夸晶?ュ??");
                        pi.warpS(pi.getMapId() + 1, 1);   //OK
                    } else if (pi.getPortal().getName().startsWith("west01_")) {
                        pi.playerMessage(-1, "涓?澶?骞垮?衡??涓诲?ュ??");
                        pi.warpS(pi.getMapId() + 2, 5);    //OK
                    } else if (pi.getPortal().getName().startsWith("east01_1")) {
                        pi.playerMessage(-1, "涓?澶?骞垮?衡??涓?渚у?ュ??");
                        pi.warpS(pi.getMapId() + 3, 4);   //OK
                    } else if (pi.getPortal().getName().startsWith("west00_1")) {
                        pi.playerMessage(-1, "涓?澶?骞垮?衡??瑗胯竟澶ч??");
                        pi.warpS(pi.getMapId() + 4, 6);  //OK
                    } else if (pi.getPortal().getName().endsWith("east00_0")) {
                        pi.playerMessage(-1, "涓?澶?骞垮?衡??涓?杈瑰ぇ??");
                        pi.warpS(pi.getMapId() + 5, 4);  //OK 
                    }

                } else if (mapid == 340000012) {
                    pi.playerMessage(-1, "涓诲?ュ??");//OK
                    if (pi.getPortal().getName().startsWith("north00_")) {
                        pi.playerMessage(-1, "涓诲?ュ?ｂ??涓?澶?骞垮??");
                        pi.warpS(340000010, 20);
                    }
                } else if (mapid == 340000011) {
                    pi.playerMessage(-1, "瑗夸晶?ュ??");//OK
                    if (pi.getPortal().getName().startsWith("north01_")) {
                        pi.playerMessage(-1, "瑗夸晶?ュ?ｂ??涓?澶?骞垮??");
                        pi.warpS(340000010, 30);
                    }
                } else if (mapid == 340000013) {
                    pi.playerMessage(-1, "涓?渚у?ュ??");
                    if (pi.getPortal().getName().startsWith("north01_")) {
                        pi.playerMessage(-1, "涓?渚у?ュ?ｂ??涓?澶?骞垮??");
                        pi.warpS(340000010, 35);
                    }
                } else if (mapid == 340000014) {
                    pi.playerMessage(-1, "瑗胯竟澶ч??"); //ok
                    if (pi.getPortal().getName().startsWith("east00_")) {
                        pi.playerMessage(-1, "瑗胯竟澶ч????涓?澶?骞垮??");
                        pi.warpS(340000010, 23);
                    }
                } else if (mapid == 340000015) {
                    pi.playerMessage(-1, "涓?杈瑰ぇ??");
                    if (pi.getPortal().getName().startsWith("west00_2")) {
                        pi.playerMessage(-1, "涓?杈瑰ぇ????涓?澶?骞垮??");
                        pi.warpS(340000010, 14);
                    } else if (pi.getPortal().getName().endsWith("north00_1")) {//???ユ?? 13
                        pi.playerMessage(-1, "涓?杈瑰ぇ????????绔????哄?板??");
                        pi.warpS(340000016, 11);
                    }
                } else if (mapid == 340000016) {
                    pi.playerMessage(-1, "????绔????哄?板??");
                    if (pi.getPortal().getName().startsWith("east00_3")) {
                        pi.playerMessage(-1, "????绔????哄?板?锯??涓?杈瑰ぇ??");
                        pi.warpS(340000015, 11);
                    }

                } else if (mapid == 340000017) {
                    pi.playerMessage(-1, "????绔?????");
                }
                pi.playerMessage(-1, "Portal Name : " + pi.getPortal().getName() + " ID : " + pi.getPortal().getId());

            } catch (e) {
                pi.getPlayer().dropMessage(5, "Portal Name : " + pi.getPortal().getName() + " ID : " + pi.getPortal().getId() + "Error: " + e);
            }
        }