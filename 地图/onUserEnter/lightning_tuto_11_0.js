/*
 * 夜光剧情 - 19
 * 地图：秘密地图 - 拉尼娅的家 (910141010)
 * @author 狐狸糊涂
 */
var status = -1;

function action(mode, type, selection) {
    if (mode === 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {
        ms.curNodeEventEnd(true);
        ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.fieldEffect_ScreenMsg("lightning/screenMsg/1");
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.npc_ChangeController(1032201, 230, -130, 1);
        ms.npc_SetSpecialAction(1032201, "summon");
        ms.npc_ChangeController(1032202, 340, -400, 1);
        ms.npc_SetSpecialAction(1032202, "summon");
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.sendNextNoESC("还记得我刚才说的吗？", 1032201);
    } else if (status === i++) {
        ms.sendNextSNoESC("1桶新鲜的牛奶，3份烧烤用猪肉，少量用于垂钓的鱼饵，还有……");
    } else if (status === i++) {
        ms.sendNextNoESC("又忘了！织毛衣用的毛线。必须在天气变冷之前，织好衣服和围巾。", 1032201);
    } else if (status === i++) {
        ms.sendNextSNoESC("对，织毛衣。红线和白线是吧？");
    } else if (status === i++) {
        ms.sendNextSNoESC("(遇到拉尼娅后，身体一直感觉疼痛，最近越来越频繁了。难道是因为封印后失去光之力量的原因吗？)");
    } else if (status === i++) {
        ms.sendNextNoESC("夜光法师真笨喵。所以说啊，把他捡回来养着没有任何意义。", 1032202);
    } else if (status === i++) {
        ms.sendNextNoESC("佩妮，我不是说过不要这么和夜光法师说话嘛！这次不要再忘了。否则我就生气了。", 1032201);
    } else if (status === i++) {
        ms.sendNextSNoESC("知道了，拉尼娅。这次我一定买对。哈哈。我走啦。");
    } else if (status === i++) {
        ms.sendNextNoESC("我送你到前面。佩妮，看好家。", 1032201);
    } else if (status === i++) {
        ms.sendNextNoESC("切，拉尼娅最近偏心夜光法师喵。这是歧视动物喵。", 1032202);
    } else if (status === i++) {
        ms.sendNextNoESC("回来的时候，给佩妮抓喜欢的鲜鱼。", 1032201);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯，哼！弄点吃的就想收买我，我才不是那种没出息的猫喵。不过既然你们一定要抓的话，别忘了抓点肥的喵。我可不是因为想吃才说的喵！", 1032202);
    } else if (status === i++) {
        ms.sendNextNoESC("遵命，呵呵……走吧，夜光法师。", 1032201);
    } else if (status === i++) {
        ms.sendNextSNoESC("呃，嗯。走吧。(和以前不同，心里仍然很憋闷。怎么会这样？)");
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(1); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.npc_SetForceMove(1032201, -1, 400, 100);
        ms.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.setInGameDirectionMode(false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_LeaveField(1032201);
        ms.npc_LeaveField(1032202);
        ms.warp(910141020, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}
