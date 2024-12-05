import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipedemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipedemo.component.html',
  styleUrl: './pipedemo.component.css'
})
export class PipedemoComponent {
  title = 'Wipro Tehnologies';  

  todaydate = new Date();  

  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  

  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  

}
