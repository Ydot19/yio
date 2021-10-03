import { Component } from "@angular/core"

@Component({
    selector: "app-home",
    template: `
        <div>
            <section class="hero is-fullheight">
                <div class="hero-body is-flex">
                    <div class="container has-text-centered">
                        <p
                            class="is-size-1-desktop is-size-3-tablet is-size-5-mobile is-family-code typewriter"
                        >
                            {{ title }}
                        </p>
                        <p class="is-size-5 is-size-7-mobile is-italic">
                            {{ subtitle }}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    `,
    styles: [
        `
            p.typewriter {
                color: var(--colorTheme-dark-yellow);
            }
            p {
                color: var(--colorTheme-gray);
            }

            .hero {
                background-color: var(--colorTheme-cloudWhite);
            }
            .hero-body {
                overflow-y: auto;
            }
        `,
    ],
    styleUrls: ["../../styles/typewriter.css"],
})
export class HomeComponent {
    title = ""
    subtitle = ""
    constructor() {
        this.title = "Welcome to YaaData.dev"
        this.subtitle = "If you can think it, you can build it"
    }
}
