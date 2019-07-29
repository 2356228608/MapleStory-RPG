/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation version 3 as published by
 the Free Software Foundation. You may not use, modify or distribute
 this program under any other version of the GNU Affero General Public
 License.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
        /*	
         Author : 		kevintjuh93
         Description: 		Quest - Veteran Hunter
         Quest ID : 		29400
         */

        var status = - 1;
        function start(mode, type, selection) {
        status++;
                if (mode != 1) {
        qm.sendNext("Come back when you're ready.");
                qm.dispose();
                return;
        }
        if (status == 0)
                qm.askAcceptDecline("#v1142004# #e#b#t1142004##k\r\n\r - 时间限制30天\r-狩猎100000个怪物 ,只有处于您R级别或更高级别的怪物才被批准。\\r是否要测试您的技能以查看您是否有权查看此标题？");
                else if (status == 1) {
        qm.sendNext("当前排名\r\n1。#bmoole k:r538673 k怪物\r\n2。#bzeroquanta k:r111421 k怪物\r\n别忘了记录在每个月初重置。"); //TODO
        } else if (status == 2) {
        qm.sendNextPrev("我给你30天时间来达到你的狩猎目标。一旦你完成了，回来看看我。记住，你必须在规定的时间内回来见我才能被批准。此外，除非您先完成或放弃此挑战，否则您将被禁止尝试其他标题。");
        } else if (status == 3) {
        qm.forceStartQuest();
                qm.dispose();
        }
        }


function end(mode, type, selection) {
status++;
        if (mode != 1) {
if (type == 1 && mode == 0)
        return;
        else {
        qm.dispose();
                return;
        }
if (status == 0) {
qm.sendOk("Not coded yet.");
        qm.dispose();
}
}
}