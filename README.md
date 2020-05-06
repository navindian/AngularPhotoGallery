

Angular Photo Gallery Application

Steps to setup Angular Environment in you system:
1.	Clone the project:
    •	Go to the repository page
    •	Press Clone or Download
    •	Open in Desktop-open GitHub Desktop
    •	Give the local path where you want to clone
    •	Clone
2.	Open the project folder in VS Code
3.	If you have angular installed in your machine, Run
    •	ng v (or) ng --version (to check whether angular is installed)
    •	npm install (to install node modules)
    •	ng serve –open (to run the application)
4.	If you do not have Angular installed in your machine, Run the following commands to setup
    i.	For Infosys Network:
        •	You can follow the commands in lex here
        https://lex.infosysapps.com/viewer/web-module/lex_9265820785721616000?collectionId=lex_auth_01276298015181209618&collectionType=Course&viewMode=RESUME
    ii.	For Personal Assets:
        •	To install node visit https://nodejs.org/en/download/ and download
        •	Run node -v (or) node --version 
        To check whether node is installed
        •	Set the environmental path variable 
        Click on "New" button in "Edit Environment Variable" popup, and enter the path, where NPM is installed
        for example
        C:\Users\Logged-In-User-Id\AppData\Roaming\npm
        •	Now run the following command to install angular cli
        npm install -g @angular/cli
5.	If npm install is successful then run 
	ng serve --open  to execute and open the browser window.


To setup backend environment:
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

    
Common Errors and FAQs:
1.	Facing Error during ng serve
=>Data path ".builders['app-shell']" should have required property 'class'.
=>Cannot find module '@angular/compiler-cli/ngcc'
=>Could not find the implementation for builder @angular-devkit/build-angular:dev-server
Solution: Run these commands
	npm uninstall @angular-devkit/build-angular
	npm install @angular-devkit/build-angular@0.13.0










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
