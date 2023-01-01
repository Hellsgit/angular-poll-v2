import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PollSurveyComponent } from './components/poll-survey/poll-survey.component';
import { PollChartComponent } from './components/poll-chart/poll-chart.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { PollFormModule } from './components/poll-form/poll-form.module';

@NgModule({
  declarations: [
    AppComponent,
    PollSurveyComponent,
    PollChartComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    PollFormModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
