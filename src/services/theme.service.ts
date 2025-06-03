import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkClass = 'dark';
  private readonly storageKey = 'theme-preference';
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize theme after browser APIs are available
      setTimeout(() => {
        const savedTheme = localStorage.getItem(this.storageKey);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        
        if (shouldBeDark) {
          document.documentElement.classList.add(this.darkClass);
          this.darkMode.next(true);
        }
      });
    }
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isDark = document.documentElement.classList.toggle(this.darkClass);
      localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
      this.darkMode.next(isDark);
    }
  }

  isDark(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return document.documentElement.classList.contains(this.darkClass);
    }
    return this.darkMode.value;
  }
}
