import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QueryComponent } from './query/query.component';
import { SelectComponent } from './select/select.component';
import { ModifyUrlComponent } from './modify-url/modify-url.component';

const routes: Routes = [
  { path: 'modify-url', component: ModifyUrlComponent },
  { path: 'query', component: QueryComponent },
  { path: 'select', component: SelectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
