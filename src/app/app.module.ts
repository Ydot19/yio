import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./pages/home/home.component"
import { FooterComponent } from "./shared/footer/footer.component"
import { NavbarComponent } from "./shared/navbar/navbar.component"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { SourcecodeComponent } from "./shared/footer/sourcecode/sourcecode.component"
import { SocialComponent } from "./shared/footer/social/social.component"

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        NavbarComponent,
        SourcecodeComponent,
        SocialComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
