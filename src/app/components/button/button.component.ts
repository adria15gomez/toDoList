import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  buttonClass= "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2 text-center flex justify-center items-center my-button-class"
  @Input() name: string;
  @Input() link: string;

  
  constructor() {
    this.name = 'Button';
    this.link = './';
  }
} 





