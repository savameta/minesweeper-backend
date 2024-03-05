import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';
import { RoomModule } from './room/room.module';
import { MinigameModule } from './minigame/minigame.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://metaphor:metaphor@metaphor.lgztn.mongodb.net',
      {
        dbName: 'metaphor',
      },
    ),
    EventsModule,
    RoomModule,
    MinigameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
