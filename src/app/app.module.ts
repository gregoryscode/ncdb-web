import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MenuTreeComponent } from './shared/components/menu-tree/menu-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DbContentComponent } from './components/db-content/db-content.component';
import { HomeComponent } from './components/home/home.component';
import { QuestComponent } from './components/quest/quest.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    MenuTreeComponent,
    DbContentComponent,
    HomeComponent,
    QuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
