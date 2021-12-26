import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackTo } from '../../utils/interfaces/back-to.interface';

@Component({
  selector: 'app-subpage-wrapper',
  templateUrl: './subpage-wrapper.component.html',
  styleUrls: ['./subpage-wrapper.component.scss'],
})
export class SubpageWrapperComponent implements OnInit {
  @Input() title!: string;
  @Input() backTo!: BackTo;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToBack(): void {
    this.router.navigate([this.backTo.path], { relativeTo: this.backTo.route });
  }
}
