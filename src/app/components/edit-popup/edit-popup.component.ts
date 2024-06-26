import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [
    DialogModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule,
  ],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() header!: string;
  @Input() product: Product = {
    price: '',
    name: '',
    image: '',
    rating: 0,
  };
  @Output() confirm = new EventEmitter<Product>();

  onConfirm() {
    this.confirm.emit(this.product);
    this.display = false;
    this.displayChange.emit(false);
  }

  onCancel() {
    this.display = false;
    this.displayChange.emit(false);
  }
}
