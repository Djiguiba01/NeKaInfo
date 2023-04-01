import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-accueildetail',
  templateUrl: './accueildetail.page.html',
  styleUrls: ['./accueildetail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccueildetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
