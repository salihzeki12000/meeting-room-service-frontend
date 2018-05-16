import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import {MeetingComponent} from './main/meeting/meeting.component'
const routes: Routes = [
	{path: 'main', component: MainComponent},
	{path: 'meeting', component: MeetingComponent},
	{path: 'meeting/:id', component: MeetingComponent},
	{path: '', redirectTo: 'main', pathMatch: 'full'},
	{path: '**', component: MainComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule {
}