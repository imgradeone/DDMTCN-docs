---
title: 准备工作
autoPrev: fontdl
---

::: warning 提示
本页面仍在施工，故内容不完整。
:::

# 准备工作

开始 Mod 开发前，需要做一些准备。

## Ren'Py SDK 6.99.12.4

DDLC 使用 Ren'Py 这款 awesome 的视觉小说引擎进行开发，因此制作 Mod 也就自然需要它了。

为避免 SDK 跨版本导致 Mod 兼容性问题，同时由于 DDLC 的 Ren'Py SDK 使用的就是 6.99.12.4 版本，请务必下载 Ren'Py SDK 6.99.12.4 进行 Mod 开发。

> 由于模板原因，中文模板暂不支持使用 Ren'Py SDK 7 进行开发，您可能需要考虑使用[这款改进过的英文模板](https://github.com/GanstaKingofSA/DDLCModTemplate2.0)，并自行配置，使字体支持中文。

**您可以点击 [这里](https://www.renpy.org/release/6.99.12) 前往 Ren'Py 官网并获取 Ren'Py SDK 6.99.12.4。** 选择版本时**直接点击绿色的按钮**即可。

> 一定要细说的话，Windows 系统下载 `.7z.exe` 版本，macOS 则为 `.dmg`，Linux 为 `.tar.bz2`。不确定的话可以直接下载 `.zip` 版本。  
> 顺便，Android 和 iOS 等手机端用户就别凑热闹了，Mod 的调试只能使用电脑（当然可以拿手机先写代码）（（（

## DDLC 游戏文件

既然是 DDLC Mod，肯定需要 DDLC 的文件才可以进行调试。

前往 [DDLC.moe](https://ddlc.moe) 或者 Steam 下载 DDLC 游戏本体，解压，**不要打开游戏**，先备用。

## 中文字体包

> 如果你使用英文模板，可以忽略这一步。

中文字体包的下载请查看 [这里](./fontdl)。

## 中文 Mod 模板 / 你想要的 Mod 模板

既然这里是中文 Mod 模板的官网，考虑下用用中文 Mod 模板呗（（（

我们这里提供了 3 种 DDLC Mod 模板，但只有中文模板预先配置好了中文开发相关内容。其它模板如需要使用中文，请自行配置。

接下来的教程以中文模板为主。

[中文模板](https://github.com/imgradeone/DDLCModTemplete-Chinese/releases) | [原版英文模板](https://github.com/Monika-After-Story/DDLCModTemplate) | [改良版英文模板](https://github.com/GanstaKingofSA/DDLCModTemplate2.0)

将模板文件解压到刚刚你解压 Ren'Py SDK 的文件夹里，或者在你指定的工程目录里。（默认情况下，是 `renpy-6.99.12.4-sdk`）

接下来，打开你存放原版 DDLC 游戏的文件夹，将游戏目录下 `game` 文件夹内的 `audio.rpa`、`images.rpa` 和 `fonts.rpa` 复制到工程文件夹（即你解压模板文件的地方）。（千万不要把 `scripts.rpa` 一并复制过去，会出现冲突）

将下载的中文字体包解压到工程的 `/game/mod_assets/font/` 文件夹下。

最后，在 Ren'Py SDK 里启动工程，如果正常运行，恭喜，你现在可以准备开发 Mod 了！

## 合适的文本编辑器

