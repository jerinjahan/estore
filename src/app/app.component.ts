import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles : [`
    .owl-carousel {
        width: 90% !important;
        margin: 10% auto;
      }
      
      .owl-carousel .owl-nav {
        overflow: hidden;
        height: 0px;
      }
      
      .owl-carousel .nav-btn {
        height: 47px;
        position: absolute;
        width: 26px;
        cursor: pointer;
        top: 30% !important;
      }
      
      .owl-carousel .owl-prev.disabled,
      .owl-carousel .owl-next.disabled {
        pointer-events: none;
        opacity: 0.2;
      }
      
      .owl-carousel .prev-slide {
        background: url(./assets/images/nav-icon.png) no-repeat scroll 0 0;
        left: -33px;
      }
      
      .owl-carousel .next-slide {
        background: url(./assets/images/nav-icon.png) no-repeat scroll -24px 0px;
        right: -33px;
      }
      
      .owl-carousel .prev-slide:hover {
        background-position: 0px -53px;
      }
      
      .owl-carousel .next-slide:hover {
        background-position: -24px -53px;
      }
    `]
})
export class AppComponent {
    title = 'estore'; 
    carouselOptions = {
        margin: 25,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            },
            1500: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    }
    
    images = [
    {
        text: "Everfresh Flowers",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
        text: "Festive Deer",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
        text: "Morning Greens",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
        text: "Bunch of Love",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
        text: "Blue Clear",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
        text: "Evening Clouds",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
        text: "Fontains in Shadows",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
        text: "Kites in the Sky",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
        text: "Sun Streak",
        image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
    ]
}
