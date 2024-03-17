import { Injectable } from '@angular/core';
declare var JitsiMeetExternalAPI: any;

@Injectable({
  providedIn: 'root',
})
export class JitsiService {
  private api: any;

  constructor() {}

  initJitsiMeet(elementId: string, roomName: string) {
    try {
      this.api = new JitsiMeetExternalAPI('meet.jit.si', {
        roomName: roomName,
        parentNode: document.getElementById(elementId),
        width: '100%',
        height: 850,
        configOverwrite: {
          constraints: {
            video: {
              facingMode: 'user',
            },
            audio: true,
          },
        },

      });
    } catch (error) {
      console.error('Error initializing Jitsi Meet:', error);
    }
  }

  joinRoom(roomName: string) {
    try {
      this.api.executeCommand('join', roomName);
    } catch (error) {
      console.error('Error joining room:', error);
    }
  }

  leaveRoom() {
    try {
      this.api.executeCommand('hangup');
    } catch (error) {
      console.error('Error leaving room:', error);
    }
  }

  muteAudio() {
    try {
      this.api.executeCommand('toggleAudio');
    } catch (error) {
      console.error('Error muting audio:', error);
    }
  }

  muteVideo() {
    try {
      this.api.executeCommand('toggleVideo');
    } catch (error) {
      console.error('Error muting video:', error);
    }
  }
}
