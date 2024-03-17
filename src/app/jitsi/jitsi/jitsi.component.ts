import { Component, OnInit } from '@angular/core';
import { JitsiService } from 'src/app/services/jitsi.service';

@Component({
  selector: 'app-jitsi',
  templateUrl: './jitsi.component.html',
  styleUrls: ['./jitsi.component.css'],
})
export class JitsiComponent implements OnInit {
  constructor(private jitsiService: JitsiService) {}
  roomName = ''

  ngOnInit() {
    this.jitsiService.initJitsiMeet('jitsi-container', this.roomName);
  }
}
