/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：武陵道场 出去
 *  
 *  @Author Jackson 
 */

/* global cm */

var sel = -1;
var mapid;
var selectedBuff;

﻿var status = -1;

function start() {
    cm.askYesNo("你要放弃?现在只要通过下一阶段就能大功告成了.你真的要放弃并离开吗?");
}

function action(mode, type, selection) {

    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.dispose();
                cm.warp(925020001, 0);
                cm.sendOk("你怎么这么优柔寡断!相信要不了多久你就又巴望着要回来了.");
            break;
        default:
            cm.dispose();
            break;
    }
}

