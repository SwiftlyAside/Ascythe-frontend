import {Component, OnInit} from '@angular/core';
import {throwError} from 'rxjs';
import {TopicService} from '../topic.service';
import {TopicModel} from '../topic-model';

@Component({
  selector: 'app-list-topics',
  templateUrl: './list-topics.component.html',
  styleUrls: ['./list-topics.component.css']
})
export class ListTopicsComponent implements OnInit {
  topics: Array<TopicModel>;

  constructor(private topicService: TopicService) {
  }

  ngOnInit(): void {
    this.topicService.getAllTopics().subscribe(data => {
      this.topics = data;
    }, error => {
      throwError(error);
    });
  }
}
