# EHIContactApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Project Structure
Total number of components: 4

<ul>
<li>home - This component provides the implementation and functional details.</li>
<li>app-view - This componenet is resposible for viewing/listing all the default + new contacts created.</li>
<li>add-contact - This component is responsible for adding new contact.</li>
<li>edit-contact - This component is responsible for editing/modifying selected contact.</li>
</ul>

Total number of service(s): 1
<ul>
  <li>manage-contact.service - This service is the main service that has the data(JSON) of contacts and all the CRUD operations are defined inside this service. A singleton object of this service is provided within the application using Dependency Injection.</li>
</ul>

Total number of model(s): 1
<ul>
  <li>contact.model - This model is used for defining the structure for each Contact. i.e id, firstname, lastname, email, phone, status should be the part of each contact in the application.</li>
</ul>

## Development server
Step 1: Download the above sourcecode and extract it the required location.<br>
Step 2: Open CMD/terminal and install latest angular CLI version using `npm install -g @angular/cli`<br>
Step 3: Run `npm init` to install all the required packagaes.<br>
Step 4: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
