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

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.


// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);


