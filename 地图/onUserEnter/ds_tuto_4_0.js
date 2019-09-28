/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status === i++) {

ms.onScriptMessage(3, 0, 1, 2159344,  "嗯……", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.onScriptMessage(3, 0, 1, 2159344,  "(这里……是陌生的房间。不是刚才的东西哦……呃……全身都很疼。)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 2159344,  "(看了一下，虽然是个陌生的地方，但好像是治疗室……这是什么地方？我怎么会在这里？)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(先来整理一下情况。)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(黑魔法师违背了和我的约定，破坏了妈妈和戴米安生活的神秘岛大陆南部地区。故乡只剩下一片废墟……到底为什么……)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(吊坠！吊坠到哪里去了？)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(是在战斗的时候弄丢了吗？和家人有关的东西一个都没有留下……呃……)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 2159344,  "(为了向黑魔法师复仇而来到时间神殿的时候……中途派出了#p2151009#。如果他还在那里的话，一定被其他军团长杀死了……虽然有#p2159309#的妨碍，但是很快就击败了他……他那时好像说英雄们来了？)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(黑魔法师果然很强。还以为只要拼了命，一定可以给他造成一点伤害呢……最后只是打破了他的保护魔法，碰到了一点衣角而已……虽然一开始就没有期待能把他杀掉……)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(但是我为什么还活着呢……？背叛黑魔法师的部下，应该没理由能活下来啊……中间有其他人的介入吗？难道是那些英雄……？)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(啊……头好疼。光是推测好像什么都不能确定……我连这是什么地方都不知道。在全部被毁掉的冒险岛世界竟然有这种地方，真让人吃惊。而且那些东西……看上去很陌生。)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(600);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.onScriptMessage(3, 0, 1, 2159344,  "(先检查一下自己的状态吧……虽然不知道怎么回事，但是要想应对目前的情况，必须要有力量……还剩下多少精气呢？)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg0/13", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1500);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(……该死！精气几乎没有了……！看看缩小的精气盾，就知道自己的身体状态怎么样了。几乎所有能力都消失了。没有受任何伤，竟然会变得这么弱……这到底是怎么回事？)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(变得这么弱，要是遇到敌人的话，该怎么办呢？那个戴着帽子的男人……虽然好像不是敌人，但不知道是什么人……)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(呼……要想恢复力量，看来得花上一段时间了。光这样待着也没用……不如去活动一下吧。)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 2000, 0, -100, 0, undefined, 0, "oid=undefined", undefined, undefined);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(好像听到了什么声音……)", 256, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "在电站看到好像是能量传送装置的东西和一个蛋连接在一起之后，我打算回来，因为至少他们不会再吸收埃德尔斯坦的能量了。但是就在那时候，那个人打碎了蛋，冲出来把黑色之翼全部干掉了。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159315,  "老实说，J，要不是你说的话，我根本不会相信这种荒唐的事。黑色之翼到底在干什么呢？而且那个人……背上长着翅膀，好像不是普通人。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159315,  "(……是在说我吗？)", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "那个人用的技能我还是第一次看到。非常强……老实说，如果不是因为他力量变弱，可以压制住他，我是不会把他带回来的。也许会很危险。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159312,  "难道是实验体……？贝比蒂不也是这样吗？谁也不知道黑色之翼在矿山深处做什么实验。如果是疯子科学家格里梅尔制造出来的实验体，那他也是受害者。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159314,  "可恶的格里梅尔……我一定要把他干掉！", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "他差不多也该醒来了。应该去看一看。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(2);
ms.inGameDirectionEvent_AskAnswerTime(2000);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(1);
ms.npc_ChangeController(2159344, "oid=12835280", -600, -20, 0);
ms.npc_SetSpecialAction("oid=12835280", "summon", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(30);
} else if (status === i++) {
ms.inGameDirectionEvent_MoveAction(0);
ms.inGameDirectionEvent_Effect( "Effect/Direction6.img/effect/tuto/balloonMsg1/3", 1500, 0, -100, 1, 0, 1, "oid=12835280", 0, 0);
ms.inGameDirectionEvent_AskAnswerTime(1000);
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "起来啦。身体还好吗？你的脸色还是很不好……", 256, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "……是你救了我吗？", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "我总不能把倒下的人留在黑色之翼那里吧？从情况来看，我们之间的利害关系好像是一致的。你好像有很多话要说……跟我们一起走吧。", 257, 0, 1, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.onScriptMessage(3, 0, 1, 2159344,  "(审问……？收买……？还不知道。至少比刚醒来时看到的那群叫黑色之翼的家伙要好……)好的。", 257, 0, 3, 0, 0, 0); // [类型] 普通对话
} else if (status === i++) {
ms.curNodeEventEnd(true);
ms.npc_LeaveField("oid=12835280");
ms.dispose();
ms.warp(931050010, 0);
    }
}