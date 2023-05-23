export enum Entity {
  Record = 'record',
  Category = 'category',
  User = 'user',
  Place = 'place',
}

export const ENTITIES = Object.values(Entity) as Entity[];
