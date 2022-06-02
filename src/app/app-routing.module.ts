import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { SellerComponent } from './component/seller/seller.component';

const routes: Routes = [
  {path:'seller', component:SellerComponent},
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product', component:ProductComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
