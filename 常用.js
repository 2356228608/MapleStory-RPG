function o对话工具() {}
// 可交互的对话，支持选项
cm.askMenu("text", 10000);
// 自己说话（多了个S）
cm.sendNextS("text");
// 拒绝或接受
cm.askAcceptDecline("text");
// 只能往下翻页
cm.sendNextNoESC("糟糕了！！", 3000107);
// 控制字体
cm.sendNext("#fn黑体##fs32#");

// 0~4 各种类型的通知
cm.playerMessage(5, "果然有出口。应该把这一事实告诉少女。");
// 右下角弹窗通知
cm.addPopupSay(0, 2000, "果然有出口。应该把这一事实告诉少女。");
// 头上雇佣信息 存留一段时间
cm.hireTutorMsg();
// 聊天栏里的系统类消息，特点是色彩非常丰富
cm.spouseMessage(0x15, "[家族跑旗赛活动] 现在管理员已经关闭了活动入口。");

// MapleCharacter下发消息，显示在聊天栏 0白1绿2粉3橙4紫
player.showMessage(0, "0/300");
// -1红色正中 1弹窗 2蓝底 3(null)红底 5红色 6蓝色 -6 灰色 -7黄色
player.dropMessage(-1, "-1/300");

function o任务工具() {}
// 传送
cm.warp(910700200, 0);
// 同地图瞬间移动
cm.onTeleport(1, cm.getPlayer().getId(), -67, 92);
// 开始任务
cm.forceStartQuest();
// 结束任务
cm.forceCompleteQuest(30000);
// 任务开始了吗
cm.isQuestActive(30000)
// 设置任务特别标签 对应infoNumber，exVariable，value
cm.updateInfoQuest(30002, "outportal=2");
// 有些任务会用隐藏任务作为特别开关
im.forceStartQuest(32194, "1");
// [1开0关] [NPCID] [SkillID，需要查string里的skill.xml] [?]
im.setPartner(0, 1501010, 80002688, 0);

