import { Component, OnInit } from '@angular/core';
import { ProductTable } from 'src/app/models/product-table.model';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: ProductTable = {
      p_name: '',
      p_category: '',
      p_brand: '',
      p_price: '',
      p_quantity: '',
      p_description: ''
    };
  submitted = false;

  constructor(private addProductService: AddProductService) { }

  ngOnInit(): void {
  }

  addProduct(): void {
    const data = {
      p_name: this.product.p_name,
      p_category: this.product.p_category,
      p_brand: this.product.p_brand,
      p_price: this.product.p_price,
      p_quantity: this.product.p_quantity,
      p_description: this.product.p_description,
    };

    this.addProductService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newProduct(): void {
    this.submitted = false;
    this.product = {
      p_name: '',
      p_category: '',
      p_brand: '',
      p_price: '',
      p_quantity: '',
      p_status: 'no',
      o_status: 'no',
    };
  }

}
