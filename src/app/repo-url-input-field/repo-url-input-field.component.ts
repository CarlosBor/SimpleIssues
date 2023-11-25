import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiRequestService } from '../api-request.service';


@Component({
  selector: 'app-repo-url-input-field',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './repo-url-input-field.component.html',
  styleUrl: './repo-url-input-field.component.css'
})

export class RepoUrlInputFieldComponent {

  inputForm = new FormGroup({
    urlText: new FormControl('')
  });

  apiRequestService = inject(ApiRequestService);

  constructor() {}

  submitForm() {
    this.apiRequestService.submitInfo(
      this.inputForm.value.urlText ?? ''
    );
  }
}
