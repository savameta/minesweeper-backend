import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
import { RoomModule } from './room/room.module';
import { MinigameModule } from './minigame/minigame.module';

const database =
  'mongodb+srv://spirity:roFYY7BoYRp9YT4n@minesweeper.q0mdgtc.mongodb.net/?retryWrites=true&w=majority&appName=minesweeper';
@Module({
  imports: [
    MongooseModule.forRoot(database, {
      dbName: 'minesweeper',
    }),
    EventsModule,
    RoomModule,
    MinigameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
