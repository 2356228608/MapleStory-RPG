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
        ms.setStandAloneMode(true); //屏蔽/解锁 剧情其他玩家
        ms.fieldEffect_ScreenMsg(false, "phantom/mapname3");
        ms.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === i++) {
        ms.sendNextS("（果然全都聚集了。虽然似乎还没有开始的样子…因为她还没有出现。看到适当的位置，就去那边坐吧。）", 17);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(2); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.sendNextS("（是目前的女帝和骑士们吗…？气氛不是很好。大家都摆出相当不悦的表情。也是，以目前的情况来说，这也是理所当然的。）", 17);
    } else if (status === i++) {
        ms.sendNextPrevS("（议员们的气氛似乎也不太寻常。他们会如何判断这种情况呢？悄悄走进去吧？）", 17);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.sendNextNoESC("西格诺斯竟然不是真正的女皇…会是真的吗？", 1402200);
    } else if (status === i++) {
        ms.sendNextNoESC("你说话太过份了。什麽叫做不是真正的女皇？难道我们在伺候一名冒牌的女皇吗？西格诺斯现在也还是女皇。", 1402201);
    } else if (status === i++) {
        ms.sendNextNoESC("虽然不清楚是真是假…她的正统性备受质疑是不争的事实不是吗？倘若她真的是拥有耶雷弗宝物的人…", 1402203);
    } else if (status === i++) {
        ms.sendNextNoESC("艾丽亚先皇留下的宝物…那项纪录相当确实。", 1402202);
    } else if (status === i++) {
        ms.sendNextNoESC("呼…很困难。若是那项宝物能证明真正的女皇，真正女皇血统是西格诺斯以外的人的话…我们该怎麽做呢？", 1402200);
    } else if (status === i++) {
        ms.sendNextNoESC("虽然无法背叛一直以来率领耶雷弗的西格诺斯…对於真正女皇的血统视若无睹也并非正确之举…真是令人烦闷呀。", 1402203);
    } else if (status === i++) {
        ms.sendNextNoESC("枫之谷世界好不容易终於诞生了结合唯一的联盟…那些全都是相信西格诺斯而加入联盟的人。除了西格诺斯以外的人成为女皇的话，联盟也会受到动摇的。", 1402202);
    } else if (status === i++) {
        ms.sendNextNoESC("光靠我们自己讨论，能够找出答案吗？主张自己拥有真正血统的那个人是什麽样的人呢…当务之急就是先确认这一点。", 1402201);
    } else if (status === i++) {
        ms.sendNextNoESC("嘘…好像终於到了。", 1402201);
    } else if (status === i++) {
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.sendNextNoESC("（…终於，这一点也不有趣的戏剧编剧者登场了。）", 1402201);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg(false, "phantom/hillah");
        ms.fieldEffect_PlayFieldSound("Magatia/alceCircle");
        ms.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        ms.npc_ChangeController(1402400, -131, -7);
        ms.npc_ChangeController(1402401, -209, -7);
        //ms.npc_ChangeController(1402401, -282, -7, 0, 1402402);
        //ms.npc_ChangeController(1402401, -59, -7, 0, 1402403);
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === i++) {
        ms.sendNextNoESC("看来聚集了相当多人呢。这也意味着大家都有仔细听我说的话吧？真是太感谢了。我就是那个自称拥有真正女皇血统的希拉。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("......", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("…我们只是为了证明那番话是谎言才会聚集在这里的。没有其他意思。", 1402101);
    } else if (status === i++) {
        ms.sendNextNoESC("啊啊，当然…我也不认为你们会一次就相信我所说的话。但是，真相终究会大白的。从现在开始，我将要说被耶雷弗的许多人遗忘的古老故事。黑魔法师企图支配枫之谷世界的当时的那个女皇…关於艾丽亚的事情…", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("(…艾丽亚...)", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("相信大家都知道了，当时耶雷弗有许多东西都被黑魔法师破坏，几乎没有完整保存下来的纪录。不过，却有一个广为人知的事实。当时的女皇艾丽亚拥有一个叫做天之星的宝物。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("艾丽亚女皇拥有的耶雷弗的宝物，天之星…那是枫之谷世界由女皇代代相传的神秘宝物。具有保护女皇，强化女皇能力的力量。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("关於天之星的纪录确实存在着，不过，那个宝石具备何种力量，根本就没有人知道。", 1402104);
    } else if (status === i++) {
        ms.sendNextNoESC("这是当然的。毕竟西格诺斯并未拥有天之星。但我却不一样了。因为天之星传给了我。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("耶雷弗受到黑魔法师和军团长们的破坏後，天之星便消失了…这就是各位知道的一切。但是，女皇的信物天之星有可能这麽容易消失吗？如此重要的物品，先祖们会坐视让它就这样消失不管吗？", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("当然不可能。天之星被暗地悄悄地带到别的地方去了。为了不被黑魔法师和他的手下攻击，於是便保守了此一秘密…交给拥有真正女皇血统的人…就这样悄悄地流传了数百年。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("你想要主张就是你吗？", 1402105);
    } else if (status === i++) {
        ms.sendNextNoESC("这是不争的事实。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("但、但是…你要如何证明你永远的天之星是真的呢？你拥有的也可能是假的！", 1402103);
    } else if (status === i++) {
        ms.sendNextNoESC("呵呵，说得好！天之星只是名声广为流传而已，但是却几乎没有人见过，是相当神秘的宝石。目前在枫之谷世界知道天之星长怎麽样子的人…就只有看过天之星图画的各位而已。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("若是我拥有的天之星和各位所知道的是吻合的话，那答案就相当简单了吧？", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("喂，你到底想说什麽呢？宝石不就长那个样子吗？也不能断定其他地区并没有关於天之星的纪录呀？", 1402106);
    } else if (status === i++) {
        ms.sendNextNoESC("又不是数百年前的人，不对，就算是数百年前的人，也几乎没有人见过天之星…老实说，可能性实在太低了？", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("还有其他证据。西格诺斯那脆弱的身体也是如此。倘若西格诺斯拥有真正的女皇血统，就不会被神兽的力量压制住…就是因为她并未拥有真正女皇的血统，身体才会如此脆弱。西格诺斯，你应该也很清楚吧？你之所以会如此虚弱…", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("放肆无礼！", 1402102);
    } else if (status === i++) {
        ms.sendNextNoESC("唉呀…若是有冒犯之处，那还真是抱歉！不过，我也没说错吧？", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("我绝对不是要各位立刻相信我所说的话。不过，各位若是对我所说的话有些许的信任，至少也要深入讨论一下吧？这就是你的角色不是吗，西格诺斯？", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("…没错。我之所以能够升到现今的地位…并非因为我很特别。而是天生的命运。", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("若是有人怀疑我是否拥有正统性…这也是理所当然的。若是需要的话…就尽管提出疑问吧！", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("西格诺斯！", 1402101);
    } else if (status === i++) {
        ms.sendNextNoESC("只因为是对的，就不断地将他人卷入战争当中。尽管如此，我也只是一昧地在这里让大家保护而已。只因为我是女皇的关系，没有其他理由。但是，倘若我没有成为女皇的资格…", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("能够号召枫之谷世界的众多人的资格…也就不会有。", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("（声音听起来有所动摇，但是眼神却相当坚定。看起来很脆弱，但是心志坚定！从绝对难以接受的策士的表情，以及一副想要战斗的骑士们的态度来看，倒是挺有人脉的呢？果然艾丽亚的…）", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("好了，既然如此，就不需要一一解释了。我就在此证明谁才拥有真正女皇的血统。天之星会在真正主人的手中发出光芒。耶雷弗的女帝西格诺斯…倘若你拥有真正女皇的血统，就试着拿起这个天之星。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("假设你是真正枫之谷世界的女皇，天之星也一定会发光。", 1402400);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg(false, "phantom/skaia");
        ms.fieldEffect_PlayFieldSound("phantom/skaia");
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(7500);
    } else if (status === i++) {
        ms.sendNextNoESC("...啊...", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("果然完全没有发光。这样还不足以当作证明吗？", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("......", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("现在下结论还太早，女帝。", 1402102);
    } else if (status === i++) {
        ms.sendNextNoESC("没错，女帝。老实说，该如何知道那个光芒的真假呢？", 1402106);
    } else if (status === i++) {
        ms.sendNextNoESC("没、没错！我也会使用散发光芒的魔法。", 1402103);
    } else if (status === i++) {
        ms.sendNextNoESC("神兽回来後，一切就会真相大白的！西格诺斯。绝对不能相信那个女人的话。", 1402104);
    } else if (status === i++) {
        ms.sendNextNoESC("若是您动摇的话，我们骑士也全都会动摇的！振作一点！", 1402105);
    } else if (status === i++) {
        ms.sendNextNoESC("现在才刚进入组成联盟，枫之谷世界合而为一的初期而已，西格诺斯。说不定这只是为了动摇我们，让我们这段时间的信任瓦解的阴谋。千万不能被一个来路不明的女人所迷惑。", 1402101);
    } else if (status === i++) {
        ms.sendNextNoESC("所有...", 1402100);
    } else if (status === i++) {
        ms.sendNextNoESC("嗯…看来你的骑士们想要否定真相呢。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("这段时间以贤明的方式在耶雷弗率领骑士，然後领导枫之谷世界的女帝…我并非否定你的辛劳。不过，就是因为你够贤明，趁一切还来得及的时候，请做出正确的选择。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("承认谁才是真正的女皇，让出女皇的位子吧。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("然後将这项事实告诉联盟。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("当然，我并非在催促你。相信你一定很混乱，我会给你时间整理这一切的。若是怀疑我的话，可以继续相关的调查。", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("但是，最後还是会知道真相的。枫之谷世界真正的女皇是我希拉…", 1402400);
    } else if (status === i++) {
        ms.sendNextNoESC("（阿普雷德应该已经准备好了吧…轮到我上场了吗？好，那麽先深呼吸，一、二、三！）", 1402400);
    } else if (status === i++) {
        ms.fieldEffect_ScreenMsg(false, "phantom/phantom");
        ms.inGameDirectionEvent_MoveAction(0); //0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立
        ms.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        ms.sendNextNoESC("还没到下结论的时候吧?", 1402400);
    } else if (status === i++) {
        ms.inGameDirectionEvent_AskAnswerTime(500);
    } else if (status === i++) {
        ms.forceStartQuest(25001);
        ms.setInGameDirectionMode(false, false); //屏蔽/解锁操作台 true = 锁 false = 解
        ms.npc_LeaveField(1402400);
        ms.npc_LeaveField(1402401);
        ms.npc_LeaveField(1402402);
        ms.npc_LeaveField(1402403);
        ms.forceStartQuest(25010);
        ms.dispose();
        ms.warp(150000000);
    } else {
        ms.dispose();
    }
}