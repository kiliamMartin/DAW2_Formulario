import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.css']
})
export class AddCarDialogComponent implements OnInit {
  data = {
    make:"",
    model:"",
    year:0,
    VIN:""
  } 
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
