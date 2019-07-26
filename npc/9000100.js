var status = 0;

	
var music = Array(
		Array("Bgm00/SleepyWood", "#b林中之城#r"), 
		Array("Bgm00/FloralLife", "#b射手村#r"), 
		Array("Bgm00/GoPicnic", "#b森林中的小屋#r"), 
		Array("Bgm00/Nightmare", "#b#r"), 
		Array("Bgm00/RestNPeace", "#b#r"),
        Array("Bgm01/AncientMove", "#b#r"), 
		Array("Bgm01/MoonlightShadow", "#b#r"), 
		Array("Bgm01/WhereTheBarlogFrom", "#b#r"), 
		Array("Bgm01/CavaBien", "#b#r"), 
		Array("Bgm01/HighlandStar", "#b#r"), 
		Array("Bgm01/BadGuys", "#b#r"),
        Array("Bgm02/MissingYou", "#b#r"), 
		Array("Bgm02/WhenTheMorningComes", "#b#r"), 
		Array("Bgm02/EvilEyes", "#b#r"),
		Array("Bgm02/JungleBook", "#b#r"), 
		Array("Bgm02/AboveTheTreetops", "#b#r"),
        Array("Bgm03/Subway", "#b#r"), 
		Array("Bgm03/Elfwood", "#b#r"), 
		Array("Bgm03/BlueSky", "#b#r"), 
		Array("Bgm03/Beachway", "#b#r"), 
		Array("Bgm03/SnowyVillage", "#b#r"),
        Array("Bgm04/PlayWithMe", "#b#r"), 
		Array("Bgm04/WhiteChristmas", "#b#r"), 
		Array("Bgm04/UponTheSky", "#b#r"), 
		Array("Bgm04/ArabPirate", "#b#r"), 
		Array("Bgm04/Shinin'Harbor", "#b#r"), 
		Array("Bgm04/WarmRegard", "#b#r"),
        Array("Bgm05/WolfWood", "#b#r"), 
		Array("Bgm05/DownToTheCave", "#b#r"), 
		Array("Bgm05/AbandonedMine", "#b#r"), 
		Array("Bgm05/MineQuest", "#b#r"), 
		Array("Bgm05/HellGate", "#b#r"),
        Array("Bgm06/FinalFight", "#b#r"), 
		Array("Bgm06/WelcomeToTheHell", "#b#r"), 
		Array("Bgm06/ComeWithMe", "#b#r"), 
		Array("Bgm06/FlyingInABlueDream", "#b#r"), 
		Array("Bgm06/FantasticThinking", "#b#r"),
        Array("Bgm07/WaltzForWork", "#b#r"), 
		Array("Bgm07/WhereverYouAre", "#b闹钟王#r"), 
		Array("Bgm07/FunnyTimeMaker", "#b#r"), 
		Array("Bgm07/HighEnough", "#b#r"), 
		Array("Bgm07/Fantasia", "#b#r"),
        Array("Bgm08/LetsMarch", "#b#r"), 
		Array("Bgm08/ForTheGlory", "#b#r"), 
		Array("Bgm08/FindingForest", "#b#r"), 
		Array("Bgm08/LetsHuntAliens", "#b#r"), 
		Array("Bgm08/PlotOfPixie", "#b#r"),
        Array("Bgm09/DarkShadow", "#b#r"), 
		Array("Bgm09/TheyMenacingYou", "#b#r"), 
		Array("Bgm09/FairyTale", "#b#r"), 
		Array("Bgm09/FairyTalediffvers", "#b#r"), 
		Array("Bgm09/TimeAttack", "#b#r"),
        Array("Bgm10/Timeless", "#b#r"), 
		Array("Bgm10/TimelessB", "#b#r"), 
		Array("Bgm10/BizarreTales", "#b#r"), 
		Array("Bgm10/TheWayGrotesque", "#b#r"), 
		Array("Bgm10/Eregos", "#b#r"),
        Array("Bgm11/BlueWorld", "#b#r"), 
		Array("Bgm11/Aquarium", "#b#r"), 
		Array("Bgm11/ShiningSea", "#b#r"), 
		Array("Bgm11/DownTown", "#b#r"), 
		Array("Bgm11/DarkMountain", "#b#r"),
        Array("Bgm12/AquaCave", "#b#r"), 
		Array("Bgm12/DeepSee", "#b#r"), 
		Array("Bgm12/WaterWay", "#b#r"), 
		Array("Bgm12/AcientRemain", "#b#r"), 
		Array("Bgm12/RuinCastle", "#b#r"), 
		Array("Bgm12/Dispute", "#b#r"),
        Array("Bgm13/CokeTown", "#b#r"), 
		Array("Bgm13/Leafre", "#b#r"), 
		Array("Bgm13/Minar'sDream", "#b#r"), 
		Array("Bgm13/AcientForest", "#b#r"), 
		Array("Bgm13/TowerOfGoddess", "#b#r"),
        Array("Bgm14/DragonLoad", "#b#r"), 
		Array("Bgm14/HonTale", "#b#r"), 
		Array("Bgm14/CaveOfHontale", "#b#r"), 
		Array("Bgm14/DragonNest", "#b#r"), 
		Array("Bgm14/Ariant", "#b#r"), 
		Array("Bgm14/HotDesert", "#b#r"),
        Array("Bgm15/MureungHill", "#b#r"), 
		Array("Bgm15/MureungForest", "#b#r"), 
		Array("Bgm15/WhiteHerb", "#b#r"), 
		Array("Bgm15/Pirate", "#b#r"), 
		Array("Bgm15/SunsetDesert", "#b#r"),
        Array("BgmEvent/FunnyRabbit", "#b#r"), 
		Array("BgmEvent/FunnyRabbitFaster", "#b#r"),
        Array("BgmGL/amoria", "#b#r"), 
		Array("BgmGL/chapel", "#b#r"), 
		Array("BgmGL/cathedral", "#b#r"), 
		Array("BgmGL/Amorianchallenge", "#b#r"),
        Array("BgmJp/Feeling", "#b#r"), 
		Array("BgmJp/BizarreForest", "#b#r"), 
		Array("BgmJp/Hana", "#b#r"), 
		Array("BgmJp/Yume", "#b#r"), 
		Array("BgmJp/Bathroom", "#b#r"), 
		Array("BgmJp/BattleField", "#b#r"), 
		Array("BgmJp/FirstStepMaster", "#b#r")
    );

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            var jukebox = "想听点音乐放松一下吗?\r\n#n#d那么快选择您想点播的音乐吧。\r\n中文没翻译完,大家无聊的可以去翻译给管理.";
            for (var i = 0; i < music.length; i++)
                jukebox += "\r\n#L" + i + "# " + music[i] + "#l";
            cm.askMenu(jukebox);


        } else if (status == 1) {
            if (cm.getMeso() != 10) {
                //cm.gainMeso(-500000);
                cm.fieldEffect_PlayBGM(music[selection][0]);
                cm.worldMessage("[音乐点播] 玩家 " + cm.getChar().getName() + " 在自由市场点播"+music[selection][0]+"歌曲！");
                cm.sendOk("点播成功,祝您游戏愉快。");
            } else {
                cm.sendOk("每次点播歌曲需要50万金币,你没有足够的金币。");
            }
            cm.dispose();




        }
    }
}