# Font Selection with Figlet

This demo utilizes the Figlet library (which converts text into ASCII art) to generate ASCII art from text using different available fonts. Here's how you can select a font and view all available fonts.

## Usage

### 1. View All Available Fonts

To view all available fonts, run the following command in your terminal:

    node fonts.js

This command executes the `fonts.js` file, which displays a list of all fonts available for use with Figlet.

### 2. Generate ASCII Art with a Specific Font

To generate ASCII art with a specific font, use the following command in your terminal, replacing `FontName` with the name of the font you wish to use:

    node ascii.js FontName

In the `ascii.js` script, you can specify your phrase in place of `yourPhrase`:

## Files

- `fonts.js`: Displays all available fonts for Figlet.
- `ascii.js`: Generates ASCII art using a font selected from the command line.

## Notes

- Ensure Node.js is installed on your system to run the commands.
- You can experiment with different fonts by changing the font name in the `node ascii.js` command.

This README.md includes the clarification that the project is built with the Figlet library.
