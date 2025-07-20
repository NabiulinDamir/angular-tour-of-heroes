import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryDynamicComponent } from './models/category-dynamic-componenet.model';

@Component({
  selector: 'app-category',
  templateUrl: './project.html',

  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CategoryComponent implements OnInit, CategoryDynamicComponent {
  @Input() categoryName!: string;

  @Input() id!: number;

  // @Input() author: string = '1';

  // @Input() updatedDate: string = '2';

  // @Output() redactCategory: EventEmitter<any> = new EventEmitter<any>();

  @Input() isRedact: boolean = false;

  categoryFormControl!: FormControl;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.categoryFormControl = new FormControl<string>(
      this.categoryName,
      Validators.required
    );
  }

  toggleRedactMode() {
    this.isRedact = !this.isRedact;
  }

  // sendRedactedCategoryData() {
  //   this.redactCategory.emit({
  //     newTitle: this.categoryFormControl.value,
  //     id: this.id,
  //   });
  // }
}
