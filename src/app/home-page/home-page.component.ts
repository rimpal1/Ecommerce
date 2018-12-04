import { Component, OnInit, Input, Output } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { IProducts } from '../products';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public cart = [];
  public records: IProducts[] = [];
  @Input() public filteredRecord = [];
  public allItems = [];
  editedcount: Number;
  @Input() selectedItems: number;
  @Input() Totalprice = 0;
  @Input() data: IProducts;
  editedMsg: any;
  message: any;

  public selectedCategory: String = 'All products';
  public categories: Set<string> = new Set<string>();


  constructor(private EcomService: EcommerceService, private DataSync: SyncService) {}


  ngOnInit() {
   // this.data.currentdata.subscribe(msg => this.msg = msg);
   this.DataSync.telecast.subscribe(message => this.message = message);

    this.EcomService.getProducts().subscribe((data: IProducts[]) => {
      this.records = data;
      data.forEach((product: IProducts) => {

        // logic to initilize addToCart to false
        product.addToCart = false;
        product.count = 0;
        product.totalItems = 0;
       // product.count = this.CartCounter;


        this.categories.add(product.category);
      });
      this.filteredRecord = this.records;

      this.EcomService.productData = this.filteredRecord;
      console.log('Hello--->>>>>>' , this.filteredRecord);
    });
  }
  filterProducts(category) {
    console.log('-->' , category);
    this.filteredRecord = [];
    if ('All products' === category) {
      this.filteredRecord = this.records;
    } else {
      this.records.forEach((product: IProducts) => {
        if (product.category === category) {
          this.filteredRecord.push(product);
        }
       });
    }
  }

    // tslint:disable-next-line:member-ordering
    selectedItem: IProducts;
    productAdd(data: IProducts): void {
      this.selectedItem = data;
      this.records.forEach((selectedItem: IProducts) => {
        this.cart.push(selectedItem.name);

      });
      console.log('added:', this.cart);

    }

    editTheMsg() {
      this.DataSync.editMsg(this.editedMsg);
    }



}
