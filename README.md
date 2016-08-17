#Visual Studio Code - Angular 2 starter app

### Setup

Before building the project with VS Code, we need to install all of our node packages.

From the command line (Admin) run:

    npm install

If you get the following error message:

    > npm ERR! peerinvalid The package @angular/core@2.0.0-rc.3 does not satisfy its siblings' peerDependencies requirements!

You will need to update npm first, now run the following commands from the command line:

    npm install npm -g
    npm install

### Build

Launch VS Code:

    code .
    
Build the project by pressing **CTRL+SHIFT+B**.

### Launch

Launch your Angular 2 application by pressing **F5**.

While debugging your application make a change to the template in the [app/app.component.ts](app/app.component.ts) file.

    template: '<h1>My First Angular 2 App</h1><p>With Visual Studio Code</p>'

Pressing **CTRL+SHIFT+B** again to compile your .ts files and your browser should show the updated changes you just made.