import { Component, OnInit, Self } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CarService } from 'src/app/services/car.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  

  constructor() { 
   
  }

  
  ngOnInit(): void {
    
  }

}
