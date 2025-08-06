import { Component } from '@angular/core';
import { HeaderActionsComponent } from '../header-actions/header-actions.component';
import { NgIf } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="nintendo-navbar">
      <!-- Header -->
      <div class="navbar-header">
        <div class="navbar-content">
          <div class="navbar-left">
            <!-- Logo -->
            <div class="nintendo-logo-container">
              <svg width="100" viewBox="0 0 388 192" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" alt="Nintendo logo" data-testid="NintendoRacetrackLogoBoxIcon" size="260"><g><rect width="97" fill="#E60012"></rect><path d="M112.15 101.892L99.1546 80.8821H89.7753L89.7713 111.016H99.0991V90.0034L112.153 111.016H121.458V80.8821H112.134L112.15 101.892ZM186.069 91.0192V88.0391H181.161V83.9821H172.092L172.1 88.0424H167.17V91.0192H172.096L172.092 111.016H181.176L181.161 91.0192L186.069 91.0192ZM126.639 111.016H135.697V90.9819L126.639 90.9739V111.016ZM126.617 87.0344H135.697V80.871H126.617V87.0344ZM285.415 89.6134C278.104 89.6134 272.169 94.645 272.169 100.857C272.169 107.073 278.104 112.104 285.415 112.104C292.729 112.104 298.653 107.073 298.653 100.857C298.653 94.645 292.729 89.6134 285.415 89.6134ZM289.044 105.074C289.044 108.269 287.158 109.584 285.343 109.584C283.529 109.584 281.636 108.269 281.636 105.074V100.755C281.636 100.755 281.64 97.7903 281.64 96.583C281.64 93.4036 283.532 92.0875 285.343 92.0875C287.15 92.0875 289.044 93.4036 289.044 96.583C289.044 97.7903 289.044 100.036 289.055 100.838C289.055 100.894 289.044 103.867 289.044 105.074ZM260.281 91.9676C258.834 91.1542 257.304 90.3672 255.156 90.1797C248.622 89.6094 243.639 95.3797 243.639 100.669C243.639 107.639 249.016 110.222 249.829 110.604C252.884 112.025 256.791 112.029 260.258 109.854C260.258 110.042 260.262 111.013 260.262 111.013H269.215V80.8821H260.281V91.9676ZM260.349 100.894V104.452C260.349 107.545 258.204 108.351 256.795 108.351C255.355 108.351 253.244 107.545 253.244 104.452V97.3138C253.244 94.2098 255.355 93.4258 256.795 93.4258C258.204 93.4258 260.345 94.2098 260.345 97.3138C260.345 98.3788 260.349 100.894 260.349 100.894ZM156.912 90.0519C153.913 90.1384 151.424 91.4244 149.685 93.074C149.674 92.5752 149.685 90.9669 149.685 90.9669L140.679 90.9739L140.694 111.005H149.685C149.685 111.005 149.674 98.7013 149.674 97.8467C149.674 96.1033 151.511 94.1613 153.974 94.1613C156.441 94.1613 158.113 96.1033 158.113 97.8467V111.005H167.125C167.125 111.005 167.114 101.517 167.125 100.107C167.17 92.1741 160.298 89.9549 156.912 90.0519ZM230.547 90.0519C227.544 90.1384 225.051 91.4244 223.316 93.074C223.305 92.5752 223.316 90.9669 223.316 90.9669L214.325 90.9739L214.321 111.005H223.316C223.316 111.005 223.305 98.7013 223.305 97.8467C223.305 96.1033 225.145 94.1613 227.612 94.1613C230.079 94.1613 231.748 96.1033 231.748 97.8467V111.005H240.752C240.752 111.005 240.741 101.517 240.752 100.107C240.797 92.1741 233.929 89.9549 230.547 90.0519ZM211.581 101.082C211.581 94.8658 205.579 89.7222 198.208 89.7222C190.846 89.7222 184.87 94.753 184.87 100.969C184.87 107.182 190.846 112.216 198.208 112.216C204.326 112.216 209.489 108.726 211.067 103.998L202.033 104.006C202.033 104.006 202.044 104.092 202.044 105.221C202.044 108.884 199.633 109.693 198.291 109.693C196.949 109.693 194.501 108.884 194.501 105.221C194.501 104.122 194.512 101.082 194.512 101.082C194.512 101.082 211.581 101.089 211.581 101.082ZM195.104 94.0263C195.817 92.7928 197.114 92.2114 198.291 92.2003C199.472 92.2114 200.769 92.7928 201.481 94.0263C202.051 95.0342 202.081 96.2081 202.066 97.9587H194.508C194.493 96.2081 194.531 95.0342 195.104 94.0263ZM302.259 84.6048C302.259 83.6192 301.532 83.1235 300.07 83.1235H298.052V88.2639H299.305V86.1608H299.916L300.898 88.2639H302.286L301.138 85.9693C301.843 85.7858 302.259 85.28 302.259 84.6048ZM299.916 85.407H299.305V83.9146H299.848C300.598 83.9146 300.97 84.1433 300.97 84.6795C300.97 85.1893 300.628 85.407 299.916 85.407ZM299.954 81.118C297.393 81.118 295.308 83.199 295.308 85.7596C295.308 88.3203 297.393 90.3974 299.954 90.3974C302.514 90.3974 304.584 88.3203 304.584 85.7596C304.584 83.199 302.514 81.118 299.954 81.118ZM299.954 89.5046C297.88 89.5046 296.201 87.8287 296.201 85.7596C296.201 83.6858 297.88 82.0068 299.954 82.0068C302.023 82.0068 303.703 83.6858 303.703 85.7596C303.703 87.8287 302.023 89.5046 299.954 89.5046ZM289.842 64.0001H97.9482C77.639 63.9517 64 78.5541 64 96.054C64 113.562 77.6096 127.992 97.9815 128H289.813C310.192 127.992 323.793 113.562 323.793 96.054C323.793 78.5541 310.154 63.9516 289.842 64.0001ZM289.756 120.149H98.0419C81.8533 120.213 72.0156 109.344 72.0156 96.0128C72.0156 82.6811 81.9097 71.907 98.0419 71.8728H289.756C305.881 71.907 315.775 82.6811 315.775 96.0128C315.775 109.344 305.941 120.213 289.756 120.149Z" fill="white"></path></g></svg>
      
            </div>
            <!-- Main Navigation -->
            <div class="main-nav">
              <button 
                class="nav-item TU6v6"
                [class.active]="activeDropdown === 'explore'"
                (click)="toggleDropdown('explore')"
              >
                <svg width="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" alt="" data-testid="CompassIcon" size="24" color="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.8794 12C21.8794 17.0881 17.7547 21.2129 12.6665 21.2129C7.57836 21.2129 3.4536 17.0881 3.4536 12C3.4536 6.91185 7.57836 2.7871 12.6665 2.7871C17.7547 2.7871 21.8794 6.91185 21.8794 12ZM24.6665 12C24.6665 18.6274 19.2939 24 12.6665 24C6.03909 24 0.666504 18.6274 0.666504 12C0.666504 5.37258 6.03909 0 12.6665 0C19.2939 0 24.6665 5.37258 24.6665 12ZM8.28551 17.4164C7.60253 17.6643 6.94067 17.0024 7.18852 16.3194L9.52478 9.88164C9.69785 9.40473 10.0735 9.02911 10.5504 8.85604L16.9881 6.51978C17.6711 6.27193 18.333 6.93379 18.0851 7.61677L15.7489 14.0545C15.5758 14.5314 15.2002 14.9071 14.7233 15.0801L8.28551 17.4164ZM13.6071 10.9977C14.143 11.5336 14.143 12.4024 13.6071 12.9383C13.0713 13.4742 12.2024 13.4742 11.6666 12.9383C11.1307 12.4024 11.1307 11.5336 11.6666 10.9977C12.2024 10.4619 13.0713 10.4619 13.6071 10.9977Z" fill="currentColor"></path></svg>
                <span class="fs-6">Explore</span>
              </button>
              
              <button 
                class="nav-item TU6v6"
                [class.active]="activeDropdown === 'shop'"
                (click)="toggleDropdown('shop')"
              >
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" role="presentation" alt="" data-testid="EshopFilledIcon" size="24" color="currentColor"><path d="M14.3999 3.95H11.5499C11.2499 2 10.3499 0 7.94987 0C5.54987 0 4.64987 2 4.34987 3.95H1.49987L0.699868 14.25C0.599868 15.2 1.34987 16 2.34987 16H13.6499C14.5999 16 15.3499 15.2 15.2999 14.25L14.3999 3.95ZM7.94987 1.45C9.09987 1.45 9.79987 2.3 10.0499 3.95H5.79987C6.09987 2.3 6.84987 1.45 7.94987 1.45Z" fill="currentColor"></path></svg>
                <span class="fs-6">Shop</span>
              </button>
              
              <button 
                class="nav-item TU6v6"
                [class.active]="activeDropdown === 'support'"
                (click)="toggleDropdown('support')"
              >
                <svg width="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" alt="" data-testid="SupportShieldIcon" size="24" color="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.833008 5.81122L11.2908 0L21.8231 5.81122C21.8975 11.2613 21.8231 17.762 11.2908 24C1.88356 18.4765 1.43645 12.7231 1.08966 8.26043C1.02212 7.39132 0.958383 6.57117 0.833008 5.81122ZM9.43606 13.572C9.43606 14.064 9.68806 14.31 10.1921 14.31H10.9121C11.1281 14.31 11.2901 14.274 11.3981 14.202C11.5061 14.118 11.5841 13.98 11.6321 13.788L11.6681 13.482C11.7041 13.182 11.8061 12.912 11.9741 12.672C12.1421 12.432 12.3401 12.204 12.5681 11.988C12.8081 11.76 13.0541 11.532 13.3061 11.304C13.5701 11.064 13.8101 10.806 14.0261 10.53C14.2541 10.254 14.4401 9.94202 14.5841 9.59402C14.7281 9.23402 14.8001 8.82002 14.8001 8.35202C14.8001 7.82402 14.6861 7.35002 14.4581 6.93002C14.2421 6.51002 13.9481 6.15602 13.5761 5.86802C13.2161 5.58002 12.7961 5.35802 12.3161 5.20202C11.8481 5.04602 11.3621 4.96802 10.8581 4.96802C10.2101 4.96802 9.65206 5.06402 9.18406 5.25602C8.71606 5.43602 8.34406 5.61602 8.06806 5.79602C7.86406 5.92802 7.75606 6.07802 7.74406 6.24602C7.73206 6.41402 7.79806 6.60002 7.94206 6.80402L8.24806 7.25402C8.38006 7.45802 8.54206 7.56602 8.73406 7.57802C8.92606 7.59002 9.12406 7.54202 9.32806 7.43402C9.49606 7.35002 9.68806 7.27202 9.90406 7.20002C10.1321 7.11602 10.3841 7.07402 10.6601 7.07402C11.1521 7.07402 11.5661 7.21802 11.9021 7.50602C12.2381 7.79402 12.4061 8.14802 12.4061 8.56802C12.4061 8.88002 12.3341 9.16202 12.1901 9.41402C12.0461 9.65402 11.8601 9.88802 11.6321 10.116C11.4161 10.332 11.1761 10.548 10.9121 10.764C10.6601 10.98 10.4201 11.214 10.1921 11.466C9.97606 11.706 9.79606 11.976 9.65206 12.276C9.50806 12.564 9.43606 12.9 9.43606 13.284V13.572ZM10.1921 15.858C9.68806 15.858 9.43606 16.11 9.43606 16.614V17.244C9.43606 17.748 9.68806 18 10.1921 18H10.9121C11.4041 18 11.6501 17.748 11.6501 17.244V16.614C11.6501 16.11 11.4041 15.858 10.9121 15.858H10.1921Z" fill="currentColor"></path></svg>
                <span class="fs-6">Support</span>
              </button>
            </div>
          </div>
          
          <!-- Right Actions -->
          <div style="display: flex; align-items: center;">
            <button 
              class="search-btn"
              [class.active]="activeDropdown === 'search'"
              (click)="toggleDropdown('search')">
                <svg data-name="Magnifying glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="MagnifyingGlassIcon" width="16"><path d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z" fill="currentColor"></path></svg>
              <span class="fs-6">Search</span>
            </button>
            <app-header-actions></app-header-actions>
          </div>
        </div>
      </div>

      <!-- Dropdown Overlay -->
      <div 
        class="dropdown-overlay" 
        [class.show]="activeDropdown !== null"
        (click)="closeDropdown()"
      ></div>

      <!-- Explore Dropdown -->
      <div 
        class="mi-dropdown-menu"
        [@slideDown]="activeDropdown === 'explore' ? 'open' : 'closed'"
        *ngIf="activeDropdown === 'explore' || dropdownAnimating"
      >
        <div class="">
          <!-- Featured Categories -->
          <div class="row justify-content-center">
            <!-- 
            <div class="col-6">
              <div id="caruselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
               <div class="carousel-item active">
                  <img  style="height: 100px;" style="width: 20%;  object-fit: cover; object-position: center; border-radius: 0.75rem;" alt="" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Nintendo-Switch-2">
                </div>
                <div class="carousel-item">
                  <img  style="height: 100px;" style="width: 20%;  object-fit: cover; object-position: center; border-radius: 0.75rem;" alt="" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-alt" draggable="false">                      
                </div>
                <div class="carousel-item">
                  <img  style="height: 100px;" style="width: 20%;  object-fit: cover; object-position: center; border-radius: 0.75rem;" alt="" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Games" draggable="false">                      
                </div>
                <div class="carousel-item">
                  <img  style="height: 100px;" style="width: 20%;  object-fit: cover; object-position: center; border-radius: 0.75rem;" alt="" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-Online" draggable="false">                      
                </div>
              </div>
              
              <button class="carousel-control-prev" type="button" data-bs-target="#caruselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#caruselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            </div>
            -->
          <div class="col-3" style="display: flex; flex-direction: column; align-items: center;">
              <div class="img-fluid">
                <img  style="height: 100px;" alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Nintendo-Switch-2">
              </div>
              <span class="fs-5">Nintendo Switch 2</span>
            </div>
            
            <div class="col-3" style="display: flex; flex-direction: column; align-items: center;">
              <div class="img-fluid">
                <img  style="height: 100px;" alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-alt">    
            </div>
              <span class="fs-5" >Nintendo Switch</span>
            </div>
            
            <div class="col-3" style="display: flex; flex-direction: column; align-items: center;">
              <div class="img-fluid">
                <img  style="height: 100px;" alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/ccb3e8ca3c296e21a8c933e8369031511589d0ef6b079cf5bb3667b09893482c/Global%20Nav/Explore/Games">    
            </div>
              <span class="fs-5" >Games</span>
            </div>
            
            <div class="col-3"style="display: flex; flex-direction: column; align-items: center;">
              <div class="img-fluid">
              <img  style="height: 100px;" alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Global%20Nav/Explore/Explore-Nintendo-Switch-Online">    
            </div>
              <span class="fs-5" >Nintendo Switch Online</span>
            </div> 
          </div>

          <hr>

          <!-- Secondary Navigation -->
          <div class="row justify-content-center">
            <div class="col-2">
              <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="NewsIcon" width="32"><path fill="currentColor" d="M31.92 3.62a1.945 1.945 0 0 0-1.953-1.932H1.874A1.945 1.945 0 0 0-.08 3.62v10.068h32zm-32 11.692v7.201a2.027 2.027 0 0 0 1.954 1.998h8.711a2.777 2.777 0 0 1 2.178 1.073q2.97 4.736 3.315 4.728.344-.009 3.315-4.837a2.677 2.677 0 0 1 2.177-.964h8.398a2.027 2.027 0 0 0 1.953-1.998v-7.201zm14 5.15c0 .056-.07.1-.155.1H3.077c-.086 0-.156-.044-.156-.1v-1.051c0-.055.07-.1.156-.1h10.688c.086 0 .156.045.156.1z"></path></svg>
                <span class="fs-6"><Strong>  News and Events</Strong></span>
              </button>
            </div>
            <div class="col-2">
              <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="StarPlayNintendoIcon" width="32"><path d="M18.9 19.1c-.9 0-1-1.5-1-3.4s0-3.5 1-3.4c.9.1 1.1 1.4 1.1 3.3-.1 2-.2 3.5-1.1 3.5m-5.8 0c-.9 0-1-1.6-1-3.4 0-1.9.2-3.2 1.1-3.3 1-.1 1 1.5 1 3.4-.1 1.8-.2 3.3-1.1 3.3M32 12.4c-.1-.3-1.4-.6-5.6-1.1-2.6-.3-5.1-.5-5.2-.5-.2 0-.4-.2-.5-.4-.6-1.6-1.3-3.3-2-4.8C17.1 1.8 16.4.7 15.9.7c-.4 0-1 1.1-2.8 5-1.1 2.4-2 4.8-2 4.8-.1.2-.3.4-.5.4 0 0-2.5.1-5.1.4-4.1.4-5.4.7-5.552 1-.1.4.8 1.3 3.9 4.2 1.9 1.8 3.9 3.4 3.9 3.4.2.1.2.3.2.4v.1s-.6 2.5-1.2 5.1c-.6 3-1.1 5.4-.7 5.7.4.4 1.8-.5 5.2-2.4 2.3-1.3 4.4-2.7 4.5-2.7.2-.1.4-.1.6 0 0 0 2.2 1.4 4.4 2.7 3.4 2 4.7 2.7 5.2 2.4.4-.3 0-2.1-.7-5.7-.5-2.6-1.2-5.1-1.2-5.1v-.1c0-.2.1-.3.2-.4 0 0 1.9-1.6 3.9-3.3 3-2.9 3.9-3.9 3.837-4.2" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
              <span class="fs-6"><Strong> Play Nintendo</Strong></span>
              
            </button>
            </div>
            <div class="col-2">
              <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%;">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  role="presentation" alt="" data-testid="MyNintendoTileIcon" width="32"><path d="M26.667 0H5.333A5.333 5.333 0 0 0 0 5.333v21.334A5.333 5.333 0 0 0 5.333 32h21.334A5.333 5.333 0 0 0 32 26.667V5.333A5.333 5.333 0 0 0 26.667 0zm-5.105 22.423a5.212 5.212 0 0 1-2.37-.602 10.482 10.482 0 0 1-13.67-1.608.803.803 0 0 1 1.228-1.036 8.866 8.866 0 0 0 11.914 1.04.803.803 0 0 1 .986-.005 3.461 3.461 0 0 0 5.41-2.888 3.495 3.495 0 0 0-3.39-3.416c-.016 0-.036 0-.063-.002a.962.962 0 0 0-.12.003.806.806 0 0 1-.778-.455 6.54 6.54 0 0 0-5.992-3.848c-2.82 0-5.738 1.802-5.738 4.819-.003.818.35 1.596.969 2.132l1.688-3.147a.803.803 0 0 1 1.423.015l.982 1.926.983-1.926a.8.8 0 0 1 .71-.438c.3 0 .574.164.716.428l2.076 3.933a.8.8 0 0 1-.03.804.802.802 0 0 1-1.391-.054l-1.353-2.564-.995 1.95a.803.803 0 0 1-1.431-.001l-1-1.96-1.384 2.58a.805.805 0 0 1-1.046.349 4.563 4.563 0 0 1-2.524-4.027C7.372 10.403 11.107 8 14.717 8a8.081 8.081 0 0 1 7.209 4.308 5.063 5.063 0 0 1-.363 10.115z" fill="currentColor" fill-rule="evenodd"></path></svg>
              <span class="fs-6"><strong> My Nintendo</strong></span>
            </button>
            </div>
            <div class="col-2">
              <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="MobileIcon" width="32"><path fill="currentColor" d="M20.542 5.78h-9.087a.588.588 0 0 0-.614.571v19.2a.589.589 0 0 0 .614.568h9.087a.592.592 0 0 0 .613-.568V6.35a.59.59 0 0 0-.613-.571z"></path><path fill="currentColor" d="M23.28.027H8.733a1.421 1.421 0 0 0-1.452 1.377v29.212a1.36 1.36 0 0 0 .429.978 1.475 1.475 0 0 0 1.023.4H23.27a1.47 1.47 0 0 0 1.021-.399 1.355 1.355 0 0 0 .428-.975V1.39A1.405 1.405 0 0 0 23.28.026zm-9.903 1.225h5.236a.943.943 0 0 1 .936.925.943.943 0 0 1-.936.925h-5.236a.943.943 0 0 1-.936-.925.943.943 0 0 1 .936-.925zm9.29 25.67a.736.736 0 0 1-.792.65H10.123a.733.733 0 0 1-.795-.65V4.98a.73.73 0 0 1 .795-.653h11.752a.734.734 0 0 1 .793.653z"></path></svg>
              <span class="fs-6"><strong> Apps</strong></span>
            </button>
            </div>
          </div>

          <hr>
          
          <!-- Character Bar -->
          <div class="character-item my-2">
            <div class="">Meet the characters:</div>  
              <div class="character-list">
                <img  alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Super-Mario">  
                <span>Super Mario</span>
                <img  alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-The-Legend-of-Zelda">
                <span>The Legend of Zelda</span>
                <img  alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Splatoon">  
                <span>Splatoon</span>
                <img  alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Kirby">  
                <span>Kirby</span>
                <img  alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Pikmin">  
                <span>Pikmin</span>
                <img  alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Animal-Crossing">
                <span>Animal Crossing</span>
                <img  alt="" loading="lazy" fetchpriority="low" src="https://assets.nintendo.com/image/upload/ar_1:1,b_transparent,c_lpad/f_auto/q_auto/dpr_1.5/c_scale,w_100/Global%20Nav/Explore/Characters-Metroid">
                <span>Metroid</span>
              </div>
          </div>
        </div>
      </div>

      <!-- Shop Dropdown -->
      <div 
        class="mi-dropdown-menu"
        [@slideDown]="activeDropdown === 'shop' ? 'open' : 'closed'"
        *ngIf="activeDropdown === 'shop' || dropdownAnimating"
      >
        <div class="">
          <!-- My Nintendo Store Section -->
          <div class="store-section">
            <div class="row justify-content-center">
              <div class="col-2">
                <div class="" style="background: #e60012; margin-top: 24px; margin-bottom: 24px; border-radius: 0.75rem;">
                  <div class="" style="padding: 16px; padding-bottom: 0px; color: white;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="52" role="presentation" alt="" data-testid="MyNintendoIcon" size="52" color="currentColor"><path d="M24.8 10.8c-2.2-4-6.2-6.4-10.8-6.4C8.6 4.4 3 8 3 14c0 4.2 3.6 5.9 3.8 6 .6.3 1.3 0 1.6-.5l2.1-3.9 1.5 2.9c.2.4.6.7 1.1.7.5 0 .9-.3 1.1-.7l1.5-2.9 2 3.8c.3.6 1 .8 1.6.5.6-.3.8-1 .5-1.6l-3.1-5.9c-.2-.4-.6-.6-1.1-.6-.4 0-.9.3-1.1.7L13 15.4l-1.5-2.9c-.2-.4-.6-.6-1.1-.7-.4 0-.9.2-1.1.6L7 17.1c-.7-.6-1.4-1.6-1.4-3.2 0-4.5 4.4-7.2 8.6-7.2 3.9 0 7.2 2.1 8.9 5.7.2.4.7.7 1.2.7h.3c3 0 5.1 2.7 5.1 5.1 0 2.9-2.3 5.2-5.2 5.2-1.2 0-2.3-.5-2.9-.9-.4-.3-1-.3-1.5 0-1 .8-3.9 2.7-8.1 2.7-4.8 0-8.4-2.7-9.7-4.3-.4-.5-1.2-.6-1.7-.1-.6.5-.7 1.2-.2 1.8.4.5 4.5 5.1 11.6 5.1 4.1 0 7.1-1.5 8.9-2.7 1 .6 2.3.9 3.5.9 4.3 0 7.6-3.3 7.6-7.6-.1-3.6-2.9-7.3-7.2-7.5z" fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff"></path></svg>
                    <span class="fs-5 text-white"><strong> My Nintendo Store</strong></span>  
                  </div>
                  <div class="d-flex flex-column align-items-center" style="padding-bottom: 16px;">
                    <a href="#" class="text-center text-white fs-6"><strong> Shop all</strong></a>
                  </div>
                </div>  
                
              </div>
              <div class="col-3" style="margin-top: 24px; margin-bottom: 24px;">
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="DPadIcon" width="32"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                  <span class="fs-6"><strong> Games</strong></span>
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%; margin-bottom: 8px; ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="SalesTagIcon" width="32"><path d="M16.5.4c.2-.3.6-.4 1-.4l9.4.2c.4 0 .7.2 1 .4l3.5 3.5c.3.3.4.6.4 1l.2 9.4c0 .4-.1.8-.4 1.1l-16 16c-.6.6-1.5.6-2.1 0L.4 18.5c-.6-.6-.6-1.5 0-2.1L16.5.4zm6.7 4.1c-1.2 1.2-1.2 3.1 0 4.3s3.1 1.2 4.3 0c1.2-1.2 1.2-3.1 0-4.3-1.2-1.2-3.2-1.2-4.3 0z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                  <span class="fs-6"><strong> Sales and Deals</strong></span>
                  </button>
              </div>
            </div>
            <div class="col-3" style="margin-top: 24px; margin-bottom: 24px;">
              <div>
                <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                  <svg data-name="Switch lite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="SwitchLiteIcon" width="32"><path d="M28.737 9.41H3.262a3.218 3.218 0 0 0-3.218 3.218v7.164a3.218 3.218 0 0 0 3.218 3.218h25.475a3.218 3.218 0 0 0 3.219-3.218v-7.164a3.218 3.218 0 0 0-3.219-3.218zm.112 2.173a.563.563 0 1 1-.563.563.563.563 0 0 1 .563-.563zm0 2.32a.563.563 0 1 1-.563.564.563.563 0 0 1 .563-.563zM3.146 12.106a1.2 1.2 0 1 1-1.2 1.201 1.2 1.2 0 0 1 1.2-1.2zm1.437 5.85a.125.125 0 0 1-.125.125h-.731a.133.133 0 0 0-.133.134v.73a.126.126 0 0 1-.125.126h-.636a.125.125 0 0 1-.126-.126v-.73a.133.133 0 0 0-.132-.134h-.732a.125.125 0 0 1-.125-.125v-.636a.125.125 0 0 1 .125-.125h.732a.133.133 0 0 0 .132-.133v-.73a.125.125 0 0 1 .126-.126h.636a.126.126 0 0 1 .125.125v.731a.133.133 0 0 0 .133.133h.73a.125.125 0 0 1 .126.125zm1.674 3.654h19.497V10.82H6.257zm20.807-8.302a.563.563 0 1 1 .563.563.563.563 0 0 1-.563-.563zm1.778 5.532a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm1.23-4.97a.563.563 0 1 1 .562-.562.563.563 0 0 1-.563.563z" fill="currentColor" fill-rule="evenodd"></path></svg>
                  <span class="fs-6"><strong> Hardware</strong></span>
                  </button>
              <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  role="presentation" alt="" data-testid="StarFilledIcon" width="32"><path d="M31.993 12.369c-.107-.34-1.43-.62-5.599-1.09-2.626-.297-5.15-.455-5.175-.456a.577.577 0 0 1-.504-.37 137.666 137.666 0 0 0-1.982-4.837C17.093 1.821 16.428.71 15.973.713c-.412-.005-1.027 1.122-2.767 4.975a112.804 112.804 0 0 0-2.014 4.781.58.58 0 0 1-.506.367c-.025.002-2.527.146-5.13.43-4.145.453-5.48.706-5.552 1.069-.073.398.774 1.333 3.88 4.163a114.143 114.143 0 0 0 3.921 3.393.58.58 0 0 1 .193.594c-.006.025-.645 2.472-1.183 5.06-.615 2.958-1.072 5.368-.709 5.66.447.364 1.796-.484 5.182-2.416A123.355 123.355 0 0 0 15.75 26.1a.58.58 0 0 1 .622 0c.022.014 2.163 1.355 4.448 2.68 3.45 1.998 4.747 2.668 5.163 2.42.422-.301.042-2.118-.706-5.708a121.87 121.87 0 0 0-1.189-5.106.58.58 0 0 1 .195-.595c.019-.015 1.946-1.588 3.873-3.333 3.055-2.765 3.932-3.734 3.837-4.09" fill="currentColor" fill-rule="evenodd"></path></svg>
                  <span class="fs-6"><strong> Exclusives</strong></span>
                  </button>
              </div>
            </div>    
          </div>
            <div class="col-3" style="margin-top: 24px; margin-bottom: 24px;">
              <div class="shop-category">
                <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  role="presentation" alt="" data-testid="TShirtIcon" width="32"><path d="M7.735 29.333V11.101l-4.428 2.82L0 8.282l6.704-4.705a4.913 4.913 0 0 1 2.825-.891c.922 0 2.034-.005 2.66-.018.415 1.682 2.402 2.107 3.81 2.107 1.41 0 3.397-.425 3.812-2.107.626.013 1.738.019 2.66.018a4.906 4.906 0 0 1 2.825.891L32 8.281l-3.307 5.64-4.427-2.82v18.232H7.735z" fill="currentColor" fill-rule="evenodd"></path></svg>
                  <span class="fs-6"><strong> Merchandise</strong></span>
                  
                </button>  
                <div class="shop-category">
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"  role="presentation" alt="" data-testid="CharacterIcon" width="32"><path d="M29.399 25.007a5.387 5.387 0 0 0-.539-.329 1.978 1.978 0 0 0-1.844-1.78 2.688 2.688 0 0 0-2.383 1.43.834.834 0 0 0-1.218.222 20.438 20.438 0 0 0-2.64-1.37 6.13 6.13 0 0 0 .37-3.363c.58.065 1.117.116 1.27.12.347.02.692-.053 1-.211.632-.352 1.238-.75 1.813-1.189a.769.769 0 0 0 1.138-.814 3.835 3.835 0 0 0 2.865-2.689c.244-.795.047-1.342-.258-1.53a1.045 1.045 0 0 0-.975-1.343.963.963 0 0 0-1.241-.945c-.055-.397-.456-.644-.984-.546a2.55 2.55 0 0 0-1.647 1.42.916.916 0 0 0-1.11.15 2.786 2.786 0 0 0-.233 2.614c-.397-.14-.968.41-.606 1.097l-.347.215c-.171.11-.171.11-.562.078a10.434 10.434 0 0 1-2.21-.64 2.688 2.688 0 0 0 2.027-1.465.812.812 0 0 0 .597-1.159c.605-.206.944-.848.773-1.463a2.574 2.574 0 0 0 1.989-1.19c.992-1.84-.385-3.705-2.043-3.261a4.432 4.432 0 0 0-1.89 1.066c-.268-.679-.57-1.354-.808-1.909.902-.561 3.233-3.42 2.73-3.966-.493-.535-2.798.185-3.842.805A5.003 5.003 0 0 0 17.372.72c-.87-.87-2.28-1.046-3.887 0A10.588 10.588 0 0 0 9.48 7.816c-3.033 1.276-2.201 4.364 1.046 4.895.151.452.44.846.828 1.124-.78.219-.473 1.068.296 1.073-.944.073-1.88.22-2.802.438a.893.893 0 0 0-1.594.024 3.87 3.87 0 0 0-2.708-.288 2.192 2.192 0 0 0-1.826 2.44 1.252 1.252 0 0 0 .126 1.781.975.975 0 0 0 .757 1.458c-.183.918 1.05 1.592 2.657.532 1.05.977 2.412.052 2.599-1.652.457.248 1.007-.012 1.066-.689a19.002 19.002 0 0 1 2.963-.433c0 .493-.091.981-.27 1.44a3.973 3.973 0 0 0-.444 4.064.67.67 0 0 1-.223.187 14.946 14.946 0 0 0-.738-.363.681.681 0 0 0-.984-.609 1.634 1.634 0 0 0-2.02-.76 2.25 2.25 0 0 0-.649-.177.52.52 0 0 0-.548.231 7.972 7.972 0 0 0-.818 1.792.288.288 0 0 0 .084.333c.074.062.154.117.24.162a9.789 9.789 0 0 0-2.058 4.078c-.08.359-.045.583.126.691.183.123.38.226.585.307.196.98 1.08 1.67 2.079 1.622a3.013 3.013 0 0 0 2.417-2.06c.272.003.53-.12.698-.335a6.07 6.07 0 0 0 3.456.771 5.93 5.93 0 0 0 3.13-2.516 22.596 22.596 0 0 1 5.152 2.5c.054.52.51.903 1.03.867.36.859 1.445 1.358 2.015 1.007.223.083.45.154.68.211.328.077.377.04.526-.14.364-.457.667-.958.9-1.492.114-.259.125-.423.014-.546a1.667 1.667 0 0 0-.234-.193 8.894 8.894 0 0 0 2.529-4.01c.07-.329.013-.44-.164-.575" fill="currentColor" fill-rule="evenodd"></path></svg>
                    <span class="fs-6"><strong> Characters</strong></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <!-- Search Dropdown -->
      <div 
        class="mi-dropdown-menu"
        [@slideDown]="activeDropdown === 'support' ? 'open' : 'closed'"
        *ngIf="activeDropdown === 'support' || dropdownAnimating"
      >
        <div class="row justify-content-center">
          <!-- Support Home Section -->
          <div class="col-2">
                <div class="" style="background: #e60012; margin-top: 24px; margin-bottom: 24px; border-radius: 0.75rem; height: 75%;">
                  <div class="text-center d-flex justify-content-center align-items-center h-100" style="padding: 16px; color: white;">
                    <span class="fs-5 text-white"><strong> Support Home</strong></span>  
                  </div>
                </div>      
            </div>
          <div class="col-3" style="margin-top: 24px; margin-bottom: 24px;">
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.54 152.18"  role="presentation" alt="" data-testid="MySupportDashboardIcon" size="32" color="currentColor" width="32"><g id="New_Icons_-_192dp" data-name="New Icons - 192dp"><g id="my-support-dashboard" ><path fill="currentColor" d="M140.54,57.92h-3.05c-1.51,0-2.9-.86-3.58-2.21l-1.72-3.43-.8-2.42c-.48-1.44-.1-3.02.97-4.09l2.16-2.16c4.67-4.68,4.67-12.3,0-16.97l-8.49-8.49c-2.39-2.4-5.64-3.65-9.05-3.5-3.1.14-6.01,1.59-8.21,3.79l-1.88,1.88c-1.07,1.07-2.65,1.44-4.08.96l-2.92-.98-3.33-1.66c-1.35-.68-2.21-2.06-2.21-3.57v-3.07c0-6.61-5.38-12-12-12h-12c-6.63,0-12,5.37-12,12v3.06c0,1.52-.86,2.9-2.21,3.58l-2.94,1.47-3.34,1.12c-1.45.48-3.02.11-4.09-.97l-2.16-2.16c-4.68-4.68-12.3-4.68-16.97,0l-8.49,8.49c-2.4,2.39-3.65,5.64-3.5,9.05.14,3.1,1.59,6.01,3.79,8.21l1.87,1.87c1.08,1.08,1.45,2.64.97,4.09l-.98 2.92-1.66 3.32c-.67 1.36-2.06 2.22-3.58 2.22h-3.06c-6.61,0-12,5.38-12,12v12c0,6.62,5.39,12,12,12h3.06c1.52,0,2.91.86,3.58 2.22l1.7 3.4.82 2.44c.48 1.43.11 3.01-.96 4.08l-1.88 1.88c-2.2 2.2-3.65 5.11-3.79 8.21-.15 3.41 1.1 6.66 3.5 9.05l8.49 8.49c4.67 4.68 12.29 4.68 16.97 0l2.16-2.16c1.07-1.07 2.66-1.45 4.11-.96l2.9.97 3.33 1.66c1.35.68 2.21 2.06 2.21 3.57v3.06c0 6.63 5.37 12 12 12h12c6.63 0 12-5.37 12-12v-3.05c0-1.51.86-2.9 2.21-3.58l3.01-1.51 3.27-1.08c1.44-.47 3.02-.1 4.09.97l2.16 2.16c2.34 2.34 5.41 3.51 8.49 3.51s6.14-1.17 8.48-3.51l8.49-8.49c2.26-2.27 3.51-5.28 3.51-8.48s-1.25-6.22-3.51-8.49l-2.17-2.17c-1.07-1.07-1.44-2.65-.96-4.08l.95-2.82c.02-.07.05-.13.08-.2l1.61-3.23c.68-1.35 2.06-2.21 3.57-2.21h3.06c6.63 0 12-5.37 12-12v-12c0-6.63-5.37-12-12-12ZM75.94 120.18c-24.26 0-44-19.74-44-44s19.74-44 44-44 44 19.74 44 44-19.74 44-44 44ZM82.82 68.27h-18.91v5.16h5.15v25.78h-5.15v5.16h24.06v-5.16h-5.15v-30.94ZM75.94 63.12c5.21 0 9.45-4.24 9.45-9.46s-4.24-9.45-9.45-9.45-9.45 4.24-9.45 9.45 4.24 9.46 9.45 9.46Z"></path></g></g></svg>
              <span class="fs-6"><Strong> My Support Dashboard</Strong></span>
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%; margin-bottom: 8px; ">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"  role="presentation" alt="" data-testid="SupportNintendoSwitchLogoIcon" size="32" color="currentColor" width="32"><g id="New_Icons" data-name="New Icons"><g id="nintendo-switch-logo"><path fill="#e60012" d="M28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM0,0v72h72V0H0ZM38.83,10.59c0-.12.09-.21.21-.21h5c4.58,0,8.29,3.71,8.29,8.29v15.75c0,4.58-3.71,8.29-8.29,8.29h-4.97c-.13,0-.24-.11-.24-.24V10.59ZM19.01,47.64h.9v4.04h-.9v-4.04ZM12.34,47.64h.82l1.99,2.65v-2.65h.82v4.04h-.8l-2-2.7h0v2.7h-.82v-4.04ZM15.33,61.57c-1.66,0-2.95-.61-3.33-.81l.72-1.3c.34.21,1.32.71,2.72.71,1.74,0,2.02-.61,2.03-.98.02-.66-.82-.81-2.36-1.07-2.18-.38-3.03-.99-3.03-2.2,0-1.49,1.75-2.29,3.39-2.29,1.35,0,2.57.43,2.95.59l-.54,1.32c-.35-.15-1.34-.52-2.33-.52-1.06,0-1.85.23-1.85.82,0,.51.71.72,1.81.9h0c3.22.53,3.53,1.49,3.53,2.41,0,1.59-1.28,2.43-3.7,2.43ZM28.56,61.36h-1.84l-1.41-5.02-1.42,5.02h-1.83l-2.16-7.62h1.66l1.46,5.51,1.6-5.51h1.35l1.61,5.53h0l1.47-5.53h1.66l-2.17,7.62ZM22.95,51.67v-4.04h.82l1.99,2.65v-2.65h.82v4.04h-.8l-2-2.7h0v2.7h-.82ZM31.61,51.67h-.87v-3.18h-1.29v-.86h3.42v.86h-1.26v3.18ZM34.31,61.36h-1.69v-7.62h1.69v7.62ZM35.59,42.47c0,.13-.11.24-.24.24h-7.07c-4.58,0-8.29-3.71-8.29-8.29v-15.75c0-4.58,3.71-8.29,8.29-8.29h7.07c.13,0,.24.11.24.24v31.86ZM35.82,47.64h3.14v.74h-2.32v.87h2.15v.73h-2.15v.95h2.32v.75h-3.14v-4.04ZM42.62,55.36h-2.38v6h-1.64v-6h-2.44v-1.62h6.45v1.62ZM43.12,51.67h-.82v-4.04h.82l1.99,2.65v-2.65h.82v4.04h-.8l-2-2.7v2.7ZM47.92,59.93c.86,0,1.66-.46,2.09-1.18l1.24,1.08c-.76,1.13-2.01,1.8-3.37,1.8-2.24,0-4.07-1.82-4.07-4.07s1.82-4.07,4.07-4.07c1.36,0,2.62.67,3.37,1.8l-1.24,1.08c-.43-.72-1.23-1.18-2.09-1.18-1.33,0-2.42,1.06-2.42,2.37s1.08,2.37,2.42,2.37ZM51.01,51.67h-1.67v-4.04h1.67c1.14,0,2.08.91,2.08,2.02s-.93,2.02-2.08,2.02ZM59.7,61.36h-1.58v-3.04h-3.56v3.04h-1.58v-7.62h1.58v3h3.56v-3h1.58v7.62ZM57.85,51.81c-1.19,0-2.15-.97-2.15-2.15s.97-2.15,2.15-2.15,2.15.97,2.15,2.15-.97,2.15-2.15,2.15ZM61.36,60.44h-.34v.92h-.22v-.92h-.35v-.22h.91v.22ZM62.83,61.36h-.2v-.87l-.3.86h0s-.2.01-.2.01h0s-.3-.87-.3-.87v.87h-.2v-1.13h.32l.28.83.28-.83h.32v1.13ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM45.22,31.43c1.81,0,3.27-1.46,3.27-3.27s-1.46-3.27-3.27-3.27-3.27,1.46-3.27,3.27,1.46,3.27,3.27,3.27ZM24.27,14.65c-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7c-1.52,0-2.95.59-4.02,1.66ZM31.11,20.08c0,1.68-1.36,3.04-3.04,3.04s-3.04-1.36-3.04-3.04,1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04Z"></path></g></g></svg>
              <span class="fs-6"><Strong> Nintendo Switch</Strong></span>
                  </button>
              </div>
              <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%; margin-bottom: 8px; ">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 152"  role="presentation" alt="" data-testid="SupportRepairIcon" size="32" color="currentColor" width="32"><g id="New_Icons_-_192dp" data-name="New Icons - 192dp"><g id="repair"><path fill="currentColor" fill-rule="evenodd" d="M150.15,29.57c4.4,14.4.93,30.73-10.4,42.08-11.91,11.91-29.32,15.13-44.22,9.68l-59.72,64.55c-8.17,8.16-21.53,8.16-29.7,0-8.16-8.16-8.17-21.53,0-29.69l64.55-59.72c-5.45-14.9-2.22-32.31,9.69-44.21C91.37,1.25,107.58-2.69,122.44,1.85l-26.47,26.47c-2.89,2.89-2.89,7.62,0,10.52l17.2,17.2c2.89,2.89,7.62,2.89,10.52,0l26.47-26.47h0ZM28.3,123.7c4.1,4.1,4.1,10.75,0,14.84-4.1,4.1-10.75,4.1-14.85,0-4.1-4.1-4.1-10.75,0-14.84,4.1-4.1,10.75-4.1,14.85,0Z"></path></g></g></svg>
              <span class="fs-6"><strong> Repair</strong></span>
                  </button>
              </div>
            </div>
          <div class="col-3" style="margin-top: 24px; margin-bottom: 24px;">
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.56 152.16"  role="presentation" alt="" data-testid="SupportAccountsPurchasesIcon" size="32" color="currentColor" width="32"><g id="New_Icons_-_192dp" data-name="New Icons - 192dp"><g id="accounts-purchases"><g><path fill="currentColor" d="M60.39,83.01c-21.78,0-39.51-17.72-39.51-39.51S38.61,4,60.39,4s39.51,17.72,39.51,39.51-17.72,39.51-39.51,39.51Z"></path><path fill="currentColor" d="M60.39,7.99c19.58,0,35.51,15.93,35.51,35.51s-15.93,35.51-35.51,35.51-35.51-15.93-35.51-35.51S40.81,7.99,60.39,7.99M60.39,0C36.37,0,16.89,19.48,16.89,43.5s19.48,43.5,43.5,43.5,43.5-19.48,43.5-43.5S84.42,0,60.39,0h0Z"></path></g><g><path fill="currentColor" d="M4.17,147.99c2.18-27.53,26.56-49.3,56.22-49.3,1.32,0,2.64.04,3.93.13l-3.72,48.4c-.02.25-.03.51-.04.77H4.17Z"></path><path fill="currentColor" d="M60,102.71l-3.17,41.27H8.72c4.06-23.26,25.48-41.09,51.28-41.27M60.39,94.68C27.04,94.68,0,120.34,0,152h65.13c-.46-1.43-.65-2.95-.53-4.47l3.9-50.74c.04-.53.12-1.05.23-1.56-2.72-.37-5.51-.55-8.34-.55h0Z"></path></g><path fill="currentColor" d="M148.65,97.4c-.15-1.94-1.77-3.45-3.72-3.45h-14.46v-5.82c0-6.67-5.41-12.09-12.09-12.09h-11.64c-6.67,0-12.09,5.42-12.09,12.09v5.82h-14.45c-1.73,0-3.2,1.19-3.62,2.81-.05.2-.08.42-.1.64l-3.9,50.74c-.14,1.8,1.01,3.37,2.64,3.86.34.11.7.16,1.08.16h72.53c2.18,0,3.89-1.85,3.72-4.02l-3.9-50.74ZM123.01,93.95h-20.89v-5.07c0-2.97,2.4-5.37,5.37-5.37h10.15c2.97,0,5.37,2.4,5.37,5.37v5.07Z"></path></g></g></svg>
              <span class="fs-6"><strong> Accounts & Purchases</strong></span>
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%; margin-bottom: 8px; ">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"  role="presentation" alt="" data-testid="SupportNintendoSwitchLogoIcon" size="32" color="currentColor" width="32"><g id="New_Icons" data-name="New Icons"><g id="nintendo-switch-logo"><path fill="#e60012" d="M28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM0,0v72h72V0H0ZM38.83,10.59c0-.12.09-.21.21-.21h5c4.58,0,8.29,3.71,8.29,8.29v15.75c0,4.58-3.71,8.29-8.29,8.29h-4.97c-.13,0-.24-.11-.24-.24V10.59ZM19.01,47.64h.9v4.04h-.9v-4.04ZM12.34,47.64h.82l1.99,2.65v-2.65h.82v4.04h-.8l-2-2.7h0v2.7h-.82v-4.04ZM15.33,61.57c-1.66,0-2.95-.61-3.33-.81l.72-1.3c.34.21,1.32.71,2.72.71,1.74,0,2.02-.61,2.03-.98.02-.66-.82-.81-2.36-1.07-2.18-.38-3.03-.99-3.03-2.2,0-1.49,1.75-2.29,3.39-2.29,1.35,0,2.57.43,2.95.59l-.54,1.32c-.35-.15-1.34-.52-2.33-.52-1.06,0-1.85.23-1.85.82,0,.51.71.72,1.81.9h0c3.22.53,3.53,1.49,3.53,2.41,0,1.59-1.28,2.43-3.7,2.43ZM28.56,61.36h-1.84l-1.41-5.02-1.42,5.02h-1.83l-2.16-7.62h1.66l1.46,5.51,1.6-5.51h1.35l1.61,5.53h0l1.47-5.53h1.66l-2.17,7.62ZM22.95,51.67v-4.04h.82l1.99,2.65v-2.65h.82v4.04h-.8l-2-2.7h0v2.7h-.82ZM31.61,51.67h-.87v-3.18h-1.29v-.86h3.42v.86h-1.26v3.18ZM34.31,61.36h-1.69v-7.62h1.69v7.62ZM35.59,42.47c0,.13-.11.24-.24.24h-7.07c-4.58,0-8.29-3.71-8.29-8.29v-15.75c0-4.58,3.71-8.29,8.29-8.29h7.07c.13,0,.24.11.24.24v31.86ZM35.82,47.64h3.14v.74h-2.32v.87h2.15v.73h-2.15v.95h2.32v.75h-3.14v-4.04ZM42.62,55.36h-2.38v6h-1.64v-6h-2.44v-1.62h6.45v1.62ZM43.12,51.67h-.82v-4.04h.82l1.99,2.65v-2.65h.82v4.04h-.8l-2-2.7v2.7ZM47.92,59.93c.86,0,1.66-.46,2.09-1.18l1.24,1.08c-.76,1.13-2.01,1.8-3.37,1.8-2.24,0-4.07-1.82-4.07-4.07s1.82-4.07,4.07-4.07c1.36,0,2.62.67,3.37,1.8l-1.24,1.08c-.43-.72-1.23-1.18-2.09-1.18-1.33,0-2.42,1.06-2.42,2.37s1.08,2.37,2.42,2.37ZM51.01,51.67h-1.67v-4.04h1.67c1.14,0,2.08.91,2.08,2.02s-.93,2.02-2.08,2.02ZM59.7,61.36h-1.58v-3.04h-3.56v3.04h-1.58v-7.62h1.58v3h3.56v-3h1.58v7.62ZM57.85,51.81c-1.19,0-2.15-.97-2.15-2.15s.97-2.15,2.15-2.15,2.15.97,2.15,2.15-.97,2.15-2.15,2.15ZM61.36,60.44h-.34v.92h-.22v-.92h-.35v-.22h.91v.22ZM62.83,61.36h-.2v-.87l-.3.86h0s-.2.01-.2.01h0s-.3-.87-.3-.87v.87h-.2v-1.13h.32l.28.83.28-.83h.32v1.13ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM45.22,31.43c1.81,0,3.27-1.46,3.27-3.27s-1.46-3.27-3.27-3.27-3.27,1.46-3.27,3.27,1.46,3.27,3.27,3.27ZM24.27,14.65c-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7c-1.52,0-2.95.59-4.02,1.66ZM31.11,20.08c0,1.68-1.36,3.04-3.04,3.04s-3.04-1.36-3.04-3.04,1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM57.85,48.4c-.69,0-1.25.56-1.25,1.26s.56,1.26,1.25,1.26,1.25-.56,1.25-1.26-.56-1.26-1.25-1.26ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM51.05,48.49h-.88v2.34h.88c.65,0,1.17-.52,1.17-1.17s-.52-1.17-1.17-1.17ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04ZM45.22,24.89c-1.81,0-3.27,1.46-3.27,3.27s1.46,3.27,3.27,3.27,3.27-1.46,3.27-3.27-1.46-3.27-3.27-3.27ZM28.29,12.99c-1.52,0-2.95.59-4.02,1.66-1.07,1.07-1.66,2.5-1.66,4.02v15.75c0,1.52.59,2.95,1.66,4.02s2.5,1.66,4.02,1.66h4.7V12.99h-4.7ZM28.07,23.12c-1.68,0-3.04-1.36-3.04-3.04s1.36-3.04,3.04-3.04,3.04,1.36,3.04,3.04-1.36,3.04-3.04,3.04Z"></path></g></g></svg>
              <span class="fs-6"><strong> Nintendo Switch Online</strong></span>
                  </button>
              </div>
            </div>
          <div class="col-3" style="margin-top: 24px; margin-bottom: 24px;">
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6 "  style="width: 100%; margin-bottom: 8px; ">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"  role="presentation" alt="" data-testid="SupportNintendoSwitch2LogoIcon" size="32" color="currentColor" width="32"><g id="New_Icons" data-name="New Icons"><g id="nintendo-switch-2-logo"><path fill="#e60012" d="M16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM57.23,46.23c-.69,0-1.26.56-1.26,1.25s.57,1.26,1.26,1.26,1.25-.57,1.25-1.26-.56-1.25-1.25-1.25ZM57.23,46.23c-.69,0-1.26.56-1.26,1.25s.57,1.26,1.26,1.26,1.25-.57,1.25-1.26-.56-1.25-1.25-1.25ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM57.23,46.23c-.69,0-1.26.56-1.26,1.25s.57,1.26,1.26,1.26,1.25-.57,1.25-1.26-.56-1.25-1.25-1.25ZM57.23,46.23c-.69,0-1.26.56-1.26,1.25s.57,1.26,1.26,1.26,1.25-.57,1.25-1.26-.56-1.25-1.25-1.25ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM0,0v72h72V0H0ZM50.57,12.24c7.81-.19,13.69,8.51,7.75,15.34-2.15,2.38-4.6,4.6-7.11,6.57h10.2v5.72h-20.25v-4.67c.48-.4,2.31-1.97,4.24-3.64,1.74-1.49,3.47-3,5.24-4.45,1.34-1.09,3.87-3.11,3.95-5.08.09-2.32-1.56-3.82-4.01-3.82-1.46,0-3.18.81-4.23,1.7-1.06.9-2.38,2.03-2.38,2.03l-3.85-4.18c3.27-3.66,6.78-5.52,10.45-5.52ZM25.14,48.12v-2.65h.81v4.04h-.79l-2.01-2.7v2.7h-.82v-4.04h.82l1.99,2.65ZM9.36,19.65c0-3.85,3.12-6.98,6.98-6.98h5.95c.11,0,.19.09.19.2v26.8c0,.12-.09.2-.19.2h-5.95c-3.85,0-6.98-3.12-6.98-6.98v-13.25ZM19.29,45.47v4.04h-.9v-4.04h.9ZM15.34,45.47v4.04h-.8l-2-2.7v2.7h-.82v-4.04h.81l1.99,2.65v-2.65h.82ZM14.71,59.39c-1.66,0-2.94-.6-3.33-.81l.73-1.3c.34.21,1.32.71,2.71.71,1.74,0,2.02-.61,2.04-.97.02-.66-.83-.81-2.37-1.07-2.18-.37-3.03-.99-3.03-2.2,0-1.48,1.75-2.29,3.39-2.29,1.35,0,2.57.44,2.95.59l-.54,1.32c-.35-.15-1.35-.53-2.33-.53-1.06,0-1.85.23-1.85.82,0,.51.71.72,1.81.9,3.23.53,3.54,1.48,3.54,2.4,0,1.59-1.28,2.43-3.71,2.43ZM27.94,59.18h-1.84l-1.41-5.02-1.42,5.02h-1.83l-2.16-7.62h1.66l1.46,5.51,1.61-5.51h1.35l1.61,5.53,1.47-5.53h1.66l-2.17,7.62ZM30.99,49.51h-.87v-3.18h-1.29v-.86h3.42v.86h-1.26v3.18ZM33.7,59.18h-1.7v-7.62h1.7v7.62ZM29.58,39.87h-4.18c-.11,0-.2-.09-.2-.2V12.85c0-.1.08-.18.18-.18h4.2c3.85,0,6.98,3.12,6.98,6.98v13.25c0,3.85-3.12,6.98-6.98,6.98ZM35.2,45.47h3.14v.74h-2.32v.87h2.15v.73h-2.15v.95h2.32v.74h-3.14s0-4.03,0-4.03ZM42,53.19h-2.38v6h-1.63v-6h-2.43v-1.62h6.45v1.62ZM42.51,49.51h-.82v-4.04h.81l1.99,2.65v-2.65h.82v4.04h-.8l-2-2.7v2.7ZM47.3,57.76c.86,0,1.66-.46,2.1-1.18l1.24,1.07c-.76,1.13-2.01,1.8-3.38,1.8-2.24,0-4.06-1.82-4.06-4.07s1.82-4.06,4.06-4.06c1.37,0,2.62.67,3.38,1.79l-1.24,1.08c-.43-.72-1.23-1.18-2.1-1.18-1.33,0-2.41,1.07-2.41,2.37s1.08,2.38,2.41,2.38ZM50.39,49.51h-1.67v-4.04h1.67c1.14,0,2.07.91,2.07,2.02s-.93,2.02-2.07,2.02ZM59.08,59.18h-1.58v-3.04h-3.56v3.04h-1.58v-7.62h1.58v3h3.56v-3h1.58v7.62ZM57.23,49.64c-1.19,0-2.15-.96-2.15-2.15s.96-2.15,2.15-2.15,2.15.96,2.15,2.15-.96,2.15-2.15,2.15ZM60.74,58.27h-.35v.91h-.22v-.91h-.35v-.22h.91v.22ZM62.21,59.18h-.21v-.87l-.3.86h0s-.19,0-.19,0h0s-.3-.87-.3-.87v.87h-.2v-1.13h.32l.28.83.29-.83h.32v1.13ZM57.23,46.23c-.69,0-1.26.56-1.26,1.25s.57,1.26,1.26,1.26,1.25-.57,1.25-1.26-.56-1.25-1.25-1.25ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,37.68h3.95V14.87h-3.95c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4ZM16.15,18.27c1.42,0,2.56,1.14,2.56,2.56s-1.14,2.56-2.56,2.56-2.56-1.14-2.56-2.56,1.14-2.56,2.56-2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM57.23,46.23c-.69,0-1.26.56-1.26,1.25s.57,1.26,1.26,1.26,1.25-.57,1.25-1.26-.56-1.25-1.25-1.25ZM57.23,46.23c-.69,0-1.26.56-1.26,1.25s.57,1.26,1.26,1.26,1.25-.57,1.25-1.26-.56-1.25-1.25-1.25ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM50.44,46.32h-.89v2.34h.89c.64,0,1.17-.53,1.17-1.17s-.53-1.17-1.17-1.17ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM16.34,14.87c-1.28,0-2.48.5-3.38,1.4-.9.9-1.4,2.1-1.4,3.38v13.25c0,1.28.5,2.48,1.4,3.38.91.9,2.1,1.4,3.38,1.4h3.95V14.87h-3.95ZM16.15,23.39c-1.41,0-2.56-1.14-2.56-2.56s1.14-2.56,2.56-2.56,2.56,1.14,2.56,2.56-1.14,2.56-2.56,2.56ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75ZM30.59,24.88c-1.52,0-2.75,1.23-2.75,2.75s1.23,2.75,2.75,2.75,2.75-1.23,2.75-2.75-1.23-2.75-2.75-2.75Z"></path></g></g></svg>
              <span class="fs-6"><strong> Nintendo Switch 2</strong></span>
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-secondary border rounded-pill btn-lg TU6v6" style="width: 100%; margin-bottom: 8px; ">
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.5 152.09"  role="presentation" alt="" data-testid="SupportAppsOtherProductsIcon" size="32" color="currentColor" width="32"><g id="New_Icons_-_192dp" data-name="New Icons - 192dp"><g id="apps-other-prod"><path fill="currentColor" d="M65.07,30.09v50.16c-7.98,6.6-13.07,16.58-13.07,27.75,0,5.8,1.37,11.28,3.82,16.14H18.92c-.37,0-.74-.04-1.09-.17-.34-.13-.66-.32-.93-.57-.27-.26-.49-.56-.65-.89-.15-.34-.24-.7-.25-1.07V30.09c.01-.37.09-.73.25-1.07.15-.34.37-.64.64-.9.27-.25.59-.45.94-.57.35-.13.72-.19,1.09-.17h43.23c.37-.02.74.04,1.09.16.35.13.67.33.94.58s.49.56.64.9c.15.33.24.7.25,1.07Z"></path><path fill="currentColor" d="M82.96,72.35V6.49c-.05-1.77-.8-3.44-2.08-4.66C79.59.62,77.88-.04,76.11,0h0S6.91.01,6.91.01c-1.78-.04-3.51.62-4.8,1.85C.81,3.09.05,4.78,0,6.56v138.97c.01.88.19,1.74.54,2.54.36.8.86,1.52,1.5,2.12,1.32,1.23,3.06,1.91,4.87,1.9h69.16c1.8.02,3.54-.66,4.85-1.9.64-.6,1.15-1.31,1.5-2.11.35-.8.53-1.66.54-2.53v-1.9c-9.05-1.27-17.03-5.91-22.61-12.6H13.52c-.91.08-1.82-.19-2.52-.77-.71-.58-1.16-1.41-1.26-2.32V23.57c.09-.91.54-1.75,1.25-2.33.71-.58,1.62-.86,2.53-.78h55.91c.91-.07,1.82.21,2.52.79.71.58,1.16,1.41,1.25,2.32v51.6c3.05-1.37,6.33-2.34,9.76-2.82ZM57.03,13.34c-.83.82-1.95,1.29-3.12,1.3h-24.91c-1.17-.01-2.29-.48-3.12-1.3s-1.31-1.94-1.33-3.1c.02-1.17.5-2.29,1.33-3.11s1.95-1.29,3.12-1.3h24.91c1.17.01,2.29.48,3.12,1.3.83.82,1.31,1.94,1.33,3.11-.02,1.16-.5,2.28-1.33,3.1Z"></path><path fill="currentColor" d="M110.27,85.73c-5.69-5.71-13.56-9.23-22.27-9.23-1.71,0-3.4.14-5.04.4-3.48.56-6.76,1.68-9.76,3.28-3.04,1.63-5.78,3.73-8.13,6.21-5.32,5.64-8.57,13.25-8.57,21.61,0,5.9,1.62,11.42,4.44,16.14,1.53,2.56,3.42,4.89,5.58,6.91,4.46,4.16,10.14,7.04,16.44,8.05,1.64.26,3.33.4,5.04.4,17.4,0,31.5-14.1,31.5-31.5,0-8.71-3.52-16.58-9.23-22.27ZM92.5,112.5v18h-9v-18.09h-18v-8.91h18v-18h9v18h18v9h-18Z"></path></g></g></svg>
              <span class="fs-6"><strong> Apps & Other Products</strong></span>
                  </button>
              </div>
            </div>
          <!-- Support Categories Grid -->
        </div>
      </div>
      <div 
        class="mi-dropdown-menu"
        [@slideDown]="activeDropdown === 'search' ? 'open' : 'closed'"
        *ngIf="activeDropdown === 'search' || dropdownAnimating"
      >
          <div class="col-md-3">
          <div class="input-search TU6v6" style="display: flex;">
              <svg data-name="Magnifying glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  role="presentation" alt="" data-testid="MagnifyingGlassIcon" width="32"><path d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z" fill="currentColor"></path></svg>
              <input type="text" class="form-control border-0" placeholder="Search games, hardware, new, etc">
              <hr>
        </div>
      </div>
      <div class="row justify-content-center">
                <!-- Trending Topics -->
                <div class="col-md-4">
                  <div>
                    <h2 class="">Trending topics</h2>
                      <div class="" style="color: #e60012;">
                        <div>
                          <span class=""><strong>Nintendo Direct</strong></span>
                        </div>
                        <div>
                            <span class=""><strong>Play together sale</strong></span>
                        </div>
                        <div>
                            <span class=""><strong>Nintendo Switch pricing update</strong></span>
                        </div>
                        <div>
                            <span class=""><strong>How to buy Nintendo Switch 2</strong></span>
                        </div>
                        <div>
                            <span class=""><strong>Pokémon Legends: Z-A – Nintendo Switch 2 Edition Bundle</strong></span>
                        </div>
                        <div>
                            <span class=""><strong>How to game share</strong></span>
                        </div>
                        <div>
                            <span class=""><strong>Nintendo Switch 2 games</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>

                <!-- Top Store Products -->
                <div class="col-md-6">
                    <h5 class="section-title">Top store products</h5>
                    <div class="row">
                        <!-- Game 1 -->
                        <div class="col-md-6">
                          <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/27cba343fb2f4fcbbea7d46beefca8fd_1024" class="img-fluid rounded-start" alt="...">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title nav-item TU6v6">Donkey Kong™ Bananza</h5>
                                  <div class="d-flex justify-content-between">
                                    <div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                  Games</div>
                                  <div class="col-3">
                                    <p class="card-text TU6v6"><small class="text-body-secondary">
                                    <svg _ngcontent-ng-c259599160="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="HeartIcon" size="16" color="currentColor" class="ng-tns-c259599160-38"><path _ngcontent-ng-c259599160="" d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ng-tns-c259599160-38"></path></svg>
                                  </small></p>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Game 2 -->
                        <div class="col-md-6">
                          <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/c1ef663ddc2447f58a31b03b45032028_1024" class="img-fluid rounded-start" alt="...">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title nav-item TU6v6">Super Mario Party™ Jamboree – Nintendo Switch™ 2 Edition + Jamboree TV</h5>
                                  <div class="d-flex justify-content-between">
                                    <div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                  Games</div>
                                  <div class="col-3">
                                    <p class="card-text TU6v6"><small class="text-body-secondary">
                                    <svg _ngcontent-ng-c259599160="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="HeartIcon" size="16" color="currentColor" class="ng-tns-c259599160-38"><path _ngcontent-ng-c259599160="" d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ng-tns-c259599160-38"></path></svg>
                                  </small></p>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Game 3 -->
                        <div class="col-md-6">
                          <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/4f544854220c48269dd48047268cc8df_1024" class="img-fluid rounded-start" alt="...">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title nav-item TU6v6">The Adventures of Elliot: The Millennium Tales Debut Demo</h5>
                                  <div class="d-flex justify-content-between">
                                    <div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                  Games</div>
                                  <div class="col-3">
                                    <p class="card-text TU6v6"><small class="text-body-secondary">
                                    <svg _ngcontent-ng-c259599160="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="HeartIcon" size="16" color="currentColor" class="ng-tns-c259599160-38"><path _ngcontent-ng-c259599160="" d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ng-tns-c259599160-38"></path></svg>
                                  </small></p>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Game 4 -->
                        <div class="col-md-6">
                          <div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/64550e7b64204165b7fc0e779fdbd78a_1024" class="img-fluid rounded-start" alt="...">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title nav-item TU6v6">Tales of the Shire: A The Lord of The Rings™ Game</h5>
                                  <div class="d-flex justify-content-between">
                                    <div class="col-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                  Games</div>
                                  <div class="col-3">
                                    <p class="card-text TU6v6"><small class="text-body-secondary">
                                    <svg _ngcontent-ng-c259599160="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" role="presentation" alt="" data-testid="HeartIcon" size="16" color="currentColor" class="ng-tns-c259599160-38"><path _ngcontent-ng-c259599160="" d="M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" class="ng-tns-c259599160-38"></path></svg>
                                  </small></p>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </nav>
    <div class="promo-banner" style="display: flex;">
        <div class="promo-content">
          <div class="centered-paragraphs TU6v6">
          <p class="fs-6">
            <svg data-name="Layer 2 copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="ShippingTruckArrowIcon" color="currentColor" size="24"><path d="M6.57 27.352a3.373 3.373 0 1 1 3.372-3.372 3.376 3.376 0 0 1-3.373 3.372zm17.288 0a3.373 3.373 0 1 1 3.372-3.372 3.376 3.376 0 0 1-3.372 3.372z" fill="currentColor"></path><path d="M31.519 14.29l-3.889-3.888a1.643 1.643 0 0 0-1.161-.481h-4.4V4.648H3.436A3.327 3.327 0 0 0 0 7.831V23.98h2.196a4.373 4.373 0 0 1 8.746 0h8.535a4.373 4.373 0 0 1 8.746 0h2.134A1.643 1.643 0 0 0 32 22.336v-6.884a1.643 1.643 0 0 0-.481-1.162zM15.87 12.94l-3.946 3.946a.44.44 0 0 1-.311.13.445.445 0 0 1-.169-.034.44.44 0 0 1-.271-.407v-1.918H7.412a.44.44 0 0 1-.44-.44V11.04a.44.44 0 0 1 .44-.44h3.762V8.683a.44.44 0 0 1 .751-.311l3.946 3.946a.44.44 0 0 1 0 .622zm12.422 2.26a.66.66 0 0 1-.66.66h-4.718a.66.66 0 0 1-.66-.66v-2.834a.66.66 0 0 1 .66-.66h3.156a.66.66 0 0 1 .467.193l1.561 1.562a.66.66 0 0 1 .194.466z" fill="currentColor"></path></svg>
            <strong> Free shipping</strong> on orders $50 or more. <a href="#" class="fs-6"><strong>Restrictions apply</strong></a>
          </p>
          <div class="divider"></div>
          <p class="fs-6">
            <svg data-name="My Nintendo points" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="MyNintendoPointsIcon" color="currentColor" size="24"><path fill="currentColor" d="M31.7 13.474a11.843 11.843 0 0 0-.734-2.336 12.781 12.781 0 0 0-1.135-2.102 13.331 13.331 0 0 0-1.501-1.835 11.276 11.276 0 0 0-1.836-1.502 12.78 12.78 0 0 0-2.102-1.134 13.589 13.589 0 0 0-2.336-.734 12.638 12.638 0 0 0-5.005 0 1 1 0 0 0-.334.133A12.652 12.652 0 0 0 0 15.977 12.703 12.703 0 0 0 12.68 28.69a12.851 12.851 0 0 0 4.07-.668 1 1 0 0 0 .334.134 12.493 12.493 0 0 0 2.503.267 12.758 12.758 0 0 0 2.503-.267 11.843 11.843 0 0 0 2.335-.734 12.78 12.78 0 0 0 2.103-1.135 13.332 13.332 0 0 0 1.835-1.501 11.275 11.275 0 0 0 1.501-1.836A12.78 12.78 0 0 0 31 20.849a13.589 13.589 0 0 0 .734-2.335A12.493 12.493 0 0 0 32 16.01a15.954 15.954 0 0 0-.3-2.536zM12.68 26.287a10.088 10.088 0 0 1-7.274-3.036 10.27 10.27 0 0 1-3.003-7.308A10.088 10.088 0 0 1 5.438 8.67 10.323 10.323 0 0 1 20.02 23.285a10.405 10.405 0 0 1-7.341 3.003zm16.717-8.275a12.07 12.07 0 0 1-.567 1.869 10.503 10.503 0 0 1-.934 1.701 8.722 8.722 0 0 1-1.235 1.469 12.52 12.52 0 0 1-1.468 1.234 10.504 10.504 0 0 1-1.702.935 7.539 7.539 0 0 1-1.869.567c-.333.067-.7.133-1.034.167.4-.3.768-.634 1.135-.968A12.8 12.8 0 0 0 21.689 7a10.593 10.593 0 0 0-1.134-1 9.569 9.569 0 0 1 1.034.166 12.07 12.07 0 0 1 1.869.568 10.503 10.503 0 0 1 1.702.934 8.723 8.723 0 0 1 1.468 1.235 12.52 12.52 0 0 1 1.234 1.468 10.504 10.504 0 0 1 .935 1.702 7.539 7.539 0 0 1 .567 1.868 10.27 10.27 0 0 1 .2 2.036 8.392 8.392 0 0 1-.167 2.035z"></path><path fill="currentColor" d="M15.082 14.141a6.515 6.515 0 0 0-.767-.066c-.067-.2-.2-.434-.3-.701-.468-1.035-.768-1.502-1.335-1.502s-.868.467-1.335 1.502c-.1.233-.233.5-.3.7-.2.034-.467.034-.734.067-1.135.134-1.669.267-1.836.768a.735.735 0 0 0-.033.267c0 .4.234.734 1.068 1.468a6.793 6.793 0 0 0 .567.5c-.067.2-.1.468-.167.735a7.634 7.634 0 0 0-.167 1.2.949.949 0 0 0 .334.802.797.797 0 0 0 .467.166 3.271 3.271 0 0 0 1.502-.6c.233-.134.467-.267.667-.4.2.1.4.266.668.4.967.567 1.501.734 1.935.467a.922.922 0 0 0 .4-.834 8.175 8.175 0 0 0-.166-1.201c-.067-.267-.134-.534-.167-.768a6.795 6.795 0 0 0 .567-.5c.8-.735 1.068-1.068 1.068-1.469a.735.735 0 0 0-.034-.267c-.233-.433-.767-.6-1.902-.734z"></path><path fill="currentColor" d="M12.713 8.035a7.928 7.928 0 0 0-5.606 13.547 1.18 1.18 0 1 0 1.669-1.668 5.612 5.612 0 0 1-1.635-3.937 5.473 5.473 0 0 1 1.635-3.938 5.553 5.553 0 0 1 3.937-1.635 5.473 5.473 0 0 1 3.938 1.635 1.18 1.18 0 1 0 1.668-1.668 7.906 7.906 0 0 0-5.606-2.336z"></path></svg>
            Redeem your <strong>My Nintendo Platinum Points</strong> for <a href="#" class="fs-6"><strong>fun rewards</strong></a>
          </p>
        </div>
        </div>
      </div>
    
    `,
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideDown', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('closed => open', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ]),
      transition('open => closed', [
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ]),
  ],
  imports: [
    HeaderActionsComponent,
    NgIf
    // ...otros módulos...
  ],
  standalone: true
})
export class NavbarComponent {
  activeDropdown: string | null = null;
  dropdownAnimating = false;

  toggleDropdown(dropdown: string) {
    if (this.activeDropdown === dropdown) {
      this.closeDropdown();
    } else {
      this.activeDropdown = dropdown;
      this.dropdownAnimating = true;
    }
  }

  closeDropdown() {
    this.activeDropdown = null;
    // Keep the dropdown elements for animation
    setTimeout(() => {
      this.dropdownAnimating = false;
    }, 200);
  }

}
