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

# Claude Code 설정 파일 링크 (개별 파일/폴더만 동기화)
ln -sf ~/.dotfiles/claude/CLAUDE.md ~/.claude/CLAUDE.md
ln -sf ~/.dotfiles/claude/PRINCIPLES.md ~/.claude/PRINCIPLES.md
ln -sf ~/.dotfiles/claude/RULES.md ~/.claude/RULES.md
ln -sf ~/.dotfiles/claude/settings.json ~/.claude/settings.json
ln -sf ~/.dotfiles/claude/skills ~/.claude/skills
ln -sf ~/.dotfiles/claude/agents ~/.claude/agents
ln -sf ~/.dotfiles/claude/commands ~/.claude/commands

# 설정 적용
source ~/.zshrc

```
