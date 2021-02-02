import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'suggested-products',
    templateUrl: './suggested-products.component.html',
    styleUrls: ['./suggested-products.component.less']
})
export class SuggestedProductsComponent implements OnInit {

    constructor() { }
    carouselOption: OwlOptions = {
        items: 3,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            810: {
                items: 3
            }
        }
    }
    images = [
        {
            id:1,
            type: "Accessories Item",
            text: "Wireless Headphone",
            src: "assets/img/home/hero-slide1.png"
        },
        {
            id:2,
            type: "Accessories Item",
            text: "Wireless Headphone",
            src: "assets/img/home/hero-slide2.png"
        },
        {
            id:3,
            type: "Accessories Item",
            text: "Wireless Headphone",
            src: "assets/img/home/hero-slide3.png"
        }
    ];
    ngOnInit(): void {
    }

}
