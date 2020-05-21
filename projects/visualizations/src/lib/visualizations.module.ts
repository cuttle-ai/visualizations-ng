import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VisualizationsComponent } from "./visualizations.component";

@NgModule({
  declarations: [VisualizationsComponent],
  imports: [CommonModule],
  exports: [VisualizationsComponent],
})
export class VisualizationsModule {}
