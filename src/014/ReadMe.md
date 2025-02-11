# JavaScript QuickStarts

> *Using Node to run browser-less JavaScript files.*

1. Launch VS Code.
1. Open an external terminal (<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>c</kbd>) and `cd` to this folder.

    ```ps
    cd src/014
    ```

1. In VS Code, create a new JavaScript file called `flow-control.js` and place it in the `~/src/014/` folder.
1. In the external terminal, run the script file with Node's *watch flag*.

    ```ps
    node --watch flow-control.js
    ```

1. Now, every time you make edits to this script file, Node will re-run the code.
1. When you are done with all your edits, press <kbd>ctrl</kbd> + <kbd>c</kbd> within the terminal window to **c**ancel (stop) Node from watching/running your script.
