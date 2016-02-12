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
    selector: 'reddit-article',
    host: {
        class: 'row' //Row is a Semantic UI class
    },
    template: `
        <div class="four wide column center aligned votes">
            <div class="ui statistic">
                <div class="value">
                    {{ votes }}
                </div>
                <div class="label">
                    Points
                </div>
            </div>
        </div>

        <div class="twelve wide column">
            <a class="ui large header"href="{{link}}">
                {{ title }}
            </a>
            <ul class="ui big horizontal list voters">
                <li class="item">
                    <a href (click)="voteUp()">
                        <i class="arrow up icon"></i>
                        upvote
                    </a>
                </li>
                <li class="item">
                    <a href (click)="voteDown()">
                        <i class="arrow down icon"></i>
                        downvote
                    </a>
                </li>
            </ul>
        </div>
    `
})
class ArticleComponent {
    votes: number;
    title: string;
    link: string;

    constructor() {
        this.title = 'Angular 2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }

    voteUp() {
        this.votes += 1;
        return false;
    }
    voteDown() {
        this.votes -= 1;
        return false;
    }
}


@Component({
    selector: 'reddit',
    directives: [ArticleComponent],
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

        <div class="ui grid posts">
            <reddit-article></reddit-article>
        </div>
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