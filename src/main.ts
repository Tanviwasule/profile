// 
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // This wires up the routing
  ]
}).catch(err => console.error(err));
