import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "lazy",
    loadComponent: () =>
      import("./lazy/lazy.component").then((m) => m.LazyComponent),
  },
];
