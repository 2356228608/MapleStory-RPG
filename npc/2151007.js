/*
 * 反抗者任务 - 01
 * 地图：反抗者本部 - 训练室入口 (310010010)
 * 任务：反抗者的培训生(23100)
 * 等级：10以上
 * @author 狐狸糊涂
 */
function start() {
    cm.askMenu("可以到各个修炼场去的电梯。请选择想要去的层数。\r\n#b#L0#地下2层训练室A.#l \r\n#b#L1#地下3层训练室B#l \r\n#b#L2#地下4层训练室C#l  \r\n#b#L3#地下5层训练室D#l  \r\n#b#L4#地下6层第四训练室#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        switch (selection) {
            case 0:
                cm.warp(310010100, 0);
                break;
            case 1:
                cm.warp(310010200, 0);
                break;
            case 2:
                cm.warp(310010300, 0);
                break;
            case 3:
                cm.warp(310010400, 0);
                break;
            case 4:
                cm.warp(310010500, 0);
                break;
        }
    }
    cm.dispose();
}