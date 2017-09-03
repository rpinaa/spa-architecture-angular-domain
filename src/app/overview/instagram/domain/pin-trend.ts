import {Pin} from './pin';

export class PinTrend {

  pins: Pin[] = [];

  constructor(data: any) {
    this.pins = data.map(pin => new Pin(pin));
  }
}
