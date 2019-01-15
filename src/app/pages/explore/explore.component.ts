import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  profiles = [
    {name:'Kanye West', numSubs:23111, postsMonth: 25, img: "../../../assets/png/kanye_200x200.png"},
    {name:'Tom Cruise', numSubs: 17263, postsMonth: 10, img: "../../../assets/png/cruise_200x200.png"},
    {name:'Beyonce', numSubs: 15000, postsMonth: 15, img: "../../../assets/png/beyonce_200x200.png"},
    {name:'Jay-Z', numSubs: 14500, postsMonth: 17, img: "../../../assets/png/jay-z_200x200.png"},
    {name:'Robert Downy Jr', numSubs: 13056, postsMonth: 20, img: "../../../assets/png/rdj_200x200.png"},
    {name:'Willem Dafoe', numSubs: 12500, postsMonth: 12, img: "../../../assets/png/Willem_Dafoe_200x200.png"}
  ]

  constructor() { }

  ngOnInit() {
  }

}