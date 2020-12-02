//import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brads.service';
import { Brand } from '../../models/brand';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {

  brand: Brand = new Brand();
  submitted = false;

  constructor(private brandService: BrandService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  newBrand(): void {
    this.submitted = false;
    this.brand = new Brand();
  }

  save() {
    this.brandService
    .createBrand(this.brand).subscribe(data => {
      console.log(data)
      this.brand = new Brand();
     // this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
/*
  gotoList() {
    this.router.navigate(['/brands']);
  }
*/

}
