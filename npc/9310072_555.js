/*  This is mada by 娜娜    
 *  This source is made by BMS Team
 *  脚本功能：满技能功能
 *  @Author 娜娜 
 */

var status;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var selStr = "#r - GM清理和满技能功能 #k\r\n #L0#清理技能#l #L2#加满技能#l";
            //  cm.askMenu("#r - GM清理和满技能功能 #k\r\n #L0# 清理技能 #L1# 加满技能");
            if (cm.getJob() == 4002 || cm.getJob() >= 4200 && cm.getJob() <= 4212) {
                selStr += "\r\n #L0#清理技能#l #L1#加满技能#l";
            }
            cm.askMenu(selStr);
        } else if (status == 1) {
            cm.playerMessage("当前选择 " + selection);
            switch (selection) {
                case 0:
                    cm.clearSkills();
					cm.dispose();
                    break;
                case 1:
                    cm.clearSkills();
                    cm.maxSkillsByJob();
					cm.SetMaxHp(500000);
					cm.SetMaxMp(500000);
					cm.dispose();
                    break;
				case 2:
					if(cm.getJob() >= 112 && cm.getJob() <= 132){
						cm.maxAllSkills_战士(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() >= 212 && cm.getJob() <= 232){
						cm.maxAllSkills_魔法师(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() >= 312 && cm.getJob() <= 322){
						cm.maxAllSkills_弓箭手(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() >= 412 && cm.getJob() <= 434){
						cm.maxAllSkills_飞侠(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() >= 512 && cm.getJob() <= 532){
						cm.maxAllSkills_海盗(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 1112){
						cm.maxAllSkills_魂骑士(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 1212){
						cm.maxAllSkills_炎术士(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 1312){
						cm.maxAllSkills_风灵使者(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 1412){
						cm.maxAllSkills_夜行者(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 1512){
						cm.maxAllSkills_奇袭者(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 2112){
						cm.maxAllSkills_战神(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 2217){
						cm.maxAllSkills_龙神(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 2312){
						cm.maxAllSkills_双弩精灵(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 2412){
						cm.maxAllSkills_幻影(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 2512){
						cm.maxAllSkills_隐月(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 2712){
						cm.maxAllSkills_夜光法师(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 3112){
						cm.maxAllSkills_恶魔猎手(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 3122){
						cm.maxAllSkills_恶魔复仇者(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 3212){
						cm.maxAllSkills_唤灵斗师(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 3312){
						cm.maxAllSkills_弩豹游侠(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 3512){
						cm.maxAllSkills_机械师(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 3612){
						cm.maxAllSkills_尖兵(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 3712){
						cm.maxAllSkills_爆破手(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 4112){
						cm.maxAllSkills_剑豪(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 4212){
						cm.maxAllSkills_阴阳师(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 5112){
						cm.maxAllSkills_米哈尔(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 6112){
						cm.maxAllSkills_狂龙战士(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 6512){
						cm.maxAllSkills_爆莉萌天使(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 10112){
						cm.maxAllSkills_神之子(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 14212){
						cm.maxAllSkills_超能力者(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 15212){
						cm.maxAllSkills_圣晶使徒(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 6412){
						cm.maxAllSkills_魔链影士(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 15512){
						cm.maxAllSkills_影魂异人(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 332){
						cm.maxAllSkills_古迹猎人(cm.getJob());
						cm.dispose();
					}else if(cm.getJob() == 572){
						cm.maxAllSkills_龙的传人(cm.getJob());
						cm.dispose();
					}else{
						cm.dispose();
						cm.sendOk("\r\n\t#e#r请升级到4转再来找我!");
					}
                break;
			case 3:
                cm.Maxskillv5();
				cm.dispose();
				//cm.sendOk("\r\n\t#e#r找我!");
                break;
            }
        }
    }
}