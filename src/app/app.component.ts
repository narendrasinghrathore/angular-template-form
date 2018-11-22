import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-driven';

  model = {
    name: undefined,
    age: undefined
  };
  submitForm() {

    console.log(this.model);

  }
}
