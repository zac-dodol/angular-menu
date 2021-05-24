import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public gallery: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.gallery = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
