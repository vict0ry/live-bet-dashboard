import { Subscription } from 'rxjs';

export class SubscribeManager {
  private toUnsubscribe: Subscription[] = [];

  add(...subscription: Array<Subscription>): void {
    this.toUnsubscribe.push(...subscription);
  }

  unsubscribe(): void {
    this.toUnsubscribe.forEach(sub => sub.unsubscribe());
    this.toUnsubscribe = [];
  }
}
