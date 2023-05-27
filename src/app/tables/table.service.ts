import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TableItem } from '../table-item';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  httpClient = inject(HttpClient);

  constructor() {}

  getData(num: number) {
    return this.httpClient
      .get<TableItem[]>(
        'https://run.mocky.io/v3/53923ca1-98ac-4ce3-a47c-b0af3108de3e'
      )
      .pipe(map((result) => result.slice(0, num)));
  }
}
