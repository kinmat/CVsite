import { WorkExperienceComponent } from './../work-experience/work-experience.component';
import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
  private _elements: WorkExperienceComponent[] = [];    
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  
  constructor(private compFactoryResolver: ComponentFactoryResolver) {        
  }

  public addComponent(ngItem: Type<WorkExperienceComponent>): WorkExperienceComponent {
  let factory = this.compFactoryResolver.resolveComponentFactory(ngItem);
  const ref = this.container.createComponent(factory);
  const newItem: WorkExperienceComponent = ref.instance;              
  this._elements.push(newItem);                 
  return newItem;
  }
  
  resetContainer(){
    this._elements = [];
  }
}
