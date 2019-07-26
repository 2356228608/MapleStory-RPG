function action(mode, type, selection) {
    cm.sendNext("今天天气视乎很晴朗。\r\n请记住我的工作号：" + "#r" + cm.getNpc());
    cm.safeDispose();
}