import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';
import { AddCarDialogComponent } from '../dialogs/add-car-dialog/add-car-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';
import { InfoDialogComponent } from '../dialogs/info-dialog/info-dialog.component';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild(InfoDialogComponent) child: any;


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
          console.log('close');
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

  openEditDialog(id:string,make:string,model:string,year:number,VIN:string){
    const myCompDialog = this.dialog.open(EditDialogComponent, {
      data: 
      {
        id: id, 
        make: make,
        model: model,
        year: year,
        VIN: VIN
      },  
      
    });
    myCompDialog.afterClosed().subscribe((result) => {
      console.log(result)
      if(result === "cancel"){
        return;
      }
      this.editCar(id,result.make, result.model, result.year, result.VIN)
    });
  }

  openAddCarDialog(){
    const myCompDialog = this.dialog.open(AddCarDialogComponent)
    myCompDialog.afterClosed().subscribe((result) => {
      console.log(result)
      if(result === "cancel"){
        return;
      }
      this.addCar(result.make, result.model, result.year, result.VIN)
    });
  }


  openInfoDialog(id:string,make:string,model:string,year:number,VIN:string) {
    this.dialog.open(InfoDialogComponent, {
      data: 
      {
        id: id, 
        make: make,
        model: model,
        year: year,
        VIN: VIN
      },  
      
    });
      
    
  }
  addCar(make:string, model:string, year:number, VIN:string){
    this.carService.addCar(make, model, year, VIN)
    this.loadCars()
  }

  editCar(id:string, make:string, model:string, year:number, VIN:string){
      this.carService.editCar(id, make, model, year, VIN)
      this.loadCars()
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
