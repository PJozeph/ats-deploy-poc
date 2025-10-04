import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooService } from './foo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ats-ui';

  private fooService$: FooService = inject(FooService);
  hello$ = this.fooService$.getHello();

}
