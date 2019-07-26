var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("奇谈！老爸！你真的不记得我了？我们总是打招呼!", 2);
    else if (status == 1)
        cm.sendNextPrev("哦，嗯，对不起…");
    else if (status == 2)
        cm.sendNextPrevS("很好的老朋友，我知道你看到无数的人来。记住它们并不容易，但我希望你至少记得我。", 2);
    else if (status == 3)
        cm.sendNextPrev("h-hey！我说我很抱歉！这个地方现在就像一个疯人院。R你不能责怪一个人失踪几面。");
    else if (status == 4)
        cm.sendNextPrevS("真的那么糟糕吗？", 2);
    else if (status == 5)
        cm.sendNextPrev("当然!我们已经有了一些新的皇家女士声称女皇天鹅可能是假的！谁能安心呢？!");
    else if (status == 6)
        cm.sendNextPrevS("这是一个好观点。这就是我在这里的原因!", 2);
    else if (status == 7)
        cm.sendNextPrev("我也很担心。即使皇后很担心。\ r \她白的像鬼，当我看到她…");
    else if (status == 8)
        cm.sendNextPrevS("不期待有一个新的皇后，Kidan？", 2);
    else if (status == 9)
        cm.sendNextPrev("我希望没有生病后的天鹅！没有她的领导，我们今天就不能立足。但是如果这个新女人的主张是真的…");
    else if (status == 10)
        cm.sendNextPrevS("你真的认为这是皇后的血统的另一个成员？", 2);
    else if (status == 11)
        cm.sendNextPrev("Hilla女士坚持认为她儿子最后的皇后。");
    else if (status == 12)
        cm.sendNextPrevS("那会解释你的坏心情。", 2);
    else if (status == 13)
        cm.sendNextPrev("的确.如果Shinsoo在这里，她就清楚了\ r \ nunfortunately她不是。");
    else if (status == 14)
        cm.sendNextPrev("为什么那个女人整天坚持召开会议？！");
    else if (status == 15)
        cm.sendNextPrevS("看起来很方便，是吗？", 2);
    else if (status == 16)
        cm.sendNextPrev("我希望这能成功。我们要做的如果Cygnus不是真正的皇后是什么？我已把自己奉献给她了。");
    else if (status == 17)
        cm.sendNextPrev("ereve不能一分为二。那将是混乱的。");
    else if (status == 18)
        cm.sendNextPrevS("不要担心太多，Kidan。我觉得这些事情都会解决的。", 2);
    else if (status == 19)
        cm.sendNextPrev("我希望我有你的乐观。无论如何，Hilla这个角色必须很有信心把这里的所有人。");
    else if (status == 20)
        cm.sendNextPrevS("信心是两truthsayers和骗子要求。你永远不知道。也许有人难以置信会俯冲清理这。", 2);
    else if (status == 21)
        cm.sendNextPrev("你什么意思？你为什么那样说话？");
    else if (status == 22)
        cm.sendNextPrevS("别担心！我相信我会在一切都做完后见你。", 2);
    else if (status == 23)
        cm.sendPrev("嗯…好的，再见");
    else
        cm.dispose();
}