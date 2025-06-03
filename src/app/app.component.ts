import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../components/home/home.component";
import { AboutComponent } from "../components/about/about.component";
import { ServicesComponent } from "../components/services/services.component";
import { ContactComponent } from "../components/contact/contact.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ThemeService } from '../services/theme.service';
import { ScrollspyDirective } from '../directives/scrollspy.directive';
import { TestimonialsComponent } from "../components/testimonials/testimonials.component";
import { ClientsComponent } from "../components/clients/clients.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollspyDirective, ReactiveFormsModule, HttpClientModule, FormsModule, CommonModule, HomeComponent, AboutComponent, ServicesComponent, ContactComponent, FooterComponent, TestimonialsComponent, ClientsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devly-landing';
  currentSection = '';
constructor(public theme: ThemeService) {}

  toggleDark() {
    this.theme.toggleTheme();
  }

  get isDark() {
    return this.theme.isDark();
  }
  setActive(sectionId: string) {
    this.currentSection = sectionId;
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }
}
