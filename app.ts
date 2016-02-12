import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { NgFor } from "angular2/common";

/*
@Component({
    selector: 'hello-world',
    template: `
  <ul>
    <li *ngFor="#name of names">Hello {{ name }}</li>
  </ul>
  `
})
class HelloWorld {
    names: string[];

    constructor() {
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
}
*/

@Component({
    selector: 'reddit',
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Add a Link</h3>

            <div class="field">
                <label for="title">Title:</label>
                <input name="title" #newtitle>
            </div>

            <div class="field">
                <label for="link">Link:</label>
                <input name="link" #newlink>
            </div>

            <button (click)="addArticle(newtitle, newlink)"
                    class="ui positive right floated button">
                    Submit link
            </button>
        </form>
  `
})
class RedditApp {

    constructor() {
    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    }
}

bootstrap(RedditApp);