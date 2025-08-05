import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-header-actions',
  template: `
    <div class="header-actions">
      <!-- Search Section -->
      <div class="search-container">
        <button 
          class="search-btn"
          [class.active]="isSearchOpen"
          (click)="toggleSearch()">
            <svg data-name="Magnifying glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="MagnifyingGlassIcon" size="16" color="currentColor"><path d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z" fill="currentColor"></path></svg>
          <span class="search-text">Search</span>
        </button>
        
        <!-- Search Dropdown -->
        <div 
          class="search-dropdown "
          [@searchSlide]="isSearchOpen ? 'open' : 'closed'"
          *ngIf="isSearchOpen || searchAnimating"
        >
          <div class="search-content">
            <div class="search-input-container">
              <input 
                type="text" 
                class="search-input"
                placeholder="Search games, hardware, news, etc."
                [(ngModel)]="searchQuery"
                #searchInput
              >
              <button class="search-clear" (click)="clearSearch()" *ngIf="searchQuery">
                ✕
              </button>
            </div>
            
            <div class="search-results" *ngIf="isSearchOpen || searchAnimating">
              <div class="search-section">
                <h4>Trending topics</h4>
                <ul class="trending-list">
                  <li><a href="#">How to buy Nintendo Switch 2</a></li>
                  <li><a href="#">Pokémon Legends: Z-A – Nintendo Switch 2 Edition Bundle</a></li>
                  <li><a href="#">How to game share</a></li>
                  <li><a href="#">Nintendo Switch 2 Accessories</a></li>
                  <li><a href="#">Nintendo Switch 2 games</a></li>
                  <li><a href="#">Games on sale</a></li>
                  <li><a href="#">LEGO Game Boy</a></li>
                </ul>
              </div>
              
              <div class="search-section">
                <h4>Top store products</h4>
                <div class="products-grid">
                  <div class="product-item">
                    <div class="product-image donkey-kong">
                      <span class="platform-tag">S2</span>
                    </div>
                    <div class="product-info">
                      <h5>Donkey Kong™ Bonanza</h5>
                      <span class="product-category">🎮 Games</span>
                      <button class="wishlist-btn">♡</button>
                    </div>
                  </div>
                  
                  <div class="product-item">
                    <div class="product-image pokemon">
                      <span class="platform-tag">S2</span>
                    </div>
                    <div class="product-info">
                      <h5>Pokémon™ Legends: Z-A – Nintendo Switch™ 2 Edition</h5>
                      <span class="product-category">🎮 Games</span>
                      <button class="wishlist-btn">♡</button>
                    </div>
                  </div>
                  
                  <div class="product-item">
                    <div class="product-image mario-party">
                      <span class="platform-tag">S2</span>
                    </div>
                    <div class="product-info">
                      <h5>Super Mario Party™ Jamboree – Nintendo Switch™ 2 Edition...</h5>
                      <span class="product-category">🎮 Games</span>
                      <button class="wishlist-btn">♡</button>
                    </div>
                  </div>
                  
                  <div class="product-item">
                    <div class="product-image pokemon-friends">
                    </div>
                    <div class="product-info">
                      <h5>Pokémon™ Friends</h5>
                      <span class="product-category">🎮 Games</span>
                      <button class="wishlist-btn">♡</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Action Buttons -->
      <button class="search-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="HeartIcon" size="16" color="currentColor"><path d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
            
      </button>
      
      <button class="search-btn">
        <svg data-name="Shopping cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="ShoppingCartIcon" size="16" color="currentColor"><path fill="currentColor" d="M23.12 28.073a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326zm2.397-7.29a1.728 1.728 0 0 0 1.498-.982l4.844-11.686a1.544 1.544 0 0 0-.15-1.551 1.593 1.593 0 0 0-1.349-.673H8.44l-.55-2.895A1.494 1.494 0 0 0 6.393 1.6H1.598A1.606 1.606 0 0 0 0 3.255a1.548 1.548 0 0 0 1.598 1.654h3.496L7.49 18.973l-1.098 4.706a1.67 1.67 0 0 0 .25 1.395 1.529 1.529 0 0 0 1.198.673h18.675a1.656 1.656 0 0 0 0-3.31H9.937l.4-1.654zm-18.726 7.29a2.248 2.248 0 1 0 2.25-2.326h-.005a2.288 2.288 0 0 0-2.245 2.326z"></path></svg>
            
      </button>

      <!-- Login Section -->
       
      <div class="login-container">
        <button 
          class="login-btn"
          [class.active]="isLoginOpen"
          (click)="toggleLogin()"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="UserIcon" size="16" color="currentColor"><path d="M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84" fill="currentColor"></path></svg>
          Log in / Sign up
        </button>
        
        <!-- Login Dropdown -->
        <div 
          class="login-dropdown"
          [@loginSlide]="isLoginOpen ? 'open' : 'closed'"
          *ngIf="isLoginOpen || loginAnimating"
        >
          <div class="login-content">
            <!-- Header Icons -->
            <div class="login-header">
              <div class="nintendo-icons">
                <div class="icon-item mushroom">🍄</div>
                <div class="icon-item star">⭐</div>
                <div class="icon-item flower">🌻</div>
              </div>
            </div>
            
            <!-- Benefits Section -->
            <div class="benefits-section">
              <h3>With a free account, you can</h3>
              <ul class="benefits-list">
                <li>
                  <span class="checkmark">✓</span>
                  Shop online
                </li>
                <li>
                  <span class="checkmark">✓</span>
                  Earn My Nintendo points
                </li>
                <li>
                  <span class="checkmark">✓</span>
                  Save a Wish List
                </li>
              </ul>
            </div>
            
            <!-- Action Buttons -->
            <div class="login-actions">
              <button class="login-primary-btn">Log in</button>
              <button class="signup-btn">Sign up</button>
            </div>
            
            <!-- Additional Options -->
            <div class="additional-options">
              <a href="#" class="option-link">
                <i class="icon-order">📦</i>
                Order status
              </a>
              <a href="#" class="option-link">
                <i class="icon-cards">🎴</i>
                Virtual Game Cards
                <i class="external-link">↗</i>
              </a>
              <a href="#" class="option-link">
                <i class="icon-redeem">🎫</i>
                Redeem code
                <i class="external-link">↗</i>
              </a>
              <a href="#" class="option-link">
                <i class="icon-nintendo">🎮</i>
                My Nintendo
                <i class="external-link">↗</i>
              </a>
              <a href="#" class="option-link">
                <i class="icon-account">👤</i>
                Nintendo Account Overview
                <i class="external-link">↗</i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Country Button -->
      <button class="country-btn">
        <img src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png" alt="Flag of Usa" loading="lazy">
        </button>
    </div>

    <!-- Overlay for closing dropdowns -->
    <div 
      class="dropdown-overlay"
      [class.show]="isSearchOpen || isLoginOpen"
      (click)="closeAllDropdowns()"
    ></div>
  `,
  styleUrls: ['./header-actions.component.css'],
  animations: [
    trigger('searchSlide', [
      state('closed', style({
        transform: 'translateY(-10px)',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('open', style({
        transform: 'translateY(0)',
        opacity: '1',
        visibility: 'visible'
      })),
      transition('closed => open', [
        animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      transition('open => closed', [
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('loginSlide', [
      state('closed', style({
        transform: 'translateY(-15px) translateX(10px)',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('open', style({
        transform: 'translateY(0) translateX(0)',
        opacity: '1',
        visibility: 'visible'
      })),
      transition('closed => open', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      transition('open => closed', [
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ],
  imports: [
    FormsModule,
    NgIf,
    // ...otros módulos...
  ],
})
export class HeaderActionsComponent {
  isSearchOpen = false;
  isLoginOpen = false;
  searchAnimating = false;
  loginAnimating = false;
  searchQuery = '';

  toggleSearch() {
    if (this.isSearchOpen) {
      this.closeSearch();
    } else {
      this.closeLogin(); // Close login if open
      this.isSearchOpen = true;
      this.searchAnimating = true;
      
      // Focus on input after animation
      setTimeout(() => {
        const input = document.querySelector('.search-input') as HTMLInputElement;
        if (input) input.focus();
      }, 250);
    }
  }

  closeSearch() {
    this.isSearchOpen = false;
    setTimeout(() => {
      this.searchAnimating = false;
    }, 200);
  }

  toggleLogin() {
    if (this.isLoginOpen) {
      this.closeLogin();
    } else {
      this.closeSearch(); // Close search if open
      this.isLoginOpen = true;
      this.loginAnimating = true;
    }
  }

  closeLogin() {
    this.isLoginOpen = false;
    setTimeout(() => {
      this.loginAnimating = false;
    }, 200);
  }

  closeAllDropdowns() {
    this.closeSearch();
    this.closeLogin();
  }

  clearSearch() {
    this.searchQuery = '';
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-container') && !target.closest('.login-container')) {
      this.closeAllDropdowns();
    }
  }

  // Close dropdowns on escape key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.closeAllDropdowns();
  }
}