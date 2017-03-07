import { Component, OnInit , Input } from '@angular/core';
import { Article } from './article.model';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
   class: 'row' // css class row required from the SematicUI 
  }
})
export class ArticleComponent implements OnInit {
	@Input() myarticle: Article;

	constructor() { 
	/* The initialization comes through the app component call  	
	this.article = new Article(
			'Angular 2',
			'http://angular.io',
			10
			);*/

	}

	voteUp(): boolean {
		this.myarticle.voteUp();
		return false;
	}

	voteDown(): boolean {
		this.myarticle.voteDown();
		return false;
	}

	ngOnInit() {
	}

}

