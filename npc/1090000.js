/*
 * 神炮王剧情 - 23
 * 地图：诺特勒斯 - 寝室 (912060500)
 * @author 狐狸糊涂
 */
var status = 0;
var requirements = false;
var text;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (((status == 0 || status == 1 || status == 9) && mode == 0) || ((status == 8 || status == 12 || status == 16 || status == 18 || status == 21) && mode == 1)) {
        cm.dispose();
        return;
    } else if (status == 2 && mode == 0 && requirements) {
        cm.sendNext("I see... Well, selecting a new job is a very important decision to make. If you are ready, then let me know!");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    
    if (cm.getJob() == 0 && cm.getSubcategory() == 2) {
        if (status == 0) {
            cm.sendNext("见到你很高兴，#b#h0##k。听说你帮助司徒诺回到了这里。看你好像受了很重的伤，这么快就好了吗？身体真够结实的……现在我理解司徒诺为什么对你那么感兴趣了。我叫凯琳，是海盗船诺特勒斯号的船长，同时也是海盗的转职教官。");
        } else if (status == 1) {
            cm.sendNextPrev("司徒诺想让你成为#b火炮手#k，你应该已经听说了吧？我也非常欢迎你这样的人才加入我们海盗。但是我担心你愿不愿意成为海盗。我得先给你讲讲海盗的故事。");
        } else if (status == 2) {
            cm.sendNextPrev("为了对很久以前威胁整个冒险岛世界的黑魔法师进行调查，我组建了海盗团。诺特勒斯号的海盗们现在正在冒险岛世界的各个地方调查黑魔法师的痕迹。");
        } else if (status == 3) {
            cm.sendNextPrev("如果你能成为海盗，就必须帮助我们调查黑魔法师。当然，这不是义务，只是我的建议。我是海盗们的转职教官，不是海盗们的主人。因此不是命令，只是建议。");
        } else if (status == 4) {
            cm.sendNextPrev("你也是想在冒险岛冒险的人，相信你一定愿意帮助我们。不是为了奖励，而是出于善意……呵呵，序论好像太长了。");
        } else if (status == 5) {
            cm.askAcceptDecline("我好像扯得太远了……你现在就决定吧。你想成为海盗吗？如果你能成为火炮手，我会很高兴的。");
        } else if (status == 6) {
//            cm.forceCompleteQuest(2570);
//            cm.forceCompleteQuest(29900);
//            cm.expandInventory(1, 4);
//            cm.expandInventory(2, 4);
//            cm.expandInventory(3, 4);
//            cm.expandInventory(4, 4);
            cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
//            cm.changeJob(501);
            cm.sendNext("好了，现在你也是海盗中的一员了。现在你有了很多海盗技能，打开技能窗看看吧。我给了你一些SP，你可以用它提升技能。等级提高之后，你可以使用更多的技能。希望你努力修炼。");
        } else if (status == 7) {
            cm.sendNextPrev("光是技能还不行。请你打开属性窗，按照海盗的需要对自己的属性进行分配。火炮手必须拿着沉重的火炮，因此必须以力量为中心。不知道的话，可以使用#b自动分配#k。");
        } else if (status == 8) {
            cm.sendNextPrev("此外我再送你一件礼物。我帮你增加了其他栏的空格数。如果是需要的东西，可以放进背包带在身上。");
        } else if (status == 9) {
            cm.sendNextPrev("啊，还有一件事不能忘记。你成为了海盗，在战斗的时候必须注意管理体力。死亡的话，之前技能的经验值会受到损失。好不容易获得的经验值，如果损失的话，岂不是太可惜了。");
        } else if (status == 10) {
            cm.sendNextPrev("好了！我能教你的就是这些。我给了你几件适合你使用的武器，你去一边旅行，一边锻炼自己吧。如果遇到了黑魔法师的部下，一定要除掉他们！明白了吗？");
        } else if (status == 11) {
//            cm.gainItem(1532000, 1);
//            cm.gainItem(1002610, 1);
//            cm.gainItem(1052095, 1);
            cm.dispose();
        }
    }

//    if (status == 0) {
//        if (cm.getMapId() == 912010200) {
//            status = 100;
//            cm.sendNext("Not bad at all! Let's discuess this outside!");
//        } else {
//            var tosent = "Have you got something to say? #b\r\n#L0#I would like to learn more about pirates...#l";
//            if (cm.getQuestStatus(6370) == 1 || cm.getQuestStatus(6330) == 1) {
//                tosent += "\r\n#L1#I am ready to battle against you.#l";
//            }
//            cm.askMenu(tosent);
//        }
//    } else if (status == 1) {
//        if (cm.getJob() == 0 && cm.getSubcategory() == 2) {
//            cm.sendNext("见到你很高兴，#h0#。听说你帮助司徒诺回到了这里。看你好像受了很重的伤，这么快就好了吗？身体真够结实的……现在我理解司徒诺为什么对你那么感兴趣了。我叫凯琳，是海盗船诺特勒斯号的船长，同时也是海盗的转职教官。");
//            cm.sendNextPrev("司徒诺想让你成为#b火炮手#k，你应该已经听说了吧？我也非常欢迎你这样的人才加入我们海盗。但是我担心你愿不愿意成为海盗。我得先给你讲讲海盗的故事。");
//            cm.sendNextPrev("为了对很久以前威胁整个冒险岛世界的黑魔法师进行调查，我组建了海盗团。诺特勒斯号的海盗们现在正在冒险岛世界的各个地方调查黑魔法师的痕迹。");
//            cm.sendNextPrev("如果你能成为海盗，就必须帮助我们调查黑魔法师。当然，这不是义务，只是我的建议。我是海盗们的转职教官，不是海盗们的主人。因此不是命令，只是建议。");
//            cm.sendNextPrev("你也是想在冒险岛冒险的人，相信你一定愿意帮助我们。不是为了奖励，而是出于善意……呵呵，序论好像太长了。");
//            cm.askAcceptDecline("我好像扯得太远了……你现在就决定吧。你想成为海盗吗？如果你能成为火炮手，我会很高兴的。");
//            
//        } else if (cm.getJob() == 510 || cm.getJob() == 520 || cm.getJob() == 530) {
//            if (cm.getPlayerStat("LVL") < 70) {
//                if (cm.getJob() == 510) {
//                    cm.sendNext("Ohhh, it's you. How's like as a Brawler? You look much more advanced and polished than the last time I saw you. Hopefully great things lay for you in the future.");
//                } else if (cm.getJob() == 530) {
//                    cm.sendNext("Ohhh, it's you. How's like as a Cannoneer? You look much more advanced and polished than the last time I saw you. Hopefully great things lay for you in the future.");
//                } else {
//                    cm.sendNext("Ohhh, it's you. How's like as a Gunslinger? You look much more advanced and polished than the last time I saw you. Hopefully great things lay for you in the future.");
//                }
//            } else {
//                cm.sendNext("Go see Pedro in El Nath. He will help you become even stronger.");
//            }
//            cm.dispose();
//        } else if (cm.getJob() == 500) {
//            if (cm.getPlayerStat("LVL") < 30) {
//                status = 9;
//                cm.askMenu("Do you have something that piques you about being a Pirate...?#b\r\n#L0#What are the basic characteristics of a Pirate?#l\r\n#L1#What are the weapons a Pirate can use?#l\r\n#L2#What are the armors a Pirate can use?#l\r\n#L3#What are the Pirate skills?");
//            } else if (cm.getPlayerStat("LVL") >= 30) {
//                status = 22;
//                cm.askMenu("Do you want to know more about Brawlers and Gunslingers? It'd be good to know in advance, so you'll have a clear picture of what you want to become for your job advancement...\r\n#b#L0# Please explain to me what being a Brawler is all about.#k#l\r\n#b#L1# Please explain to me what being a Gunslinger is all about.#k#l");
//            }
//        } else if (cm.getJob() == 501) {
//            if (cm.getPlayerStat("LVL") < 30) {
//                status = 9;
//                cm.askMenu("Do you have something that piques you about being a Pirate...?#b\r\n#L0#What are the basic characteristics of a Pirate?#l\r\n#L1#What are the weapons a Pirate can use?#l\r\n#L2#What are the armors a Pirate can use?#l\r\n#L3#What are the Pirate skills?");
//            } else if (cm.getPlayerStat("LVL") >= 30) {
//                status = 44;
//                cm.askMenu("Do you want to know more about Cannoneers? It'd be good to know in advance, so you'll have a clear picture of what you want to become for your job advancement...\r\n#b#L0# Please explain to me what being a Cannoneer is all about.#k#l");
//            }
//        } else if (cm.getJob() == 0 || cm.getJob() == 1) {
//            cm.sendNext("Do you wish to become a Pirate? You'll need to meet our set of standards if you are to become one of us. I need you to be #bat least Level 10, with DEX at 20 or above.#k Let's see...");
//        } else {
//            if (selection == 0) {
//                cm.sendNext("Don't you want to feel the freedom eminating from the sea? Don't you want the power, the fame, and everything else that comes with it? Then you should join us and enjoy it yourself.");
//                cm.dispose();
//            } else if (selection == 1 && (cm.getQuestStatus(6370) == 1 || cm.getQuestStatus(6330) == 1)) {
//                status = 99;
//                cm.sendNext("You'r ready, right? Now try to withstand my attacks for 2 minutes. I won't go easy on you. Good luck, because you'll need it.");
//            }
//        }
//    } else if (status == 2) {
//        if (cm.getPlayerStat("LVL") >= 10) {
//            requirements = true;
//            cm.askYesNo("You seem more than qualified! Great, are you ready to become one of us?");
//        } else {
//            cm.sendNext("Hmm... I don't think you have trained enough, yet. See me when you get stronger.");
//        }
//    } else if (status == 3) {
//        if (requirements)
//            cm.sendNext("Welcome to the band of Pirates! You may have to spend some time as a wanderer at first, but better days will certainly dawn upon you, sooner than you think! In the mean time, let me share some of my abilities with you.");
//        else
//            cm.dispose();
//    } else if (status == 4) {
//        if (cm.getJob() == 1 || (cm.getJob() == 0 && cm.getPlayer().getSubcategory() > 1)) {
//            cm.changeJob(501);
//            cm.resetStats(4, 20, 4, 4);
//            cm.gainItem(1532000, 1);
//            cm.gainSp(3);
//        } else if (cm.getJob() == 0) {
//            cm.changeJob(500);
//            cm.gainSp(3);
//            cm.resetStats(4, 20, 4, 4);
//            cm.gainItem(1482014, 1);
//            cm.gainItem(1492014, 1);
//            cm.gainItem(2330006, 600);
//            cm.gainItem(2330006, 600);
//            cm.gainItem(2330006, 600);
//        }
//        cm.sendNext("I have just increased the number of slots for your equipment and etc. inventory. You have also gotten a bit stronger. Can you feel it? Now that you can officially call yourself a Pirate, join us in our quest for adventure and freedom!");
//    } else if (status == 5) {
//        cm.sendNext("I have just given you a little bit of #bSP#k. Look at the #bSkill menu#k to find some skills, and use your SP to learn the skills. Beware that not all skills can be enhanced from the get go. There are some skills that you can only acquire after mastering basic skills.");
//    } else if (status == 6) {
//        cm.sendNext("One more thing. Now that you have graduated from the ranks of a Beginner into a Pirate, you'll have to make sure not to die prematurely. If you do lose all your health, you'll lose valuable EXP that you have earned. Wouldn't it stink to lose hard-earned EXP by dying?");
//    } else if (status == 7) {
//        cm.sendNext("This is all I can teach you. I have also given you some useful weapons to work with, so it's up to you now to train with them. The world is yours for the taking, so use your resources wisely, and when you feel like you've reached the top, let me know. I'll have something better for you in store...");
//    } else if (status == 8) {
//        cm.sendNext("Oh, and... if you have more questions about being a Pirate, or if you need some pointers... you can always ask me. I'll see you around...");
//    } else if (status == 10) {
//        if (selection == 0) {
//            status = 11;
//            text = "Here's what you need to know about being a Pirate. You can think of Pirate as one big road that offers multiple paths. If you want to dominate monsters with brute force, focus on improving STR. If you want to outsmart the monsters with long-range attacks, I suggest you focus on improving DEX.";
//        } else if (selection == 1) {
//            status = 13;
//            text = "Unlike other jobs, being a Pirate will allow you to fight the monsters with bare fist. If you want to maximize your attacking abilities, however, I suggest you use Knuckler or Gun.";
//        } else if (selection == 2) {
//            status = 17;
//            text = "Pirates are usually fleet-flooted, utilizing quickness to attack dazed opponents. Yes, this also means the armors have to be light, as well. This is the reason why most of the clothes for the Pirates are made out of fabric.";
//        } else {
//            status = 19;
//            text = "For Pirates, there are skills that support the accuracy and avoidability needed to be effective. Some of the attacking skills involve either only bare fists or Guns, so you may want to choose one of the two attacking methods and stick to it, when leveling up your skills.";
//        }
//        cm.sendNext(text);
//    } else if (status == 11) {
//        cm.sendNext(text);
//    } else if (status == 12) {
//        cm.sendNext("It's a job that changes based on what you do with it. You should think way ahead and determine what you want to become later on, so you can start focusing on which of the two stats you want to improve up on, STR or DEX. If you want to become a Brawler, boost STR. Gunslinger, boost DEX.");
//    } else if (status == 13) {
//        cm.sendNext(text);
//    } else if (status == 14) {
//        cm.sendNext("If you want to engage in melee attacks and stun the monsters, use Knuckler. It looks similar to the Claws that the thieves use, but it is made with a much sturdier material to simulatenously protect and strengthen the fist.");
//    } else if (status == 15) {
//        cm.sendNext("If you want to take on opponents long-range, use the Gun. Of course, the Gun itself won't do it for you. You'll need bullets. You can get those at any convenient store nearby.");
//    } else if (status == 16) {
//        cm.sendNext("Your attacking style will vary greatly based on the weapon you choose, so think carefully before choosing one. Of course, the weapon you use may also determine what you'll become down the road.");
//    } else if (status == 17) {
//        cm.sendNext(text);
//    } else if (status == 18) {
//        cm.sendNext("It may be a thin fabric, but you better not underestimate its capabilities. It's as durable and protective as the best leather!");
//    } else if (status == 19) {
//        cm.sendNext(text);
//    } else if (status == 20) {
//        cm.sendNext("If you want to use Guns, then I suggest you use the skill \r\n#bDouble Shot#k. Double Shot allows you to fire 2 bullets at once, which will enable you to attack monsters from long range.");
//    } else if (status == 21) {
//        cm.sendNext("If you are using your bare fist or Knucklers, then concentrate on #bSommersault Kick#k and/or #bFlash Fist#k. Alternate these two skills to maximize your attacking capabilities. You may also use these skills while carrying a Gun, but it's simply not as effective as using Knucklers.");
//    } else if (status == 23) {
//        if (selection == 0) {
//            status = 24;
//            text = "I'll explain to you what being a Brawler is about. Brawler are courageous pirates that battles enemies with bare fists and knucklers. Since Brawlers engage mostly in melee battles, it's best for you to use various attacking skills to stun the monsters first before proceeding with more powerful attacks. Use #q5101002##k to stun enemies behind you, and #q5101003##k to stun enemies in front of you.";
//        } else {
//            status = 26;
//            text = "I'll explain to you what being a Gunslinger is all about. Gunslingers are pirates that can attack enemies from long range with high accuracy. Use #b#q5201001##k or #b#q5201002##k to attack multiple monsters at once.";
//        }
//        cm.sendNext(text);
//    } else if (status == 24) {
//        cm.sendNext(text);
//    } else if (status == 25) {
//        cm.sendNext("One Brawler skill is called #b#q5101007##k. This skill is useful when you use it to leave the area without being detected by the monsters. Basically, it's you disguised as an Oak Barrel, and walking away from danger. Sometimes, a quick-thinking monster may catch you, but the higher your skill level gets, the less possibility of you getting caught red-handed and having to fight your way out.");
//    } else if (status == 26) {
//        cm.sendNext("Next, we'll talk about #b#q5101005##k. It's a skill that allows you to regain MP at the expense of a bit of HP. Other than the Warriors, Brawlers have the highest HP of all, so losing a bit of HP doesn't affect them as much. It's especially useful when you're in the middle of combat, and you've run out of MP potions. Of course, you'll need to be aware of your HP level and the risks you'll be taking by using the skill.");
//        status = 34;
//    } else if (status == 27) {
//        cm.sendNext("One Gunslinger skill is called #b#q5201006##k. This skill uses the recoil of the gun to let you jump backwards and attack monsters from behind. This skill is especially effective when you are trapped in the middle of monsters and need to escape. Just make sure you have a monster behind you before using this, okay?");
//    } else if (status == 28) {
//        cm.sendNext("Next, we'll talk about #b#q5201005##k. This skill allows you to jump without being affected by Maple's law of gravity. This will allow you to stay afloat longer, and land on the ground later than regular jumps. If you use #b#q5201005##k from a high place, don't you think you'll be able to attack monsters in midair?");
//        status = 39;
//    } else if (status == 35) {
//        cm.sendNext("Okay, as promised, you will now become a #bBrawler#k.");
//    } else if (status == 36) {
//        if (cm.getJob() == 500) {
//            cm.changeJob(510);
//        }
//        cm.sendNext("Okay, from here on out, you are a #bBrawler#k. Brawlers rule the world with the power of their bare fists... which means they need to train their body more than others. If you have any trouble training, I'll be more than happy to help.");
//    } else if (status == 37) {
//        cm.sendNext("I have just given you a skill book that entails Brawler skills, you'll find it very helpful. You have also gained additional slots for Use items, a full row in fact. I also boosted your MaxHP and MaxMP. Check it out for yourself.");
//    } else if (status == 38) {
//        cm.sendNext("I have given you a little bit of #bSP#k, so I suggest you open the #bskill menu#k right now. You'll be able to enhance your newly-acquired 2nd Job skills. Beware that not all skills can be enhanced from the get go. There are some skills that you can only acquire after mastering basic skills.");
//    } else if (status == 39) {
//        cm.sendNext("Brawlers need to be a powerful force, but that doesn't mean they have the right to bully the weak. True Brawlers use their immense power in positive ways, which is much harder than just training to gain strength. I hope you follow this creed as you leave your mark in this world as a Brawler. I will see you when you have accomplished everything you can as a Brawler. I'll be waiting for you here.");
//        cm.safeDispose();
//    } else if (status == 40) {
//        cm.sendNext("Okay, as promised, you will now become a #bGunslinger#k.");
//    } else if (status == 41) {
//        if (cm.getJob() == 500) {
//            cm.changeJob(520);
//        }
//        cm.sendNext("Okay, from here on out, you are a #bGunslinger#k."); // Not complete
//    } else if (status == 42) {
//        cm.sendNext("I have just given you a skill book that entails Gunslinger skills, you'll find it very helpful. You have also gained additional slots for Use items, a full row in fact. I also boosted your MaxHP and MaxMP. Check it out for yourself.");
//    } else if (status == 43) {
//        cm.sendNext("I have given you a little bit of #bSP#k, so I suggest you open the #bskill menu#k right now. You'll be able to enhance your newly-acquired 2nd Job skills. Beware that not all skills can be enhanced from the get go. There are some skills that you can only acquire after mastering basic skills.");
//    } else if (status == 44) {
//        cm.sendNext("I'll be waiting for you here."); // Not complete
//        cm.safeDispose();
//    } else if (status == 45) {
//        cm.sendNext("Okay, as promised, you will now become a #bCannoneer#k.");
//    } else if (status == 46) {
//        if (cm.getJob() == 501) {
//            cm.changeJob(530);
//        }
//        cm.sendNext("Okay, from here on out, you are a #bCannoneer#k."); // Not complete
//    } else if (status == 47) {
//        cm.sendNext("I have just given you a skill book that entails Cannoneer skills, you'll find it very helpful. You have also gained additional slots for Use items, a full row in fact. I also boosted your MaxHP and MaxMP. Check it out for yourself.");
//    } else if (status == 48) {
//        cm.sendNext("I have given you a little bit of #bSP#k, so I suggest you open the #bskill menu#k right now. You'll be able to enhance your newly-acquired 2nd Job skills. Beware that not all skills can be enhanced from the get go. There are some skills that you can only acquire after mastering basic skills.");
//    } else if (status == 49) {
//        cm.sendNext("I'll be waiting for you here."); // Not complete
//        cm.safeDispose();
//    } else if (status == 100) {
//        if (cm.getQuestStatus(6370) == 1) { // Captain
//            var dd = cm.getEventManager("KyrinTrainingGroundC");
//            if (dd != null) {
//                dd.startInstance(cm.getPlayer());
//            } else {
//                cm.sendOk("An unknown error occured.");
//            }
//        } else if (cm.getQuestStatus(6330) == 1) { // Viper
//            var dd = cm.getEventManager("KyrinTrainingGroundV");
//            if (dd != null) {
//                dd.startInstance(cm.getPlayer());
//            } else {
//                cm.sendOk("An unknown error occured.");
//            }
//        }
//        cm.dispose();
//    } else if (status == 101) {
//        if (cm.getQuestStatus(6370) == 1) { // Captain
//            cm.teachSkill(5221006, 0, 10);
////	    cm.forceCompleteQuest(6371);
//            cm.forceCompleteQuest(6370);
//        } else if (cm.getQuestStatus(6330) == 1) { // Viper
//            cm.teachSkill(5121003, 0, 10);
////	    cm.forceCompleteQuest(6331);
//            cm.forceCompleteQuest(6330);
//        }
//        cm.warp(120000101, 0);
//        cm.dispose();
//    }
}