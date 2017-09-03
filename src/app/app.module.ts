import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {MaterializeModule} from 'angular2-materialize';
import {SwiperModule} from 'ngx-swiper-wrapper';

import {AppComponent} from './app.component';
import {CtaComponent} from './overview/cta/cta.component';
import {HashtagPipe} from './common/pipes/hashtag.pipe';
import {TimeAgoPipe} from './common/pipes/time-ago.pipe';
import {AppsComponent} from './overview/apps/apps.component';
import {OverviewComponent} from './overview/overview.component';
import {EnumerationPipe} from './common/pipes/enumeration.pipe';
import {ShortNumberPipe} from './common/pipes/short-number.pipe';
import {NormalImagePipe} from './common/pipes/normal-image.pipe';
import {TwitterComponent} from './overview/twitter/twitter.component';
import {YoutubeComponent} from './overview/youtube/youtube.component';
import {SearchesComponent} from './overview/searches/searches.component';
import {WebsitesComponent} from './overview/websites/websites.component';
import {InstagramComponent} from './overview/instagram/instagram.component';
import {PinterestComponent} from './overview/pinterest/pinterest.component';
import {NewspaperComponent} from './overview/newspaper/newspaper.component';

@NgModule({
  declarations: [
    HashtagPipe,
    TimeAgoPipe,
    EnumerationPipe,
    NormalImagePipe,
    ShortNumberPipe,
    AppComponent,
    AppsComponent,
    CtaComponent,
    YoutubeComponent,
    TwitterComponent,
    SearchesComponent,
    WebsitesComponent,
    OverviewComponent,
    InstagramComponent,
    PinterestComponent,
    NewspaperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    SwiperModule.forRoot({direction: 'horizontal'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
