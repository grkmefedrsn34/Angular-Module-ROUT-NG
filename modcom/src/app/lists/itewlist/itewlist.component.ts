import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-itewlist',
  templateUrl: './itewlist.component.html',
  styleUrls: ['./itewlist.component.css']
})
export class ItewlistComponent implements OnInit {
  @Input() items = [];
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.items);
  }

}
