import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  twoWayData;
  inputVal: string = "";
  inputCollectData: string = "";
  collectedData: string[] = [];
  title:string = 'learn-angular';
  ngIfStatus: boolean = true;
  ngIfStatus2: boolean = false;
  ngForArray = [
    "Tea", "Cup", "Sugar", "Coffee", "Milk"
  ];
  ngForArray2 = [
    {"id": "lkadjsfasjf", "name": "John", "subject":"English"},
    {"id": "dsjkolsldjk", "name": "Mark", "subject":"Science"},
    {"id": "ioupqerjkld", "name": "James", "subject":"Tamil"},
  ];
  ngSwitchSource = "TypeScript";

  var1:number = 6;
  var2:number = 10

  imgSrc150: string = "https://via.placeholder.com/150";
  imgSrc250: string = "https://via.placeholder.com/250";

  cs:number = 2;

  imgSize: number = 150;

  myClassCombineVar: string = "myClass1 myClass2";
  myClass1Var: string = "myClass1";
  myClass2Var: string = "myClass2";

  class1Toggle: boolean = true;
  class2Toggle: boolean = true;
  style1Var: boolean = false;

  getClass1() {
    return this.myClass1Var;
  }

  getClassToggle() {
    return true;
  }

  newStyle() {
    return 'orange'
  }

  onClick(event) {
    console.log("You Clicked me!");
    console.log(event);
    this.twoWayData = event;
  }

  onDblClick(event) {
    console.log("You double clicked me");
    console.log(event);
  }

  onMouseUp(event) {
    console.log("You Mouse up event me");
    console.log(event);
  }

  onMouseDown(event) {
    console.log("You Mouse down event me");
    console.log(event);
  }
  CollectData(event) {
    this.collectedData.push(this.inputCollectData);
    this.inputCollectData = "";
    console.log(this.collectedData);
  }

}
