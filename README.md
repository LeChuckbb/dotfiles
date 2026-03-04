# Dotfiles

zsh, ghostty, Claude Code 설정 동기화

---

## 첫 설치

```bash
# 저장소 클론
git clone https://github.com/LeChuckbb/dotfiles.git ~/.dotfiles

# Zsh & Ghostty
ln -sf ~/.dotfiles/.zshrc ~/.zshrc
ln -sf ~/.dotfiles/ghostty-config ~/Library/Application\ Support/com.mitchellh.ghostty/config

# Claude Code
ln -sf ~/.dotfiles/claude/CLAUDE.md ~/.claude/CLAUDE.md
ln -sf ~/.dotfiles/claude/AUGMENTED.md ~/.claude/AUGMENTED.md
ln -sf ~/.dotfiles/claude/settings.json ~/.claude/settings.json

mkdir -p ~/.claude/commands
ln -sf ~/.dotfiles/claude/commands/aug ~/.claude/commands/aug

mkdir -p ~/.claude/skills
for dir in ~/.dotfiles/claude/skills/*/; do
  ln -sf "$dir" ~/.claude/skills/"$(basename "$dir")"
done

source ~/.zshrc
```

---

## 업데이트

```bash
cd ~/.dotfiles && git pull

# 새 skill 추가된 경우만
for dir in ~/.dotfiles/claude/skills/*/; do
  [ ! -e ~/.claude/skills/"$(basename "$dir")" ] && ln -sf "$dir" ~/.claude/skills/"$(basename "$dir")"
done
```

---

## 문제 해결

**skills 안 보일 때:**

```bash
ls -la ~/.claude/skills/  # 상태 확인
```

올바른 구조:
```
~/.claude/skills/
├── composition-patterns -> ~/.dotfiles/claude/skills/composition-patterns/
├── frontend-dev-guidelines -> ~/.dotfiles/claude/skills/frontend-dev-guidelines/
├── prd-writer -> ~/.dotfiles/claude/skills/prd-writer/
├── react-best-practices -> ~/.dotfiles/claude/skills/react-best-practices/
└── web-design-guidelines -> ~/.dotfiles/claude/skills/web-design-guidelines/
```

잘못된 구조 (skills 안에 skills 링크):
```
~/.claude/skills/
└── skills -> ~/.dotfiles/claude/skills   # ❌
```

**수정:**
```bash
# 잘못된 링크 제거
[ -L ~/.claude/skills/skills ] && rm ~/.claude/skills/skills

# 개별 링크 재설정
for dir in ~/.dotfiles/claude/skills/*/; do
  name=$(basename "$dir")
  [ -d ~/.claude/skills/"$name" ] && [ ! -L ~/.claude/skills/"$name" ] && mv ~/.claude/skills/"$name" ~/.claude/skills/"$name".backup
  ln -sf "$dir" ~/.claude/skills/"$name"
done
```

> **Note**: skills는 폴더 전체 링크 대신 개별 링크 사용 (Claude Code 업데이트 안전 + 로컬 skill 혼용 가능)
