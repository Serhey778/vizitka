import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Request, Response } from 'express';
import { join } from 'node:path';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProfileModule } from './vizitka/profile/profile.module.js';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: ({ req, res }: { req: Request; res: Response }) => ({
        req,
        res,
      }),
      subscriptions: {
        'graphql-ws': true,
      },
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/vizitka/graphql.ts'),
        outputAs: 'class',
      },
    }),
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
