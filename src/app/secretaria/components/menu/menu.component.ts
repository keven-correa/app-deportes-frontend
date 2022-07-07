import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  atletas(){
    this.router.navigate(['/secretaria/atletas'])
  }

  turnos(){
    this.router.navigate(['/secretaria/turnos'])
  }

}