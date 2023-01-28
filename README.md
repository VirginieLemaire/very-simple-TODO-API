# A very simple TODO API

This is a very simple REST API I made for JavaScript learning beginners to have an example of how to create a REST API. They can to use it to connect with a front-end interface.

It's a Nodejs, express and Sequelize application with a postgreSQL database deployed on [elephantSQL](https://www.elephantsql.com/).

Database only contains one table but it's absolutely possible to add more if you want on your own DB :wink:

You'll find [a little documentation](./doc/Very-simple-documentation.md) in the `/doc` folder.

## Stack and prerequisite

You'll need this stack globally installed on your machine
- [NodeJS](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

Other dependencies will be installed running `npm i` into your terminal

You need to know how to [create a postgeSQL database](https://www.postgresql.org/docs/current/sql-createdatabase.html)

## How to use it

<details><summary>If you are not used to follow instructions click here for more informations ;)</summary>

When you see something like this `<your info>` it means that you must enter you own informations. 
e.g. If I see "Hello `<your firstname>` -> I replace `<your firstname>` by my firstname like this : `Hello Virginie`
</details>

### Clone this repository

<details><summary>You never did this before or not sure to forget something? Click to see how </summary>

- click the "clone" button to copy url and run `git clone <theURLCopied>` in your terminal in the folder where you want this repository to be
- you'll more informations on [GitHub documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- in your terminal, move to the folder running `cd very-simple-TODO-API/`
</details>

### Prepare everything :wink: 

- If you haven't done it yet, create a postgreSQL database (DB)
- In the terminal, run the sql script to create the table:  connect to your DB running `psql -U <the name of the user who owns the DB> -d <the name of your DB> -f ./data/create_tables.sql` (remember to change the informations you enter so it corresponds to your DB ones)
- copy and paste the `.env.example` file and rename it `.env`
- inside the `.env` file change the informations of PG_URL with the ones of **your** database
- run `npm install` (or `npm i`) to install all the dependencies needed (listed into package.json)

### Launch it :rocket:

Run `npm start` :tada:

If you want to develop more features, you can use `npm run dev`