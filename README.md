# about this repo

zsh(oh-my-zsh), ghostty, Claude Code 설정을 여러 환경에서 동기화하는 목적

# how to use

- Claude Code를 먼저 설치

``` bash
# dotfiles 저장소 클론
git clone https://github.com/LeChuckbb/dotfiles.git ~/dotfiles

# Oh My Zsh 설치 (아직 안 했다면)
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# plugin 설치
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# 설정 파일들 심볼릭 링크 생성
ln -sf ~/.dotfiles/.zshrc ~/.zshrc
ln -sf ~/.dotfiles/ghostty-config ~/Library/Application\ Support/com.mitchellh.ghostty/config
ln -sf ~/.dotfiles/claude ~/.claude

# 설정 적용
source ~/.zshrc

```
