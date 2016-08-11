%title: A Life on a Commandline 
%author: @ryyppy
%date: 2016-08-11

-> CAN WE FINALLY SEE SOME ACTION? <-
=========

-> Yep. <-


-------------------------------------------------

-> Unix Philosophy <-
=========

<br>
\* As much plain text as possible 
<br>
\* Huge set of small tools
<br>
\* Each tool can do one thing well
<br>
\* stdin, stderr, stdout and retcode
<br>
\* I/O redirecting (\>) + Piping (|)
<br>
\* Node.js? \*hint\* \*hint\*
<br>


-> *Everything in Linux / BSD is built around that!* <-
<br>
-> *(and also f'ing old...)* <-

-------------------------------------------------

-> Shell <-
=========

* *zsh*, bash, sh,...
* Easy to centralize dotfiles (.zshrc, .tmux.conf, etc.)
* Easy to build utility scripts / aliases ($PATH) 
* Easy to adapt config for different Unix environments
* Huge potential for customization! (colors, etc.)
* We should know its history (a lot of hidden gems) 

-> *BUT: text-only has its limitations* <-

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
