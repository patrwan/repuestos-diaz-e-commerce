import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { QuickSearch } from '../../components/quick-search/quick-search';
import { ValueProposition } from '../../components/value-proposition/value-proposition';
import { Branches } from '../../components/branches/branches';
import { Brands } from '../../components/brands/brands';
import { Products } from '../../components/products/products';

@Component({
  selector: 'app-home',
  imports: [Hero /* QuickSearch */, ValueProposition /* Brands */, Branches, /* Products */],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
