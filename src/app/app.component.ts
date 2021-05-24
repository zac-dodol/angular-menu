import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pandu Sewa', url: '/rental', icon: 'car-sport' },
    { title: 'Dipandu Mewah', url: '/transport', icon: 'bus' },
    { title: 'Hubungi Kami', url: '/contact-us', icon: 'call' },
    { title: 'Antarabangsa', url: '/international', icon: 'earth' },
    { title: 'Malaysia', url: '/domestic', icon: 'boat' },
    { title: 'Haji', url: '/haji', icon: 'ribbon' },
    { title: 'Umrah', url: '/umrah', icon: 'mail' },
    { title: 'Construction', url: '/construction', icon: 'warning' },
    { title: 'Pembinaan', url: '/folder/Construction', icon: 'warning' },
  ];
  public gallery = [
    { title: 'Sydney', url: '/gallery/Sydney', icon: 'image' },
    { title: 'Turkey', url: '/gallery/Turkey', icon: 'images' },
    { title: 'Lombok', url: '/gallery/Lombok', icon: 'camera' }
  ];
  public labels = [
    'Autumn',
    'Spring',
    'Winter',
    'Summer'
  ];
  constructor() { }
}
