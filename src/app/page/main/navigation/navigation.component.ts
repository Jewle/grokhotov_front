import { Component } from '@angular/core';
import {SvgComponent} from "../../../shared/svg/svg.component";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SvgComponent, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
