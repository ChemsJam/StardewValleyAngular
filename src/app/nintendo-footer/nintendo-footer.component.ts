import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface FooterLink {
  text: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-nintendo-footer',
  imports: [NgFor],
  templateUrl: './nintendo-footer.component.html',
  styleUrl: './nintendo-footer.component.css'
})
export class NintendoFooterComponent {
  footerSections: FooterSection[] = [
      {
        title: 'About Nintendo',
        links: [
          { text: 'Careers', url: '/careers' },
          { text: 'Corporate Social Responsibility', url: '/csr' }
        ]
      },
      {
        title: 'Shop',
        links: [
          { text: 'Games', url: '/games' },
          { text: 'Hardware', url: '/hardware' },
          { text: 'Merchandise', url: '/merchandise' },
          { text: 'Sales and deals', url: '/deals' },
          { text: 'Exclusives', url: '/exclusives' },
          { text: 'Nintendo Switch Online', url: '/switch-online' },
          { text: 'Nintendo Store US', url: '/store' }
        ]
      },
      {
        title: 'Orders',
        links: [
          { text: 'Order details', url: '/order-details' },
          { text: 'Shipping info', url: '/shipping' },
          { text: 'Refunds and returns', url: '/returns' },
          { text: 'FAQ', url: '/faq' }
        ]
      },
      {
        title: 'Support',
        links: [
          { text: 'Nintendo Switch 2', url: '/switch-2-support' },
          { text: 'Nintendo Switch', url: '/switch-support' },
          { text: 'Nintendo Account', url: '/account-support' },
          { text: 'Apps and other products', url: '/apps-support' },
          { text: 'Repair', url: '/repair' },
          { text: 'Nintendo product recycling', url: '/recycling' },
          { text: 'Warranty', url: '/warranty' },
          { text: 'Licensed product information', url: '/licensed-products' }
        ]
      },
      {
        title: 'Parents',
        links: [
          { text: 'Info for parents', url: '/parents-info' },
          { text: 'Parental controls', url: '/parental-controls' }
        ]
      },
      {
        title: 'Privacy',
        links: [
          { text: 'Privacy policy', url: '/privacy-policy' },
          { text: 'Cookies and interest-based ads', url: '/cookies-policy' }
        ]
      },
      {
        title: 'Community guidelines',
        links: [
          { text: 'Community guidelines', url: '/privacy-policy' },
          { text: 'Online safetys', url: '/cookies-policy' }
        ]
      },
      {
        title: 'Documents and policies',
        links: [
          { text: 'Health and safety precautions', url: '/privacy-policy' },
          { text: 'Wireless regulatory info', url: '/cookies-policy' },
          { text: 'Supply chain transparency', url: '/cookies-policy' }
        ]
      }
    ];
  }
