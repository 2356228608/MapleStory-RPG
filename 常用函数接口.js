// 可交互的对话，支持选项
cm.askMenu("text", 10000);
// 自己说话（多了个S）
cm.sendNextS("text");
// 拒绝或接受
cm.askAcceptDecline("text");
// 只能往下翻页
cm.sendNextNoESC("糟糕了！！", 3000107);

// 0~4 各种类型的通知
cm.playerMessage(1, "果然有出口。应该把这一事实告诉少女。");
// 右下角弹窗通知
cm.addPopupSay(0, 2000, "果然有出口。应该把这一事实告诉少女。");
// 头上雇佣信息 存留一段时间
cm.hireTutorcmg();

// MapleCharacter下发消息，显示在聊天栏 0白1绿2粉3橙4紫
player.showMessage(0, "0/300");
// -1红色正中 1弹窗 2蓝底 3(null)红底 5红色 6蓝色 -6 灰色 -7黄色
player.dropMessage(-1, "-1/300");

// 传送
cm.warp(910700200, 0);
// 开始任务
cm.forceStartQuest();
// 结束任务
cm.forceCompleteQuest(30000);
// 任务开始了吗
cm.isQuestActive(30000)
// 设置任务特别标签 对应infoNumber，exVariable，value
cm.updateInfoQuest(30002, "outportal=2");

