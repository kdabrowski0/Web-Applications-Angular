export class Product {
  private id: number;
  private name: string;
  public checked: boolean;
  private amount: number;
  private status: string;

  public constructor(
    id: number,
    name: string,
    checked: boolean,
    amount: number,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.checked = checked;
    this.amount = amount;
    this.status = status;
  }
  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getChecked(): boolean {
    return this.checked;
  }
  public setChecked(checked: boolean): void {
    this.checked = checked;
  }
  public getAmount(): number {
    return this.amount;
  }
  public setAmount(amount: number): void {
    this.amount = amount;
  }
  public getStatus(): string {
    return this.status;
  }
  public setStatus(status: string): void {
    this.status = status;
  }

  
}
