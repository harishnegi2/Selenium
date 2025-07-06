                            Automates browsers. That's it!
          Contributing • Installing • Building • Developing • Testing • Documenting • Releasing


Selenium is an umbrella project encapsulating a variety of tools and libraries enabling web browser automation. Selenium specifically provides an infrastructure for the W3C WebDriver specification — a platform and language-neutral coding interface compatible with all major web browsers.
.

You can build and release everything with:

./go all:release
To build and release a specific language:

./go <language>:release
If you have access to the Selenium EngFlow repository, you can have the assets built remotely and downloaded locally using:

./go all:release['--config', 'release']

