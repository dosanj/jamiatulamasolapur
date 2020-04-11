import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    NZ_I18N,
    en_US,
    NgZorroAntdModule,
    NzLayoutModule,
    NzSliderModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NzSelectModule,
} from 'ng-zorro-antd';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import {
    BrowserAnimationsModule,
    NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideMenuItemComponent } from './shared/side-menu-item/side-menu-item.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { ContentDataComponent } from './shared/content-data/content-data.component';
import { SafePipeModule } from 'safe-pipe';
import localeHi from '@angular/common/locales/hi';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { LanguagePipe } from './shared/language.pipe';

registerLocaleData(localeHi, 'hi-HI');

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        SideMenuItemComponent,
        ContentPageComponent,
        LanguagePipe,
        ContentDataComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        NzLayoutModule,
        NzSliderModule,
        NzAnchorModule,
        NzBreadCrumbModule,
        NzDropDownModule,
        NzIconModule,
        NzButtonModule,
        FormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        SafePipeModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent],
})
export class AppModule {}
