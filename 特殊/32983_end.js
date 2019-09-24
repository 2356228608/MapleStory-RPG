/*  This source is made by BMS Team
 *  脚本功能：[次元图书馆]影子炼金术师
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    status++;

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {

cm.curNodeEventEnd(true);
cm.setInGameDirectionMode(true, false, false);
cm.setStandAloneMode(true);
cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
cm.onTeleport(1, cm.getPlayer().getId(), 883, -147);
cm.inGameDirectionEvent_ForcedFlip(-1);
cm.onScriptMessage(3, 0, 1, 0,  "你没事吧，艾特？伤口……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#我就知道是这样。中和剂什么的全都是谎言。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#等一下！你听到那个声音了吗？女孩的声音……", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#到……神殿来？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（是我听到过的那个声音！）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#我们到神殿去看看。必须直接确认一下。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas11(undefined, undefined, undefined, undefined, undefined, undefined);
cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face1#艾特一定是想到神殿去……\r\n他会以真相为诱饵，来利用你。", 256, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560000,  "#face1#所以千万别相信他。", 257, 0, 37, 0, 1, 2560000); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_InsertCanvas11(undefined, undefined, undefined, undefined, undefined, undefined);
cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
cm.inGameDirectionEvent_AskAnswerTime(1600);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（就像队长说的一样……！不，这……）", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（反正中和剂也是假的。\r\n不知道。队长为什么要对我们说谎呢？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（到底什么才是真相？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_ForcedFlip(1);
cm.onScriptMessage(3, 0, 1, 0,  "啊！迎月花……？！被它们采走了……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#那个现在不需要了。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "什么？但是……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#采走花的怪物反正已经逃走了。\r\n就算翻遍森林，也很难找到。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face0#不，那种事情怎么都没关系。反正都是假的。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "怎么都……没关系？当然，这个……\r\n成不了真的月亮……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "但是……如果能想办法把剩下的花……", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（等一下！我的手……这是怎么回事？）", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/2", 0, 1500, 0, 0, 0, 4, 1);
cm.inGameDirectionEvent_AskAnswerTime(2500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（手一碰到花……#fs18##r影子诅咒？！#k）", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1000, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_ForcedFlip(0);
cm.onScriptMessage(3, 0, 1, 2560003,  "#face0#现在别去管花了。我不是已经告诉你该去哪儿了吗？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（还是被诅咒了……）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#fs18#我……不行了。", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#什么？", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "我们已经尽力了。我要回去了。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_ForcedFlip10(1, 200);
cm.inGameDirectionEvent_AskAnswerTime(3000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#等，等一下，影牙。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "随你的便。威胁我也没关系。揭发我也没关系。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#干嘛突然这样。我不理解。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "（队长说得对。不能怀疑使命。）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "你反正只是想利用我。\r\n你颐指气使，为了知道你所谓的真相，对我呼来喝去。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "所以我……（现在已经无法回头了吗？）", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_ForcedFlip10(1, 150);
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16##fs18#对……对不起，影牙。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_ForcedFlip(1);
cm.onScriptMessage(3, 0, 1, 0,  "……什么？", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face11#我不是想利用你。", 256, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face11#我觉得我们可以成为#b朋友#k……但是我搞砸了。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#fs18#朋……友……？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "真的吗？", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#我向你道歉。之前我不该威胁你，耍你玩。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "就，就算是这样，我也不会到神殿去。", 257, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#当然。我不想强迫你。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face16#我不会再胡来了。我们……先回村子里去吧。 ", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 2560003,  "#face4#我们不去神殿了。", 257, 0, 37, 0, 1, 2560003); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
cm.inGameDirectionEvent_AskAnswerTime(500);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
cm.onScriptMessage(3, 0, 1, 0,  "#fs18#朋……友……", 256, 0, 57, 0, 1, 0); // [类型] 普通对话
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("我以为被抛弃了。我以为遭到了利用。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("就像，没能变成月亮而被抛弃的迎月花一样……", 1);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("但是……“朋友”这个词唤醒了我。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("和他的相遇……", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("是我在这个充满了谎言的地方发现的……", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("「唯一的真相」。", 0);
} else if (status === i++) {
cm.inGameDirectionEvent_Monologue("", 1);
} else if (status === i++) {
cm.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
cm.setStandAloneMode(false);
cm.setInGameDirectionMode(false, false, false);
cm.updateInfoQuest(32999, "00=h0;10=h0;01=h0;02=h0;20=h0;11=h0;21=h1;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
cm.forceCompleteQuest(32983);
cm.updateInfoQuest(32983, "exp=1;clear=1");
cm.dispose();
cm.warp(307000110);

    } else {
        ms.dispose();
    }
}