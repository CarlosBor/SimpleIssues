import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RepoUrlInputFieldComponent } from '../repo-url-input-field/repo-url-input-field.component';
import { IssueCardListComponent } from '../issue-card-list/issue-card-list.component';
import { ApiRequestService } from '../api-request.service';
import { CardInfo } from '../cardInfo';
import { PaginationElement } from '../pagination-element';

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
  issuesListPromise: Promise<Partial<CardInfo>[]>;
  currentPagination: PaginationElement | undefined;
  apiRequestService: ApiRequestService = inject(ApiRequestService);
  dataUpdatedSubscription: Subscription;


  constructor() {
    this.issuesListPromise = this.apiRequestService.getAllIssuesFromRepo();
    this.dataUpdatedSubscription = this.apiRequestService.getDataUpdatedObservable().subscribe(() => {
      this.updateIssuesList();
    });
  }

  private async updateIssuesList() {
    this.issuesListPromise = this.apiRequestService.getAllIssuesFromRepo();
    this.currentPagination = this.apiRequestService.getPaginationFromRepo();
  }
}
