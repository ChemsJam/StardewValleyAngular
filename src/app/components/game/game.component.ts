import { Component,  ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-game',
template: `
    <app-navbar></app-navbar>
    <div class="nintendo-store">
      <!-- Main Content -->
      <main class="main-content">
        <div class="container">
        <!-- Breadcrumb -->
          <div>
               <nav class="breadcrumb fw-lighter">
                  <a href="#">Store</a>
                  <span class="separator">></span>
                  <a href="#">Games</a>
                  <span class="separator">></span>
                  <span class="current">Stardew Valley</span>
                </nav>  
              </div>
          <div class="row justify-content-between">
          <!-- Left Column - Images -->
            <div class="col-7">

              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner" >
                  <div class="carousel-item active">
                    <img alt="Stardew Valley 1" style="width: 100%; height: 400px; object-fit: cover; object-position: center; border-radius: 0.75rem;"  src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_300/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 300w, https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_502/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 502w, https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 656w, https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_801/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 801w, https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 930w, https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1065/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 1065w, https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1196/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 1196w, https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7 1240w" sizes="(min-width: 1240px) 656px, (min-width: 768px) calc(53vw - 2rem), calc(100vw - 2rem)" src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7" fetchpriority="high" loading="eager" decoding="sync">
                  </div>
                  <div class="carousel-item">
                    <img loading="lazy" alt="" style="width: 100%; height: 400px; object-fit: cover; object-position: center; border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/c_limit,f_auto,h_400,q_auto,w_700/v1/ncom/en_US/games/switch/s/stardew-valley-switch/Video/posters/Stardew_Valley_Trailer_ESRB">
                  </div>

                  <div class="carousel-item">
                  <img alt="Stardew Valley 3"  style="width: 100%; height: 400px; object-fit: cover; object-position: center; border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000001801/6016d2f6d874ad4a1063a28181597427f6fe9ee207ce3c8351c10dda377b3bb4" draggable="false">    
                </div>
                  <div class="carousel-item">
                    <img alt="Stardew Valley 4"  style="width: 100%; height: 400px; object-fit: cover; object-position: center; border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000001801/dcd6f1feda032d04e7220e97e24d93d1f9c963285c88bd8e81e06a20d193054c" draggable="false">                
                  </div>
                  <div class="carousel-item">
                    <img alt="Stardew Valley 5"  style="width: 100%; height: 400px; object-fit: cover; object-position: center; border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000001801/767ac7ae1903bc92ab31b2e131d422c0f8dc9912fd52ce51afc984b6b6974e83" draggable="false">
                  </div>
                  <div class="carousel-item">
                    <img alt="Stardew Valley 6"  style="width: 100%; height: 400px; object-fit: cover; object-position: center; border-radius: 0.75rem;"  src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000001801/d76a54c456854df9c9a5059eac394d744aa73fe1d7f391cf79b8a4b73bd7298b" draggable="false">
                  </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <div class="thumbnail-row">
                <div class="img-thumbnail">
                  <img alt="Stardew Valley 1"  style="border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7">  
                </div>
                <div class="img-thumbnail">  
                <img alt="Stardew Valley 2"  style="border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/en_US/games/switch/s/stardew-valley-switch/Video/posters/Stardew_Valley_Trailer_ESRB">              

                </div>
                <div class="img-thumbnail">
                  <img alt="Stardew Valley 3"  style="border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/software/switch/70010000001801/6016d2f6d874ad4a1063a28181597427f6fe9ee207ce3c8351c10dda377b3bb4">    
                </div>
                <div class="img-thumbnail">
                  <img alt="Stardew Valley 4"  style="border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/software/switch/70010000001801/dcd6f1feda032d04e7220e97e24d93d1f9c963285c88bd8e81e06a20d193054c">  
                </div>
                <div class="img-thumbnail">
                  <img alt="Stardew Valley 5"  style="border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/software/switch/70010000001801/767ac7ae1903bc92ab31b2e131d422c0f8dc9912fd52ce51afc984b6b6974e83">  
                </div>
                <div class="img-thumbnail">
                  <img alt="Stardew Valley 6"  style="border-radius: 0.75rem;" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_100/ncom/software/switch/70010000001801/d76a54c456854df9c9a5059eac394d744aa73fe1d7f391cf79b8a4b73bd7298b">  
                </div>
              </div>
              
          </div>

            <!-- Right Column - Product Info -->
          <div class="col-5">
            <h3>Stardew Valley</h3>
            
            <div class="mt-4">
              <div class="row dflex align-items-start mt-4">
                <div class="col-2">
                  <span class="detail-label">Version</span>
                </div>
                <div class="col-6">
                  <span class="fw-lighter">Nintendo Switch</span>
                </div>
              </div>
              <div class="row dflex align-items-start mt-4 mb-4">
                <div class="col-2">
                  <span class="detail-label">Edition</span>
                </div>
                <div class="col-6">
                  <span class="fw-lighter">Digital</span>
                </div>
              </div>
            </div>

            <div class="price-section mt-4 mb-4">
              <div class="price">$14.99</div>
              <button class="wishlist-heart">
                <svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24"><g class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></g></svg>  
              </button>
            </div>

            <button class="download-btn cta-button" style="width: 100%;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DownloadIcon" color="currentColor" size="24"><path d="M4.3 19.4v5.3c0 .5.5.9 1 .9h21.4c.5 0 1-.5 1-.9v-5.3H32v6.3c-.2 2.2-2.1 4-4.4 4H4.2c-2.3 0-4.2-1.8-4.2-4v-6.3h4.3zM17.9 2.2v12.2l5-4.8 2.8 2.8-9.8 9.9L6 12.5l2.6-2.8 5.2 4.8V2.2h4.1z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
              Direct download
            </button>
            
            <p class="fs-6 fw-lighter">This item will be sent to your system automatically after purchase.</p>
          </div>
        </div>

          <!-- ESRB Rating -->
          
          <div class="esrb-section">
              <div class="row dflex align-items-left fw-lighter">
               <div class="col-1">
                 <div class="esrb-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 39.68 59.53" role="img" title="Everyone 10+"><defs></defs><g data-name="Layer 2"><g data-name="Layer 1"><path d="M39.69 0H0v59.53h39.69z" class="cls-1"></path><path d="M39.11.64v58.25H.58V.64z"></path><path d="M2.52 2.71H36.9v9.66H2.52zM2.5 14.47h34.4v35.51H2.5zm.01 42.32v-4.71h6.9v1.1H5.28v.67h3.5v1.1h-3.5v.74h4.29v1.1zm12.93-3.34a.52.52 0 0 0-.4-.32 2.5 2.5 0 0 0-.72-.09c-.61 0-.88.1-.88.28 0 .69 4.87.26 4.87 2 0 1.09-1.64 1.63-4 1.63s-3.7-.73-3.75-1.58h2.65a.69.69 0 0 0 .46.37 2.5 2.5 0 0 0 .79.12c.69 0 1.16-.12 1.16-.35 0-.71-4.88-.22-4.88-2 0-1 1.56-1.5 3.67-1.5 2.35 0 3.43.66 3.63 1.49zm7.02.67h1.09c.86 0 1.32-.12 1.32-.45s-.47-.49-1.11-.49h-1.3zm0 1v1.64h-2.77v-4.68h4c2.82 0 3.75.43 3.75 1.34 0 .55-.44 1-1.43 1.16.9.18 1.44.29 1.44 1.24 0 .61 0 .83.29.83v.14h-2.81a1.8 1.8 0 0 1-.14-.82c0-.62-.19-.82-1.48-.82zm9.45-1.94V54h1.16c.55 0 1-.14 1-.41s-.54-.38-1.13-.38zm0 1.64v.87h1.21c.69 0 1.21-.08 1.21-.43s-.65-.44-1.53-.44zm-2.77 2v-4.74h4c1.9 0 3.42.25 3.42 1.18 0 .49-.57.84-1.1 1 .91.13 1.4.57 1.4 1.08 0 1.05-1.44 1.42-3.64 1.42z" class="cls-1"></path><path d="M21.88 41.26H20.4v.81h1.48v1.44h.84v-1.44h1.48v-.81h-1.48v-1.44h-.84zm-2.36-.37c0-2.86-1.54-4.56-4.08-4.56-3.45 0-4.29 2.35-4.29 4.56 0 2.7 1.35 4.56 4.18 4.56s4.19-1.86 4.19-4.56M5.11 22.68l20.83-6.22 2.06 6.6-10.41 3.11.85 2.7L28.09 26l2.08 6.59-9.64 2.88.9 2.84 10.78-3.22 2.09 6.59L13.13 48l-8-25.32m.77 16.69a7 7 0 0 0 2.59-1.25V45h2v-8.63H8.54A6.9 6.9 0 0 1 5.9 37.7z"></path><path d="M13 40.81c0-2.89 1.16-3.56 2.47-3.56 1.47 0 2.3 1.11 2.3 3.64 0 1.58-.44 3.52-2.32 3.51s-2.52-1.48-2.45-3.59M3.48 10.28V4.8h2.15v.84H4.31V7h1.22v.84H4.31v1.6h1.36v.84zM5.89 4.8h.86l.61 4 .69-4h.81l-1 5.48h-1zm3.35 5.48V4.8h2.14v.84h-1.32V7h1.22v.84h-1.22v1.6h1.37v.84zm3.53 0h-.83V4.8h1.53a.77.77 0 0 1 .67.37 1.94 1.94 0 0 1 .25 1.07 2.1 2.1 0 0 1-.17.88.77.77 0 0 1-.56.46h.18a.6.6 0 0 1 .24.14.8.8 0 0 1 .2.31 1.5 1.5 0 0 1 .09.58v.87a3.5 3.5 0 0 0 0 .47 1.2 1.2 0 0 0 0 .29h-.8a1.5 1.5 0 0 1-.09-.52v-1a1.5 1.5 0 0 0-.06-.39.5.5 0 0 0-.17-.26A.53.53 0 0 0 13 8h-.21zm0-3.11h.36a.28.28 0 0 0 .2-.08.55.55 0 0 0 .14-.19 1 1 0 0 0 .06-.26 1.3 1.3 0 0 0 0-.27 1 1 0 0 0-.11-.56.36.36 0 0 0-.31-.17h-.36zm2.86 1.21-1-3.58h.9l.59 2.32.63-2.32h.84l-1.1 3.58v1.9h-.83zm3.63 1.99a1.18 1.18 0 0 1-.79-.24 1.37 1.37 0 0 1-.4-.63 4 4 0 0 1-.15-.91v-2a4 4 0 0 1 .15-.91 1.37 1.37 0 0 1 .4-.63 1.18 1.18 0 0 1 .79-.24A1.16 1.16 0 0 1 20 5a1.3 1.3 0 0 1 .4.63 3.2 3.2 0 0 1 .15.91v2a3.2 3.2 0 0 1-.15.91 1.3 1.3 0 0 1-.4.63 1.16 1.16 0 0 1-.74.29m0-.82a.37.37 0 0 0 .27-.11.75.75 0 0 0 .16-.37 3.2 3.2 0 0 0 .07-.62V6.63a3.2 3.2 0 0 0-.07-.63.75.75 0 0 0-.16-.36.34.34 0 0 0-.27-.12.35.35 0 0 0-.28.12.86.86 0 0 0-.16.36 4 4 0 0 0-.07.62v1.82a4 4 0 0 0 .07.62.85.85 0 0 0 .16.37.38.38 0 0 0 .28.12m2.01.73V4.8h1.11l1.05 3.8V4.8h.77v5.48h-1.08l-1.07-4v4zm3.63 0V4.8h2.15v.84h-1.33V7h1.22v.84h-1.22v1.6h1.37v.84zm3.86-4.61a3.4 3.4 0 0 0 .4-.37 2.3 2.3 0 0 0 .34-.48h.72v5.46h-.82v-4.2a3 3 0 0 1-.31.33l-.33.28zm3.36-.92a1.1 1.1 0 0 1 .57.14 1 1 0 0 1 .33.47 3.5 3.5 0 0 1 .16.86V8.7a4.3 4.3 0 0 1-.13.89 1.24 1.24 0 0 1-.34.56.84.84 0 0 1-.6.2.8.8 0 0 1-.6-.2 1.24 1.24 0 0 1-.34-.56 4.3 4.3 0 0 1-.13-.89V6.22a3.5 3.5 0 0 1 .16-.86.9.9 0 0 1 .33-.47 1 1 0 0 1 .59-.14m0 .8a.24.24 0 0 0-.19.08.64.64 0 0 0-.1.29v2.61a4.4 4.4 0 0 0 0 .61.64.64 0 0 0 .1.3.19.19 0 0 0 .18.08.21.21 0 0 0 .18-.08.64.64 0 0 0 .1-.3c0-.14 0-.35.05-.61V5.92a.64.64 0 0 0-.1-.29.26.26 0 0 0-.22-.08m2.27.32H35v1.49h.92v.84H35v1.5h-.61V8.2h-.93v-.84h.93z"></path></g></g></svg>
                </div>
               </div>
                <div class="col-11">
                  <div class="esrb-content">
                  <p>Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco</p>
                  <p>Users Interact</p>
                </div>
                </div>
              </div>
              <div class="row dflex align-items-left fw-lighter">
                <div class="col-1">      
                  <div class="compatibility-section">
                    <div class="compatibility-info">
                      <i class="icon-check-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="col-11">
                  <div>
                        <p class="fs-6"><strong> Nintendo Switch 2 Compatibility Information</strong></p>
                        <p class="fs-6">Supported – Game behavior is consistent with Nintendo Switch.</p>
                      </div>
                </div>
              </div>
            </div>

          <!-- Nintendo Switch 2 Compatibility -->
          
        </div>
      </main>
      <div class="content" style="margin-top: 50px; margin-bottom: 0px;">
        <div class="game-section">
            <div>
                <h2>You're moving to the valley...</h2>
                <p class="fs-6">
                    You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
                </p>

                <p class="fs-6">
                    Now with <strong>Multiplayer!</strong> Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with the townspeople or each other. As more hands make light work, players can choose to split responsibilities or work together, and new players can join at any time.
                </p>

                <a href="#" class="read-more">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="PlusIcon" color="currentColor" size="24"><path fill="currentColor" fill-rule="evenodd" d="M32.04 12h-12V0h-8v12h-12v8h12v12h8V20h12v-8z"></path></svg>
                    Read more
                </a>

                <p class="publisher-note fs-6">
                    Software description provided by the publisher.
                </p>

                <a href="#" class="cta-button full-width">
                    Explore this game's official website
                </a>
            </div>

            <div class="game-image ">
                <img class="thumbnail" alt="Stardew Valley" loading="lazy" fetchpriority="low" style="border-radius: 1rem;" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/software/switch/70010000001801/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7"><div class="image-overlay"></div>
            </div>
        </div>
    </div>
    <div class="content mt-0">
      <div class="tags-section">
          <h2 class="tags-title">Related tags</h2>
          <div class="d-flex justify-content-start flex-wrap">
              <a href="#" class="tag fs-6 me-3"><strong>Simulation</strong></a>
              <a href="#" class="tag fs-6 me-3"><strong>Choose your own path</strong></a>
              <a href="#" class="tag fs-6 me-3"><strong>Pixel art</strong></a>
              <a href="#" class="tag fs-6 me-3"><strong>Romance</strong></a>
              <a href="#" class="tag fs-6 me-3"><strong>Online co-op</strong></a>
              <a href="#" class="tag fs-6 me-3"><strong>Play together on multiple consoles</strong></a>
          </div>
      </div>  
      <div class="details-section">
        <h2 class="section-title">About this item</h2>
        <hr>
        <div class="row justify-content-start">
          <div class="col-4">
            <div style="color: #666;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="28" role="presentation" alt="" data-testid="StorageIcon" size="28" color="currentColor"><ellipse cx="16" cy="4.234" rx="13" ry="4.234" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></ellipse><path fill="currentColor" d="M3 15.71v5.293c0 .408.239.781.616.935C7.085 23.35 11.362 24.192 16 24.192s8.915-.84 12.384-2.254c.377-.154.616-.527.616-.935V15.71c-3.573 1.57-8.084 2.515-13 2.515S6.573 17.28 3 15.71z"></path><path fill="currentColor" d="M3 7.852v5.292c0 .408.239.782.616.935 3.469 1.414 7.746 2.254 12.384 2.254s8.915-.84 12.384-2.254c.377-.153.616-.527.616-.935V7.852c-3.573 1.57-8.084 2.514-13 2.514S6.573 9.422 3 7.852zm26 15.767c-3.573 1.57-8.084 2.514-13 2.514S6.573 25.19 3 23.62v4.147C3 30.104 8.82 32 16 32s13-1.896 13-4.234"></path></svg>
              Game file size (estimated)
            </div>
          </div>
          <div class="col-8">
              <span class="fs-6">Nintendo Switch: 1.6 GB • Nintendo Switch 2: 1.6 GB</span>  
          </div>
        </div>
        <hr>
        <div class="row justify-content-start">
          <div class="col-4" style="color: #666;">
            <svg data-name="Switch lite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="SwitchLiteIcon" size="28" color="currentColor"><path d="M28.737 9.41H3.262a3.218 3.218 0 0 0-3.218 3.218v7.164a3.218 3.218 0 0 0 3.218 3.218h25.475a3.218 3.218 0 0 0 3.219-3.218v-7.164a3.218 3.218 0 0 0-3.219-3.218zm.112 2.173a.563.563 0 1 1-.563.563.563.563 0 0 1 .563-.563zm0 2.32a.563.563 0 1 1-.563.564.563.563 0 0 1 .563-.563zM3.146 12.106a1.2 1.2 0 1 1-1.2 1.201 1.2 1.2 0 0 1 1.2-1.2zm1.437 5.85a.125.125 0 0 1-.125.125h-.731a.133.133 0 0 0-.133.134v.73a.126.126 0 0 1-.125.126h-.636a.125.125 0 0 1-.126-.126v-.73a.133.133 0 0 0-.132-.134h-.732a.125.125 0 0 1-.125-.125v-.636a.125.125 0 0 1 .125-.125h.732a.133.133 0 0 0 .132-.133v-.73a.125.125 0 0 1 .126-.126h.636a.126.126 0 0 1 .125.125v.731a.133.133 0 0 0 .133.133h.73a.125.125 0 0 1 .126.125zm1.674 3.654h19.497V10.82H6.257zm20.807-8.302a.563.563 0 1 1 .563.563.563.563 0 0 1-.563-.563zm1.778 5.532a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm1.23-4.97a.563.563 0 1 1 .562-.562.563.563 0 0 1-.563.563z" fill="currentColor" fill-rule="evenodd"></path></svg>
            Supported play modes</div>
          <div class="col-8">
            <div class="detail-content">
              <div class="play-modes">
                <div class="play-mode">
                  <div class="mode-icon">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="40" role="presentation" alt="" data-testid="TvModeIcon" size="40" color="currentColor"><g fill="currentColor"><path d="M11.903 16.114l-1.154-3.56H9.591l1.641 4.627h1.357l1.632-4.627h-1.163zm-7.604-2.58h1.36v3.646h1.058v-3.646h1.371v-.981H4.299zm17.743 9.126v.758H32v-6.702h-9.958z"></path><path d="M8.433 21.6H4.784v1.808h3.649v.01h1.656v-.01h3.645V21.6H10.09v-.737h8.443V8.582H0v12.281h8.433v.737zM2.11 18.956v-8.453h14.31v8.453H2.11z"></path><path d="M16.333 21.6h-.603v1.801h5.589v-.602h-4.986z"></path></g></svg>
                  </div>
                  <div class="mode-label">
                    TV mode
                  </div>
                </div>
                <div class="play-mode">
                  <div class="mode-icon">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="40" role="presentation" alt="" data-testid="TabletopModeIcon" size="40" color="currentColor"><path d="M31.32 18.242l-2.657-6.94-1.285 6.94h3.943zM28.174 5.336H6.418l-2.74 12.906h21.754l2.741-12.906zm-5.035 10.505H6.99l1.722-8.094h16.143l-1.717 8.094zm-21.741 5.03H0v.995h.02a.098.098 0 0 0-.02.059v2.008a2.734 2.734 0 0 0 2.736 2.731h7.426a2.737 2.737 0 0 0 2.741-2.731v-2.008a.18.18 0 0 0-.01-.06h.01v-.994H1.397zm7.64.31a1 1 0 1 1-1.004 1.002c0-.554.45-1.002 1.004-1.001zm-5.845 4.43a1.837 1.837 0 1 1 1.858-1.833c-.003.49-.2.958-.55 1.302a1.839 1.839 0 0 1-1.308.53zm3.24-1.833a1.009 1.009 0 0 1 1.004-.985.981.981 0 1 1-1.004.985zm2.605 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.591-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964zM32 20.87H19.097v.995h.02a.098.098 0 0 0-.02.059v2.008a2.73 2.73 0 0 0 2.731 2.731h7.431A2.738 2.738 0 0 0 32 23.933v-2.009a.18.18 0 0 0-.01-.06H32v-.994zm-3.866.31a1 1 0 0 1-.006 1.999.999.999 0 1 1 .006-1.998zm-5.85 4.43a1.836 1.836 0 0 1 0-3.673 1.837 1.837 0 1 1 0 3.672zm3.24-1.833c.015-.545.459-.98 1.004-.985a.981.981 0 1 1 0 1.964c-.544 0-.99-.434-1.004-.979zm2.61 2.57a.983.983 0 1 1 .99-.978.988.988 0 0 1-.99.977zm1.586-1.591a.982.982 0 1 1 0-1.964.982.982 0 1 1 0 1.964z" fill="currentColor" fill-rule="evenodd"></path></svg>
                  </div>
                  <div class="mode-label">Tabletop mode</div>
                  </div>
                  <div class="play-mode">
                    <div class="mode-icon">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="40" role="presentation" alt="" data-testid="HandheldModeIcon" size="40" color="currentColor"><path d="M28.812 8.455h-2.353c-.014 0-.038.009-.052.009v-.01H5.621v.014c-.028-.004-.061-.013-.07-.013H3.192A3.196 3.196 0 0 0 0 11.65v8.696a3.203 3.203 0 0 0 3.193 3.198H5.55c.01 0 .043-.01.07-.015v.015h20.787v-.015a.163.163 0 0 0 .052.015h2.353A3.195 3.195 0 0 0 32 20.346V11.65a3.187 3.187 0 0 0-3.188-3.196zm-.183 1.973a1.014 1.014 0 1 1-1.012 1.012 1.006 1.006 0 0 1 1.012-1.012zm.994 4.276a1.003 1.003 0 1 1-2.005-.021 1.003 1.003 0 0 1 2.005.021zM3.521 10.428a1.89 1.89 0 1 1-.703 3.639 1.892 1.892 0 0 1-1.168-1.755c0-1.035.835-1.877 1.87-1.884zm1.007 6.22a1.001 1.001 0 0 1-1.509.882 1.007 1.007 0 0 1-.497-.882 1.024 1.024 0 0 1 .999-1.026 1.03 1.03 0 0 1 1.007 1.026zM.896 18.29a1.003 1.003 0 1 1 2.006.018 1.003 1.003 0 0 1-2.006-.018zm2.625 2.636a1.012 1.012 0 0 1-.725-1.727 1.013 1.013 0 0 1 1.732.713 1.008 1.008 0 0 1-1.007 1.014zm1.636-1.623a1.02 1.02 0 1 1-.004-2.04 1.02 1.02 0 0 1 .004 2.04zm20.092 1.42H6.774v-9.45H25.25v9.45zm.722-7.66a1.021 1.021 0 1 1 2.043.009 1.021 1.021 0 0 1-2.043-.009zm2.658 7.863a1.892 1.892 0 1 1 1.866-1.88 1.88 1.88 0 0 1-1.866 1.88zm1.622-6.836a1.019 1.019 0 0 1-.748-1.726 1.018 1.018 0 1 1 .748 1.726z" fill="currentColor"></path></svg>
                    </div>
                    <div class="mode-label">
                      Handheld mode
                    </div>
                  </div>
                </div>
                <p style="margin-top: 8px; font-size: 12px; color: #999;">
                  Detached Joy-Con™ mode is not available when playing in TV mode.
                </p>
              </div>
            </div>
          </div>
          <hr>
          
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="28" role="presentation" alt="" data-testid="GroupIcon" size="28" color="currentColor"><path fill="currentColor" d="M9 13c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9 0-3.8-3.1-6.9-6.9-6.9C12.1 6.1 9 9.2 9 13z"></path><path fill="currentColor" d="M24.3 13c0 .7-.1 1.4-.3 2h.3c3.2 0 5.8-2.6 5.8-5.9 0-3.3-2.6-5.9-5.8-5.9-1.8 0-3.5.9-4.5 2.3 2.7 1.4 4.5 4.2 4.5 7.5zM7.4 15h.3c-.2-.6-.3-1.3-.3-2 0-3.3 1.8-6.1 4.5-7.5-1.1-1.4-2.7-2.3-4.5-2.3-3.2 0-5.8 2.6-5.8 5.9 0 3.3 2.6 5.9 5.8 5.9zm5.1 5.7c-1.8-.8-3.2-2.2-4.1-3.9-.3 0-.6-.1-1-.1C3.3 16.8 0 19.6 0 23h8.2c1.2-1 2.6-1.8 4.3-2.3zm11.8-3.9c-.3 0-.7 0-1 .1-.9 1.7-2.3 3.1-4.1 3.9 1.6.5 3.1 1.3 4.2 2.3h8.2c.2-3.5-3.2-6.3-7.3-6.3zm-8.4 5.1c-4.8 0-8.7 3-9 6.7h18c-.4-3.8-4.3-6.7-9-6.7z"></path></svg>
                No. of players
              </div>
                <div class="col-8">
                    <div class="player-count">
                        <a href="#" class="link">Single System (1)</a>
                        <a href="#" class="link">Local wireless (1)</a>
                        <a href="#" class="link">Online (1-4)</a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
              <div class="col-4" style="color: #666;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="FamilyAccountIcon" size="28" color="currentColor"><path d="M24.3 10.7c4.2 0 7.7 3.3 7.7 7.4s-3.5 7.4-7.7 7.4c-1.9 0-3.5-.6-4.9-1.7-2.2 1.9-5 3-7.9 3-6.3 0-11.5-5-11.5-11.1 0-6 5.2-11 11.6-11 4.6 0 8.6 2.6 10.4 6.4.7-.2 1.5-.4 2.3-.4zM11.5 21.4c1.8 0 3.5-.8 4.7-2 .4-.4.3-1.1-.1-1.5H16c-.5-.4-1.2-.3-1.5.2-.7.8-1.9 1.3-3 1.3-1.2 0-2.2-.5-2.9-1.3-.4-.5-1.1-.5-1.5-.2-.5.4-.5 1-.2 1.5v.1c1.1 1.2 2.8 1.9 4.6 1.9zm-1.6-8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm6.3 0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm13.7 4.8c0-3-2.5-5.5-5.6-5.5s-5.6 2.5-5.6 5.5 2.5 5.5 5.6 5.5c3.2-.1 5.6-2.5 5.6-5.5zm-6.6-1.5c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm3.8 0c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm-2.9 4.9c-1.1 0-2.1-.5-2.8-1.2-.2-.2-.2-.6.1-.8.3-.2.7-.2.9.1.5.5 1.1.8 1.8.8s1.4-.3 1.9-.8c.2-.2.6-.3.9-.1.2.2.3.6.1.8-.7.7-1.7 1.2-2.9 1.2z" fill="currentColor"></path></svg>
              Nintendo Account family-group lending
              </div>
              <div class="col-8">
                Supported
              </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="DPadIcon" size="28" color="currentColor"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                Genre 
                </div>
                <div class="col-8">
                    <a href="#" class="link">Simulation</a>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="NsoIcon" size="28" color="currentColor"><rect width="100%" height="100%" fill="white"></rect><path fill="#e60012" d="M0 0v32h32V0zm8.785 9.232a3.7 3.7 0 0 1 3.7-3.7h3.154a.106.106 0 0 1 .106.106v14.218a.106.106 0 0 1-.106.106h-3.154a3.7 3.7 0 0 1-3.7-3.7zM6.767 26.596a2.034 2.034 0 1 1 2.064-2.034 2.05 2.05 0 0 1-2.064 2.034zm6.473-.124h-.677l-2.032-2.547v2.547h-.773v-3.82h.77l1.9 2.464v-2.464h.812zm4.025 0H14.35v-3.82h.82v3.075h2.094zm1.616 0h-.82v-3.82h.82zm-1.586-6.51a.105.105 0 0 1-.106-.106V5.626a.093.093 0 0 1 .094-.094h2.232a3.7 3.7 0 0 1 3.7 3.7v7.03a3.7 3.7 0 0 1-3.7 3.7zm6.178 6.51h-.676l-2.033-2.547v2.547h-.772v-3.82h.769l1.901 2.464v-2.464h.811zm4.27-3.075H25.41v.76h2.22v.707h-2.22v.863h2.333v.745H24.59v-3.82h3.154z"></path><path fill="#e60012" d="M6.767 23.306a1.257 1.257 0 1 0 1.214 1.256 1.236 1.236 0 0 0-1.214-1.256zm5.718-4.508h2.097V6.696h-2.097A2.536 2.536 0 0 0 9.95 9.232v7.03a2.536 2.536 0 0 0 2.536 2.536zm-.097-10.294a1.357 1.357 0 1 1-1.356 1.356 1.357 1.357 0 0 1 1.356-1.356zm7.655 3.506a1.459 1.459 0 1 0 1.46 1.458 1.459 1.459 0 0 0-1.46-1.458z"></path></svg>
                Nintendo Switch Online</div>
                <div class="col-8">
                    <div class="online-features">
                        <span class="link">Online play</span>
                        <span class="link">Save Data Cloud</span>
                    </div>
                    <p style="margin-top: 8px; font-size: 12px; color: #666;">
                        A Nintendo Switch Online membership (sold separately) is required for Save Data Cloud backup.
                        <a href="#" class="link">Learn more</a>
                    </p>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="SwitchIcon" size="28" color="currentColor"><path d="M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z" fill="currentColor" fill-rule="evenodd"></path></svg>
                System  
              </div>
                <div class="col-8">
                    <a href="#" class="link">Nintendo Switch</a>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="BuildingIcon" size="28" color="currentColor"><path d="M28.9 2.1C28.9 1 28 0 26.8 0H5.6C4.4 0 3.5 1 3.5 2.1v29.8H12v-6.4h7.4v6.4h9.5V2.1zm-19 25.6H6.7v-3.2h3.2v3.2zm0-5.4H6.7v-3.2h3.2v3.2zm0-5.3H6.7v-3.2h3.2V17zm0-5.3H6.7V8.5h3.2v3.2zm0-5.3H6.7V3.2h3.2v3.2zm5.2 15.9H12v-3.2h3.2v3.2zm0-5.3H12v-3.2h3.2V17zm0-5.3H12V8.5h3.2v3.2zm0-5.3H12V3.2h3.2v3.2zm5.3 15.9h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2zm5.3 21.3h-3.2v-3.2h3.2v3.2zm0-5.4h-3.2v-3.2h3.2v3.2zm0-5.3h-3.2v-3.2h3.2V17zm0-5.3h-3.2V8.5h3.2v3.2zm0-5.3h-3.2V3.2h3.2v3.2z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                Publisher</div>
                <div class="col-8">
                    <a href="#" class="link">ConcernedApe</a>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" role="presentation" alt="" data-testid="WrenchIcon" size="28" color="currentColor"><path fill="currentColor" d="M23.0616 18.5338L15.0011 10.4733C15.3211 9.62528 15.4939 8.70691 15.4939 7.75014C15.4971 3.46868 12.0284 0 7.74694 0C6.78697 0 5.8686 0.175994 5.02383 0.492784L10.0125 5.48142L5.48142 10.0125L0.492784 5.02383C0.172794 5.8718 0 6.79017 0 7.74694C0 12.0252 3.46868 15.4939 7.74694 15.4939C8.70691 15.4939 9.62528 15.3179 10.4701 15.0011L18.5306 23.0616C19.7817 24.3128 21.8105 24.3128 23.0616 23.0616C24.3128 21.8105 24.3128 19.7817 23.0616 18.5306V18.5338ZM20.4921 21.9193C19.6729 21.9193 19.0106 21.2569 19.0106 20.4377C19.0106 19.6185 19.6729 18.9562 20.4921 18.9562C21.3113 18.9562 21.9737 19.6185 21.9737 20.4377C21.9737 21.2569 21.3113 21.9193 20.4921 21.9193Z"></path></svg>
                Developer
                </div>
                <div class="col-8">
                    <a href="#" class="link">ConcernedApe</a>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" role="presentation" alt="" data-testid="GlobeIcon" size="28" color="currentColor"><path d="M16 0C11.7 0 7.7 1.7 4.7 4.7S0 11.7 0 16c0 4.3 1.7 8.3 4.7 11.3S11.7 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm-5.2 4c-.5.9-1 1.9-1.4 3-.6-.2-1.3-.5-2-.8 1-1 2.2-1.7 3.4-2.2zM5.5 8.1c1 .5 2.1 1 3.2 1.4-.4 1.6-.6 3.4-.7 5.2H3c.2-2.4 1.1-4.6 2.5-6.6zM3 17.3h5.1c.1 1.8.3 3.5.7 5.2-1.1.4-2.2.8-3.2 1.4-1.5-2-2.4-4.2-2.6-6.6zm4.4 8.5c.7-.3 1.4-.6 2.1-.8.4 1.1.9 2.1 1.4 3-1.3-.5-2.5-1.2-3.5-2.2zm7.3 2.8c-1-.8-2-2.3-2.7-4.3.9-.2 1.8-.3 2.7-.4v4.7zm0-7.3c-1.1.1-2.3.2-3.4.5-.3-1.4-.5-2.9-.6-4.5h4v4zm0-6.6h-4c.1-1.6.3-3.1.6-4.5 1.1.2 2.3.4 3.4.5v4zm0-6.7c-1 0-1.8-.1-2.7-.3.7-2 1.7-3.5 2.7-4.2V8zM29 14.7h-5.1c-.1-1.8-.3-3.5-.7-5.2 1.1-.4 2.2-.8 3.2-1.4 1.5 2 2.4 4.2 2.6 6.6zm-4.4-8.5c-.7.3-1.4.6-2.1.8-.4-1.1-.9-2.2-1.4-3.1 1.3.6 2.5 1.3 3.5 2.3zm-7.3-2.7c1 .8 1.9 2.3 2.6 4.2-.8.2-1.7.3-2.6.3V3.5zm0 7.2c1.1-.1 2.3-.2 3.4-.4.3 1.4.5 2.9.6 4.5h-3.9v-4.1zm0 17.8V24c.9.1 1.8.2 2.6.4-.6 1.8-1.6 3.4-2.6 4.1zm0-7.2v-4h3.9c-.1 1.6-.3 3.1-.6 4.5-1-.2-2.1-.4-3.3-.5zm3.8 6.8c.5-.9 1-1.9 1.4-3.1.7.2 1.4.5 2.1.9-1 .9-2.2 1.6-3.5 2.2zm5.4-4.2c-1-.5-2.1-1-3.2-1.4.4-1.6.6-3.4.7-5.1h5c-.2 2.3-1.1 4.5-2.5 6.5z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                Supported languages
                </div>
                <div class="col-8">
                    <div class="languages">
                        <span class="language">English</span>
                        <span class="language">French</span>
                        <span class="language">German</span>
                        <span class="language">Italian</span>
                        <span class="language">Japanese</span>
                        <span class="language">Korean</span>
                        <span class="language">Portuguese</span>
                        <span class="language">Russian</span>
                        <span class="language">Simplified Chinese</span>
                        <span class="language">Spanish</span>
                        <span class="language">Traditional Chinese</span>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="28" role="presentation" alt="" data-testid="CalendarIcon" size="28" color="currentColor"><path fill="currentColor" d="M21.8 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm1.6-20.3h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm-16.3 0h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9H7.1c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm6.1 20.3h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"></path><path fill="currentColor" d="M29.5 4.3H27v2.2c0 1.2-.9 2.1-2.1 2.1h-1.5c-1.2 0-2.1-1-2.1-2.1V4.3H10.7v2.2c0 1.2-.9 2.1-2.1 2.1H7.1C5.9 8.6 5 7.6 5 6.5V4.3H2.5C1.1 4.3 0 5.4 0 6.7V29c0 1.4 1.1 2.5 2.5 2.5h27c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.3-1.1-2.4-2.5-2.4zm0 24.7h-27V10.4h27V29z"></path><path fill="currentColor" d="M13.2 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm-8.6 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0-8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"></path></svg>
                Release date
                </div>
                <div class="col-8">October 5, 2017</div>
            </div>
            <hr>
            <div class="row justify-content-center">
                <div class="col-4" style="color: #666;">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" xml:space="preserve" width="28" role="presentation" alt="" data-testid="CalendarIcon" size="28" color="currentColor"><path fill="currentColor" d="M21.8 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm1.6-20.3h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9h-1.5c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm-16.3 0h1.5c.5 0 .9-.4.9-.9v-5c0-.5-.4-.9-.9-.9H7.1c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9zm6.1 20.3h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"></path><path fill="currentColor" d="M29.5 4.3H27v2.2c0 1.2-.9 2.1-2.1 2.1h-1.5c-1.2 0-2.1-1-2.1-2.1V4.3H10.7v2.2c0 1.2-.9 2.1-2.1 2.1H7.1C5.9 8.6 5 7.6 5 6.5V4.3H2.5C1.1 4.3 0 5.4 0 6.7V29c0 1.4 1.1 2.5 2.5 2.5h27c1.4 0 2.5-1.1 2.5-2.5V6.7c0-1.3-1.1-2.4-2.5-2.4zm0 24.7h-27V10.4h27V29z"></path><path fill="currentColor" d="M13.2 19.1h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9h-5.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm-8.6 8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9zm0-8.6h5.6c.5 0 .9-.4.9-.9v-5.6c0-.5-.4-.9-.9-.9H4.6c-.5 0-.9.4-.9.9v5.6c0 .5.4.9.9.9z"></path></svg>
                  ESRB rating
                </div>
                <div class="detail-content">
                    <div class="esrb-rating">
                        <div class="esrb-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 39.68 59.53" role="img" title="Everyone 10+"><defs><style>.cls-1{fill:#fff}</style></defs><g data-name="Layer 2"><g data-name="Layer 1"><path d="M39.69 0H0v59.53h39.69z" class="cls-1"></path><path d="M39.11.64v58.25H.58V.64z"></path><path d="M2.52 2.71H36.9v9.66H2.52zM2.5 14.47h34.4v35.51H2.5zm.01 42.32v-4.71h6.9v1.1H5.28v.67h3.5v1.1h-3.5v.74h4.29v1.1zm12.93-3.34a.52.52 0 0 0-.4-.32 2.5 2.5 0 0 0-.72-.09c-.61 0-.88.1-.88.28 0 .69 4.87.26 4.87 2 0 1.09-1.64 1.63-4 1.63s-3.7-.73-3.75-1.58h2.65a.69.69 0 0 0 .46.37 2.5 2.5 0 0 0 .79.12c.69 0 1.16-.12 1.16-.35 0-.71-4.88-.22-4.88-2 0-1 1.56-1.5 3.67-1.5 2.35 0 3.43.66 3.63 1.49zm7.02.67h1.09c.86 0 1.32-.12 1.32-.45s-.47-.49-1.11-.49h-1.3zm0 1v1.64h-2.77v-4.68h4c2.82 0 3.75.43 3.75 1.34 0 .55-.44 1-1.43 1.16.9.18 1.44.29 1.44 1.24 0 .61 0 .83.29.83v.14h-2.81a1.8 1.8 0 0 1-.14-.82c0-.62-.19-.82-1.48-.82zm9.45-1.94V54h1.16c.55 0 1-.14 1-.41s-.54-.38-1.13-.38zm0 1.64v.87h1.21c.69 0 1.21-.08 1.21-.43s-.65-.44-1.53-.44zm-2.77 2v-4.74h4c1.9 0 3.42.25 3.42 1.18 0 .49-.57.84-1.1 1 .91.13 1.4.57 1.4 1.08 0 1.05-1.44 1.42-3.64 1.42z" class="cls-1"></path><path d="M21.88 41.26H20.4v.81h1.48v1.44h.84v-1.44h1.48v-.81h-1.48v-1.44h-.84zm-2.36-.37c0-2.86-1.54-4.56-4.08-4.56-3.45 0-4.29 2.35-4.29 4.56 0 2.7 1.35 4.56 4.18 4.56s4.19-1.86 4.19-4.56M5.11 22.68l20.83-6.22 2.06 6.6-10.41 3.11.85 2.7L28.09 26l2.08 6.59-9.64 2.88.9 2.84 10.78-3.22 2.09 6.59L13.13 48l-8-25.32m.77 16.69a7 7 0 0 0 2.59-1.25V45h2v-8.63H8.54A6.9 6.9 0 0 1 5.9 37.7z"></path><path d="M13 40.81c0-2.89 1.16-3.56 2.47-3.56 1.47 0 2.3 1.11 2.3 3.64 0 1.58-.44 3.52-2.32 3.51s-2.52-1.48-2.45-3.59M3.48 10.28V4.8h2.15v.84H4.31V7h1.22v.84H4.31v1.6h1.36v.84zM5.89 4.8h.86l.61 4 .69-4h.81l-1 5.48h-1zm3.35 5.48V4.8h2.14v.84h-1.32V7h1.22v.84h-1.22v1.6h1.37v.84zm3.53 0h-.83V4.8h1.53a.77.77 0 0 1 .67.37 1.94 1.94 0 0 1 .25 1.07 2.1 2.1 0 0 1-.17.88.77.77 0 0 1-.56.46h.18a.6.6 0 0 1 .24.14.8.8 0 0 1 .2.31 1.5 1.5 0 0 1 .09.58v.87a3.5 3.5 0 0 0 0 .47 1.2 1.2 0 0 0 0 .29h-.8a1.5 1.5 0 0 1-.09-.52v-1a1.5 1.5 0 0 0-.06-.39.5.5 0 0 0-.17-.26A.53.53 0 0 0 13 8h-.21zm0-3.11h.36a.28.28 0 0 0 .2-.08.55.55 0 0 0 .14-.19 1 1 0 0 0 .06-.26 1.3 1.3 0 0 0 0-.27 1 1 0 0 0-.11-.56.36.36 0 0 0-.31-.17h-.36zm2.86 1.21-1-3.58h.9l.59 2.32.63-2.32h.84l-1.1 3.58v1.9h-.83zm3.63 1.99a1.18 1.18 0 0 1-.79-.24 1.37 1.37 0 0 1-.4-.63 4 4 0 0 1-.15-.91v-2a4 4 0 0 1 .15-.91 1.37 1.37 0 0 1 .4-.63 1.18 1.18 0 0 1 .79-.24A1.16 1.16 0 0 1 20 5a1.3 1.3 0 0 1 .4.63 3.2 3.2 0 0 1 .15.91v2a3.2 3.2 0 0 1-.15.91 1.3 1.3 0 0 1-.4.63 1.16 1.16 0 0 1-.74.29m0-.82a.37.37 0 0 0 .27-.11.75.75 0 0 0 .16-.37 3.2 3.2 0 0 0 .07-.62V6.63a3.2 3.2 0 0 0-.07-.63.75.75 0 0 0-.16-.36.34.34 0 0 0-.27-.12.35.35 0 0 0-.28.12.86.86 0 0 0-.16.36 4 4 0 0 0-.07.62v1.82a4 4 0 0 0 .07.62.85.85 0 0 0 .16.37.38.38 0 0 0 .28.12m2.01.73V4.8h1.11l1.05 3.8V4.8h.77v5.48h-1.08l-1.07-4v4zm3.63 0V4.8h2.15v.84h-1.33V7h1.22v.84h-1.22v1.6h1.37v.84zm3.86-4.61a3.4 3.4 0 0 0 .4-.37 2.3 2.3 0 0 0 .34-.48h.72v5.46h-.82v-4.2a3 3 0 0 1-.31.33l-.33.28zm3.36-.92a1.1 1.1 0 0 1 .57.14 1 1 0 0 1 .33.47 3.5 3.5 0 0 1 .16.86V8.7a4.3 4.3 0 0 1-.13.89 1.24 1.24 0 0 1-.34.56.84.84 0 0 1-.6.2.8.8 0 0 1-.6-.2 1.24 1.24 0 0 1-.34-.56 4.3 4.3 0 0 1-.13-.89V6.22a3.5 3.5 0 0 1 .16-.86.9.9 0 0 1 .33-.47 1 1 0 0 1 .59-.14m0 .8a.24.24 0 0 0-.19.08.64.64 0 0 0-.1.29v2.61a4.4 4.4 0 0 0 0 .61.64.64 0 0 0 .1.3.19.19 0 0 0 .18.08.21.21 0 0 0 .18-.08.64.64 0 0 0 .1-.3c0-.14 0-.35.05-.61V5.92a.64.64 0 0 0-.1-.29.26.26 0 0 0-.22-.08m2.27.32H35v1.49h.92v.84H35v1.5h-.61V8.2h-.93v-.84h.93z"></path></g></g></svg>
                        </div>
                        <div class="esrb-details">
                            Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco<br>
                            <strong>Users Interact Online</strong>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
      </div>

        <!-- Multiplayer Information -->
        <div>
            <div class="fs-6"><strong>About the Number of Players</strong></div>
            <div class="fs-6">
                1-4 with online multiplayer functionality.
            </div>
        </div>
    </div>

    <div class="content">
      <h2 class="section-title">More like this</h2>
        
        <div class="games-carousel">
            <div class="games-grid" id="gamesGrid">
                <!-- Potion Permit -->
                <div class="game-card">
                    <div class="game-image">
                      <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/9d48c0f9b9af46dea325ca46490df62a_1024" loading="lazy" fetchpriority="low">    
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">Potion Permit</h3>
                        <div class="multiplayer-desc">9/22/22</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn">
                              <svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- My Time at Portia -->
                <div class="game-card">
                    <div class="game-image">
                      <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/3e02f426bc2340bcbd14c3652a11a748_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">My Time at Portia</h3>
                        <div class="multiplayer-desc">4/16/19</div>
                        <div class="game-price">$29.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- Bear and Breakfast -->
                <div class="game-card">
                    <div class="game-image">
                      <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/e354c517466b4d2bac7be4cc71b4b91e_1024" loading="lazy" fetchpriority="low">    
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">Bear and Breakfast</h3>
                        <div class="multiplayer-desc">9/15/22</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- Ooblets -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/4fb655312ece4a68af431e8f3fb31243_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">Ooblets</h3>
                        <div class="multiplayer-desc">9/1/22</div>
                        <div class="game-price">$29.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/caf973ec07af44a8b5de0116ea6b2e50_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/54a74ff275c040b3b5c97d9431321e82_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/27b602426acb4f77b6071e44ba77ac0f_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/801ccc3782dd4a0d94236446ebb93f46_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/4e92bf91cb944467ac71af42f930ffe8_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/a95e840bc6d248c297031ae8777e0fb3_1024" loading="lazy" fetchpriority="low">
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                      <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/f8abe9bc268c41fcbb3b64427cb7a710_1024" loading="lazy" fetchpriority="low">    
                    </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                            
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

                <!-- A Space for the Unbound -->
                <div class="game-card">
                    <div class="game-image">
                        <img class="UBTQd" alt="" src="https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/44cf79749f574c21b8ee93a1095f40b9_1024" loading="lazy" fetchpriority="low">
                      </div>
                    <div class="game-info">
                        <h3 class="game-title">A Space for the Unbound</h3>
                        <div class="multiplayer-desc">1/19/23</div>
                        <div class="game-price">$19.99</div>
                        <div class="game-meta">
                            <div class="game-category">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="DPadIcon" color="currentColor" size="24"><path d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>
                                <span>Games</span>
                            </div>
                            <button class="wishlist-btn"><svg viewBox="0 0 54 54" fill="currentColor" stroke="currentColor" width="24" role="presentation" alt="" data-testid="heartspark" color="currentColor" size="24">< class="hearts"><path class="heart heart-outline" d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"></path><path class="heart heart-filled" d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"></path></svg></button>
                        </div>
                    </div>
                </div>

            </div>

            <div class="carousel-controls">
                <button class="carousel-btn" id="prevBtn">‹</button>
                <button class="carousel-btn" id="nextBtn">›</button>
            </div>
        </div>

        <div class="footer-info">
            <p class="fw-lighter">
                <strong>WARNING:</strong> If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.
            </p>
            
            <p class="fw-lighter">
                Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online
            </p>
            
            <p class="fw-lighter">
                Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
            </p>
        </div>
    </div>
    <div class="row justify-content-center align-items-center" style="height: 128px; background: #e60012">
      <div class="col-3">
        <svg width="260" viewBox="0 0 388 192" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation" alt="Nintendo logo" data-testid="NintendoRacetrackLogoBoxIcon" size="260"><g><rect width="388" height="192" fill="#E60012"></rect><path d="M112.15 101.892L99.1546 80.8821H89.7753L89.7713 111.016H99.0991V90.0034L112.153 111.016H121.458V80.8821H112.134L112.15 101.892ZM186.069 91.0192V88.0391H181.161V83.9821H172.092L172.1 88.0424H167.17V91.0192H172.096L172.092 111.016H181.176L181.161 91.0192L186.069 91.0192ZM126.639 111.016H135.697V90.9819L126.639 90.9739V111.016ZM126.617 87.0344H135.697V80.871H126.617V87.0344ZM285.415 89.6134C278.104 89.6134 272.169 94.645 272.169 100.857C272.169 107.073 278.104 112.104 285.415 112.104C292.729 112.104 298.653 107.073 298.653 100.857C298.653 94.645 292.729 89.6134 285.415 89.6134ZM289.044 105.074C289.044 108.269 287.158 109.584 285.343 109.584C283.529 109.584 281.636 108.269 281.636 105.074V100.755C281.636 100.755 281.64 97.7903 281.64 96.583C281.64 93.4036 283.532 92.0875 285.343 92.0875C287.15 92.0875 289.044 93.4036 289.044 96.583C289.044 97.7903 289.044 100.036 289.055 100.838C289.055 100.894 289.044 103.867 289.044 105.074ZM260.281 91.9676C258.834 91.1542 257.304 90.3672 255.156 90.1797C248.622 89.6094 243.639 95.3797 243.639 100.669C243.639 107.639 249.016 110.222 249.829 110.604C252.884 112.025 256.791 112.029 260.258 109.854C260.258 110.042 260.262 111.013 260.262 111.013H269.215V80.8821H260.281V91.9676ZM260.349 100.894V104.452C260.349 107.545 258.204 108.351 256.795 108.351C255.355 108.351 253.244 107.545 253.244 104.452V97.3138C253.244 94.2098 255.355 93.4258 256.795 93.4258C258.204 93.4258 260.345 94.2098 260.345 97.3138C260.345 98.3788 260.349 100.894 260.349 100.894ZM156.912 90.0519C153.913 90.1384 151.424 91.4244 149.685 93.074C149.674 92.5752 149.685 90.9669 149.685 90.9669L140.679 90.9739L140.694 111.005H149.685C149.685 111.005 149.674 98.7013 149.674 97.8467C149.674 96.1033 151.511 94.1613 153.974 94.1613C156.441 94.1613 158.113 96.1033 158.113 97.8467V111.005H167.125C167.125 111.005 167.114 101.517 167.125 100.107C167.17 92.1741 160.298 89.9549 156.912 90.0519ZM230.547 90.0519C227.544 90.1384 225.051 91.4244 223.316 93.074C223.305 92.5752 223.316 90.9669 223.316 90.9669L214.325 90.9739L214.321 111.005H223.316C223.316 111.005 223.305 98.7013 223.305 97.8467C223.305 96.1033 225.145 94.1613 227.612 94.1613C230.079 94.1613 231.748 96.1033 231.748 97.8467V111.005H240.752C240.752 111.005 240.741 101.517 240.752 100.107C240.797 92.1741 233.929 89.9549 230.547 90.0519ZM211.581 101.082C211.581 94.8658 205.579 89.7222 198.208 89.7222C190.846 89.7222 184.87 94.753 184.87 100.969C184.87 107.182 190.846 112.216 198.208 112.216C204.326 112.216 209.489 108.726 211.067 103.998L202.033 104.006C202.033 104.006 202.044 104.092 202.044 105.221C202.044 108.884 199.633 109.693 198.291 109.693C196.949 109.693 194.501 108.884 194.501 105.221C194.501 104.122 194.512 101.082 194.512 101.082C194.512 101.082 211.581 101.089 211.581 101.082ZM195.104 94.0263C195.817 92.7928 197.114 92.2114 198.291 92.2003C199.472 92.2114 200.769 92.7928 201.481 94.0263C202.051 95.0342 202.081 96.2081 202.066 97.9587H194.508C194.493 96.2081 194.531 95.0342 195.104 94.0263ZM302.259 84.6048C302.259 83.6192 301.532 83.1235 300.07 83.1235H298.052V88.2639H299.305V86.1608H299.916L300.898 88.2639H302.286L301.138 85.9693C301.843 85.7858 302.259 85.28 302.259 84.6048ZM299.916 85.407H299.305V83.9146H299.848C300.598 83.9146 300.97 84.1433 300.97 84.6795C300.97 85.1893 300.628 85.407 299.916 85.407ZM299.954 81.118C297.393 81.118 295.308 83.199 295.308 85.7596C295.308 88.3203 297.393 90.3974 299.954 90.3974C302.514 90.3974 304.584 88.3203 304.584 85.7596C304.584 83.199 302.514 81.118 299.954 81.118ZM299.954 89.5046C297.88 89.5046 296.201 87.8287 296.201 85.7596C296.201 83.6858 297.88 82.0068 299.954 82.0068C302.023 82.0068 303.703 83.6858 303.703 85.7596C303.703 87.8287 302.023 89.5046 299.954 89.5046ZM289.842 64.0001H97.9482C77.639 63.9517 64 78.5541 64 96.054C64 113.562 77.6096 127.992 97.9815 128H289.813C310.192 127.992 323.793 113.562 323.793 96.054C323.793 78.5541 310.154 63.9516 289.842 64.0001ZM289.756 120.149H98.0419C81.8533 120.213 72.0156 109.344 72.0156 96.0128C72.0156 82.6811 81.9097 71.907 98.0419 71.8728H289.756C305.881 71.907 315.775 82.6811 315.775 96.0128C315.775 109.344 305.941 120.213 289.756 120.149Z" fill="white"></path></g></svg>
      </div>
    </div>
  </div>

  
  `,
  styleUrls: ['./game.component.css'],
  animations: [
    
  ],
  imports: [
    NavbarComponent,
    CommonModule
  ],
  encapsulation: ViewEncapsulation.None
})
export class GameComponent {
  
