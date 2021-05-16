import { Injectable } from '@angular/core';
import {Customer} from "../models/customer";
import {BehaviorSubject} from "rxjs";
import {Constant} from "../models/constants";
import {customers} from "../dummy-data/customers";

@Injectable({
  providedIn: 'root'
})
export class PageManagerService {
  public customers$: BehaviorSubject<Customer[]>;

  private _storeName = '_session-store';
  private _defaultScope = 'CUSTOMERS';
  private _defaultKey = 'defaultCustomers'

  title = 'Klanten'

  private store: any;

  constructor() {
    this.customers$ = new BehaviorSubject<Customer[]>(this.getCustomers());
  }

  getCustomers() {
    let defaultCustomers = []
    if (this.getData(this._defaultScope, this._defaultKey, Constant.Storage.LOCAL)) {
      defaultCustomers = this.getData(this._defaultScope, this._defaultKey, Constant.Storage.LOCAL);
    } else {
      defaultCustomers = customers();
    }

      return defaultCustomers;
  }

  public setCustomer(customers: Customer[]) {
    this.storeData(this._defaultScope, this._defaultKey, customers, Constant.Storage.LOCAL);
    // customer = customer;
    if (this.customers$.value == customers) {
      return;
    }
    this.customers$.next(customers);
  }

  getStore(storageType) {
    const sessionStore = this.isLocal(storageType) ? localStorage.getItem(this._storeName) : sessionStorage.getItem(this._storeName);
    return sessionStore ? JSON.parse(sessionStore) : {};
  }

  public storeData(scope: string, key: string, data: any, storageType: Constant.Storage = Constant.Storage.LOCAL): boolean {

    this.store = this.getStore(storageType);
    if (!this.store[scope]) {
      this.store[scope] = {};
    }
    this.store[scope][key] = JSON.stringify(data);

    this.persist(storageType);

    return this.store[scope];
  }

  public getData(scope: string, key: string, storageType: Constant.Storage = Constant.Storage.LOCAL): any | boolean {

    this.store = this.getStore(storageType);
    if (!this.store[scope] || !this.store[scope][key]) {
      return false;
    }
    return JSON.parse(this.store[scope][key]);
  }

  private persist(storageType: Constant.Storage) {
    if (this.isLocal(storageType)) {
      localStorage.setItem(this._storeName, JSON.stringify(this.store));
    } else {
      sessionStorage.setItem(this._storeName, JSON.stringify(this.store));
    }
  }

  isLocal(type: Constant.Storage): boolean {
    return type == Constant.Storage.LOCAL;
  }
}
