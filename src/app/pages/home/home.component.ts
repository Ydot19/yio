import { Component, OnInit } from "@angular/core"
// import {exampleStyle} from "../../styles/theme.vanilla.css";

@Component({
    selector: "app-home",
    template: `
        <div>
            <section class="hero is-fullheight is-primary">
                <div class="hero-body is-flex">
                    <div class="title is-size-1">
                        <p class="is-family-code">
                            {{ title }}
                        </p>
                    </div>
                    <p class="subtitle">
                        {{ subtitle }}
                    </p>
                </div>
            </section>
        </div>
    `,
    styles: [
        `
            .hero-body {
                justify-content: center;
                flex-direction: column;
            }
        `,
    ],
})
export class HomeComponent {
    title = ""
    subtitle = ""
    constructor() {
        this.title = "Yaadata Abdalhalim"
        this.subtitle = "Dev By Day, Creator by Night"
    }
}
