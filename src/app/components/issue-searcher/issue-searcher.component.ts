import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoUrlInputFieldComponent } from '../repo-url-input-field/repo-url-input-field.component';
import { IssueCardListComponent } from '../issue-card-list/issue-card-list.component';


@Component({
  selector: 'app-issue-searcher',
  standalone: true,
  imports: [
    CommonModule,
    RepoUrlInputFieldComponent,
    IssueCardListComponent
  ],
  templateUrl: './issue-searcher.component.html',
  styleUrl: './issue-searcher.component.css'
})

export class IssueSearcherComponent {
  constructor() {}
}