// ?? 反正每次开头结尾都要调用
cm.curNodeEventEnd(true);
// 全屏幕放图片
cm.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene0");
// ???
cm.effect_OnUserEff("Effect/Direction15.img/effect/tuto/seal/front");
// 显示文字：字体，大小 [刷字时间] [持续时间] [位置（0=左上，1=中上，2=右上，3=左中，4=正中，5=右中，6=左下，7=中下，8=右下 ）]
// ... [X] [Y] [?] [?] [?] [淡入时间（立刻刷新所有字）] [淡入时间（立刻刷新所有字）]
cm.effect_Text("#fnNanum Gothic ExtraBold##fs18#作战开始5天前   #fs15##fnNanum Gothic#黑色之翼基地上空", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0); //334 0x3D
// 播放特效，固定位置，并且不需要锁定玩家界面
cm.fieldEffect_ScreenMsg("Map/Effect.img/rootabyss/demian");
// 全屏遮罩：[1开0关] [R] [G] [B] [?] [时间] [？]
cm.fieldEffect_InsertCanvas(1, 128, 0, 0, 500, 2000, 500); //创建一个遮布 0x10
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 2000, 0, 0); //20E 0x15 取消遮布
// 放图片，优先级最高，覆盖所有UI [tag，不可覆盖，直到取消] [path] [0=生成，1=移动，2=？] [淡入时间,移动时间] [出场/移动X] [出场/移动Y] [?] [0=左上，1=右上，2=？，3=左下，4=右下，5=？]
qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/chaJay", 0, 500, 100, 200, 12, 5, 0);
qm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, -800, 0, 0, 0, 0);
qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 0, 0, 0, 0, 0, 0);
// 玩家走动 [0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立]
cm.inGameDirectionEvent_MoveAction(1);
// 当且仅当锁定画面时，一定时间后执行next效果 [毫秒] 
cm.inGameDirectionEvent_AskAnswerTime(30);
// 镜头移动 [0移1复原] [移动速度（越大越快）] [相对X 右正左负] [相对Y 上正下负]
cm.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 27);
// 显示感叹号（放单张图片）
cm.inGameDirectionEvent_Effect("Effect/Direction9.img/effect/story/Ballooncmg1/1", 0, 0, -110);
// 玩家放动画：省略号
cm.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/Balloonmsg0/0", 0, 0, -120, 1, 0, 1, 3000108, 0, 0);
// 玩家放动画，优先级较低，会跟随玩家 [总时长（放几遍）] [相对x] [相对y] [?] [图层优先级，9999之后能覆盖地图但是会变小] [1头上0地面] [NPCID] [放大到全屏？] [不全屏？]
cm.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, 3000122, 0, 0);
// 特效：开始、完成、失败
cm.inGameDirectionEvent_Effect("UI/UIWindowPL.img/HiddenCatch/StageImg/start", 0, 0, -200, 1, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_Effect("UI/UIWindowPL.img/HiddenCatch/StageImg/clear", 0, 0, -200, 1, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_Effect("UI/UIWindowPL.img/HiddenCatch/StageImg/fail", 0, 0, -200, 1, 0, 0, 0, 0, 0);
// 屏幕中间显示文字，而且要玩家触发：[文字] [时间]
cm.inGameDirectionEvent_Monologue("#fn黑体##fs26#黑魔法师出现之前，冒险岛世界曾是那么的平静祥和……", 1000);
// 屏幕中间显示文字，从下往上滚动：[文字] [反正不能为0] [0左对齐1居中2右对齐] [减速] [加速] （后两者太高的话，播放会变得不连续）
cm.inGameDirectionEvent_MonologueScroll("#fn黑体##fs26#黑魔法师出现之前，冒险岛世界曾是那么的平静祥和……\r\n传送传送传送", 100, 0, 1, 5);
// 隐藏角色 [1=隐藏 0=显示]
cm.inGameDirectionEvent_SetHideEffect(1);
// 左下角全地图系统提示
cm.mapMessage("三生三世");
// 刷怪
cm.mob_EnterField(9300546, -900, 29);
// NPC离场
cm.npc_LeaveField(3000107);
// 召唤NPC [ID] [X] [Y] ？
cm.npc_ChangeController(3000106, 500, 20, 1); //D5 F8 86 01
cm.npc_SetSpecialAction(3000106, "summon");
// NPC往右走 ID 0左1右 X Y
cm.npc_SetForceMove(3000107, 1, 600, 100);
// npc挂了
cm.npc_SetSpecialAction(3000123, "die1", 1);
// 放视频
cm.playVideoByScript("kaiser.avi");
// 屏蔽/解锁 剧情其他玩家
cm.setStandAloneMode(false);
// 屏蔽/解锁操作台 true锁/false解 true有黑边/false无黑边
cm.setInGameDirectionMode(true, false, false);
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
#m[macmd]# 显示为地图名称
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

// 5120008 枫叶
// 5120012 圣诞礼盒
// 5120016 老虎
// 5120017 女法师
// 5120019 云朵
// 5120026 标准黄框
// 5120027 高科技信息框
// 5120030 棒棒糖
// 5120034 披萨盒子和可乐
// 5120052 白毛斗士
// 5120053 胡子大叔
// 5120055 阿卡伊勒
// 5120059 希拉国度的女灵魂
// 5120080 拿剑的女战士
// 5120081 拿法杖的女法师
// 5120085
// 5120093 拿锤子的恶魔猎手？
// 5120124 被铁链捆绑的木框
// 5120130	BBQ
// 5120161 兽人大酋长
// 5120187	黑暗传令兵
// 5120184	迷宫向导
// 5120179	小坏蛋冒险萌
// 5120178	怪物出租车司机
// 5120177	帕普拉图斯指南
// 5120176	金币哗啦啦水槽骑宠
// 5120175	石精灵
// 5120173	布莱克缤提示栏
// 5120172	圣诞节任务用
// 5121000 火影
// 5121027 金元宝
// 5121037 鲜花
// 5121050 花蘑菇
// 5121052 星星
cm.getMap().startMapEffect("和沉睡的血腥女皇说话吧。", 5120085);

20F 离开
你真了不起！居然能击败铁皮人。相信后面的楼层也难不住你了。
我要送你一份礼物！
希望你能继续发挥出色，我们的目标还在更深处呢。

40F 离开
你真了不起！居然已经进入到第41层！你真是一名能力远超我想象的冒险者！
你击败了一个强大的对手。我要送你一份礼物！
希望你能继续发挥这样的气势，我们的目标还在更深处呢。

50F 离开
莫非……真没想到你会来这里，你真的很了不起!
为纪念你通关最高层，我要送你一枚比较特殊的勋章！
你真的完成啦！祝贺你！！
你的背包已满了吧？你先空出装备栏的1格后，再使用传送出口吧。

黑屏
ms.inGameDirectionEvent_Monologue("#fn黑体##fs32#B - 49 F\r\n\r\n#fs22#你最终打败桃乐丝啦！真的太感谢了！不过……怎么回事？\r\n\r\n对塔的控制权还没到我的手上。\r\n\r\n我怎么感觉到这里还并没有结束。", 30000);
底部
敬请期待……
