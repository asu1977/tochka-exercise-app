import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Item } from "../../shared/itemt";
import { TabsListService } from "../../tabs-list.service";

@Component({
  selector: 'app-tabs-edit',
  templateUrl: './tabs-edit.component.html',
  styleUrls: ['./tabs-edit.component.css']
})
export class TabsEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') teForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Item;

  constructor(private tlService: TabsListService) { }

  ngOnInit() {
    this.subscription = this.tlService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.tlService.getItem(index);
          this.teForm.setValue({
            label: this.editedItem.label,
            content: this.editedItem.content
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newItem = new Item(value.label, value.content);
    if (this.editMode) {
      this.tlService.updateItems(this.editedItemIndex, newItem);
    } else {
      this.tlService.addItem(newItem);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.teForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.tlService.deleteItems(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
