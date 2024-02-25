import { Routes } from '@angular/router';
import {BookComponent} from "./page/book/book.component";

import {MainComponent} from "./page/main/main.component";

export const routes: Routes = [
      {path:'', component:MainComponent},
      {path:'book', component:BookComponent}

];
