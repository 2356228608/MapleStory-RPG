var status = 0;
var pet = null;
var theitems = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("好吧，下次见.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.askMenu("                     #e#r[#d宠物小屋#r]#b\r\n              #L3##r【#b随机神宠#r】#n#l#k\r\n       #L0#进化龙#l#L1#进化机器人#l #L2#治疗我的宠物#l\r\n\r\n#d   提示:如果随机宠物出现38错误，请联系管理员#b#l\r\n                     #e#r神宠展示\r\n#r————————————————————————\r\n#r#i5000137##k,#r#i5000103##k,#r#i5000038##k#r#i5000128##k,#r#i5000096##k,#r#i5000026##k,#r#i5000093##k,#r#i5000092##k,#r#i5000091##k,#r#i5000027##k,#r#i5000081##k,#r#i5000072##k,#r#i5000038##k,#r#i5000054##k,#r#i5000203##k,#r#i5000204##k,#r#i5000205##k,#r#i5000208##k,#r#i5000209##k,#r#i5000212##k,#r#i5000213##k,#r#i5000214##k,#r#i5000206##k,#r#i5000215##k,#r#i5000216##k,#r#i5000217##k,#r#i5000221##k,#r#i5000225##k,#r#i5000228##k,#r#i5000229##k,#r#i5000230##k,#r#i5000237##k,#r#i5000243##k,#r#i5000244##k,#r#i5000245##k,#r#i5000284##k,#r#i5000247##k,#r#i5000285##k,#r#i5000252##k,#r#i5000253##k,#r#i5000324##i5000433##i5000434##i5000435##i5000414##i5000424##i5000409##i5000408##i5000407##i5000406##i5000405##i5000402##i5000390##i5000389##i5000388##i5000391##i5001011##i5001010##i5001009##i5000308##i5000307##i5000306##i5000255##i5000382##i5000191##i5000261##i5000251##i5000250##i5000249##i5000258##i5000257##i5000256##i5000365##i5000366##i5000367##i5000287##i5000288##i5000289##i5000369##i5000370##i5000371##i5000331##i5000330##i5000332##i5000055##i5000416##i5000417##i5000415##k");
        } else if (status == 1) {
            if (selection == 0) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getSpawnPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000028 && currentpet.getPetItemId() <= 5000035 && currentpet.getLevel() >= 15) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.haveItem(5380000, 1)) {
                    cm.sendOk("你不符合要求。你需要 #i5380000##t5380000#, 以及任何一个 #d#i5000029##t5000029##k, #g#i5000030##t5000030##k, #r#i5000035##t5000035##k, #b#i5000032##t5000032##k, or #e#i5000033##t5000033##n 设置在15级或更高。请回来的时候你做的.");
                    cm.dispose();
                } else {
                    var id = pet.getPetItemId();
                    var name = pet.getName();
                    var level = pet.getLevel();
                    var closeness = pet.getCloseness();
                    var fullness = pet.getFullness();
                    var slot = pet.getInventoryPosition();
                    var flag = pet.getFlags();
                    var rand = 0;
                    var after = id;
                    while (after == id) {
                        rand = 1 + Math.floor(Math.random() * 10);
                        if (rand >= 1 && rand <= 3) {
                            after = 5000030;
                        } else if (rand >= 4 && rand <= 6) {
                            after = 5000032;
                        } else if (rand >= 7 && rand <= 9) {
                            after = 5000035;
                        } else if (rand == 10) {
                            after = 5000033;
                        }
                    }
                    if (name.equals(cm.getItemName(id))) {
                        name = cm.getItemName(after);
                    }
                    cm.getPlayer().unequipSpawnPet(pet, true, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("你的龙已经演变! 它曾经是一个#i" + id + "##t" + id + "#, a现在它是一个 #i" + after + "##t" + after + "#!");
                    cm.dispose();
                }
            } else if (selection == 1) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getSpawnPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() > 5000047 && currentpet.getPetItemId() < 5000054 && currentpet.getLevel() >= 15) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.haveItem(5380000, 1)) {
                    cm.sendOk("你不符合要求。你需要 #i5380000##t5380000#, 以及任何一个 #g#i5000048##t5000048##k, #r#i5000049##t5000049##k, #b#i5000050##t5000050##k, #d#i5000051##t5000051##k, #d#i5000052##t5000052##k, or #e#i5000053##t5000053##n 设置在15级或更高。请回来当你这样做的.");
                    cm.dispose();
                } else {
                    var id = pet.getPetItemId();
                    var name = pet.getName();
                    var level = pet.getLevel();
                    var closeness = pet.getCloseness();
                    var fullness = pet.getFullness();
                    var slot = pet.getInventoryPosition();
                    var flag = pet.getFlags();
                    var rand = 0;
                    var after = id;
                    while (after == id) {
                        rand = 1 + Math.floor(Math.random() * 9);
                        if (rand >= 1 && rand <= 2) {
                            after = 5000049;
                        } else if (rand >= 3 && rand <= 4) {
                            after = 5000050;
                        } else if (rand >= 5 && rand <= 6) {
                            after = 5000051;
                        } else if (rand >= 7 && rand <= 8) {
                            after = 5000052;
                        } else if (rand == 9) {
                            after = 5000053;
                        }
                    }
                    if (name.equals(cm.getItemName(id))) {
                        name = cm.getItemName(after);
                    }
                    cm.getPlayer().unequipSpawnPet(pet, true, false);
                    cm.gainItem(5380000, -1);
                    cm.removeSlot(5, slot, 1);
                    cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("你的机器人已经演变！它使用的是一个！ #i" + id + "##t" + id + "#, 现在它是一个 #i" + after + "##t" + after + "#!");
                    cm.dispose();
                }				
			  } else if (selection == 3) {
                var currentpet = null;
                for (var i = 0; i < 3; i++) {
                    currentpet = cm.getPlayer().getSpawnPet(i);
                    if (currentpet != null && pet == null) {
                        if (currentpet.getSummoned() && currentpet.getPetItemId() >= 5000047 && currentpet.getPetItemId() <= 5000054 && currentpet.getLevel() >= 18) {
                            pet = currentpet;
                            break;
                        }
                    }
                }
                if (pet == null || !cm.haveItem(5380000, 1) || !cm.haveItem(4000000, 200) || !cm.getMeso() >= 30000000) {
cm.sendOk("你不符合要求。#b你需要1个#i5380000##t5380000#，以及1个18级的#i5000048##t5000048#和200个梦想#v4000000#+3000万金币#k\r\nP:进化之石和#i5000047#和升级机器人的轻油可在商城购买\r\n               #e#r随机给你一个，请好好对待\r\n#r————————————————————————\r\n#r#i5000137##k,#r#i5000103##k,#r#i5000038##k#r#i5000128##k,#r#i5000096##k,#r#i5000026##k,#r#i5000093##k,#r#i5000092##k,#r#i5000091##k,#r#i5000027##k,#r#i5000081##k,#r#i5000072##k,#r#i5000038##k,#r#i5000054##k,#r#i5000203##k,#r#i5000204##k,#r#i5000205##k,#r#i5000208##k,#r#i5000209##k,#r#i5000212##k,#r#i5000213##k,#r#i5000214##k,#r#i5000206##k,#r#i5000215##k,#r#i5000216##k,#r#i5000217##k,#r#i5000221##k,#r#i5000225##k,#r#i5000228##k,#r#i5000229##k,#r#i5000230##k,#r#i5000237##k,#r#i5000243##k,#r#i5000244##k,#r#i5000245##k,#r#i5000284##k,#r#i5000247##k,#r#i5000285##k,#r#i5000252##k,#r#i5000253##k,#r#i5000324##i5000433##i5000434##i5000435##i5000414##i5000424##i5000409##i5000408##i5000407##i5000406##i5000405##i5000402##i5000390##i5000389##i5000388##i5000391##i5001011##i5001010##i5001009##i5000308##i5000307##i5000306##i5000255##i5000382##i5000191##i5000261##i5000251##i5000250##i5000249##i5000258##i5000257##i5000256##i5000365##i5000366##i5000367##i5000287##i5000288##i5000289##i5000369##i5000370##i5000371##i5000331##i5000330##i5000332##i5000055##i5000416##i5000417##i5000415##k");
                    cm.dispose();
                } else {
                    var id = pet.getPetItemId();
                    var name = pet.getName();
                    var level = pet.getLevel();
                    var closeness = pet.getCloseness();
                    var fullness = pet.getFullness();
                    var slot = pet.getInventoryPosition();
                    var flag = pet.getFlags();
                    var rand = 0;
                    var after = id;
                    while (after == id) {
                        rand = 1 + Math.floor(Math.random() * 177);
                        if (rand >= 1 && rand <= 2) {
                            after = 5000096;
                        } else if (rand >= 3 && rand <= 4) {
                            after = 5000026;
                        } else if (rand >= 5 && rand <= 6) {
                            after = 5000137;
						} else if (rand >= 7 && rand <= 8) {
                            after = 5000103;
						} else if (rand >= 9 && rand <= 10) {
                            after = 5000038;
						} else if (rand >= 11 && rand <= 12) {
                            after = 5000128;
						} else if (rand >= 13 && rand <= 14) {
                            after = 5000093;
						} else if (rand >= 15 && rand <= 16) {
                            after = 5000092;
						} else if (rand >= 17 && rand <= 18) {
                            after = 5000091;
						} else if (rand >= 19 && rand <= 20) {
                            after = 5000027;
						} else if (rand >= 21 && rand <= 22) {
                            after = 5000081;
						} else if (rand >= 23 && rand <= 24) {
                            after = 5000072;
						} else if (rand >= 25 && rand <= 26) {
                            after = 5000038;
						} else if (rand >= 27 && rand <= 28) {
                            after = 5000054;
						} else if (rand >= 29 && rand <= 30) {
                            after = 5000203;
						} else if (rand >= 31 && rand <= 32) {
                            after = 5000204;
						} else if (rand >= 33 && rand <= 34) {
                            after = 5000205;
						} else if (rand >= 35 && rand <= 36) {
                            after = 5000208;
						} else if (rand >= 37 && rand <= 38) {
                            after = 5000209;
						} else if (rand >= 39 && rand <= 40) {
                            after = 5000212;
						} else if (rand >= 41 && rand <= 42) {
                            after = 5000213;
						} else if (rand >= 43 && rand <= 44) {
                            after = 5000214;
						} else if (rand >= 45 && rand <= 46) {
                            after = 5000206;
						} else if (rand >= 47 && rand <= 48) {
                            after = 5000215;
						} else if (rand >= 49 && rand <= 50) {
                            after = 5000215;
						} else if (rand >= 51 && rand <= 52) {
                            after = 5000216;
						} else if (rand >= 53 && rand <= 54) {
                            after = 5000217;
						} else if (rand >= 55 && rand <= 56) {
                            after = 5000221;
						} else if (rand >= 57 && rand <= 58) {
                            after = 5000225;
						} else if (rand >= 59 && rand <= 60) {
                            after = 5000228;
						} else if (rand >= 61 && rand <= 62) {
                            after = 5000229;
						} else if (rand >= 63 && rand <= 64) {
                            after = 5000230;
						} else if (rand >= 65 && rand <= 66) {
                            after = 5000237;
						} else if (rand >= 67 && rand <= 68) {
                            after = 5000243;
						} else if (rand >= 69 && rand <= 70) {
                            after = 5000244;
						} else if (rand >= 71 && rand <= 72) {
                            after = 5000284;
						} else if (rand >= 73 && rand <= 74) {
                            after = 5000247;
						} else if (rand >= 75 && rand <= 76) {
                            after = 5000285;
						} else if (rand >= 77 && rand <= 78) {
                            after = 5000252;
						} else if (rand >= 79 && rand <= 80) {
                            after = 5000253;
						} else if (rand >= 81 && rand <= 82) {
                            after = 5000324;
							} else if (rand >= 83 && rand <= 84) {
                            after = 5000433;
							} else if (rand >= 85 && rand <= 86) {
                            after = 5000434;
							} else if (rand >= 87 && rand <= 88) {
                            after = 5000435;
							} else if (rand >= 89 && rand <= 90) {
                            after = 5000414;
							} else if (rand >= 91 && rand <= 92) {
                            after = 5000424;
							} else if (rand >= 93 && rand <= 94) {
                            after = 5000409;
							} else if (rand >= 95 && rand <= 96) {
                            after = 5000408;
							} else if (rand >= 97 && rand <= 98) {
                            after = 5000407;
							} else if (rand >= 99 && rand <= 100) {
                            after = 5000406;
							} else if (rand >= 101 && rand <= 102) {
                            after = 5000405;
							} else if (rand >= 103 && rand <= 104) {
                            after = 5000404;
							} else if (rand >= 105 && rand <= 106) {
                            after = 5000331;
							} else if (rand >= 107 && rand <= 108) {
                            after = 5000330;
							} else if (rand >= 109 && rand <= 110) {
                            after = 5000390;
							} else if (rand >= 111 && rand <= 112) {
                            after = 5000389;
							} else if (rand >= 113 && rand <= 114) {
                            after = 5000388;
							} else if (rand >= 115 && rand <= 116) {
                            after = 5000391;
							} else if (rand >= 117 && rand <= 118) {
                            after = 5001011;
							} else if (rand >= 119 && rand <= 120) {
                            after = 5001010;
							} else if (rand >= 121 && rand <= 122) {
                            after = 5001009;
							} else if (rand >= 123 && rand <= 124) {
                            after = 5000255;
							} else if (rand >= 125 && rand <= 126) {
                            after = 5000308;
							} else if (rand >= 127 && rand <= 128) {
                            after = 5000307;
							} else if (rand >= 129 && rand <= 130) {
                            after = 5000306;
							} else if (rand >= 131 && rand <= 132) {
                            after = 5000365;
							} else if (rand >= 133 && rand <= 134) {
                            after = 5000382;
							} else if (rand >= 135 && rand <= 136) {
                            after = 5000256;
							} else if (rand >= 137 && rand <= 138) {
                            after = 5000055;
							} else if (rand >= 139 && rand <= 140) {
                            after = 5000251;
							} else if (rand >= 141 && rand <= 142) {
                            after = 5000094;
							} else if (rand >= 143 && rand <= 144) {
                            after = 5000365;
							} else if (rand >= 145 && rand <= 146) {
                            after = 5000366;
							} else if (rand >= 147 && rand <= 148) {
                            after = 5000367;
							} else if (rand >= 149 && rand <= 150) {
                            after = 5000287;
							} else if (rand >= 151 && rand <= 152) {
                            after = 5000288;
							} else if (rand >= 153 && rand <= 154) {
                            after = 5000289;
							} else if (rand >= 155 && rand <= 156) {
                            after = 5000249;
							} else if (rand >= 157 && rand <= 158) {
                            after = 5000250;
							} else if (rand >= 159 && rand <= 160) {
                            after = 5000257;
							} else if (rand >= 161 && rand <= 162) {
                            after = 5000258;
							} else if (rand >= 163 && rand <= 164) {
                            after = 5000369;
							} else if (rand >= 165 && rand <= 166) {
                            after = 5000370;
							} else if (rand >= 167 && rand <= 168) {
                            after = 5000371;
							} else if (rand >= 169 && rand <= 170) {
                            after = 5000332;
							} else if (rand >= 171 && rand <= 172) {
                            after = 5000417;
							} else if (rand >= 173 && rand <= 174) {
                            after = 5000416;
							} else if (rand >= 175 && rand <= 176) {
                            after = 5000415;
						} else if (rand == 177) {
                            after = 5000245;

                        }
                    }
                    if (name.equals(cm.getItemName(id))) {
                        name = cm.getItemName(after);
                    }
                    cm.getPlayer().unequipSpawnPet(pet, true, false);
                    cm.gainItem(5380000, -1);
					cm.gainItem(4000000, -200);
					cm.gainMeso(-30000000);
                    cm.removeSlot(5, slot, 1);
					cm.gainPet(after, name, level, closeness, fullness, 45, flag);
                    cm.getPlayer().spawnPet(slot);
                    cm.sendOk("你的宠物已经演变！它使用的是一个！ #i" + id + "##t" + id + "#, 现在它是一个 #i" + after + "##t" + after + "#!");
					cm.worldSpouseMessage(0x01, "『宠物进化』" + " : " + "玩家 " + cm.getChar().getName() + " 在宠物店孵化出了新的生命!");
                    cm.dispose();
                }
            } else if (selection == 2) { //revive	
                var inv = cm.getInventory(5);
                var pets = cm.getPlayer().getPets(); //includes non-summon
                for (var i = 0; i <= inv.getSlotLimit(); i++) {
                    var it = inv.getItem(i);
                    if (it != null && it.getItemId() >= 5000000 && it.getItemId() < 5010000 && it.getExpiration() >= 0 &&  it.getExpiration() < cm.getCurrentTime()) {
                        theitems.push(it);
                    }
                }
                if (theitems.length <= 0) {
                    cm.sendOk("你有没有过期的宠物");
                    cm.dispose();
                } else {
                    var selStr = "请选择宠物复活。你需要生活的水使它复活.#b\r\n";
                    for (var i = 0; i < theitems.length; i++) {
                        selStr += "\r\n#L" + i + "##v" + theitems[i].getItemId() + "##i" + theitems[i].getItemId() + "##l";
                    }
                    cm.askMenu(selStr);
                }
            }
        } else if (status == 2) {
            if (theitems.length <= 0) {
                cm.sendOk("你有没有过期的宠物");
            } else if (!cm.haveItem(5180000, 1)||!cm.haveItem(5180001, 1)) {
                cm.sendOk("你会需要的e #v5180000##i5180000#.");
            } else {
                theitems[selection].setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
                cm.getPlayer().fakeRelog();
                cm.sendOk("全部完成。你的宠物的寿命已延长到45天从今天。");
			if(cm.haveItem(5180000, 1)){
				cm.gainItem(5180000, -1);
			}else{
				cm.gainItem(5180001, -1);
			}
            }
            cm.dispose();
        }
    }
}//添加作者: 706780763
