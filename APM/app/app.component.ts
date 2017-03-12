




// external functions or class, 3rd party, our exported stuff or modules from Angular2
import { Component } from '@angular/core';

// decorator (function) defines metadata
@Component({
    // properties
    // directive name to be used in HTML
    selector: 'pm-app', 
    // view layout
    template: '<div><h1>{{pageTitle}}</h1><div>First Component</div></div>'
})

// class signature
export class AppComponent {
    pageTitle: string = 'ACME Product Management'

 }
