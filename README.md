# seasonal.js

Change an emoji on your website for different seasonal events.

## Screenshot

The following screenshot shows the seasonal.js script changing the emoji on my website on a December day:

![Screenshot of my website](screenshot.png)

## Getting Started

First, copy the seasonal.js script to your local machine. Then, update the `seasonalEmojiDict` to include emojis on days that are relevant to you. A few days are added by default, such as Christmas and Pi Day. You can update the `monthLongSeasonalEmojis` dictionary to set rules that apply for entire months. By default, an emoji is provided for the month of October (a pumpkin for Halloween) and December (a snowflake for the winter weather).

Once you have configured seasonal.js, install it directly above the `</body>` tag on your website:

    <script src="./path/to/seasonal.js"></script>

After configuring and installing seasonal.js, wrap all of the emojis on your website that you want to update in tags (i.e. span tags). The surrounding tag around each emoji should be given the `seasonal_emoji` class, like so:

    <p>Good day<span class="seasonal_emoji">☕</span></p>

In this example, the coffee cup emoji (☕) will be replaced using the rules dictated in the seasonal.js script.

## License

This project is released into the public domain.

## Contributors

- capjamesg
