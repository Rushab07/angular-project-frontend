import { Component, OnInit } from '@angular/core';
import { ProductTable } from 'src/app/models/product-table.model';
import { SellerTable } from 'src/app/models/seller-table.model';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  
  seller: SellerTable = {
    s_name: '',
    s_mobile_no: '',
    s_email_id: '',
    s_address: '',
  };
  submitted = false;
  message = '';

  constructor(private sellerService: SellerService) {  }

  ngOnInit(): void {
  }

  saveSeller(): void {
    const data = {
      s_name: this.seller.s_name,
      s_mobile_no: this.seller.s_mobile_no,
      s_email_id: this.seller.s_email_id,
      s_address: this.seller.s_address,
    };

    this.sellerService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  resetSeller(): void {
    this.submitted = false;
    this.seller = {
      s_name: '',
      s_mobile_no: '',
      s_email_id: '',
      s_address: '',
    };
  }

  
}
