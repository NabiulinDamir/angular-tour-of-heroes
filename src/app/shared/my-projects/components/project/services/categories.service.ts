import { Injectable } from '@angular/core';
import { CategoryIntefrace } from '../models/category.model';
import { BehaviorSubject } from 'rxjs';
// import { RedactCategory } from '../models/category-dynamic-componenet.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categriesData: CategoryIntefrace[] = [
    {
      createdAt: '2023-09-23T09:55:24.634Z',
      id: 1,
      title: 'Компонент 1',
      updatedAt: '2024-06-24T12:42:14.300Z',
      user: {
        email: 'email.mail@bk.ru',
      },
    },
    {
      createdAt: '2023-10-23T02:55:14.634Z',
      id: 2,
      title: 'Компонент 2',
      updatedAt: '2024-04-24T15:42:13.300Z',
      user: {
        email: 'email.mail@bk.ru',
      },
    },
    {
      createdAt: '2024-01-23T09:55:24.634Z',
      id: 3,
      title: 'Компонент 3',
      updatedAt: '2024-08-24T12:42:14.300Z',
      user: {
        email: 'email.mail@bk.ru',
      },
    },
  ];

  categoriesEmmitter: BehaviorSubject<CategoryIntefrace[]> =
    new BehaviorSubject(this.categriesData);

//   redactCaegory(redactData: RedactCategory) {
//     this.categriesData.map((categoryData) => {
//       if (categoryData.id === redactData.id) {
//         categoryData.title = redactData.newTitle;
//         categoryData.updatedAt = redactData.newUpdateDate;
//       }
//       return categoryData;
//     });

//     this.categoriesEmmitter.next(this.categriesData);
//   }
}
