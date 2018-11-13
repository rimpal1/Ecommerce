import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import {IProducts} from '../products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public cart = [];
  public records = [];

  // public categories = [];

  selectedItem(records) {
    this.cart.push(records);
  }
  constructor(private EcomService: EcommerceService) {}

  ngOnInit() {

    this.EcomService.getProducts().subscribe(data => {
      this.records = data;

      console.log(this.records);

      // this.categories = Array.from(new Set(this.records));

      // console.log(this.categories);




    });

  }


}
