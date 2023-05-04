import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CharacterQueryResolver } from './graphql/resolvers/query/character';
import { CharacterResolver } from './graphql/resolvers/types/character';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/index.ts'),
      },
    }),
  ],
  providers: [CharacterQueryResolver, CharacterResolver]
})
export class AppModule {}