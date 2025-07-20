import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { ReplaySubject, takeUntil, tap, } from 'rxjs';
import {
  CategoryDynamicComponent,
  // RedactCategory,
} from './components/project/models/category-dynamic-componenet.model';
import { DynamicComponentsLoaderDirective } from './directives/dynamic-component-loader.directive';
import { CategoriesService } from './components/project/services/categories.service';

@Component({
  selector: 'app-my-projects',
  imports: [DynamicComponentsLoaderDirective],
  standalone: true,
  templateUrl: './my-projects.html',
})


export class MyProjects {
   @ViewChild(DynamicComponentsLoaderDirective, { static: true })
  dynamicComponentContainer!: DynamicComponentsLoaderDirective;

  private categoriesService = inject(CategoriesService);

  categoriesDestroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  categories$ = this.categoriesService.categoriesEmmitter.pipe(
    takeUntil(this.categoriesDestroyed$)
  );

  categoryComp!: ComponentRef<CategoryDynamicComponent>;

  categoryComponents: ComponentRef<CategoryDynamicComponent>[] = [];

  ngOnInit() {
    this.categories$.subscribe((categories) => this.loadCategories(categories));
  }

  async loadCategories(categoriesData: any[]) {
    const vcr = this.dynamicComponentContainer.viewContainerRef;
    vcr.clear();

    const { CategoryComponent } = await import('./components/project/project');

    // Проходимся по данным
    categoriesData.forEach((categoryData) => {
      // Создаем компонент и наполняем его данными
      const categoryComp: ComponentRef<CategoryDynamicComponent> =
        vcr.createComponent<CategoryDynamicComponent>(CategoryComponent);

      categoryComp.instance.categoryName = categoryData.title;
      categoryComp.instance.id = categoryData.id;
      // categoryComp.instance.isRedact = false;
      // categoryComp.instance.updatedDate = categoryData.updatedAt;
      // categoryComp.instance.author = categoryData.user.email;

      // Добавляем новый компонент в массив с уже созданными
      this.categoryComponents.push(categoryComp);

      // Подписываемся на события, и обрабатываем их
      // categoryComp?.instance.redactCategory.subscribe(
      //   ({ newTitle, id }: RedactCategory) => {
      //     const redactedCategory = this.categoryComponents.find(
      //       (category) => category.instance.id === id
      //     );

      //     if (newTitle !== redactedCategory?.instance.categoryName) {
      //       this.categoriesService.redactCaegory({
      //         id,
      //         newTitle,
      //         newUpdateDate: new Date().toUTCString(),
      //       });
      //     }
      //     redactedCategory!.instance.isRedact = false;
      //   }
      // );
    });
  }

  // ngOnDestroy(): void {
  //   this.categoriesDestroyed$.next(true);
  //   this.categoriesDestroyed$.complete();
  //   this.categoryComponents = [];
  // }
}

