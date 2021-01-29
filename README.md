# INSIGHT

Networking and employment application that allows companies to leverage its employees to make the hiring process much easier, and open up the hidden job market.

User scenarios:
1. Organizations can search and add users as verified employees, post hiring information, which will be accesible by verified employees and their referred connections. 
2. Every individual user can search and connect with other users to learn about the industry and the company. 
3. Verified employees can refer to any open position in their company, simply by choosing from their current connections.
4. As an individual user, you can view the referred jobs in your account, and accept the reference with a simple click.  
5. All the candidates, who received and accepted the references, will be displayed to the organizations in the according job position post. By clicking the view button, organizations can see the candidates and referees, and check out the user's personal profile.

## Version control

Before starting, please make sure to use the following versions for this project:
1. 'react', '^17.0.1'
2. 'ruby', '2.5.3'
3. 'rails', '~> 6.1.1'
4. 'sqlite3', '~> 1.4'

## Setup

1. Run `cd client`, then `npm install` to install dependencies. It will take a while to install, so please open another terminal window and do the following;
2. Run `cd backend`, then `bundle install` to install dependencies;
3. Run `bin/rails db:reset db:migrate db:seed` to create and seed the database;
4. Run `bin/rails s -b 0.0.0.0 -p 8080` to start the server;
5. Now visit `http://localhost:8080/api/v1/organization` or `http://localhost:8080/api/v1/user`, if you see the json data, then the server is all setup;
6. Switch back to the client folder, find `.env` file, add `CHOKIDAR_USEPOLLING=true`;
7. After all dependencies installed, run `npm start`;
8. After successful compiling, visit `http://localhost:3000/` to start the client;

Enjoy your journey with Insight!

## Product Preview

- Home Page
!["Home Page"]()

- Login Page
!["Login Page"]()

- Organization Profile
!["Organization Profile"]()

- Employees
!["Employees"]()

- Organization Jobs
!["Organization Jobs"]()

- Organization Open Positions
!["Organization Open Positions"]()

- Individual Profile
!["Individual Profile"]()

- Individual Networking
!["Individual Networking"]()

- Individual Connections
!["Individual Connections"]()

- Individual Jobs
!["Individual Jobs"]()