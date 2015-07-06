# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  plugins:
    marked:
      markedOptions:
        # Turn off sanitisation so we can embed HTML inside our markdown files
        sanitize: false
}

# Export the DocPad Configuration
module.exports = docpadConfig
