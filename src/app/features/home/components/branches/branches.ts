import { Component } from '@angular/core';

import { Branch, Commune } from '../../../../core/models/branch.model';
import { BRANCHES } from '../../../../data/branches';

@Component({
  selector: 'app-branches',
  imports: [],
  templateUrl: './branches.html',
  styleUrl: './branches.css',
})
export class Branches {
  selectedCommune: Commune = 'san-fernando';

  branches = BRANCHES;

  selectCommune(commune: Commune) {
    this.selectedCommune = commune;
  }

  get currentBranches(): Branch[] {
    return this.branches[this.selectedCommune];
  }
}
