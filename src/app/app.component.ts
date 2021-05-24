import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Haji', url: '/haji', icon: 'ribbon' },
    { title: 'Umrah', url: '/umrah', icon: 'mail' },
    { title: 'International', url: '/folder/International', icon: 'earth' },
    { title: 'Domestic', url: '/folder/Domestic', icon: 'boat' },
    { title: 'Rental', url: '/rental', icon: 'car-sport' },
    { title: 'Transport', url: '/transport', icon: 'bus' },
    { title: 'Contact us', url: '/contact-us', icon: 'call' },
    { title: 'Construction', url: '/construction', icon: 'warning' },
  ];
  public photos = [
    'Turkey',
    'Lombok',
    'Friends',
    'Notes',
    'Work',
    'Travel',
    'Reminders'];
  constructor() { }
}
