import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";

@NgModule({
    declarations: [
        NavBarComponent,
        PageNotFoundComponent
    ],
    exports: [
        NavBarComponent,
        PageNotFoundComponent
    ],
    imports:[
        RouterModule
    ]
    
})
export class CoreModule {

}