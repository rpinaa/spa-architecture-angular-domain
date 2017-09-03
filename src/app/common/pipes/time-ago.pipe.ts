import {ChangeDetectorRef, NgZone, OnDestroy, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {

  private timer: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}

  transform(value: string) {

    this.removeTimer();

    const d = new Date(value);
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    const timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;

    this.timer = this.ngZone.runOutsideAngular(() => (typeof window !== 'undefined') ?
      window.setTimeout(() => this.ngZone.run(() => this.changeDetectorRef.markForCheck()), timeToUpdate) : null);

    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));

    // TODO: implement i18Next instead of hard names

    if (seconds <= 45) {
      return 'Hace unos segundos';
    } else if (seconds <= 90) {
      return 'Hace un minuto';
    } else if (minutes <= 45) {
      return 'Hace ' + minutes + ' minutos';
    } else if (minutes <= 90) {
      return 'Hace una hora';
    } else if (hours <= 22) {
      return 'Hace ' + hours + ' horas';
    } else if (hours <= 36) {
      return 'Hace un día';
    } else if (days <= 25) {
      return 'Hace ' + days + ' días';
    } else if (days <= 45) {
      return 'Hace un mes';
    } else if (days <= 345) {
      return 'Hace ' + months + ' meses';
    } else if (days <= 545) {
      return 'Hace un año';
    } else {
      return 'Hace ' + years + ' años';
    }
  }

  ngOnDestroy(): void {
    this.removeTimer();
  }

  private removeTimer() {
    if (this.timer) {

      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private getSecondsUntilUpdate(seconds:number) {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;

    if (seconds < min) {
      return 2;
    } else if (seconds < hr) {
      return 30;
    } else if (seconds < day) {
      return 300;
    } else {
      return 3600;
    }
  }
}
