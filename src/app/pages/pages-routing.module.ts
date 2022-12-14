import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SpeakerComponent} from './speaker/speaker.component';
import { SpeechComponent } from './speech/speech.component';
import { HistorySpeechComponent } from './history-speech/history-speech.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'speaker',
      component: SpeakerComponent,
    },
    {
      path: 'speech',
      component: SpeechComponent,
    },
    {
      path: 'histo-speech',
      component: HistorySpeechComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
