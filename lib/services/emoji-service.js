import EmojiConverter from 'emoji-js';

const emoji = new EmojiConverter();
emoji.img_sets.apple.path = '/static/emoji/apple-64/';
emoji.img_sets.apple.sheet = '/static/emoji/sheet_apple_64.png';
emoji.use_sheet = true;

emoji.addAliases({
  'thumbs-up': '1f44d',
  'thumbs-down': '1f44e',
  'rock-on': '1f91f'
});

export const renderEmoji = e => {
  if (e.startsWith(':') === false && e.endsWith(':') === false) {
    return emoji.replace_colons(`:${e}:`);
  }
  return emoji.replace_colons(e);
};
