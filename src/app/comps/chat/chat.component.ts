// driver-chat.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';

interface Message {
  sender: 'driver' | 'client';
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class DriverChatComponent {
  @ViewChild('conversation', { static: false })
  conversation!: ElementRef;

  messages: Message[] = [
    { sender: 'driver', text: 'Hi there, I\'m on my way and should be with you in about 5 minutes.', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { sender: 'client', text: 'Sounds good, I\'ll be waiting outside.', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { sender: 'driver', text: 'Great, I\'m pulling up now. I\'m in the black sedan.', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { sender: 'client', text: 'Okay, I\'m heading out. Be there in a sec.', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' }
  ];

  newMessage = '';
  chatContainer: any;

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        sender: 'client',
        text: this.newMessage,
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
      });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }
  scrollToBottom() {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }
  // scrollToBottom() {
  //   setTimeout(() => {
  //     this.conversation.nativeElement.scrollTop = this.conversation.nativeElement.scrollHeight;
  //   }, 100);
  // }
}
}