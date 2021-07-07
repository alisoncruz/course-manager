import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';




const rootModule = RouterModule.forRoot([
  { path: '', redirectTo: 'courses', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent },
])

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    rootModule,
    CourseModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
