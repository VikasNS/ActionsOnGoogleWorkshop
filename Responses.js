conv.ask(new SimpleResponse({
  speech: 'Howdy, this is GeekNum. I can tell you fun facts about almost any number, my favorite is 42. What number do you have in mind?',
  text: 'Howdy! I can tell you fun facts about almost any number. What do you have in mind?',
}));


conv.ask(new BasicCard({
  text: `This is a basic card.  Text in a basic card can include "quotes" and
  most other unicode characters including emoji 📱.  Basic cards also support
  some markdown formatting like *emphasis* or _italics_, **strong** or
  __bold__, and ***bold itallic*** or ___strong emphasis___ as well as other
  things like line  \nbreaks`, // Note the two spaces before '\n' required for
                               // a line break to be rendered in the card.
  subtitle: 'This is a subtitle',
  title: 'Title: this is a title',
  buttons: new Button({
    title: 'This is a button',
    url: 'https://assistant.google.com/',
  }),
  image: new Image({
    url: 'https://example.com/image.png',
    alt: 'Image alternate text',
  }),
  display: 'CROPPED',
}));


conv.ask('This is a browse carousel example.');
// Create a browse carousel
conv.ask(new BrowseCarousel({
  items: [
    new BrowseCarouselItem({
      title: 'Title of item 1',
      url: 'google.com',
      description: 'Description of item 1',
      image: new Image({
        url: 'IMG_URL.com',
        alt: 'Image alternate text',
      }),
      footer: 'Item 1 footer',
    }),
    new BrowseCarouselItem({
      title: 'Google Assistant',
      url: 'google.com',
      description: 'Google Assistant on Android and iOS',
      image: new Image({
        url: 'IMG_URL_Assistant.com',
        alt: 'Image alternate text',
      }),
      footer: 'More information about the Google Assistant',
    }),
  ],
}));
