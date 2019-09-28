/*  This source is made by BMS Team
 *  脚本功能：[新手剧情]恶魔系列remake
 *  @Author 柠檬兔
 *  工具提供：Jessefjxm
 */

function action(mode, type, selection) {
ms.npc_ChangeController(2159328, "oid=242759", 141, 95, 1);
ms.npc_ChangeController(2159329, "oid=242760", 512, 95, 1);
ms.npc_ChangeController(2159330, "oid=242761", 372, 95, 1);
ms.setInGameDirectionMode(false, true, false);
ms.updateInfoQuest(23200, "click=0");
ms.updateInfoQuest(23201, "click=0");
ms.updateInfoQuest(23202, "click=0");
ms.updateInfoQuest(23200, "click=1");
ms.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon1");
ms.dispose();
}