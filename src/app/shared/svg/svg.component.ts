import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [NgIf],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent {
  @Input('svgElement') svgElement:string = 'logo'

}
