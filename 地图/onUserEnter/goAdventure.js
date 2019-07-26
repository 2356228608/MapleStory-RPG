var status = -1;

function start() {
    ms.setStandAloneMode(true);
    ms.setDirectionMode(true);
    ms.effect_Direction("Effect/Direction3.img/goAdventure/Scene" + (ms.getPlayer().getGender() == 0 ? "0" : "1"));
	ms.enableActions2();
    ms.dispose();
}
