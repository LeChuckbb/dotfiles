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

export ANDROID_HOME=$HOME/Library/Android/sdk && export PATH=$PATH:$ANDROID_HOME/emulator && export PATH=$PATH:$ANDROID_HOME/platform-tools

ws() {
	open -a "WebStorm" "$1"
}

# Created by `pipx` on 2025-11-04 13:28:10
export PATH="$PATH:/Users/mac/.local/bin"

# Created by `pipx` on 2025-11-04 13:28:14
export PATH="$PATH:/Users/mac/Library/Python/3.9/bin"
