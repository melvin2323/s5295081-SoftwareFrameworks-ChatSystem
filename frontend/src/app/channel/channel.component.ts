import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channels: any[] = [];
  selectedChannel: any = null;
  newChannel = { name: ''};

  constructor(private channelService: ChannelService) { }

  ngOnInit(): void {
    this.loadChannels();
  }

  loadChannels(): void {
    this.channelService.getChannels().subscribe(
      data => this.channels = data,
      error => console.error('Error loading channels', error)
    );
  }

  viewChannel(channelId: string): void {
    this.channelService.getChannel(channelId).subscribe(
      data => this.selectedChannel = data,
      error => console.error('Error loading channel', error)
    );
  }

  createChannel(channel: any): void {
    this.channelService.createChannel(channel).subscribe(
      data => {
        this.loadChannels();
        this.newChannel = { name: ''};
      },
      error => console.error('Error creating channel', error)
    );
  }

  updateChannel(channelId: string, channel: any): void {
    this.channelService.updateChannel(channelId, channel).subscribe(
      data => this.loadChannels(),
      error => console.error('Error updating channel', error)
    );
  }

  deleteChannel(channelId: string): void {
    this.channelService.deleteChannel(channelId).subscribe(
      data => this.loadChannels(),
      error => console.error('Error deleting channel', error)
    );
  }
}
