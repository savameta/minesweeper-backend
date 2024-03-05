import { Module } from '@nestjs/common';
import { MinigameModule } from 'src/minigame/minigame.module';
import { RoomModule } from 'src/room/room.module';
import { RoomService } from 'src/room/room.service';
import { EventsGateway } from './events.gateway';
import { MiniGameGateway } from './minigame.gateway';

@Module({
  providers: [EventsGateway, MiniGameGateway],
  imports: [RoomModule, MinigameModule],
})
export class EventsModule {}
