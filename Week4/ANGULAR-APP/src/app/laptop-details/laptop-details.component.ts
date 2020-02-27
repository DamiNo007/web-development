import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { laptops } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {
  laptop;

  constructor( private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.laptop = laptops[+params.get('productId')];
    });
  }

}