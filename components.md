# DATA

## DATA LAYER

- User
  - username
  - email
  - password
- Coin
  - coin image
  - year
  - country
  - issuing volume
  - feature
  - description

## DATA MODIFICATIONS

- Load coins
- Add coin to My Coins
- Create new coin in My Coins
- Update coin in My Coins
- Delete coin in My Coins

# COMPONENTS

## App

- Shows Header component
- Shows Footer component

## Layout

- Shows all components

## Header

- Contains heading in h1
- Contains logo in Login page
- Contains logo in Register page

## Footer

- Contains Navbar

## CoinsList

- Receives the list of coins from the API
- Shows a CoinCard component for every coin in the CoinsList
- Sends the coin data to each CoinCard component

## CoinCard

- Receives coin data
- Shows partial data about the coin
  - coin image
  - coin country
  - coin year
- Links to Detail page of given coin

## Navbar

- Contains links to:
  - Home page
  - My Coins page
  - Log in page / Log out

## Filter

- Contains a list of years to filter
- Contains a list of countries to filter
- Receives the function to filter coins

## Pagination

- Receives the function to load more coins

## Button

- Receives text
- Shows the received text
- Receives an action
- On click executes the received action

## Modals

- Login:
  - Wrong credentials
- Registration:
  - email already registered
  - user was not created
- Create a coin:
  - coin was created
  - coin couldn't be created
- Modify a coin:
  - coin was modified
  - coin couldn't be modified

## Register Form

- Receives the info to register a new user
- Receives an action to register a new user
- Shows a button "Register" to submit the form
- On submit executes the function to register a new user

## Login Form

- Receives the info to login an existing user
- Receives an action to login an existing user
- Shows a button "Log in" to submit the form
- On submit executes the function to login an existing user

## Coin Form

- Receives the information to create a new coin
- Receives an action to create a new coin
- Shows a button "Add new coin" to submit the form
- On submit executes the function to create a new coin
- Sends new coin to CoinsList component

- Receives the updated info to modify an existing tip
- Receives an action to modify an existing coin
- Shows a button "Save changes" to submit the form
- On submit executes the function to modify a coin
- Modifies a coin on My Coins page

# PAGES

## Home page

- Contains the CoinsList component
- Contains the Filter component
- Contains the Pagination component

## My Coins page

- Contains a list of saved coins
- Contains a list of created coins
- Contains a function to modify a coin
- Contains a function to erase a coin

## Detail page

- Shows all information about a coin

## Create page

- Contains the Form component
- Receives the function to create a new coin

## Edit page

- Contains the Form component
- Receives the function to modify a coin

## 404 page

- Shows an error message when there is a wrong request

## Log in page

- Shows the form to log in
- Receives the function to log in the user

## Register page

- Shows the form to register
- Receives the function to register a user
