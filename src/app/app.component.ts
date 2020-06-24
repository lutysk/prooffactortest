import { Component } from '@angular/core';
import { IRule } from "../assets/constants/rule.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inputsArr: IRule[] = [];
  public addBtnVisible = true;

  public addInput(): void {
    this.inputsArr.push(
      {
        id: this.inputsArr.length,
        url: ''
      }
    );
    this.addBtnVisible = false;
  }

  public removeRule(ruleConfig: IRule): void {
    this.inputsArr = this.inputsArr.filter((input) => input.id !== ruleConfig.id);
  }

  public removeBtn(visible: boolean): void {
    this.addBtnVisible = visible;
  }
}
