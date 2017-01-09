# Summary
> based on the prompt [here](https://gist.github.com/duffytilleman/0fc03bfd737180a13458d092acfbe564)

The current state of the code base represents roughly 4 - 5 hours of work. And although incomplete, the author hopes to prove the extent of (or there lack of) his capabilities by providing enough of a template to be extensible to any onlookers. I.e. in the interest of his own job hunt, this selfish developer has realized that he is spending too much time on what looks like the first round of potentially many screens within a single prospect, and has decided to "finish" early.

If you're still reading and haven't lost interest in me as a candidate yet -- the following is a list of things I would change if I kept working on it.

# If I kept working on it:
> under the assumption that we're still doing Vanilla JS, no frameworks, 
> and we're not setting up a server to use the API key instead

* Add actual output to the screen instead of logging the schedule on the console.
* The enabling and disabling of select tags currently functions like this:
```
  $('.make').prop('disabled', false);
  $('.model').prop('disabled', true);
  $('.trim').prop('disabled', true);
  $('.engine').prop('disabled', true);
  $('.transmission').prop('disabled', true);
```
and this kind of code runs on any change event that occurs to any one particular select tag - which is super ugly, but necessary in the case where someone is deep into the tags and changes one of the earlier ones invalidating multiple select tags. Provided time, this developer would likely explore options with bit representation since a series of boolean values could be represented in binary anyway and try to wrap it up in a single line function, in the interest of being DRY.
* Add global variables to hold onto the currently selected year, make, model, etc. instead of using jQuery to access the values from the DOM over and over again. (This choice was somewhat neglected early on because of the fear of obfuscation)
* The data from the very first API request for a year is cached locally so if someone looks at another year and goes back it doesn't trigger another API request. realizing that's not too common an occurrence. Over optimization?
* Maybe add promises when API call chaining gets hairy
* CSS

As always feedback on my design choices would be awesome, but I won't be expecting as it's not typically the norm with coding challenges. I'm always open to going back and adding more on request. Thanks for having me!