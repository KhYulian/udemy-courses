export class CounterService {
  toInactiveCount = 0;
  toActiveCount = 0;

  constructor() {}

  incrementToInactiveCount() {
    this.toInactiveCount++;
    console.log(`To inactive count: ${this.toInactiveCount}`);
  }

  incrementToActiveCount() {
    this.toActiveCount++;
    console.log(`To active count: ${this.toActiveCount}`);
  }
}
