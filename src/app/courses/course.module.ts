import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { PageNotFoundComponent } from "../core/component/page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],

    exports:[
        CourseListComponent,
        CourseInfoComponent,
    ],
   
    imports: [
        RouterModule.forChild([
            { path:'courses',  component: CourseListComponent },
            { path: 'course/info/:id', component: CourseInfoComponent },
        ]),
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
    ]
})
export class CourseModule {

}