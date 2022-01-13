import { Brand } from "./Brand";
import { Type } from "./Type";
import { Tag } from "./Tag"

export type Filters = {
    tags: Tag[],
    brands: Brand[],
    types: Type[],
}