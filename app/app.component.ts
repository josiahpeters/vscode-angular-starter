// using statement
import {Component} from 'angular2/core';

// Component is a decorator function that takes a metadata object. The metadata tell Angular how to create and use this component.
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><p>With Visual Studio Code</p>'
})
export class AppComponent { }