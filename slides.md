%title: A Life on a Commandline 
%author: @ryyppy
%date: 2016-08-11

-> A LIFE ON A COMMANDLINE <-
=========


-> *Introspection to a Keyboard-Driven Workflow* <- 







             by Patrick Stapfer (@ryyppy)

-------------------------------------------------

-> The Beginning (2010 - 2011) <-
=========

How I used to work:

<br>
- IDEs (IntelliJ)
- Notepad ++
- TextMate -> Sublime

- Other stuff
  - PuTTy (SSH-Terminal)
  - WinSCP (FTP-Client)
  - File Explorer
  - Browser,...
  - etc.

<br>
-> *GUI Interaction & Mouse slowed me down* <-

-------------------------------------------------

-> The Challenge <-
=========

- Don't be dependent on a GUI
- Learn to automate things efficiently
- Get keyboard driven
- Embrace the UNIX ways
- Be efficient with text manipulation
- Automated setup of my tools

-------------------------------------------------

-> The Tools <-
=========

<br>
- US Keyboard Layout
<br>
- iTerm2
  - tmux
  - NeoVim
<br>
- OSX
  - Alfred
  - Chrome


-------------------------------------------------

-> tmux <-
=========

-> Terminal multiplexer <-

<br>
- Process running a server
- Manages sessions & windows
- Interaction via tmux client
- Keeps running after terminal is closed

<br>
- Configured via ~/.tmux.conf
- Hotkey-driven
- Features command language

-------------------------------------------------

-> tmux <-
=========

-> Basic Usage (dependent on config!): <-

> prefix hotkey   *^J* (CTRL J)  (default *^B*)

Show help          *prefix* + *?*

New window           *prefix* + *C*
Horizontal pane      *prefix* + *-*
Vertical pane        *prefix* + *|*
Next pane            *prefix* + *J*
Previous window      *prefix* + *L*
Close pane | window  *prefix* + *X*

Enter copy-mode      *prefix* + *\[*
Paste buffer         *prefix* + *\]*

Detach session       *prefix* + *D*

-------------------------------------------------

-> vim / nvim <-
=========

-> My Personal Tool of Software Craftmanship <-

- Everything is plain text 
- Editor should be an extension of my hands 
- One tool for all editor needs
- Easy to learn, hard to master

-------------------------------------------------

-> vim / nvim <-
=========

-> *DEMO TIME* <-

-------------------------------------------------

-> Wrap Up <-
=========

- *Hard* time to do the transition
- Change has happen *at work*
- It was *super fun* to learn new old stuff
- Comfortable level of *abstraction*
- Learned a lot about *CS history*

-------------------------------------------------

-> Appendix <-
=========

*My dotfiles (dev setup):*
https://github.com/ryyppy/dotfiles

*Link to this presentation:*
https://github.com/ryyppy/life-on-cli

-------------------------------------------------

-> Encore Stuff <-
=========

More nerdiness in the next slides...

-------------------------------------------------

-> ZSH <-
=========

-> A better bash <-
<br>
-> *You probably use it already.* <-
<br>

-> Ever wondered how input navigation works? <-
<br>
-> Type *bindkey* for a list of shortcuts <-
<br>

##################################################

Different Keybinding Modes:

*Emacs-Mode (default)*   ->      bindkey -e
*VI-Mode*                ->      bindkey -v


-------------------------------------------------
-> ZSH <-
=========

-> *Emacs Mode* <-

> Special (meta) key: *^[*  (or ESC)

Begin of line             *^A*
End of line               *^E*
Word forward              *^[F*
Word back                 *^[B*
Delete word               *^[D*
Previous command          *^[P*
Next command              *^[N*

Undo                      *^_*

Clear Screen              *^L*

-------------------------------------------------

-> Some Interesting Google Keywords <-
=========

- zle zsh 
- bindkey
- sed command
- fzf zsh (fuzzy search)
