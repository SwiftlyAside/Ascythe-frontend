import {Component, Input, OnInit} from '@angular/core';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {PostModel} from '../post-model';
import {AuthService} from '../../auth/shared/auth.service';
import {PostService} from '../post.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {
  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(private authService: AuthService,
              private postService: PostService, private toastr: ToastrService) {

    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

  ngOnInit(): void {
  }

  upvotePost(): void {
    this.downvoteColor = '';
  }

  downvotePost(): void {
    this.upvoteColor = '';
  }

}
