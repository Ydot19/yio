import { Component } from "@angular/core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

@Component({
    selector: "app-sourcecode",
    template: `
        <div class="container">
            <div class="is-justify-content-center is-align-content-center">
                <a
                    href="https://github.com/Ydot19/yio"
                    (mouseover)="inFocus()"
                    (mouseout)="outFocus()"
                    target="_blank"
                >
                    <span>
                        <p
                            class="{{ textBoldness }} is-size-5"
                            style="color: var(--colorTheme-textBlack)"
                        >
                            Website Source Code
                        </p>
                        <fa-icon
                            [icon]="githubLogo"
                            class="{{ fontSize }}"
                            style="color: var(--colorTheme-gray)"
                        ></fa-icon>
                    </span>
                </a>
            </div>
        </div>
    `,
    styles: [
        `
            a:hover p {
                animation: 0.8s shake infinite alternate;
            }

            @keyframes shake {
                0% {
                    transform: skewX(-15deg);
                }
                5% {
                    transform: skewX(15deg);
                }
                10% {
                    transform: skewX(-15deg);
                }
                15% {
                    transform: skewX(15deg);
                }
                20% {
                    transform: skewX(0deg);
                }
                100% {
                    transform: skewX(0deg);
                }
            }
        `,
    ],
})
export class SourcecodeComponent {
    githubLogo = faGithub
    textBoldness = "has-text-weight-normal"
    fontSize = "fa-2x"

    inFocus(): void {
        this.fontSize = "fa-3x"
        this.textBoldness = "has-text-weight-semibold"
    }

    outFocus(): void {
        this.fontSize = "fa-2x"
        this.textBoldness = "has-text-weight-normal"
    }
}
