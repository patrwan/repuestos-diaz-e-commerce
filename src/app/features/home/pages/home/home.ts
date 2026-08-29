import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { QuickSearch } from '../../components/quick-search/quick-search';
import { ValueProposition } from '../../components/value-proposition/value-proposition';
import { Branches } from '../../components/branches/branches';

@Component({
  selector: 'app-home',
  imports: [Hero, QuickSearch, ValueProposition, Branches],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
