import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { QuickSearch } from '../../components/quick-search/quick-search';
import { ValueProposition } from '../../components/value-proposition/value-proposition';

@Component({
  selector: 'app-home',
  imports: [Hero, QuickSearch, ValueProposition],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
