import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OralExaminationProtocolComponent} from "./components/oral-examination-protocol/oral-examination-protocol.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/oral-examination-protocol',
    pathMatch: 'full'
  },
  {
    path: 'oral-examination-protocol',
    component: OralExaminationProtocolComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
