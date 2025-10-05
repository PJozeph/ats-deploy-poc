import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  private httpClient: HttpClient = inject(HttpClient);

  getHello() {
    return this.httpClient.get<string>('https://ats-api-1041765018913.europe-central2.run.app/');
  }
}
