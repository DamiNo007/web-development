import { Component, OnInit } from '@angular/core';
import {laptops} from '../products';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  
  laptops = laptops;

  share(productName) {
    window.alert('The ' + productName +' has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
