import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
    selectedSort = null;
    selectedValue = null;

    priceRange = [2500, 5000];
    priceRangeConfig: any = {
        connect: true,
        behaviour: 'tap',
        start: [500, 4000],
        range: {
            'min': [0],
            '10%': [500, 500],
            '50%': [4000, 1000],
            'max': [10000]
        }
    };

    constructor() { }

    ngOnInit(): void {
    }

}
