﻿/*
 Made by Kent
 */
        var status = -1;
var itemList = Array(
        Array(5000217, 5, 2, 0),
        Array(1802354, 0, 1, 0));
function start() {
    var chance = Math.floor(Math.random() * 10);
    var finalitem = Array();
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i][1] >= chance) {
            finalitem.push(itemList[i]);
        }
    }
    if (finalitem.length != 0) {
        im.removeItem(2430690);
        var random = new java.util.Random();
        var finalchance = random.nextInt(finalitem.length);
        var itemId = finalitem[finalchance][0];
        var quantity = finalitem[finalchance][2];
        var notice = finalitem[finalchance][3];

        im.gainItem(itemId, quantity);

    }
    im.dispose();
}