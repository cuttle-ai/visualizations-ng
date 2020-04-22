import { Component, OnInit, Input } from '@angular/core';
import InitVisualizations from '@cuttleai/visualizations';
import QueryResult from '@cuttleai/visualizations/lib/models/query';

@Component({
  selector: 'lib-visualizations',
  template: `
    <div id="cuttle-visualization"></div>
  `,
  styles: []
})
export class VisualizationsComponent implements OnInit {

  @Input()
  queryResult: QueryResult;

  constructor() { }

  ngOnInit() {
    InitVisualizations('cuttle-visualization', this.queryResult)
  }

}
