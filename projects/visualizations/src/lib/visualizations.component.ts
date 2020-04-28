import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import InitVisualizations from '@cuttleai/visualizations';
import QueryResult from '@cuttleai/visualizations/lib/models/query';

@Component({
  selector: 'lib-visualizations',
  template: `
    <div id="cuttle-visualization"></div>
  `,
  styles: []
})
export class VisualizationsComponent implements OnInit, OnChanges {

  @Input()
  queryResult: QueryResult;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    InitVisualizations('cuttle-visualization', changes.queryResult.currentValue);
  }

}
