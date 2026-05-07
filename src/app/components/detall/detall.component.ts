import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServeiService } from '../../serveis/servei.service';
import { ServeiCataleg } from '../../models/servei.model';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.css'],
})
export class DetallComponent {
  servei?: ServeiCataleg;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private serveiService: ServeiService,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.serveiService.getServeiById(id).subscribe((s) => {
      this.servei = s || undefined;
    });
  }
}
