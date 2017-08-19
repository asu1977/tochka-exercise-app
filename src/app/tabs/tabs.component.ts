import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { TabsListService } from './../tabs-list.service';
import { Item } from '../shared/itemt';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnDestroy {

  items: Item[];
  private subscription: Subscription;

  constructor(private tlService: TabsListService) { }

  ngOnInit() {
    this.items = this.tlService.getItens();
    this.subscription = this.tlService.itemsChanged
      .subscribe(
        (items: Item[]) => {
          this.items = items;
        }
      );
  }

  onEditItem(index: number) {
    this.tlService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
