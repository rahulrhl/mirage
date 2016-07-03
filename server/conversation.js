// Load config.
var config = require('../config.json');

/*
December 20th to December 26th - Merry Christmas
Jan 1st - Happy New Year
Thursday - Almost the weekend
Friday - Tomorrow's Saturday!
Sunday evening - back to work in the morning
*/

const Conversation = {
  _getRandomArrayElement: (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  _getExtra: () => {
    var today = new Date();
    var currentMonth = today.getMonth() + 1; // 1 = January, 12 = December.
    var currentDayOfMonth = today.getDate();
    var currentDayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday.
    var currentHour = today.getHours();

    const DAYS_OF_WEEK = {
      SUNDAY: 0,
      MONDAY: 1,
      TUESDAY: 2,
      WEDNESDAY: 3,
      THURSDAY: 4,
      FRIDAY: 5,
      SATURDAY: 6
    };

    // January.
    if (currentMonth === 1) {
      if (currentDayOfMonth === 1) {
        return 'Happy New Year!';
      }
    }

    // February.
    if (currentMonth === 2) {

      // Valentines day.
      if (currentDayOfMonth === 14) {
        return Conversation._getRandomArrayElement([
          'Happy Valentines Day',
          '*kiss*'
        ])
      }
    }

    // April.
    if (currentMonth === 4) {

      // Shaun's birthday.
      if (currentDayOfMonth === 19) {
        return 'Happy Birthday Shaun!';
      }
    }

    // October.
    if (currentMonth === 10) {

      // Halloween.
      if (currentDayOfMonth === 31) {
        return Conversation._getRandomArrayElement([
          'Spooooooky',
          `There's somebody behind you`,
          'Mwa ha ha ha ha',
          'I saw a ghost in here earlier'
        ])
      }
    }

    // December.
    if (currentMonth === 12) {

      // Matt's birthday.
      if (currentDayOfMonth === 11) {
        return 'Happy Birthday Matty!';
      }

      // Christmas week.
      if (currentDayOfMonth > 19 && currentDayOfMonth <= 28) {
        return Conversation._getRandomArrayElement([
          'Merry Christmas!',
          'Happy Christmas!',
          'Joyeux Noël!',
          'Jingle Bells, Jingle Bells, Jingle All The Way',
        ]);
      }

      // New Years Eve.
      if (currentDayOfMonth === 31) {
        return 'Happy New Year!';
      }

    }

    if (currentDayOfWeek === DAYS_OF_WEEK.MONDAY) {
      return Conversation._getRandomArrayElement([
        `Monday - one day.`,
        `A new week begins.`
      ])
    }

    if (currentDayOfWeek === DAYS_OF_WEEK.TUESDAY) {
      return Conversation._getRandomArrayElement([
        `Tuesday - two day.`,
        ``
      ])
    }

    if (currentDayOfWeek === DAYS_OF_WEEK.WEDNESDAY) {
      return Conversation._getRandomArrayElement([
        `Wednesday - when? Huh? What day?.`,
        ``
      ])
    }

    // Thursday.
    if (currentDayOfWeek === DAYS_OF_WEEK.THURSDAY) {
      return 'Almost the weekend..';
      return Conversation._getRandomArrayElement([
        `Almost the weekend..`,
        `Thursday - the third day.`
      ])
    }

    // Saturday.
    if (currentDayOfWeek === DAYS_OF_WEEK.FRIDAY) {
      if (currentHour > 17) {
        return `It's the weekend!`;
      }
      return 'Happy Friday!';
    }

    // Saturday.
    if (currentDayOfWeek === DAYS_OF_WEEK.SATURDAY) {
      return Conversation._getRandomArrayElement([
        `It's the weekend!`,
        `The weekend is here!`
      ])
    }

    return '';
  },
  _getMessage: () => {
    // Message varies depending on the time of day.
    var currentHour = new Date().getHours();

    // Midnight to 4:59am
    if (currentHour >= 0 && currentHour < 5) {
      return Conversation._getRandomArrayElement([
        `Gosh, you're up late!`,
        'Burning the midnight oil?',
        `Can't sleep?`
      ]);
    }
    // 5am to 7am
    if (currentHour >= 5 && currentHour < 7) {
      return Conversation._getRandomArrayElement([
        `You're up early!`,
        'Rise and shine',
        `Too early, go back to sleep`
      ]);
    }
    // 7am to midday
    if (currentHour >= 7 && currentHour < 12) {
      return Conversation._getRandomArrayElement([
        `Good morning`
      ]);
    }
    // Midday to 6pm
    if (currentHour >= 12 && currentHour < 18) {
      return Conversation._getRandomArrayElement([
        `Good afternoon`
      ]);
    }
    // 6pm to 11:59pm
    if (currentHour >= 18 && currentHour <= 23) {
      return Conversation._getRandomArrayElement([
        `Good evening`
      ]);
    }
    return 'Hello';
  },
  get: () => {
    return new Promise((fulfill, reject) => {
      const message = Conversation._getMessage();
      const extra = Conversation._getExtra();
      fulfill({
        message,
        extra
      });
    });
  }
};
module.exports = Conversation;
