import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'user1', password: 'pass1' },
      { id: 2, username: 'user2', password: 'pass2' }
      // Add more mock users if needed
    ];

    return { users };
  }
}
