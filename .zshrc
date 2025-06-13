# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

ZSH_THEME="refined"

plugins=(
	git
	zsh-syntax-highlighting
	zsh-autosuggestions
)

source $ZSH/oh-my-zsh.sh

export PATH="/opt/homebrew/opt/node@18/bin:$PATH"
export PATH="/Applications/WebStorm.app/Contents/MacOS:$PATH"

ws() {
	open -a "WebStorm" "$1"
}

# pnpm
export PNPM_HOME="/Users/pjw/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
