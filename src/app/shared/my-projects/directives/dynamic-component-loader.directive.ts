import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicComponentLoader]',
  standalone: true,
})
export class DynamicComponentsLoaderDirective {
  viewContainerRef = inject(ViewContainerRef);
}
