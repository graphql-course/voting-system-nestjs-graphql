import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Character } from 'src/graphql/index';

const PHOTO_LOCALHOST =
  'https://raw.githubusercontent.com/graphql-course/5-breaking-bad-graphql-voting/master/photos/';

@Resolver('Character')
export class CharacterResolver {
    /**
     * Convert computer friendly url to use in big resolution to adapt to mobile friendly
     * @param character 
     * @returns 
     */
  @ResolveField(() => String)
  async mobileFriendlyUrl(@Parent() character: Character): Promise<string> {
    return character.url.replace('es.wikipedia', 'es.m.wikipedia');
  }
  /**
   * Add photo localhost reference with file and extension data to generate URL to accesible to view image
   * @param character
   * @returns
   */
  @ResolveField(() => String)
  async photo(@Parent() character: Character): Promise<string> {
    return PHOTO_LOCALHOST.concat(character.photo);
  }
}
