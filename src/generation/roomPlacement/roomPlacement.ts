import { Room } from "src/types";
import uuidv4 from "uuid/v4";
import { createMap } from "src/generation";

interface RoomPlacementParams {
  dimensions: number;
  rooms: number;
  roomWidth: number;
  roomHeight: number;
}

export default function roomPlacement(params: RoomPlacementParams) {
  const { dimensions, rooms, roomWidth, roomHeight } = params;

  const genRooms = createRooms({ rooms, roomWidth, roomHeight });

  return [[]];
}

interface CreateRoomsParams {
  rooms: number;
  roomWidth: number;
  roomHeight: number;
}
function createRooms(params: CreateRoomsParams) {
  const { rooms, roomWidth, roomHeight } = params;

  let generatedRooms: Room[] = [];
  for (let i = 0; i < rooms; i++) {
    const height = Math.ceil(Math.random() * roomHeight);
    const width = Math.ceil(Math.random() * roomWidth);

    generatedRooms.push({
      id: uuidv4(),
      height,
      width,
      map: createMap(height, width)
    });
  }

  return generatedRooms;
}
