//显示对话()
cm.askMenu("text",10000);
// 自己说话（多了个S）
qm.sendNextS("text");
// 拒绝或接受
qm.askAcceptDecline("text");
// 只能往下翻页
ms.sendNextNoESC("糟糕了！！", 3000107);

// 传送
qm.warp(910700200, 0);
// 开始任务
qm.forceStartQuest();
// 结束任务
ms.forceCompleteQuest(30000);
// 任务开始了吗
ms.isQuestActive(30000)

// 屏蔽/解锁 剧情其他玩家
cm.setStandAloneMode(false); 
// 屏蔽/解锁操作台 true = 锁 false = 解
ms.setInGameDirectionMode(true,false,false); 
// 隐藏角色,1=隐藏 0=显示
ms.inGameDirectionEvent_SetHideEffect(1);
// 创建一个遮布 0x10
ms.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500, 0);
// ?? 反正每次开头结尾都要调用
ms.curNodeEventEnd(true);
// 显示感叹号
ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/BalloonMsg1/1", 0, 0, -110);
// 召唤NPC ID X Y
ms.npc_ChangeController(3000106, 500, 20, 1);//D5 F8 86 01
ms.npc_SetSpecialAction(3000106, "summon");
// 往左走，持续 0.03s （0=停，1=左，2=右）
ms.inGameDirectionEvent_MoveAction(1);
ms.inGameDirectionEvent_AskAnswerTime(30);
// 镜头往左移动
ms.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 27);
// 镜头往右移动
ms.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
// NPC往右走
ms.npc_SetForceMove(3000107, 1, 600, 100);
// NPC离场
ms.npc_LeaveField(3000107);
// 放视频
ms.playVideoByScript("kaiser.avi");
// 放图片
ms.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene0");
// 刷怪
ms.mob_EnterField(9300546, -900, 29);
// 玩家放动画
ms.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, 3000122, 0, 0);
// npc挂了
ms.npc_SetSpecialAction(3000123, "die1", 1);
// 省略号
ms.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/tuto/BalloonMsg0/2", 0, 0, -120, 1, 0, 1, 3000108, 0, 0);
// 数十年后
ms.fieldEffect_ScreenMsg("kaiser/text0");
/*
#k 黑色字
#e 粗体字
#b 蓝色字
#d 紫色字
#g 绿色字
#r 红色字
#n 普通字（移除粗体）
#c[itemid]# 显示为玩家物品栏里指定物品的数量
#f[imagelocation]# 引用.wz文件里的图片
#h # 显示为玩家名字
#l - Selection close.选择关闭？（不知道什么意思）
#L[number]# - Selection open.选择打开？
#m[mapid]# 显示为地图名称
#o[mobid]# 显示为怪物名称
#p[npcid]# 显示为NPC名称
#q[skillid]# 显示为技能名称
#s[skillid]# 显示为技能图标
#t[itemid]# 显示为物品名称
#z[itemid]# 显示为物品白板数据
#v[itemid]# 显示为物品图标
#i[itemid]# 显示为物品图片
#x 显示为0%（不知道什么意思）
#B[%]# 显示为一个进度条
\r\n 在下一行显示
\t 空格
*/