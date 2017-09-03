import {Component, OnInit} from '@angular/core';

import {OverviewBroadcastService} from './overview-broadcast.service';
import {OverviewService} from './overview.service';
import {Zone} from './domain/zone';
import {Code} from './domain/code';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.styl'],
  providers: [OverviewService, OverviewBroadcastService]
})
export class OverviewComponent implements OnInit {

  country = { codes: null };
  private zones: Zone[];

  countries = {};
  autocomplete: any;

  constructor(private overviewService: OverviewService, private overviewBroadcastService: OverviewBroadcastService) {}

  ngOnInit() {
    this.overviewService
      .getZones()
      .subscribe(zones => this.setZones(zones).getOverviews(null));
  }

  private getCountry(name) {

    this.country = name ? this.zones.filter(z => z.n === name)[0] : this.zones.length ? this.zones[0] : { codes: new Code() };

    return this;
  }

  private setZones(zones: Zone[]) {

    zones.forEach(zone => this.countries[zone.n] = null);

    this.autocomplete = {
      data: this.countries,
      limit: 20,
      minLength: 0,
      onAutocomplete: this.getOverviews.bind(this)
    };

    this.zones = zones;

    return this;
  }

  getOverviews(name) {

    this.getCountry(name);
    this.overviewService
      .getOverviews(this.country.codes)
      .subscribe(overview => this.overviewBroadcastService.bindMessage(overview));
  }
}
