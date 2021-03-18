import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ContactsModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 3000,
    username: 'postgres',
    password: 'root',
    database: 'nestjs_test',
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
