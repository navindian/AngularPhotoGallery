

# Angular Photo Gallery Application

## Steps to setup Angular Environment in you system:
1.	Clone the project:<br />
    i.	 Go to the repository page<br />
    ii.	 Press Clone or Download<br />
    iii. Open in Desktop-open GitHub Desktop<br />
    iv.  Give the local path where you want to clone<br />
    v.   Clone<br />
2.	Open the project folder in VS Code<br />
3.	If you have angular installed in your machine, Run<br />
    i.   ng v (or) ng --version (to check whether angular is installed)<br />
    ii.  npm install (to install node modules)<br />
    iii. ng serve –open (to run the application)<br />
4.	If you do not have Angular installed in your machine, Run the following commands to setup<br />
    i.	For Infosys Network:<br />
        •	You can follow the commands in lex here<br />
        https://lex.infosysapps.com/viewer/web-module/lex_9265820785721616000?collectionId=lex_auth_01276298015181209618&collectionType=Course&viewMode=RESUME<br />
    ii.	For Personal Assets:<br />
        •	To install node visit https://nodejs.org/en/download/ and download<br />
        •	Run node -v (or) node --version <br />
        To check whether node is installed<br />
        •	Set the environmental path variable <br />
        Click on "New" button in "Edit Environment Variable" popup, and enter the path, where NPM is installed<br />
        for example<br />
        C:\Users\Logged-In-User-Id\AppData\Roaming\npm<br />
        •	Now run the following command to install angular cli<br />
        npm install -g @angular/cli<br />
5.	If npm install is successful then run <br />
	ng serve --open  to execute and open the browser window.<br /><br />


## To setup backend environment:

    •	After cloning 
    •	Install MongoDB in your system:
    •	Download MongoDB from
    https://www.mongodb.com/download-center/community
    •	Set the environment path variable
    Click on “New” button in “Edit Environment Variable” popup, and enter the path, where mongoDB’s bin folder is present.
    For example:
    C:\Program Files\MongoDB\Server\4.2\bin
    •	Go to extensions in Visual Studio Code and Install
    Azure Cosmos DB
    •	 After installing a triangular icon of Azure will appear on left sidebar. Click on it.
    •	Click Attach database account
    •	Select Azure for mongo API
    •	A connection string “mongodb://127.0.0.1:27017” will appear by default. Click enter
    •	Go into Photogallery-authentication folder and run
    npm install
    •	If no error occurs Proceed and run npm start


## Common Errors and FAQs:
1.	Facing Error during ng serve<br />
=>Data path ".builders['app-shell']" should have required property 'class'.<br />
=>Cannot find module '@angular/compiler-cli/ngcc'<br />
=>Could not find the implementation for builder @angular-devkit/build-angular:dev-server<br />
Solution: Run these commands<br />
	npm uninstall @angular-devkit/build-angular<br />
	npm install @angular-devkit/build-angular@0.13.0<br />










# Sample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