function o影视特效() {}
// ?? 反正每次开头结尾都要调用
cm.curNodeEventEnd(true);
// 全屏幕播放预设好的音画组合，注意此时目录不会在effect下面
cm.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene0");
cm.effect_Direction("Map/Effect.img/temaD/enter/fairyAcademy");
// OnUserEff?
cm.effect_OnUserEff("Effect/Direction15.img/effect/tuto/seal/front");
// 显示标题文字：字体，大小 [刷字时间] [持续时间] [位置（0=左上，1=中上，2=右上，3=左中，4=正中，5=右中，6=左下，7=中下，8=右下 ）]
// ... [X] [Y] [?] [?] [?] [淡入时间（立刻刷新所有字）] [淡入时间（立刻刷新所有字）]
cm.effect_Text("#fnNanum Gothic ExtraBold##fs18#作战开始5天前   #fs15##fnNanum Gothic#黑色之翼基地上空", 100, 2200, 6, -50, -50, 1, 4, 0, 0, 0); //334 0x3D
// 播放特效，固定位置，并且不需要锁定玩家界面
cm.fieldEffect_ScreenMsg("Map/Effect.img/rootabyss/demian");
// 全屏遮罩：[1开0关] [Alpha] [R] [G] [B] [时间] [？]
cm.fieldEffect_InsertCanvas(1, 128, 0, 0, 0, 2000, 0); //创建一个遮布 0x10
cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0); //20E 0x15 取消遮布
// 放图片，优先级最高，覆盖所有UI [tag，不可覆盖，直到取消] [path] [0=生成，1=移动，2=消失] [淡入时间/移动时间] [出场/移动X] [出场/移动Y] [?] [0=左上，1=右上，2=？，3=左下，4=右下，5=右中] [?]
qm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/chaJay", 0, 500, 100, 200, 12, 5, 0);
qm.fieldEffect_ProcessOnOffLayer("0", "", 1, 300, -800, 0, 0, 0, 0);
qm.fieldEffect_ProcessOnOffLayer("0", "", 2, 0, 0, 0, 0, 0, 0);
// 黑屏？
ms.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 0, 4, 1);
ms.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 2, 1000, 0, 0, 0, 0, 0);
// 玩家走动 [0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃 8=趴下起立]
cm.inGameDirectionEvent_MoveAction(1);
// 当且仅当锁定画面时，一定时间后执行next效果 [毫秒]
cm.inGameDirectionEvent_AskAnswerTime(30);
// 镜头移动 [0移1复原] [移动速度（越大越快）] [相对X 右正左负] [相对Y 上正下负]
// 需要单独迭代次数！
cm.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 27);
// 显示感叹号（红色！！！）
cm.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 0, 0, -110);
// 显示感叹号（白色!!!!）
cm.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 0, 0, -110);
// 玩家放动画：省略号
cm.inGameDirectionEvent_Effect("Effect/Direction12.img/effect/tuto/Balloonmsg0/0", 0, 0, -120, 1, 0, 1, 3000108, 0, 0);
// 玩家放动画，优先级较低，会跟随玩家 [总时长（放几遍）] [相对x] [相对y] [?] [图层优先级，9999之后能覆盖地图但是会变小] [1头上0地面] [NPCID] [放大到全屏？] [不全屏？]
cm.inGameDirectionEvent_Effect("Skill/6112.img/skill/61121100/hit", 0, 0, 0, 1, 0, 1, 3000122, 0, 0);
// 特效：开始、完成、失败
cm.inGameDirectionEvent_Effect("UI/UIWindowPL.img/HiddenCatch/StageImg/start", 0, 0, -200, 1, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_Effect("UI/UIWindowPL.img/HiddenCatch/StageImg/clear", 0, 0, -200, 1, 0, 0, 0, 0, 0);
cm.inGameDirectionEvent_Effect("UI/UIWindowPL.img/HiddenCatch/StageImg/fail", 0, 0, -200, 1, 0, 0, 0, 0, 0);
// 屏幕中间显示文字，而且要玩家触发：[文字] [0不中断，1中断]
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
// 召唤NPC [ID] [X] [Y] [是否开启移动]
cm.npc_ChangeController(3000106, 500, 20, 1); //D5 F8 86 01
cm.npc_SetSpecialAction(3000106, "summon");
// NPC往右走 ID 0左1右 距离 速度
cm.npc_SetForceMove(3000107, 1, 600, 100);
// npc挂了
cm.npc_SetSpecialAction(3000123, "die1", 1);
// 放视频
cm.playVideoByScript("kaiser.avi");
// 屏蔽/解锁 剧情其他玩家
cm.setStandAloneMode(false);
// 屏蔽/解锁操作台 [true锁/false解] [true有黑边/false无黑边] [是否高优先级，会遮挡对话框]
// 解锁时，第二个参数如果是true，会解除所有缩放
cm.setInGameDirectionMode(true, false, false);
// 播放BGM
cm.fieldEffect_PlayBGM("Bgm34/TheFairyForest");
// 静音
cm.fieldEffect_PlayBGM("Bgm00/Silence");
// 变成无面人
ms.inGameDirectionEvent_SetFaceOff(1, 300); //0x10
// 镜头移动加上缩放，单独占用一次迭代 [移动耗时] [缩放比例，标准1000，越大越放大] [动画耗时] [x] [y]
ms.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -850, 140);
// 切换NPC动画状态，详见蘑菇城 [NPCID] [状态序号，从0开始] [是否重复]
cm.npc_SetSpecialState(1302114, 2, 0);
// 换表情？
cm.effect_Direction("Effect/Direction4.img/cannonshooter/face01");
// 浮在头上的文本，浅灰色背景
cm.balloonMsg("balloonMsg", 100, 100);
// 浮在头上的文本，金框粉底
cm.effect_NormalSpeechBalloon("参数1", 2000, 4);
// 屏幕变黑，只有周围有光
cm.effect_Lightness(false);
// 改变玩家表情
cm.emotion(int expression, int duration)
// 地图中央横幅效果
cm.getWeatherEffectNotice("文字", id, 2000, 1);
// 添加固化额外UI [必须0？] [UI ID] [UI路径]
cm.PQ_EFFECT(0, 100161, "UI/UIWindowEvent.img/starDust_Adventure", 0, 0);
// 完成成就 [ID] [?]
cm.finishAchievement(1,2);

function o文字特效() {}
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
#fNpc/1500011.img/stand/0# NPC图片
 */

function map地图效果() {}
[陨石数量][延时，越大越慢][类型 1 = 绿陨石 7 = 开始有蓝陨石]
qm.obtacleFall(count, type1, type2)

function o功能类方法() {}
// 删除技能
qm.teachSkill(skill[level - 1], -1, 0);
function randomNum(minNum, maxNum) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * minNum + 1, 10);
		break;
	case 2:
		return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
		break;
	default:
		return 0;
		break;
	}
}

function o特殊符号() {}
●⊙⊕◎★☆
⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇
 ? ①②③④⑤⑥⑦⑧⑨⑩
㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩
◆◇
·⊙①？◎Θ⊙●○¤㊣㈱ @ の■□★☆◆◇◣◢◤◥▲△▼▽⊿◢
▂▃▄▅▆▇█▉▊▋▌▍▎▏■▓回□〓≡
↑↓→←↘↙♀♂┇┅‖$ @  *  &  # ※卍卐∞Ψ§∮№⌒ *
± + -×÷∧∨∑∏∪∩∈√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∶ ∵∴∷♂♀°′″℃$¤￠￡‰§№☆★〇○●◎◇◆ 回
‘’“”〝〞〔〕〈〉《》「」『』〖〗【】()[]{
	｝︻︼﹄﹃
	─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛
	├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋
	═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╳╔ ╗╝╚ ╬ ═ ╓ ╩ ┠ ┨┯ ┷┏ ┓┗ ┛┳⊥﹃﹄┌╭╮╯╰
