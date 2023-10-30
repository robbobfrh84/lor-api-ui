# LibLab Take-Home Project - Frontend

Hello LibLab team 👋,

Thank you so much for giving me the opportunity to showcase my skills and for reviewing my project. It was a lot of fun, although I didn't get to take it as far as I would have liked. But such is the life of coding 🧘.

You can visit the live link to my project here:

- https://robbobfrh84.github.io/lor-api-ui/

And you can find the repository that hosts the code here:
- https://github.com/robbobfrh84/lor-api-ui

----

## Developing Locally 

#### Clone My Code and Install Dependencies

To get my project working locally, in the Terminal, you'll need to pull down the `dev` branch that I've pushed my changes.

Once you have the project source code cloned on your computer, make sure you're inside the folder's root directory and run:

- `npm install`

This will start the process of installing all the dependencies and get your app ready to run.



#### Add Your API Access Token

Please visit the API's website, sign up, and copy your API Access token.

- Website: https://the-one-api.dev/

In the root directory of the project, you should find a folder named `.env.template`

- Change the name of the file to just `.env`
- Now, replace "REPLACE_WITH_LOR_API_TOKEN" with the API Access token **you** copied from the website.

#### Run Code locally

To run the project locally, in your Terminal at the root directory of the project, run:

- `npm start`

Hopefully, this will open a browser window where you'll see the project's home page.

- If not, please let me know if you're having any problems at [bobmain49@gmail.com](mailto:bobmain49@gmail.com).

----

## Testing the Web App. 

Once the local web app has loaded in your browser, you should see:

- A title: "🌋 Lord of the Rings 🏔️"
- A sub-title: "❧ The One API - UI ❧"
- Three buttons: "Movies," "Characters," and "Quotes"

Clicking on the "Movies" button should display all the Lord of the Rings movies in a table list below.

- You should also see a loading wheel that activates once the button is pressed and disappears once the table is populated.
- The table should have alternating gray and white backgrounds for clarity.

This process should be repeated by selecting both the "Characters" and "Quotes" buttons, with their corresponding table data as well.

- Note: The "Characters" table should display two columns of information: "Name" and "Race."

Clicking on a button a second time should not require an additional request, which you can confirm by observing that there is no delay and no loading wheel reappears.



# Reflections

I have had many thoughts and learnings throughout the process of building this app. Although time was short, I am proud of what I have been able to accomplish! I hope to have the opportunity to share it with you and hear your thoughts as well.



Until then, take care,

- Bob








