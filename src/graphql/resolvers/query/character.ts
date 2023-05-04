import { Resolver, Query, Args } from '@nestjs/graphql';
import { charactersList } from 'src/data/characters';

@Resolver()
export class CharacterQueryResolver {
  @Query('characters') // Nombre de la definición especificada en src/graphql/schema/query.graphql => characters
  async characters() {
    return charactersList;
  }

  @Query('character') // Nombre de la definición especificada en src/graphql/schema/query.graphql => character(id: ID)
  async character(@Args('id') id: string) {
    return charactersList.filter((value) => value.id === id)[0];
  }
}
