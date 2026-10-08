// Entregable equipo DreamHub
// La colección tiene como nombre "PruebasData" y la base de datos "PruebaDB
// 1. Selección de la base de datos
use PruebaDB;

// 2. Inserción de 50 documentos obligatorios (Array de videojuegos)
db.PruebasData.insertMany([
  { "titulo": "Resident Evil 4 Remake", "desarrollador": "Capcom", "año_lanzamiento": 2023, "precio_usd": 39.99, "multijugador": false, "plataformas": ["PlayStation 5", "PC", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Resident Evil 8: Village", "desarrollador": "Capcom", "año_lanzamiento": 2021, "precio_usd": 29.99, "multijugador": true, "plataformas": ["PlayStation 5", "PC", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Resident Evil 9: Requiem", "desarrollador": "Capcom", "año_lanzamiento": 2025, "precio_usd": 69.99, "multijugador": false, "plataformas": ["PlayStation 5", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "The Last of Us Part II Remastered", "desarrollador": "Naughty Dog", "año_lanzamiento": 2024, "precio_usd": 49.99, "multijugador": false, "plataformas": ["PlayStation 5"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Marvel Rivals", "desarrollador": "NetEase Games", "año_lanzamiento": 2024, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "1440p", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Uncharted 4: A Thief's End", "desarrollador": "Naughty Dog", "año_lanzamiento": 2016, "precio_usd": 19.99, "multijugador": true, "plataformas": ["PlayStation 4", "PlayStation 5", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "1440p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Far Cry 3 Classic Edition", "desarrollador": "Ubisoft", "año_lanzamiento": 2018, "precio_usd": 9.99, "multijugador": false, "plataformas": ["PlayStation 4", "Xbox One", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 30 } },
  { "titulo": "Far Cry 4", "desarrollador": "Ubisoft", "año_lanzamiento": 2014, "precio_usd": 14.99, "multijugador": true, "plataformas": ["PlayStation 4", "Xbox One", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 30 } },
  { "titulo": "Fortnite", "desarrollador": "Epic Games", "año_lanzamiento": 2017, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PlayStation 5", "PC", "Xbox Series X/S", "Switch", "Mobile"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Pragmata", "desarrollador": "Capcom", "año_lanzamiento": 2025, "precio_usd": 69.99, "multijugador": false, "plataformas": ["PlayStation 5", "PC", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Hatsune Miku: Colorful Stage!", "desarrollador": "Colorful Palette", "año_lanzamiento": 2021, "precio_usd": 0.00, "multijugador": true, "plataformas": ["iOS", "Android"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "God of War Ragnarök", "desarrollador": "Santa Monica Studio", "año_lanzamiento": 2022, "precio_usd": 69.99, "multijugador": false, "plataformas": ["PlayStation 4", "PlayStation 5", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Spider-Man 2", "desarrollador": "Insomniac Games", "año_lanzamiento": 2023, "precio_usd": 69.99, "multijugador": false, "plataformas": ["PlayStation 5"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Cyberpunk 2077", "desarrollador": "CD Projekt Red", "año_lanzamiento": 2020, "precio_usd": 59.99, "multijugador": false, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Elden Ring", "desarrollador": "FromSoftware", "año_lanzamiento": 2022, "precio_usd": 59.99, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Ghost of Tsushima", "desarrollador": "Sucker Punch", "año_lanzamiento": 2020, "precio_usd": 59.99, "multijugador": true, "plataformas": ["PlayStation 4", "PlayStation 5", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Bloodborne", "desarrollador": "FromSoftware", "año_lanzamiento": 2015, "precio_usd": 19.99, "multijugador": true, "plataformas": ["PlayStation 4"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 30 } },
  { "titulo": "Demon's Souls Remake", "desarrollador": "Bluepoint Games", "año_lanzamiento": 2020, "precio_usd": 69.99, "multijugador": true, "plataformas": ["PlayStation 5"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Returnal", "desarrollador": "Housemarque", "año_lanzamiento": 2021, "precio_usd": 69.99, "multijugador": true, "plataformas": ["PlayStation 5", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Ratchet & Clank: Rift Apart", "desarrollador": "Insomniac Games", "año_lanzamiento": 2021, "precio_usd": 69.99, "multijugador": false, "plataformas": ["PlayStation 5", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Grand Theft Auto V", "desarrollador": "Rockstar Games", "año_lanzamiento": 2013, "precio_usd": 29.99, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Red Dead Redemption 2", "desarrollador": "Rockstar Games", "año_lanzamiento": 2018, "precio_usd": 59.99, "multijugador": true, "plataformas": ["PC", "PlayStation 4", "Xbox One"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "The Witcher 3: Wild Hunt", "desarrollador": "CD Projekt Red", "año_lanzamiento": 2015, "precio_usd": 39.99, "multijugador": false, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S", "Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Persona 5 Royal", "desarrollador": "Atlus", "año_lanzamiento": 2019, "precio_usd": 59.99, "multijugador": false, "plataformas": ["PlayStation 5", "PC", "Xbox Series X/S", "Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Final Fantasy VII Remake", "desarrollador": "Square Enix", "año_lanzamiento": 2020, "precio_usd": 59.99, "multijugador": false, "plataformas": ["PlayStation 5", "PC"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Final Fantasy XVI", "desarrollador": "Square Enix", "año_lanzamiento": 2023, "precio_usd": 69.99, "multijugador": false, "plataformas": ["PlayStation 5"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Super Mario Odyssey", "desarrollador": "Nintendo", "año_lanzamiento": 2017, "precio_usd": 59.99, "multijugador": true, "plataformas": ["Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "The Legend of Zelda: Tears of the Kingdom", "desarrollador": "Nintendo", "año_lanzamiento": 2023, "precio_usd": 69.99, "multijugador": false, "plataformas": ["Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 30 } },
  { "titulo": "Metroid Dread", "desarrollador": "MercurySteam", "año_lanzamiento": 2021, "precio_usd": 59.99, "multijugador": false, "plataformas": ["Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Super Smash Bros. Ultimate", "desarrollador": "Sora Ltd.", "año_lanzamiento": 2018, "precio_usd": 59.99, "multijugador": true, "plataformas": ["Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Mario Kart 8 Deluxe", "desarrollador": "Nintendo", "año_lanzamiento": 2017, "precio_usd": 59.99, "multijugador": true, "plataformas": ["Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Animal Crossing: New Horizons", "desarrollador": "Nintendo", "año_lanzamiento": 2020, "precio_usd": 59.99, "multijugador": true, "plataformas": ["Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 30 } },
  { "titulo": "Hollow Knight", "desarrollador": "Team Cherry", "año_lanzamiento": 2017, "precio_usd": 14.99, "multijugador": false, "plataformas": ["PC", "Switch", "PlayStation 4", "Xbox One"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Hades", "desarrollador": "Supergiant Games", "año_lanzamiento": 2020, "precio_usd": 24.99, "multijugador": false, "plataformas": ["PC", "Switch", "PlayStation 5", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Celeste", "desarrollador": "Extremely OK Games", "año_lanzamiento": 2018, "precio_usd": 19.99, "multijugador": false, "plataformas": ["PC", "Switch", "PlayStation 4", "Xbox One"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Stardew Valley", "desarrollador": "ConcernedApe", "año_lanzamiento": 2016, "precio_usd": 14.99, "multijugador": true, "plataformas": ["PC", "Switch", "PlayStation 4", "Xbox One", "Mobile"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Minecraft", "desarrollador": "Mojang", "año_lanzamiento": 2011, "precio_usd": 29.99, "multijugador": true, "plataformas": ["PC", "PlayStation 4", "Xbox One", "Switch", "Mobile"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Terraria", "desarrollador": "Re-Logic", "año_lanzamiento": 2011, "precio_usd": 9.99, "multijugador": true, "plataformas": ["PC", "PlayStation 4", "Xbox One", "Switch", "Mobile"], "especificaciones_tecnicas": { "resolucion_maxima": "1080p", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Rocket League", "desarrollador": "Psyonix", "año_lanzamiento": 2015, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PC", "PlayStation 4", "Xbox One", "Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Overwatch 2", "desarrollador": "Blizzard Entertainment", "año_lanzamiento": 2022, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S", "Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Valorant", "desarrollador": "Riot Games", "año_lanzamiento": 2020, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PC"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 240 } },
  { "titulo": "Apex Legends", "desarrollador": "Respawn Entertainment", "año_lanzamiento": 2019, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S", "Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Call of Duty: Warzone", "desarrollador": "Infinity Ward", "año_lanzamiento": 2020, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Halo Infinite", "desarrollador": "343 Industries", "año_lanzamiento": 2021, "precio_usd": 0.00, "multijugador": true, "plataformas": ["PC", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Forza Horizon 5", "desarrollador": "Playground Games", "año_lanzamiento": 2021, "precio_usd": 59.99, "multijugador": true, "plataformas": ["PC", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Gears 5", "desarrollador": "The Coalition", "año_lanzamiento": 2019, "precio_usd": 39.99, "multijugador": true, "plataformas": ["PC", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 120 } },
  { "titulo": "Sea of Thieves", "desarrollador": "Rare", "año_lanzamiento": 2018, "precio_usd": 39.99, "multijugador": true, "plataformas": ["PC", "Xbox Series X/S", "PlayStation 5"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "It Takes Two", "desarrollador": "Hazelight Studios", "año_lanzamiento": 2021, "precio_usd": 39.99, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S", "Switch"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": false, "fps_objetivo": 60 } },
  { "titulo": "Baldur's Gate 3", "desarrollador": "Larian Studios", "año_lanzamiento": 2023, "precio_usd": 59.99, "multijugador": true, "plataformas": ["PC", "PlayStation 5", "Xbox Series X/S"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } },
  { "titulo": "Resident Evil 2 Remake", "desarrollador": "Capcom", "año_lanzamiento": 2019, "precio_usd": 39.99, "multijugador": false, "plataformas": ["PC", "PlayStation 4", "Xbox One", "PlayStation 5"], "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } }
]);

// 3. Inserción de un documento extra (para pruebas de actualización y borrado)
db.PruebasData.insertOne({ 
  "titulo": "Silent Hill 2 Remake", 
  "desarrollador": "Bloober Team", 
  "año_lanzamiento": 2024, 
  "precio_usd": 69.99, 
  "multijugador": false, 
  "plataformas": ["PlayStation 5", "PC"], 
  "especificaciones_tecnicas": { "resolucion_maxima": "4K", "soporte_vrr": true, "fps_objetivo": 60 } 
});

// 4. Consulta con filtro según condición definida (Juegos que tienen objetivo de 120 FPS)
db.PruebasData.find({ "especificaciones_tecnicas.fps_objetivo": 120 });

// 5. Consulta con ordenamiento por un campo (Juegos de Capcom ordenados por año de más nuevo a más viejo)
db.PruebasData.find({ "desarrollador": "Capcom" }).sort({ "año_lanzamiento": -1 });

// 6. Actualización de un documento (Rebaja de precio usando $set)
db.PruebasData.updateOne(
  { "titulo": "Silent Hill 2 Remake" }, 
  { $set: { "precio_usd": 49.99 } }
);

// 7. Eliminación de un documento (Se borra el juego de prueba)
db.PruebasData.deleteOne({ "titulo": "Silent Hill 2 Remake" });

// 8. Conteo de verificación final (Debe retornar 50)
db.PruebasData.countDocuments();