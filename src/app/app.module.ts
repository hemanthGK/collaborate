import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import {
    MsalGuard, MsalBroadcastService, MsalService,
    MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalGuardConfiguration, MsalRedirectComponent, MsalModule
} from '@azure/msal-angular';
import { NgxSpinnerModule } from "ngx-spinner";




/** Angular Material Imports */
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatTooltipModule } from '@angular/material/tooltip';




/** Angular Project Imports */
import { AppRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InterfaceModule } from './interface/interface.module';
import { LoaderService } from 'src/shared/services/loader.service'; 
import { SharedModule } from 'src/shared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { loginRequest, msalConfig } from './auth-config';

/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
* Set your default interaction type for MSALGuard here. If you have any
* additional scopes you want the user to consent upon login, add them here as well.
*/
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
      interactionType: InteractionType.Redirect,
      authRequest: loginRequest
  };
}

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    InterfaceModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    NgMultiSelectDropDownModule,
    // MsalModule,
    NgxSpinnerModule,
    
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
        provide: MSAL_GUARD_CONFIG,
        useFactory: MSALGuardConfigFactory
    },
    LoaderService,
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    LoaderService
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
