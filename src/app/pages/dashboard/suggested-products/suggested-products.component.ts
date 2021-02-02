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
        margin: 10,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        nav: false,
        navSpeed: 600,
        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1 
            },
            400: {
                items: 2
            },
            760: {
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
