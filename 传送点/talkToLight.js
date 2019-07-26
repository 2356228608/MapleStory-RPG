/* RED 1st impact
 Explorer tut
 Made by Daenerys
 */
        function enter(pi) {
            if (pi.isAllReactorState(1008010, 5) == true) {
                pi.openNpc(10310);
            } else {
                pi.topMsg("涓??村???????剧??璇?锛???娉?绂诲???");
            }
        }
