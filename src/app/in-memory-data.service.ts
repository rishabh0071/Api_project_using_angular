import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: "Rishabh Mahajan" },
      { id: 2, name: "Prince" },
      { id: 3, name: "Subham" },
      { id: 4, name: "Rahul" }
    ];
    return { heroes };
  }
}
