import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { SyncService } from '../sync.service';
import { IProducts } from '../products';

@Component({
  selector: `app-shopping-cart`,
  templateUrl: `./shopping-cart.component.html`,
  styleUrls: [`./shopping-cart.component.css`]
})
export class ShoppingCartComponent implements OnInit {
  noOfItems: Number;
  editedMsg: any;
  message: any;
  records: IProducts[] = [];
  constructor(private EcomService: EcommerceService, private DataSync: SyncService) { }

  ngOnInit() {
    this.DataSync.telecast.subscribe(message => this.message = message);



    console.log('inside shopping cart controller', this.EcomService.productData);
    // console.log('which is selected:',);

  }

  editTheMsg() {
    this.DataSync.editMsg(this.editedMsg);
  }

  }

