# Insomnia Gacha
A quick discord bot that allows users from the server roll on a Gacha system to get rewards for their account.

## The Project
This was a project done for a private Discord server, which is no longer operating.

## Requirements
* Node.js
* A terminal

## How to run it
Open a terminal and clone the repo on a directory of your choice with 

```git
git clone https://github.com/Elyeet9/insomnia-gacha/
```

Next, run `npm install` to fetch all the packages. 
Create a file named `.env` and add the following line (replace [your_token] with your bot's token, don't add any ""):
```
DISCORD_TOKEN=your_token
```

Finally, you can run the bot using `node main.js`. 

The script also runs a server on the port 3000, which was used for a deploy on Replit with another bot that pinged it to keep the execution alive. 
If you don't want to do this, remove the last line in `main.js` that says `keepAlive();`

## Changing the rewards
There are two commands that the bot can execute. When you type `gacha` and when you type `guion`. Both of these functions are called on the `gacha.js` script. 
To change the results, you can edit the great if ... else if ... with the descriptions and images you want.

___
Have fun!
