import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  standalone: true,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactForm: ReturnType<FormBuilder['group']>;
  isSubmitting = false;
  success = false;
  error = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.http.post('https://localhost:5000/api/contact', this.contactForm.value).subscribe({
      next: () => {
        this.success = true;
        this.contactForm.reset();
      },
      error: () => {
        this.error = 'Failed to send message. Please try again.';
      },
      complete: () => this.isSubmitting = false
    });
  }
}
