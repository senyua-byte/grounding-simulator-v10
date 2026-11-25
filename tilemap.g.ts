// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000c12121212121212121212121212120b11010101010101010101010101010113110101010101010101010101010101131101010101010101010101010101011311010101060202020202020601010113110101010202030303030202010101130701010102030101010103020101010a02020202020101021401010202020202020202020201010204010102020202020903030302010103030101020303030811010101020201010101020201010110110101010602020501020206010101101101010103030303010303030101011011010101010101010101010101010110110101010101010101010101010101100d0f0f0f0f0f0f0f0f0f0f0f0f0f0f0e`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.floorDark0,sprites.dungeon.hazardHole,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.hazardSpike,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020303030201010101010101010101020203030304010101010101010101010202030303020101010101010101010102020202020201010101010101010101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020303030303030301010101010101020204040404040403010101010101010202040404040404040101010101010102020404040404040301010101010101020204040404040403010101010101010202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . 2 . . . . 2 . . . . . 2 
2 2 2 2 2 . . . . 2 . . . . . 2 
2 . . . . . . . . 2 2 2 . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile5":
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile2":
            case "tile5":return tile5;
            case "myTile4":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
