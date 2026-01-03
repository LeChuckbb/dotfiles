# about this repo

zsh(oh-my-zsh), ghostty, Claude Code 설정을 여러 환경에서 동기화하는 목적

# how to use

## 첫 설치 (Initial Setup)

### 1단계: Claude Code 설치

Claude Code가 설치되지 않았다면 먼저 설치합니다.

### 2단계: 저장소 클론 및 환경 구성

```bash
# dotfiles 저장소 클론
git clone https://github.com/LeChuckbb/dotfiles.git ~/.dotfiles

# Oh My Zsh 설치 (선택사항 - 아직 안 했다면)
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Zsh 플러그인 설치 (선택사항)
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### 3단계: 심볼릭 링크 설정

```bash
# Zsh & Ghostty 설정
ln -sf ~/.dotfiles/.zshrc ~/.zshrc
ln -sf ~/.dotfiles/ghostty-config ~/Library/Application\ Support/com.mitchellh.ghostty/config

# Claude Code 설정 파일
ln -sf ~/.dotfiles/claude/CLAUDE.md ~/.claude/CLAUDE.md
ln -sf ~/.dotfiles/claude/PRINCIPLES.md ~/.claude/PRINCIPLES.md
ln -sf ~/.dotfiles/claude/RULES.md ~/.claude/RULES.md
ln -sf ~/.dotfiles/claude/AUGMENTED.md ~/.claude/AUGMENTED.md
ln -sf ~/.dotfiles/claude/settings.json ~/.claude/settings.json
ln -sf ~/.dotfiles/claude/skills ~/.claude/skills
ln -sf ~/.dotfiles/claude/agents ~/.claude/agents

# Claude Code commands (경로 단축)
mkdir -p ~/.claude/commands
ln -sf ~/.dotfiles/claude/commands/sc ~/.claude/commands/sc
ln -sf ~/.dotfiles/claude/commands/aug ~/.claude/commands/aug

# 설정 적용
source ~/.zshrc
```

---

## 업데이트 (Update / Re-sync)

최신 변경사항을 반영할 때는 다음만 실행:

```bash
# 최신 설정 가져오기
cd ~/.dotfiles && git pull

# 심볼릭 링크 재생성
ln -sf ~/.dotfiles/.zshrc ~/.zshrc
ln -sf ~/.dotfiles/ghostty-config ~/Library/Application\ Support/com.mitchellh.ghostty/config

mkdir -p ~/.claude/commands
ln -sf ~/.dotfiles/claude/CLAUDE.md ~/.claude/CLAUDE.md
ln -sf ~/.dotfiles/claude/PRINCIPLES.md ~/.claude/PRINCIPLES.md
ln -sf ~/.dotfiles/claude/RULES.md ~/.claude/RULES.md
ln -sf ~/.dotfiles/claude/AUGMENTED.md ~/.claude/AUGMENTED.md
ln -sf ~/.dotfiles/claude/settings.json ~/.claude/settings.json
ln -sf ~/.dotfiles/claude/skills ~/.claude/skills
ln -sf ~/.dotfiles/claude/agents ~/.claude/agents
ln -sf ~/.dotfiles/claude/commands/sc ~/.claude/commands/sc
ln -sf ~/.dotfiles/claude/commands/aug ~/.claude/commands/aug

# 설정 적용
source ~/.zshrc
```
