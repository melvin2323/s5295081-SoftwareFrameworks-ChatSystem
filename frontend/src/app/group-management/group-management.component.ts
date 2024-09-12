import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {

  groups: any[] = [];
  selectedGroup: any = null;
  newGroup = { name: ''};

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.loadGroups();
  }

  loadGroups(): void {
    this.groupService.getGroups().subscribe(
      data => this.groups = data,
      error => console.error('Error loading groups', error)
    );
  }

  viewGroup(groupId: string): void {
    this.groupService.getGroup(groupId).subscribe(
      data => this.selectedGroup = data,
      error => console.error('Error loading group', error)
    );
  }

  createGroup(group: any): void {
    this.groupService.createGroup(group).subscribe(
      data => {
        this.loadGroups(),
        this.newGroup = { name: ''};
      },
      error => console.error('Error creating group', error)
    );
  }

  updateGroup(groupId: string, group: any): void {
    this.groupService.updateGroup(groupId, group).subscribe(
      data => this.loadGroups(),
      error => console.error('Error updating group', error)
    );
  }

  deleteGroup(groupId: string): void {
    this.groupService.deleteGroup(groupId).subscribe(
      data => this.loadGroups(),
      error => console.error('Error deleting group', error)
    );
  }
}
