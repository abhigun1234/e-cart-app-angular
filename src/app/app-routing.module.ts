import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustumerDetailsComponent } from './custumer-details/custumer-details.component';
import { CustumerComponent } from './custumer/custumer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'product',component:ProductComponent}
,{path:'product/:id',component:ProductDetailsComponent},
{path:'cust',component:CustumerComponent}

,{path:'cust/:id',component:CustumerDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
