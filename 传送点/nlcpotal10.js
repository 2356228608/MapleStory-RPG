﻿/*
 浼?????703000000 - 2022?板?跺?? - 琚??村???? ?板?跺??
 */

        function enter(pi) {
            switch (pi.getMapId()) {
                case 600000000:
                    if (pi.getQuestStatus(56200) == 2) { //?板?跺??-甯??鸿??? - ?板?跺??-甯??轰腑蹇?
                        pi.warp(703000000, 0);
                    } else {
                        pi.topMsg("??????娉?杩??ワ?杩?濂藉?????????ョ???板?跺??????绉???绯?");
                        pi.playerMessage(-9, "??????娉?杩??ワ?杩?濂藉?????????ョ???板?跺??????绉???绯?");
                    }
                    break;
                case 703000001:
                    if (pi.getQuestStatus(56203) == 2) { //2022?板?跺?? - 琚???棰??? ?板?跺??
                        pi.warp(703000000, 0);
                    } else {
                        pi.topMsg("??????娉?杩??ワ?杩?濂藉?????????ョ???板?跺??????绉???绯?");
                        pi.playerMessage(-9, "??????娉?杩??ワ?杩?濂藉?????????ョ???板?跺??????绉???绯?");
                    }
                    break;
                default:
                    pi.topMsg("??????娉?杩??ワ?杩?濂藉?????????ョ???板?跺??????绉???绯?");
                    pi.playerMessage(-9, "??????娉?杩??ワ?杩?濂藉?????????ョ???板?跺??????绉???绯?");
                    break;
            }
        }