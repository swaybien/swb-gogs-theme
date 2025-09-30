# SwayBien Team's Gogs Theme

> English | [简体中文](README.md)

## Usage

1. Download the theme files

   ```shellscript
   git clone --depth=1 https://github.com/swaybien/swb-gogs-theme.git
   ```

2. Link theme files and restart the service

   ```shellscript
   cp -uvr swb-gogs-theme/public path/to/your/gogs/custom/public
   cp -uvr swb-gogs-theme/templates path/to/your/gogs/custom/templates
   cp -uvr swb-gogs-theme/public path/to/your/gogs/public
   cp -uvr swb-gogs-theme/templates path/to/your/gogs/templates
   # docker compose restart gogs
   ```

3. Update the theme

   ```shellscript
   cd swb-gogs-theme
   git pull
   ```

## Contributing

[Contribution Guidelines](CONTRIBUTING.md)

## License

[Creative Commons Attribution-ShareAlike 4.0 International License](LICENSE)
