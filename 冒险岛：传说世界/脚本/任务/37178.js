/* 艾洛丁 by jessefjxm
 */
var status = -1;

function start(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2;07=h1;08=h0");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	(mode == 1) ? status++ : status--;
	var i = -1;
	qm.dispose();
}
