const db = require("../models");

const objects = [
    {
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/19/16/enhanced/webdr13/enhanced-9349-1453240692-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        category: "mensbig",
        title: "Mr Lazy Pants"
    },
    {
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/19/17/enhanced/webdr09/enhanced-10994-1453241408-9.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        category: "mensbig",
        title: "Mr Poo Pants"
    }
];

module.exports = function () {
    if (false) {
        for (let i = 0; i < objects.length; i++) {
            const model = new db.body({
                image_URL: objects[i].imageUrl,
                title: objects[i].title,
                category: objects[i].category
            });

            model.save((err, obj) => {
                if (err) {
                    console.error("error occurred initializing database object:" + JSON.stringify(error));
                }
            })
        }
    }
};
