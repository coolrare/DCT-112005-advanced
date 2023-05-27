import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TableItem } from '../table-item';
import { map, switchMap } from 'rxjs';
import { TableService } from './table.service';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  route = inject(ActivatedRoute);
  httpClient = inject(HttpClient);
  tableService = inject(TableService);
  data: TableItem[] = [];

  data$ = this.route.queryParamMap
    .pipe(
      map((params) => +(params.get('num') || '10')),
      switchMap((num) => this.tableService.getData(num))
    );

  ngOnInit(): void {
    // ?a=b&c=d
    // this.route.queryParamMap
    //   .subscribe((params) => {
    //     console.log(params.get('num'));
    //     const num = +(params.get('num') || '10');
    //     this.setData(num);
    //   });
    // this.route.queryParamMap
    //   .pipe(
    //     map((params) => +(params.get('num') || '10')),
    //     switchMap((num) => this.tableService.getData(num))
    //   )
    //   .subscribe((result) => {
    //     this.data = result;
    //   });
  }

  // setData(num: number) {
  //   this.httpClient
  //     .get<TableItem[]>(
  //       'https://run.mocky.io/v3/53923ca1-98ac-4ce3-a47c-b0af3108de3e'
  //     )
  //     .subscribe((result) => {
  //       // this.data = result.slice(0, +(params.get('num') || '10'));
  //       this.data = result.slice(0, num);
  //     });
  // }
}
