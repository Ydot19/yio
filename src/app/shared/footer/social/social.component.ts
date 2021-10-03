import { Component } from "@angular/core"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

@Component({
    selector: "app-social",
    template: `
        <div
            class="container is-fluid is-justify-content-center is-align-content-center"
        >
            <p class="is-size-5">Follow on Social Media</p>
            <br />
            <div class="columns is-justify-content-center">
                <!--        <div class="column is-offset-3 is-2">-->
                <a
                    href="https://twitter.com/y_dot19"
                    class="m-4"
                    target="_blank"
                >
                    <span>
                        <fa-icon [icon]="twitter" size="2x"></fa-icon>
                    </span>
                </a>
                <!--        </div>-->

                <!--        <div class="column is-1">-->
                <a
                    href="https://www.linkedin.com/in/yaadata-abdalhalim/"
                    class="m-4"
                    target="_blank"
                >
                    <span>
                        <fa-icon [icon]="linkedin" size="2x"></fa-icon>
                    </span>
                </a>
                <!--        </div>-->

                <!--        <div class="column is-1">-->
                <a href="https://github.com/Ydot19" class="m-4" target="_blank">
                    <span>
                        <fa-icon [icon]="githubLogo" size="2x"></fa-icon>
                    </span>
                </a>
                <!--        </div>-->
                <br />
            </div>
        </div>
    `,
})
export class SocialComponent {
    twitter = faTwitter
    linkedin = faLinkedin
    githubLogo = faGithub
}
