import { Component, OnInit } from '@angular/core';

interface ChatMessage {
  text: string;
  sentByDriver: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class DriverChatComponent implements OnInit {

  messages: string[] = []; // Array to store chat messages as strings
  newMessage: string = ''; // Input field for new messages

  constructor() { }

  ngOnInit() {
    // Call service to get initial messages (if applicable)
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Send message using chat service
      this.messages.push(this.newMessage + ' (driver)'); // Add sender indication
      this.newMessage = '';
    }
  }
  }