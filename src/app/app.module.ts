import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US, NgZorroAntdModule } from 'ng-zorro-antd';
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
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        SideMenuItemComponent,
        ContentPageComponent,
        ContentDataComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        NgZorroAntdModule,
        NzAnchorModule,
        FormsModule,
        HttpClientModule,
        NoopAnimationsModule,
        SafePipeModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent],
})
export class AppModule {}