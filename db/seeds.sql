INSERT INTO user (id, username, first_name, last_name, email, pw)
VALUES (1, "Ironman", "Tony", "Stark", "tstark@starkindustries.com", "billionaire"),
       (2, "Hulk", "Bruce", "Banner", "bbanner@gamma.com", "greenman"),
       (3, "CapA", "Steve", "Rogers", "srogers@usa.com", "usausausa"),
       (4, "Bwidow", "Natasha", "Romanoff", "nromanoff@redroom.com", "spygirl"),
       (5, "Hawkeye", "Clint", "Barton", "cbarton@bullseye.com", "nevermiss");

INSERT INTO business (id, name, city, category, isOpen)
VALUES (01, "Pins", "Dublin", "Bar", "Yes"),
       (02, "TownHall", "Columbus", "Bar", "Yes"),
       (03, "Marcella's", "Columbus", "Restauraunt", "Yes"),
       (04, "Brewdog", "Columbus", "Bar", "Yes"),
       (05, "Carsonie's", "Upper Arlington", "Restaurant", "Yes");

 INSERT INTO posts (id, crowded, masks, entertainment, specials, quality, cleanliness, addComment, busId)
 VALUES (001, "Crowded", "No Masks", "Yes", "Yes", 4, "Moderately", "Fun atmosphere!", 01),
        (002, "Crowded", "No Masks", "No", "No", 4, "No", "Fun new spot!", 02),
        (003, "Not Crowded", "Masks", "No", "Yes", 4, "Yes", "The best happy hour!", 03),
        (004, "Crowded", "Masks", "No", "No", 4, "No", "Great beer!", 04),
        (005, "Not Crowded", "No Masks", "No", "Yes", 4, "Moderately", "Great for an Italian fix!", 05);
