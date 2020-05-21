import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "visualizations-example";
  query = {
    tables: {
      "e403ca10-f7e5-4ad1-8401-0ef6c330a9ae": {
        UID: "e403ca10-f7e5-4ad1-8401-0ef6c330a9ae",
        Word: [],
        PUID: "00000000-0000-0000-0000-000000000000",
        PN: null,
        Name: "table_e403ca10-f7e5-4ad1-8401-0ef6c330a9ae",
        Children: [],
        Resolved: false,
        DefaultDateFieldUID: "ef97b338-fe1b-466d-9398-3ac69506d397",
        DefaultDateField: {
          uid: "ef97b338-fe1b-466d-9398-3ac69506d397",
          word: "Order Date",
          puid: "00000000-0000-0000-0000-000000000000",
          name: "5",
          type: "Column",
          aggregation_fn: "COUNT",
          data_type: "DATE",
          description: "",
          date_format: "1/2/2006",
        },
        Description: "",
        DatastoreID: 2,
      },
    },
    select: [
      {
        uid: "458357e6-56be-4ce6-85ae-e10ebf765c3c",
        word: "Total Cost",
        puid: "e403ca10-f7e5-4ad1-8401-0ef6c330a9ae",
        name: "12",
        resolved: true,
        type: "Column",
        aggregation_fn: "SUM",
        data_type: "FLOAT",
        description: "",
        date_format: "",
      },
    ],
    group_by: [
      {
        uid: "535195a5-1e2b-4683-b6e8-7a3378595759",
        word: "Region",
        puid: "e403ca10-f7e5-4ad1-8401-0ef6c330a9ae",
        name: "0",
        resolved: true,
        type: "Column",
        dimension: true,
        aggregation_fn: "COUNT",
        data_type: "STRING",
        description: "",
        date_format: "",
      },
    ],
    filters: [
      {
        uid: "Operator-T0",
        word: "since",
        column: {
          uid: "ef97b338-fe1b-466d-9398-3ac69506d397",
          word: "Order Date",
          puid: "00000000-0000-0000-0000-000000000000",
          name: "5",
          resolved: true,
          type: "Column",
          aggregation_fn: "COUNT",
          data_type: "DATE",
          description: "",
          date_format: "1/2/2006",
        },
        time: {
          uid: "T0",
          word: "since 2017",
          resolved: true,
          value: {
            from: {
              value: "2017-01-01T00:00:00.000-08:00",
            },
            type: "interval",
          },
          type: "Time",
        },
        resolved: true,
        type: "Operator",
        operation: ">=",
      },
    ],
    result: [
      {
        "0": "Middle East and North Africa",
        "12": "2.3401886e+06",
      },
      {
        "0": "Sub-Saharan Africa",
        "12": "1.191911474e+07",
      },
      {
        "0": "Central America and the Caribbean",
        "12": "1.1594900879999999e+07",
      },
      {
        "0": "Australia and Oceania",
        "12": "1.026523668e+07",
      },
      {
        "0": "Asia",
        "12": "5.4699779799999995e+06",
      },
      {
        "0": "North America",
        "12": "4.85430512e+06",
      },
      {
        "0": "Europe",
        "12": "2.0501607169999998e+07",
      },
    ],
    metrics: [
      {
        resource_id: "458357e6-56be-4ce6-85ae-e10ebf765c3c",
        display_name: "Total Cost",
        name: "12",
      },
      {
        resource_id: "535195a5-1e2b-4683-b6e8-7a3378595759",
        display_name: "Region",
        name: "0",
        dimension: true,
      },
    ],
    type: "LINECHART",
    title: "Line Chart",
    description: "Total Cost across Region",
  };

  setType(type: string) {
    this.query = Object.assign({}, this.query, { type });
  }
}
