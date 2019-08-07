/* 起源之塔
Made by Jessefjxm
 */
var status = -1;

function action(mode, type, selection) {
	status++;
	var info = ms.getInfoQuest(42009);
	if (info == null || !info.equals("map=8")) {
		action4(mode, type, selection);
	} else {
		action8(mode, type, selection);
	}
}

// 因为 992000040 的NPC不正常，只能重复利用了
function action4(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		// 召唤阿丽莎
		ms.npc_ChangeController(2540000, 1100, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(2540000, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		ms.sendNextSNoESC("为什么只将低智商的动物带来？");
	} else if (status === i++) {
		ms.sendNextNoESC("那时，我认为破坏生命的所有欲望都起源于智商……就连黑魔法师对于破坏的渴望也是如此。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("那样的话，我很奇怪，为什么在讨伐黑魔法师的时候，你也出面相助了呢？");
	} else if (status === i++) {
		ms.sendNextNoESC("……", 2540000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 0, -120, 1, 0, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 0, -120, 1, 0, 1, 2540000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 0, -120, 1, 0, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 0, -120, 1, 0, 1, 2540000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextNoESC("……这个嘛？反正，我和真身共享记忆就只是到开始建塔为止，所以真身所做的事情就不要来问我这个思念体了吧？我会很不爽的，不是吗？", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("……啊，原来你们是彼此独立的存在啊。");
	} else if (status === i++) {
		ms.sendNextNoESC("我认为，如果当时我的真身能够和我有着同样的思考方式……	#r如果能够阻止黑魔法师的话，那将是一件很不错的事情……#k应该可以这么判断吧？", 2540000);
	} else if (status === i++) {
		// 收尾
		ms.warp(992000050, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// NPC离场
		ms.npc_LeaveField(2540000);
	} else {
		ms.dispose();
	}
}

function action8(mode, type, selection) {
	var i = -1;
	if (status <= i++) {
		ms.dispose();
	} else if (status === i++) {
		// 初始化
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(true, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
		// 召唤阿丽莎
		ms.npc_ChangeController(2540000, 1100, 10, 1); //D5 F8 86 01
		ms.npc_SetSpecialAction(2540000, "summon");
		ms.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		ms.sendNextSNoESC("这样的话，我们能直接就这样走上去吗？");
	} else if (status === i++) {
		ms.sendNextNoESC("不能。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("首先，塔内还设有结界，只要这结界感知到高智商生命体的话，就会将其驱逐到大厅。当然，这也是我设下的。虽然这结界的力量十分强大，不过只要输入密码就能将其破解。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("哇，很了不起啊？很好。那么我都会帮你解决的。请你把结界解除就可以了。");
	} else if (status === i++) {
		ms.sendNextNoESC("是吗？很了不起吧？", 2540000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 155, -100, 1, 99999, 1, 2540000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNextNoESC("不过…………那个…………不行啊。", 2540000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/2", 3000, 0, -80, 1, 99999, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		ms.sendNextSNoESC("怎么？你不是说只要输入密码就能解除结界吗？");
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 155, -100, 1, 99999, 1, 2540000, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextNoESC("我忘记了。", 2540000);
	} else if (status === i++) {
		ms.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 3000, 0, -80, 1, 99999, 1, 0, 0, 0);
		ms.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		ms.sendNextNoESC("你说忘记了！那也没办法。已经过了太久的时间了。换做是我的话，500年前设置的装置也不会记住密码的吧？肯定是记不住的！", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("嗯……也是。喂，等等！那么也就是说从一开始就根本无法成功了？");
	} else if (status === i++) {
		ms.sendNextNoESC("所……以！我又花费心血制作了朦胧石。你可以使用朦胧石暂时欺骗结界。朦胧石是给予我帮助的善良的魔女格林达的所需之物，所以你需要购买。", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("既然是帮你，难道不能免费吗？");
	} else if (status === i++) {
		ms.sendNextNoESC("再怎么说起源之塔也是我的作品。#r那些家伙连点责任心都没有#k，就那样肆意妄为，不是很讨厌吗？至少要有最基本的责任心吧？", 2540000);
	} else if (status === i++) {
		ms.sendNextSNoESC("（切……）");
	} else if (status === i++) {
		ms.sendNextNoESC("你进入起源之塔，就会看到一个时钟，上面显示着当前位置和被结界感知的剩余的时间。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("当时钟上的时间显示为0时，你就会被驱逐到大厅了。基本上你会有一些时间……不过要想下到塔的最底层还是比较困难的。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("所以你必须装备朦胧石来欺骗塔内的结界，这样你才能在塔内逗留更长的时间。首先……你可以用起源点数从给予我帮助的格林达那里购买，也可以从其他探险家那里购买未被刻印的朦胧石。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("不过，由于未被刻印的朦胧石与你的智力水平不能完全相符，因此效果会有所下降。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("如果你使用购买的朦胧石，时钟上的时间就会增多。因为使用朦胧石可以延长你能够逗留在塔内的时间。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("不过，朦胧石只能在一个地方装备，那就是这个大厅。如果你在结界内装备的话，将不会起到任何作用。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("因为你要进入到很深很深的地方，所以你应该多装备一些质量好的朦胧石，才会有所帮助的，不是吗？", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("可以使用朦胧石的空间……当你的经验可以下到更深的地方时，我会为你扩展的，那时你再来找我吧。当然，你还要积累起源点数。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("最后，我向你说明一下在塔内可以随时和我对话的灵魂连接器。", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("当你实在找不到路或者突然间身体不舒服的时候，就和我联系吧。虽然我不能每件事都帮到你……但我也会尽力而为的。", 2540000);
	} else if (status === i++) {
		ms.askYesNoNoESC("你都理解了吗？", 2540000);
	} else if (status === i++) {
		ms.sendNextNoESC("啊，我已经按照约定为你开放了可以使用朦胧石的栏位。那么加油吧！", 2540000);
	} else if (status === i++) {
		// 收尾
		ms.warp(992000000, 0);
		ms.curNodeEventEnd(true);
		ms.setInGameDirectionMode(false, true); //屏蔽/解锁操作台 true = 锁 false = 解
		ms.setStandAloneMode(false); //屏蔽/解锁 剧情其他玩家
		ms.dispose();
		// NPC离场
		ms.npc_LeaveField(2540000);
	} else {
		ms.dispose();
	}
}