  ngAfterViewInit() {
    // Variables del carrusel
    let currentSlide = 0;
    let cardsPerView = window.innerWidth > 768 ? 4 : 2;
    const gamesGrid = document.getElementById('gamesGrid');
    const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement | null;
    const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement | null;

    function getTotalCards() {
      return document.querySelectorAll('.game-card').length;
    }

    function getMaxSlides() {
      return Math.max(0, Math.ceil(getTotalCards() / cardsPerView) - 1);
    }

    function updateCarousel() {
      const cardWidth = 280 + 20; // ancho de card + gap
      const translateX = -currentSlide * cardsPerView * cardWidth;
      gamesGrid!.style.transform = `translateX(${translateX}px)`;

      // Actualizar botones
      if (prevBtn) prevBtn.disabled = currentSlide === 0;
      if (nextBtn) nextBtn.disabled = currentSlide >= getMaxSlides();
    }

    function nextSlide() {
      if (currentSlide < getMaxSlides()) {
        currentSlide++;
        updateCarousel();
      }
    }

    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    }

    nextBtn!.addEventListener('click', nextSlide);
    prevBtn!.addEventListener('click', prevSlide);

    // Wishlist y otras funciones... (sin cambios)

    // Inicializar carrusel
    updateCarousel();

    // Responsive: recalcular en resize
    window.addEventListener('resize', () => {
      const newCardsPerView = window.innerWidth > 768 ? 4 : 2;
      if (newCardsPerView !== cardsPerView) {
        cardsPerView = newCardsPerView;
        currentSlide = 0;
        updateCarousel();
      }
    });
}
}
