import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "",
        pathMatch: "full",
        loadComponent() {
            return import("./todos/todos").then(m => m.Todos)
        }
    },
    {
        path: "counter",
        loadComponent() {
            return import("./home/home").then(m => m.Home);
        },
    }
];
