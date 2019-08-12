/* Dawnveil
[Ellinel Fairy Academy] Clue Number One
Hidey Hole
Made by Daenerys
 */
var status = -1;

// 其实这个脚本用不上

function start(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
}
