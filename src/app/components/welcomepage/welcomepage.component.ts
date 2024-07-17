import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  isVisible1: boolean = false;
  isVisible2: boolean = false;
  isVisible3: boolean = false;
  isVisible4: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void { }

  toggleVisibility(section: number): void {
    this.resetVisibility();
    switch(section) {
      case 1:
        this.isVisible1 = !this.isVisible1;
        break;
      case 2:
        this.isVisible2 = !this.isVisible2;
        break;
      case 3:
        this.isVisible3 = !this.isVisible3;
        break;
      case 4:
        this.isVisible4 = !this.isVisible4;
        break;
    }
  }

  resetVisibility(): void {
    this.isVisible1 = false;
    this.isVisible2 = false;
    this.isVisible3 = false;
    this.isVisible4 = false;
  }

//   navigate() {
//     this._router.navigate(['/login']);
//   }

}
