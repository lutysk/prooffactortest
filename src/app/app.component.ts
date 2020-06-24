import { Component } from '@angular/core';
import { IRule } from "../assets/constants/rule.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inputsArr: IRule[] = [];

  public addInput(): void {
    this.inputsArr.push(
      {
        id: this.inputsArr.length,
        url: ''
      }
    );
  }

  public removeRule(ruleConfig: IRule): void {
    this.inputsArr = this.inputsArr.filter((input) => input.id !== ruleConfig.id);
  }
}
