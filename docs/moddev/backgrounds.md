---
title: 背景添加
autoPrev: firstlabel
---

# 背景添加

::: warning 提示
本页面仍在施工，故内容不完整。
:::

没有背景图片的 Mod，不是一个好 Mod，而 DDLC 的画师为游戏制作了这么多背景，为什么不好好利用一下呢？

接下来，将介绍如何添加一个背景图片。

## 从梦开始的地方起步

在 Mod 脚本里，请在对话之前，输入如下内容：

```renpy
    scene bg residential_day with dissolve_scene_full
```

完整内容如下：

```renpy {4}
# /game/meet_monika.rpy
label meet_monika:
    
    scene bg residential_day with dissolve_scene_full
    
    mc "DDLC 太好玩了！"
    y "就是啊，Monika 多可爱啊！"
   
    return
```

此时运行代码，你应该可以看到完整的转场效果和自家门口的背景了。

## 那么刚刚加的代码啥意思？

（咕）
