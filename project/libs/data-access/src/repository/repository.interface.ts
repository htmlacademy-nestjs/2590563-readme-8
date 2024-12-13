import {Entity} from "../../../shared-types/src/lib/base/entity";

export interface Repository<T extends Entity> {
  findById(id: T['id']): Promise<T | null>;
  save(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  deleteById(id: T['id']): Promise<void>
}
