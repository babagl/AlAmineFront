import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Boutique } from '../../model/Boutique.model';
import { BoutiquesService } from '../../services/boutiques/boutiques.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HttpClientModule, CommonModule, RouterLink],
})
export class HomeComponent implements OnInit{
  boutique$! : Observable<Boutique[]>;


constructor(private boutiqueService:BoutiquesService, private router:Router){
console.log("HomeComponent");

}
  ngOnInit(): void {
    this.getAllBoutiques(1,10)
  }


  getAllBoutiques(page : number, limit: number): void {
    this.boutique$ = this.boutiqueService.getBoutiques(page,limit).pipe(map(res => res.data));  
  }
  

  onNavigate(id: number): void {
    console.log('navigateByLogin',id);
    console.log(id);
    this.router.navigate(['/login'])
  }


}
