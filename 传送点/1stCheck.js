function enter(pi) {
    if (pi.getPlayer().getKeyValue("1stJobTrialStatus") == null) {
        pi.getPlayer().message("'?″?' 淇??? ???? 瀵??? ?х虎????澶?.");
        return false;
    } else {
        pi.warp(219000000, "in03");
        return true;
    }
}