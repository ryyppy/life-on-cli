%title: A Life on a Commandline 
%author: @ryyppy
%date: 2016-08-11

-> CAN WE FINALLY SEE SOME ACTION? <-
=========

-> Yep. <-

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

-> tmux <-
=========

-> Terminal multiplexer <-

* Server <--> Client architecture 

* Manages *Sessions*
  - Client connects to sessions
  - ... can create Windows
  - ... can create Panes

* *Session* contains:
  - Windows
  - Panes (split views)
  - Own copy buffer 

* Configured via ~/.tmux.conf
* Hotkey-driven
* Features command language

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

- Source Code is plain text
- Plain text needs to be manipulated
- We should know *HOW* our tools transform our code
- We should be *IN CONTROL* of our tools
- Period. 

-------------------------------------------------

-> vim / nvim <-
=========

- DEMO 1 - Simple Code Manipulation

- DEMO 2 - *flow-vim-quickfix* integration 

-------------------------------------------------

-> Some Interesting Google Keywords <-

* zle zsh 
* bindkey
* sed command
* fzf zsh (fuzzy search)
