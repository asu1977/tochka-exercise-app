import { Item } from './shared/itemt';
import { Subject } from "rxjs/Subject";

export class TabsListService {
  itemsChanged = new Subject<Item[]>();
  startedEditing = new Subject<number>();
  private items: Item[] = [
    new Item('События', 'Все события тут', false),
    new Item('Аналитика', 'Аналитика тут', false)
  ];

  getItens() {
    return this.items.slice();
  }

  getItem(index: number) {
    return this.items[index];
  }

  addItem(item: Item) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }

  updateItems(index: number, newItem: Item) {
    this.items[index] = newItem;
    this.itemsChanged.next(this.items.slice());
  }

  deleteItems(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
}