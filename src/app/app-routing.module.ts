import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from "./companies/companies.component";

const routes: Routes = [{path: 'company', component: CompaniesComponent},
  {path: '', redirectTo: 'company', pathMatch: 'full'},
  {path: '**', redirectTo: 'company', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
