import { Component, OnInit, Input } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { IProducts } from '../products';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public cart = [];
  public records: IProducts[] = [];
  public filteredRecord = [];
  public allItems = [];
  addToCart: Boolean = true;


  @Input() selectedItems: number;
  @Input() Totalprice = 0;
  @Input() data: IProducts;
  @Input() CartCounter: Number;

  public selectedCategory: String = 'All products';
  public categories: Set<string> = new Set<string>();

  constructor(private EcomService: EcommerceService) {}

  ngOnInit() {



    this.EcomService.getProducts().subscribe((data: IProducts[]) => {
      this.records = data;
      data.forEach((product: IProducts) => {
        this.categories.add(product.category);
      });
      this.filteredRecord = this.records;
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
        this.addToCart = this.addToCart ? false : true;
        // this.CartCounter = this.CartCounter + 1;
      });
      console.log('added:', this.cart);

    }

}
