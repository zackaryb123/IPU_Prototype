import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { transition, trigger, query, style, stagger, animate, keyframes, sequence } from '@angular/animations';
import { ImageService } from 'src/app/core/services/image/image.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('*<=>*', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-200px)' }),
          stagger(100, [
            animate('500ms 400ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: false }),
        // query(':leave', [
        //   style({ opacity: 1, transform: 'none' }),
        //   stagger(-100, [
        //     animate('10ms cubic-bezier(0.35, 0, 0.25, 1)',
        //       style({ opacity: 0, transform: 'translateY(+200px)' }))
        //   ])
        // ])
      ])
    ]),
    trigger('itemFallAnimation', [
      transition('*<=>*', [

        style({ opacity: 0, transform: 'translateY(-200px)' }),

        animate('500ms 400ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' })),
        // query(':leave', [
        //   style({ opacity: 1, transform: 'none' }),
        //   stagger(-100, [
        //     animate('10ms cubic-bezier(0.35, 0, 0.25, 1)',
        //       style({ opacity: 0, transform: 'translateY(+200px)' }))
        //   ])
        // ])
      ])
    ]),
  ]
})
export class ExploreComponent implements OnInit {
  topic:string;
  profiles = [
    { name: 'Kanye West', numSubs: 23111, postsMonth: 25, img: "../../../assets/png/kanye_200x200.png" },
    { name: 'Tom Cruise', numSubs: 17263, postsMonth: 10, img: "../../../assets/png/cruise_200x200.png" },
    { name: 'Beyonce', numSubs: 15000, postsMonth: 15, img: "../../../assets/png/beyonce_200x200.png" },
    { name: 'Evander Holyfield', numSubs: 14750, postsMonth: 11, img: "../../assets/png/holyfield_200x200.png" },
    { name: 'Jay-Z', numSubs: 14500, postsMonth: 17, img: "../../../assets/png/jay-z_200x200.png" },
    { name: 'Robert Downey Jr', numSubs: 13056, postsMonth: 20, img: "../../../assets/png/rdj_200x200.png" },
    { name: 'Willem Dafoe', numSubs: 12500, postsMonth: 12, img: "../../../assets/png/Willem_Dafoe_200x200.png" }
  ]

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private service: ImageService,
    private uservice: UserService,
  ) {
    this.matIconRegistry.addSvgIcon('people_outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/sharp-people_outline-24px.svg'));
    this.matIconRegistry.addSvgIcon('av_timer',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/outline-av_timer-24px.svg'));
  }

  ngOnInit() {
  }

  showProfile(name: string) {
    console.log(name);
    switch (name) {
      case ('Tom Cruise'):
        this.router.navigate(['tomcruise']);
        break;
      case ('Willem Dafoe'):
        this.router.navigate(['willemdafoe']);
        break;
      case ('Jay-Z'):
        this.router.navigate(['jay-z']);
        break;
      case ('Beyonce'):
        this.router.navigate(['beyonce']);
        break;

    }
  }

  testFunc() {
    console.log(ViewChild.name)
  }
  async delay(num){
    return new Promise(resolve =>setTimeout(resolve,num));
  }
  setTopic(name){
    this.service.setTopic(name);
    //wait for db to update current topic
    this.delay(2000);
    this.router.navigate(['organization']);
  }
  setProfile(name){
    this.uservice.setProfile(name);
    //wait for db to update current topic
    this.delay(2000);
    this.router.navigate(['personality']);
  }

}
