import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'best-sellers',
    templateUrl: './best-sellers.component.html',
    styleUrls: ['./best-sellers.component.less']
})
export class BestSellersComponent implements OnInit {

    constructor() { }
    carouselOption: OwlOptions = {
        margin: 25,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
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
          },
          1000: {
            items: 4
          }
        },
        nav: true
    }
    images = [
        {
            id:1,
            type: "Accessories",
            text: "Quartz Belt Watch",
            src: "assets/img/product/product1.png"
        },
        {
            id:2,
            type: "Watch",
            text: "Women Freshwash",
            src: "assets/img/product/product2.png"
        },
        {
            id:3,
            type: "Decor",
            text: "Room Flash Light",
            src: "assets/img/product/product3.png"
        },
        {
            id:4,
            type: "Accessories",
            text: "Quartz Belt Watch",
            src: "assets/img/product/product1.png"
        },
        {
            id:5,
            type: "Watch",
            text: "Women Freshwash",
            src: "assets/img/product/product2.png"
        },
        {
            id:6,
            type: "Decor",
            text: "Room Flash Light",
            src: "assets/img/product/product3.png"
        }
    ];
    ngOnInit(): void {
    }

}
