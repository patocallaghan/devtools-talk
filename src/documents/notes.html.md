---
title: "Notes"
layout: "default"
---

#Know your DevTools Notes

If you're like me you spend a vast majority of you day working in the browser and
its devtools. My particular poison is Chrome, but Firefox/Safari/IE to a lesser
degree have a lot of the same features, or more. To some people these things may be
trivial and obvious but if you get a least one trick from this list I'll be happy.
This will mainly just be a quick-fire list of things I find useful almost daily.
Apologies to all windows users but any shortcuts I'll be talking about will be for
Mac but they are all transferable to Windows if you know the specific incantation.

### SEARCHING

Lots of useful ways to find things in your code.
* Go to Line Number - If you know the particular number you want to go to then Ctrl + G & Line number
* Elements Tab: Search By Selector and Text - `#modify`, `li button` Cmd + f
* Search single file - CMD + F `downTheRabbitHole` and Enter to cycle through them
* Search all files - Search across all files in your codebase. CMD + ALT + F `button`. Clicking on result opens it up in your preview pane
* Fuzzy Search - I use this an awful lot. It's like the fuzzy finder which you'll find in various text editors.
  * Files - CMD + O or P. Search the path and filename. Can be activated on any tab. Hit enter to open the file. `script`
  * Functions - CMD + Shift + P When you have the file you want, using this is a fuzzy finder to your functions within that file

___

##CSS

###States

You can easily force the state of an element use either this checkbox or right
clicking on the element. This comes in handy when you want to style either certain
styles, or even combinations of styles. A good example would be an active and a hover state.

<button class="button-xxxlarge pure-button"></button>

___

### Animations

CSS Animations can be a tricky thing to get right so the animation editor is pretty
handy for tweaking animations until their right. Here I have a button which simply 
updates its left position on click. There are several (boring) in-built easings
but you can also customise the easing based on a bezier curve. You can also
the speed or disable the animation entirely.

<a class="pure-button pure-button-primary demo-animation">Click Me!</a>

___

###Getting colors

Say you have a color in a weird format, using Shift+Click you get the versions of
color you are interested in. You can also tweak the color and opacity by clicking
on the color

<div class="demo-color"></div>

___

##ELEMENTS
The Elements panel is the live view of your DOM.

* Scroll into View - if you have an element selected but you can't see it, but 
would like to get it into view, right-click and select "scroll into view"
* Hide element - A handy little trick if you are investigating CSS or DOM related
performance problems, or just want to make something disappear, just press "h"
on any element and the element will disappear.
* <button id="toggle" class="pure-button button-success">Toggle Class</button> + <button id="modify" class="pure-button">Modify Date</button>

    **DateTime**: <span id="modify-content"></span>

    if you find that some code is editing a certain element or attribute but you're
    not entirely sure what is doing it, "Breaking on subtree modifications" will
    will help you. Break on attribute modification, have a simple button which 
    toggles between an error and success class. Break on subtree modification will
    halt on the code which modifies any content within the selected element
* Event Listeners - You can also see what events are registered on an element as
  stopping execution on the event POSSIBLY REMOVE THIS
___

##CONSOLE

The console which we all should know is this little area down here. You type JS in, hit enter and it magically evaluates whatever you typed. Chrome implements two APIs for working in the Console. The Command Line API and the Console API. I find I spend a lot of my day doing various bits and bobs in here.

### COMMAND LINE API
Selection of useful functions for carrying out common tasks. Whereas Console API can be called from a script the Command Line API can only be used in the console itself.

* `$_` - returns the most recently evaluated expression. 
* `$0`, `$1`, `$2`.....`$4` - The Command Line API remembers the last 5 DOM elements you had selected in the Elements panel. `$0` being the most recent. Useful for interacting with the DOM properties of the element. `innerHTML`, `nodeType` etc Shows HTML view. Vice-versa, right-click to reveal in the Elements panel.
* `dir` - Dir is an alternative function for viewing a DOM element. While $n shows the HTML view, dir shows the DOM Object view. Just pass it the element you want to expand.
* Temporary variables. It's not the Command Line API as such but its a handy feature all the same. Another handy little feature is creating temp variable just by using your mouse. Click on whatever object you want to create a reference for right-click and you now have a temp variable which you can work with.
* `copy($0)` - Allows you to copy text to your clipboard. Works well in tandem with the temporary globals and `$_` function. `window['demo_api']`, create temp var and then `copy($_)`, copy and paste
* `table` - used to output object data in a more readable format. 
* `monitorEvents` - Quickly monitor any events which occur on an element. You mightn't know exactly what code is being run when an event on an element, helps you narrow it down. `monitorEvents(object, event)`, e.g. `monitorEvents($0, 'keydown)`. `unmonitorEvents` turns it back off. Handy for working out keycodes from inputs

### CONSOLE API
While Command Line API is only accessible by typing into the console. The Console API is a set of functions which while you can type into your console, you can also insert into your code. We all know console.log('Biscuits!'). There are other lines but really the only one that I personally use is:
* `console.trace()` - produces a stack trace. Useful if debugging an issue and you know a function is being called but you can't work out from where.
* `debugger` -  Stops the script execution and allows you to step through your code, and view its current state. If there's a single thing which you guys could take away from this talk is to get away from the idea of littering your code with `console.log`. There's sometimes still value in that but the debugger is much more powerful. Do yourselves a favour and give it a go.
___

## SCRIPTS

### DEBUGGER

* Inline local variables - view the live state of local variables
* Step in/out/over
* Conditional breakpoints - one pain point of breakpoints is you have one in some code called in a loop. Conditional breakpoints are great as they only stop the script execution if your conditional asserts true. value === 9
* Live editing - `var temp = value * 2`;
* Blackbox scripts - Another annoying thing is if you want to step into a function which takes a function call to another library as a parameter. You aren't interested in that bit of code but would rather just drop into the function you're interested in. You want to drop inside `showTotal` but you'll drop inside `jQuery` first as it's evaluated first. Blackboxing a script allows you to say never drop down into this file when debugging. Usually 3rd party vendor files.
* Call stack with local context
* Selective code execution - Ctrl + Shift + E
* Break on error - If you have an error in your code, you can trap it and look at the current state when the error occurs

___

## MISCELLANEOUS - POSSIBLY REMOVE THIS SECTION

* Preserve log upon navigation - 
* Share timeline
* Console styling

## WRAP UP

While some people invest a lot of time setting up their editor and becoming really productive using it, it also pays to know the ins and outs of your devtools of choice.

10 Tips & Tricks
1. Searching: Go to Line Number || Fuzzy Search
2. Force CSS State
3. Scroll into View
4. Break on...: Attributes and subtree modifications
5. Command Line API: `$_`, `$0`....`$4`
6. Temp variables and `copy`
7. console.trace()
8. USE THE DEBUGGER!!
9. Blackbox Scripts
10.Conditional Breakpoints
