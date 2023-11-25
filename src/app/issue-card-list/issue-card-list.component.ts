import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfo } from '../cardInfo';
import { IssueCardComponent } from '../issue-card/issue-card.component';
import { PaginationElement } from '../pagination-element';
import { ApiRequestService } from '../api-request.service';

@Component({
  selector: 'app-issue-card-list',
  standalone: true,
  imports: [
    CommonModule,
    IssueCardComponent
  ],
  templateUrl: './issue-card-list.component.html',
  styleUrl: './issue-card-list.component.css'
})

export class IssueCardListComponent implements OnChanges{
  @Input() issuesListPromise!:Promise<Partial<CardInfo>[]> ;
  @Input() currentPagination: PaginationElement | undefined;
  apiRequestService: ApiRequestService = inject(ApiRequestService);
  issuesList: Partial<CardInfo>[] = [];

  constructor() {  }

  ngOnChanges(changes: SimpleChanges) {
    if ('issuesListPromise' in changes) {
      this.updateIssuesList();
    }
  }

  private updateIssuesList() {
    if (this.issuesListPromise) {
      this.issuesListPromise
        .then((issuesList: Partial<CardInfo>[]) => {
          this.issuesList = issuesList;
        })
        .catch(error => {
          console.error('Error fetching issues:', error);
        });
    }
  }

  processData(value:string){
    console.log(value);
    this.apiRequestService.submitInfo(value);
  }
}
