import { Component, OnInit } from '@angular/core';
//import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { BrandService } from "../../services/brads.service";
import { Brand } from "../../models/brand";
//import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  brands: Observable<Brand[]>;   //  1  
  
  constructor(private brandService: BrandService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  
  reloadData() {
    this.brands = this.brandService.getList();
  }

}
