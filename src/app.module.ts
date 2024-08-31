import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // ou 'mysql', 'sqlite', etc.
      host: 'localhost',
      port: 3306, // port de votre base de données
      username: 'root',
      password: '',
      database: 'examen',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      synchronize: true, // ne pas utiliser en production, utilisez des migrations
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
