import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Телефон' },
      { id: 2, name: 'Плита' },
    ];
    this._brands = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'LG' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Apple',
        price: 120000,
        rating: 5,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652954000',
      },
      {
        id: 2,
        name: 'LG',
        price: 45000,
        rating: 7,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1631652954000',
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  get types() {
    return this.types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
