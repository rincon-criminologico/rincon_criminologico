import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  @Input() imageSlider!: string;
  @Input() transitionTime!: string;


  constructor(private readonly sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
