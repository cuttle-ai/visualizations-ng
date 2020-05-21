import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VisualizationsModule } from "../../../visualizations/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, VisualizationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
