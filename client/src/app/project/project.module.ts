import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';
import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {ViewComponent} from './view/view.component';
import {UpdateComponent} from './update/update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ProjectComponent, IndexComponent, CreateComponent, ViewComponent, UpdateComponent]
})
export class ProjectModule {
}
