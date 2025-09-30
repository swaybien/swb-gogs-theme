# SwayBien 团队的 Gogs 主题

> [English](README.en.md) | 简体中文

## 使用方法

1. 下载主题文件

   ```shellscript
   git clone --depth=1 https://github.com/swaybien/swb-gogs-theme.git
   ```

2. 链接主题文件并重启服务

   ```shellscript
   cp -uvr swb-gogs-theme/public path/to/your/gogs/custom/public
   cp -uvr swb-gogs-theme/templates path/to/your/gogs/custom/templates
   cp -uvr swb-gogs-theme/public path/to/your/gogs/public
   cp -uvr swb-gogs-theme/templates path/to/your/gogs/templates
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
