import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './Student/student.component';
import { RedTieHeaderComponent } from './red-tie-header/red-tie-header.component';
import { RedTieContentComponent } from './red-tie-content/red-tie-content.component';
import { RedTieSidebarComponent } from './red-tie-sidebar/red-tie-sidebar.component';
import { RedTieFooterComponent } from './red-tie-footer/red-tie-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentComponent,
    RedTieHeaderComponent,
    RedTieContentComponent,
    RedTieSidebarComponent,
    RedTieFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
