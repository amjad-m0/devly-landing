import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialService, Testimonial } from '../../services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [];
  loading = true;

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialService.getTestimonials().subscribe({
      next: (data) => {
        this.testimonials = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load testimonials', err);
        this.loading = false;
      }
    });
  }
}
