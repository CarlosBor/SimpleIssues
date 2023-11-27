import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfo } from '../../interface/cardInfo';

@Component({
  selector: 'app-issue-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-card.component.html',
  styleUrl: './issue-card.component.css'
})

export class IssueCardComponent { 

  @Input() issue!: Partial<CardInfo> ;
}
