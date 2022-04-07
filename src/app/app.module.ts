import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component'; 
import { MatButtonModule } from '@angular/material/button';
import { EditDialogComponent } from './components/dialogs/edit-dialog/edit-dialog.component';
import { InfoDialogComponent } from './components/dialogs/info-dialog/info-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddCarDialogComponent } from './components/dialogs/add-car-dialog/add-car-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    InfoDialogComponent,
    AddCarDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
