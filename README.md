# SwayBien 团队的 Gogs 主题

> [English](README.en.md) | 简体中文

## 更改和功能

- 替换图标和标题为随变图标和标题；
- 替换默认用户头像为火柴人头像；
- 基于 Darkmode.js 的深色模式和切换按钮；
- 基于 instant.page 的页面预加载功能。

## 使用方法

1. 下载主题文件

   ```shellscript
   git clone --depth=1 https://github.com/swaybien/swb-gogs-theme.git
   ```

2. 链接主题文件并重启服务

   ```shellscript
   cp -uvr swb-gogs-theme/public path/to/your/gogs/custom/public
   cp -uvr swb-gogs-theme/templates path/to/your/gogs/custom/templates
   # docker compose restart gogs
   ```

3. 更新主题

   ```shellscript
   cd swb-gogs-theme
   git pull
   ```

## 贡献

[贡献指北](CONTRIBUTING.md)

## 许可协议

[Creative Commons Attribution-ShareAlike 4.0 International License](LICENSE)

### 鸣谢

#### 项目

|     名称     | 协议                                   | 地址                                                                                       |
| :----------: | :------------------------------------- | :----------------------------------------------------------------------------------------- |
| darkmode.js  | [MIT license](https://mit-license.org) | [Github](https://github.com/sandoche/Darkmode.js)、[Website](https://darkmodejs.learn.uno) |
| instant.page | [MIT license](https://mit-license.org) | [Github](https://github.com/instantpage/instant.page)、[Website](https://instant.page)     |
