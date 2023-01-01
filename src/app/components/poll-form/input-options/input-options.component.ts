import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Poll, Option, OptionValue } from 'src/app/types/types';

@Component({
  selector: 'app-input-options',
  templateUrl: './input-options.component.html',
})
export class InputOptionsComponent implements OnInit {
  currentData = {} as Poll;
  disableAdd: boolean = false;

  private optionObj = <Option>{};
  private optionVal = <OptionValue>{};

  patOptionForm = new FormControl('', Validators.maxLength(80));
  newOptionForm = new FormControl('', Validators.maxLength(80));

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.recentData.subscribe((data) => {
      this.currentData = data;

      if (this.currentData) {
        this.maxOptions(this.currentData);
      }
    });
  }

  onAddOption() {
    this.optionVal.option = this.newOptionForm.value;
    this.newOptionForm.setValue('');
    this.data.addingOption(this.optionVal);
  }

  onDelOption(id: number) {
    this.data.deleteOption(id);
  }

  onPatOption() {
    this.optionObj.option = this.patOptionForm.value;
    this.data.patchOption(this.optionObj);
  }

  callOption(item: Option) {
    this.optionObj = item;
    this.patOptionForm.setValue(item.option);
  }

  maxOptions(data: Poll) {
    if (data.totalOptions === 10) {
      this.disableAdd = true;
      this.newOptionForm.disable();
    } else {
      this.disableAdd = false;
      this.newOptionForm.enable();
    }
  }
}
