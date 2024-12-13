import {SortableEntity} from "./storable-entity.interface";

export interface EntityFactory<T extends SortableEntity<ReturnType<T['toPOJO']>>> {
  create(entityPlainData: ReturnType<T['toPOJO']>): T;
}
