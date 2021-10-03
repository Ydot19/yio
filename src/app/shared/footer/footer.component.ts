import { Component } from "@angular/core"

@Component({
    selector: "app-footer",
    template: `
        <footer class="footer" id="footer">
            <div class="content has-text-centered">
                <div class="columns">
                    <div class="column is-12-mobile">
                        <app-social></app-social>
                    </div>
                    <div class="column is-12-mobile">
                        <app-sourcecode></app-sourcecode>
                    </div>
                </div>
            </div>
        </footer>
    `,
    styles: [
        `
            #footer {
                border-top-style: dashed;
                border-top-color: var(--colorTheme-light-gray);
            }
        `,
    ],
})
export class FooterComponent {}
