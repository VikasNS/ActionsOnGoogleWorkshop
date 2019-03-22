'use strict';

const {
    dialogflow,
  	RegisterUpdate,
    BasicCard,
    BrowseCarousel,
    BrowseCarouselItem,
    Button,
    Permission,
    Carousel,
    Image,
    LinkOutSuggestion,
    List,
    MediaObject,
    Suggestions,
    SimpleResponse,
    Table
} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});


app.intent('Default Welcome Intent', (conv) => {
    conv.user.storage.count = 0;
    conv.ask("Welcome");
  
     
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
