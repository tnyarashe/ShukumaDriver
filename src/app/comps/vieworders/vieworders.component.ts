import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {
  order: any;

  constructor(
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    
  }

}
