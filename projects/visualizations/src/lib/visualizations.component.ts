import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import InitVisualizations from "@cuttleai/visualizations";
import QueryResult from "@cuttleai/visualizations/lib/models/query";

@Component({
  selector: "lib-visualizations",
  template: `<div><div id="cuttle-visualization" *ngIf="visible"></div></div>`,
  styles: [],
})
export class VisualizationsComponent implements OnInit, OnChanges {
  @Input()
  queryResult: QueryResult;

  /**
   * visible indicates whether the visualization is visible
   */
  visible: boolean;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.visible = false;
    setTimeout(
      this.renderAfter.bind(this, changes.queryResult.currentValue),
      200
    );
  }

  renderAfter(queryResult: QueryResult) {
    this.visible = true;
    setTimeout(() => {
      InitVisualizations("cuttle-visualization", queryResult);
    }, 200);
  }
}
