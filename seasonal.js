// This script replaces all .seasonal_emoji elements with a specified emoji
// connected to the current date.

var seasonalEmoji = document.querySelectorAll('.seasonal_emoji');

var seasonalEmojiDict = {
    '12-25': '🎄',
    '01-01': '🎉',
    '02-14': '💘',
    '10-31': '🎃',
    '11-05': '🎇',
    '12-24': '🎄',
    '12-31': '🎉',
    '12-26': '📦',
    '10-01': '🎂',
    '03-14': '🥧'
};

var today = new Date();

var month = today.getMonth() + 1;
var day = today.getDate();

var todayFormatted = month + '-' + day;

var monthLongSeasonalEmojis = {
    "12": "❄️",
    "10": "🎃"
}

if (monthLongSeasonalEmojis[month.toString()]) {
    for (var i = 0; i < seasonalEmoji.length; i++) {
        seasonalEmoji[i].innerHTML = monthLongSeasonalEmojis[month.toString()];
    }
} else {
    for (var i = 0; i < seasonalEmoji.length; i++) {
        var emoji = seasonalEmojiDict[todayFormatted];
        if (emoji) {
            seasonalEmoji[i].innerHTML = emoji;
        }
    }
}
