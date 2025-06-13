# about this repo

zsh(oh-my-zsh), ghostty 설정을 여러 환경에서 동기화하는 목적

# how to use

``` bash
# dotfiles 저장소 클론
git clone https://github.com/yourusername/dotfiles.git ~/dotfiles

# Oh My Zsh 설치 (아직 안 했다면)
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 설정 파일들 심볼릭 링크 생성
ln -sf ~/dotfiles/.zshrc ~/.zshrc
ln -sf ~/dotfiles/oh-my-zsh-custom ~/.oh-my-zsh/custom

# Ghostty 설정 디렉토리 생성 후 링크
mkdir -p ~/.config/ghostty
ln -sf ~/dotfiles/ghostty-config ~/.config/ghostty/config

# 설정 적용
source ~/.zshrc

```
