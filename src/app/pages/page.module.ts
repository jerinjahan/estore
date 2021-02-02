import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { DashboardComponent } from './dashboard/dashboard.component';
import { BestSellersComponent } from './dashboard/best-sellers/best-sellers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendingProductComponent } from './dashboard/trending-product/trending-product.component';
import { OffersComponent } from './dashboard/offers/offers.component';
import { LastestNewsComponent } from './dashboard/lastest-news/lastest-news.component';
import { SubscriptionComponent } from './dashboard/subscription/subscription.component';
import { SuggestedProductsComponent } from './dashboard/suggested-products/suggested-products.component';

const COMPONENTS = [
    DashboardComponent,
    BestSellersComponent
];

@NgModule({
  imports: [
        SharedModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        CarouselModule 
  ],
  declarations: [...COMPONENTS, TrendingProductComponent, OffersComponent, LastestNewsComponent, SubscriptionComponent, SuggestedProductsComponent],
})
export class PagesModule {}
