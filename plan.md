# Poke-catcher Plan


## Walkthrough

What does the user experience?

1. __Start page__
    * Contains start button, stats button
2. After clicking start, bring user to __Catch Page__
    * Display three pokemon from database
    * User selects _one_ that they want to catch
        * OPTIONAL STUFF:
            * catching animation
            * 30% chance to catch
    * Display caught pokemon
    * After 10 instances, go to session stats page
3. __Session Stats__
    * Display which pokemon were caught that session
    * All-time stats button

## HTML Plan

### Start Page
    * Start button
        - Event listener that bring user to the catch page
    * Stats button
        - Displays last session stats on the left
        - All-time stats on the right
    * Cool Pokemon graphic

### Catch Page
    * Display three pokemon choices
    * Play again button
    * Track number of pokemon caught on the page
    * Home button/stats button

### Results Page
    * Display list of encountered pokemon
        - Number of times captured
    * Display list of unencountered pokemon
        - Prolly add some message like `Play again blah bvlah  blah`


## Game Flow

### Catch Page

