import { Dungeon } from "src/components";
import { roomPlacement } from "src/generation";

export default function RoomPlacement() {
  return (
    <Dungeon
      matrix={roomPlacement({
        dimensions: 15,
        rooms: 10,
        roomWidth: 4,
        roomHeight: 4
      })}
    />
  );
}
