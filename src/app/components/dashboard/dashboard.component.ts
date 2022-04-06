import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
//import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private carList: Car [];



  displayedColumns: string[] = ['id', 'make', 'model', 'year', 'VIN', 'actions'];
  dataSource! : MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(private carService: CarService, private dialog: MatDialog) {
    this.carList = []
   }
  

  openDeleteDialog(id: string) {
    const myCompDialog = this.dialog.open(DeleteDialogComponent);
    myCompDialog.afterClosed().subscribe((result) => {
      switch (result) {
        case 'close':
          console.log('Close');
          break 
        case "delete":
          console.log("delete")
          this.deleteCar(id)
          break
        
        default:
          console.log("undefined")
          break
         
      }
      
    });
  }

  openInfoDialog() {
    this.dialog.open(InfoDialogComponent);
    
      
    
  }
  
  loadCars(){
    this.carList = this.carService.getCars();
    this.dataSource = new MatTableDataSource(this.carList)
  }

  ngOnInit(): void {
    this.loadCars()
  }

  deleteCar(id:string){
    this.carService.deleteCar(id);
    this.loadCars()
   
  }
  

}
