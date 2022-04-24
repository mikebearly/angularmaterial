```

```

# Create new application

```
ng new learn-angular
```

# Create custom(header) component

```
ng g component header
CREATE src/app/header/header.component.html (21 bytes)
CREATE src/app/header/header.component.spec.ts (628 bytes)
CREATE src/app/header/header.component.ts (276 bytes)
CREATE src/app/header/header.component.scss (0 bytes)
UPDATE src/app/app.module.ts (475 bytes)
```

# Data Binding

Two types of data binding.

## 1. one way binding

* send data from ts (component) to the html (view)

send data from ts (component) to the html (view)

component.ts

```
export class AppComponent {
title:string = 'learn-angular';

var1:number = 6;
var2:number = 10
}
```

component.html

```
<app-header></app-header>
```

## INTERPOLATION BINDING

The app component

The data we received from the component

```
{{ title }} {{ var1 + var2 }}
```

```
<router-outlet></router-outlet>
```

This is INTERPOLATION BINDING databinding.

send view from html(view) to ts (component)

## PROPERTY BINDING

```
<td [colSpan]="cs">TD1</td>
```

## ATTRIBUTE BINDING

## CLASS BINDING

## STYLE BINDING

## STYLING UNITS IN ANGULAR

<td [attr.colspan]="cs">TD1</td>

## 2. two way binding

sending/receiving ts to html and
JAVASCRIPT EXPRESSIONS IN DATA BINDING.
in template view html file

```
{{ 2 == 2 ? title : "Restrict"}}
```

## CLASS BINDING

HTML Attributes vs DOM Properties in Angular

## EVENT BINDING.

sending data from component.html to components.ts

# JAVASCRIPT EVENTS IN ANGULAR

# TWO WAY BINDING IN ANGULAR

View File

```
<input type="text" [(ngModel)]="inputVal"/>

{{ inputVal }}
```

Component file

```
inputVal:string = "";
```

# GENERATING ARRAY WITH BINDING IN ANGULAR.

# DIRECTIVES (everyting in view)

1. Attribute Directives
   ```[src]```
2. componente Directives
   ```
   <app-header>
   ```
3. Structural Directives
   ```*ngFor```

# ATTRIBUTES DIRECTIVE IN ANGULAR.

```
ng g d colorchanger
CREATE src/app/colorchanger.directive.spec.ts (248 bytes)
CREATE src/app/colorchanger.directive.ts (153 bytes)
UPDATE src/app/app.module.ts (631 bytes)
```

DIRECTIVE FILE:

```
import { Directive, ElementRef } from '@angular/core';

@Directive({
selector: '[appColorchanger]'
})
export class ColorchangerDirective {

constructor(elementRef:ElementRef) {
elementRef.nativeElement.style.color = "red";
elementRef.nativeElement.style.backgroundColor = "black";
console.log("this is directive");
}

}
```

VIEW FILE:

```
<div appColorchanger>
  The directive div
</div>
```

It should be in the view.

# INTERACTIVE ATTRIBUTE DIRECTIVE

```
import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchanger]'
})
export class ColorchangerDirective implements OnInit {
  //These are decorators
  @Input() bgColor: string;
  @Input() txtColor: string;
  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.color = this.txtColor;
    this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.color = null;
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
  constructor(private elementRef:ElementRef) {

    console.log("this is directive");
  }
  ngOnInit() {
    //this.elementRef.nativeElement.style.color = this.txtColor;
    //this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }
}

```

Here is hiding and showing.

# STRUCTURAL DIRECTIVES

In structural is used adding or removing

```
<div *ngIf="ngIfStatus">
  So, the ngIfStatus variable is true
</div>
```

## ng if else
component.ts file
```
.
.
.
export class AppComponent {
  .
  .
  .
  ngIfStatus: boolean = true;
  ngIfStatus2: boolean = false;
.
.
.
.
```
view file

```
<div *ngIf="ngIfStatus && ngIfStatus2 == false;then thenBlock; else elseBlock">
  So, the ngIfStatus variable is true
</div>


<ng-template #thenBlock>
  This is then Block
</ng-template>

<ng-template #elseBlock>
  This is the else block
</ng-template>
```
## ng for directives
component.ts file
```
.
.
.
export class AppComponent {
  .
  .
  .
  ngForArray = [
    "Tea", "Cup", "Sugar", "Coffee", "Milk"
  ];
    ngForArray2 = [
    {"id": "lkadjsfasjf", "name": "John", "subject":"English"},
    {"id": "dsjkolsldjk", "name": "Mark", "subject":"Science"},
    {"id": "ioupqerjkld", "name": "James", "subject":"Tamil"},
  ]
.
.
.
.
```
view file
```
<ul *ngFor="let eachNgForArray of ngForArray">
  <li>{{eachNgForArray}}</li>
</ul>
<h3>new list</h3>
<ol *ngFor="let eachNgForArray2 of ngForArray2 let i = index">
  <li>{{i}}) {{eachNgForArray2.id}} - {{eachNgForArray2.name}}, {{eachNgForArray2.subject}}</li>
</ol>
```
## ng switch directive
component.ts file
```
.
.
export class AppComponent {
  .
  .
  ngSwitchSource = "TypeScript";
  .
  .
```
view file
```
.
.
<div [ngSwitch]="ngSwitchSource">
  <div *ngSwitchCase="'JavaScript'">So the source is Javascript</div>
  <div *ngSwitchCase="'TypeScript'">So the source is Typescript</div>
  <div *ngSwitchCase="'React'">So the source is React Library</div>
  <div *ngSwitchCase="'Angular'">So the source is Angular Framework</div>
  <div *ngSwitchDefault>Unable to find the source</div>
</div>
.
.
```
## ng-template in Angular

Alone it we cannot use...normally we will use with ngif ngfor and ngswitch
We use asterisk sign - it convert div to the ng-template in the engine.

```
<div *ngIf="ngIfStatus || ngIfStatus2">
  So, the ngIfStatus variable is true
</div>
```
above and below are same
```
<ng-template [ngIf]="ngIfStatus || ngIfStatus2">
  So, the ngIfStatus variable is true from seperate block
</ng-template>
```
## Custom Structural Directives in Angular

# Helpers
[Angular 9 Document](https://v9.angular.io/docs)
[Prime NG 9 Document](https://www.primefaces.org/primeng-v9-lts/#/)
[Angular 9 Tutorials For Beginners](https://www.youtube.com/playlist?list=PLp50dWW_m40XgTvxNoxddGkir5kSpFFmK)
[Angular Material: Ultimate Masterclass With Angular 9 (2020)](https://www.udemy.com/course/angular-material-masterclass/)
