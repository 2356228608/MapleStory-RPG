function act() {
    try {
        rm.fieldEffect_PlayBGM("Bgm09/TimeAttack");
        rm.spawnMonster(9420513, -146, 225);
        rm.mapMessage(5, "骞界?佃?归?垮?虹?颁???");
    } catch (e) {
        rm.mapMessage(5, "?虹?伴??璇?: " + e);
    }
}