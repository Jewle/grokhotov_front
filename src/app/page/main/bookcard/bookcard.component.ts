import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bookcard',
  standalone: true,
  imports: [],
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.scss'
})
export class BookcardComponent {

  @Input('bookData') bookData:{
    thumbnailUrl?:string,
    title?:string,
    authors:string[]} = {authors:['']};
}
