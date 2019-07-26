var blockMapName;

function enter(pi) {
    var mapId = pi.getMapId();
    switch (mapId) {
        case 221020000:
            blockMapName = "?扮???插尽????";
            break;
        case 222020000:
        case 230030200:
            blockMapName = "绔ヨ????";
            break;
        default:
            blockMapName = "???ュ?板??";
    }
    pi.playerMessage("?变?榛?姘??????绘?★???娉?绉诲?ㄥ??" + blockMapName + "??");
}