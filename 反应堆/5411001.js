﻿/*
 * Ruin of Krexel II
 *  - Reactor to summon Krexel
 */

        function act() {
            rm.fieldEffect_PlayBGM("Bgm09/TimeAttack");
            rm.spawnMonster(9420520);
            rm.mapMessage(5, "克雷塞尔出现了。");
        }