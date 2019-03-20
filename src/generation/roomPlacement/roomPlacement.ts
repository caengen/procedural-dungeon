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

  const map = createMap(dimensions, dimensions);
  const { carvedMap, roomCenters } = placeRooms({
    map,
    rooms,
    roomHeight,
    roomWidth
  });

  return [[]];
}

interface CreateRoomsParams {
  dimensions: number;
  roomWidth: number;
  roomHeight: number;
}
function createRoom(params: CreateRoomsParams): Room {
  const { dimensions, roomWidth, roomHeight } = params;

  const height = Math.ceil(Math.random() * roomHeight);
  const width = Math.ceil(Math.random() * roomWidth);
  const { x, y } = getRandomCoordinates(dimensions, width, height);

  return {
    id: uuidv4(),
    height,
    width,
    x,
    y
  };
}

interface PlaceRoomParams {
  map: number[][];
  rooms: number;
  roomWidth: number;
  roomHeight: number;
}
function placeRooms(params: PlaceRoomParams) {
  const { map, rooms, roomWidth, roomHeight } = params;
  let carvedMap = map;
  let roomCenters = [];

  for (let i = 0; i < rooms; i++) {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 5) {
      const room = createRoom({
        roomHeight,
        roomWidth,
        dimensions: map.length
      });
      const intersects = intersection(carvedMap, room);
      if (!intersects) {
        carvedMap = placeRoom(carvedMap, rooms[i]);
        placed = true;
      }
      attempts++;
    }
  }

  return { carvedMap, roomCenters };
}

function intersection() {}

function getRandomCoordinates(
  dimensions: number,
  width: number,
  height: number
) {
  const x = Math.floor(Math.random() * (dimensions - width));
  const y = Math.floor(Math.random() * (dimensions - height));

  return { x, y };
}
