import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';

import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DATA_BOOKMARK_IOC, DATA_POST_IOC, DATA_PROJECT_IOC } from './data/data.ioc';
import { PresenterModule } from './presenter/presenter.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MarkdownModule.forRoot(),
        AppRoutingModule,
        PresenterModule,
    ],
    providers: [
        ...DATA_BOOKMARK_IOC,
        ...DATA_PROJECT_IOC,
        ...DATA_POST_IOC,
        ToastService
    ],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule {
}
