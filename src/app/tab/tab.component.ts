import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TabsListService } from '../tabs-list.service';
import { Item } from '../shared/itemt';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

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
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


