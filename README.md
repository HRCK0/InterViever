**iNTERvIEVER**

Team: Vanya Prokic 300057417

I'll be building an app that will gather interview opportunities from many other websites into one place, and allow users to browse through them with ease. With a press of a button, users will be redirected to the source website of the job posting and be allowed to apply for the job. **Welcome to iNTERvIEVER!**

---
**Color Decisions**

I decided to use the blue color as the base color pallete for my website. I'm keeping the colors simple - blue and white.

Of course, I'm using different shaders of the mentioned colors; specifically for "Featured Jobs" section, to keep things fresh and not too simple.

All in all, I've kept a very simple color choices, and if I were to upgrade them, I'd only add some effects to them and use some darker/brighter variations.

---
**Design Decisions**

Navigation Bar

Design idea is simple - we have a navigation bar at the top whose whole purpose is to serve as a Search Filter. Users can search for job offerings by searching for:
- Keywords (aka job titles),
- Locations (ie where the work placement is located),
- Or both.

Below the navigation bar is the main area of the website, and that would be the "Featured Jobs" section. Here is where the jobs that have or have not been filtered will appear. The background is a simple light grey color.

Featured Jobs

This section contains the Job Offers. Each job is presented in a simple  way, with an accent on the readability and simplicity. 

It contains basic information such as:
- Position name
- Comapny name
- Location
- Job Description
- Apply Button

The apply button will take users to that company's page for that specific job application they selected, where they can see more detailed information regarding the position.

---
**Summary**

The design idea and color choices are very simple, as I wanted to put an accent on readability, functionality and an ease of use. The company logos are shown for both easier recognition by the users, as well as to enrich the website with images.

---
---
**Technologies Used**

I've used `Pharo Smalltalk` for the most of my work. It is a pure OOP language that's hasn't seen much light of the day, but it's power and ease of use make it a very desireable tool.

It's very easy to install and setup, but more on that in the next section. 

The power that comes with Pharo in this case is it's combination with `Seaside Smalltalk Web Servlet Framework`. It turns writing a simple HTML text document into an generating OOP code. Writing the HTML page becomes super easy and fun to do, as most of the ugly HTML syntax is taken care off by Seaside.


Example:
```
html textInput
    class: 'searchInput';
    on: #location of: self.
```
Equals to
```
<input type="text" class="searchInput" id="location" name="location">
```

Lastly, I used `Postgres Database` for my, well database. I had the most experience with it and therefore seemed like the most comfortable option out of all. At one point I was thinking about using Firebase, but that's a Serverless Realtime DB, which doesn't cover some of the requirements for the project, so that was not an option.

---
**INSTALLATION & SETUP**

Head over to the https://pharo.org/ to Download the Pharo language. 
NOTE: Smalltalk is a unique language, and it runs in a Virtual Machine, which could make the setup a bit unusual but it's not hard at all.

![Pharo Website](https://i.imgur.com/W0O4RdF.png)

Press the Downlaod button.
-
![Pharo Website](https://i.imgur.com/1dd0sL6.png)

Head over to the bottom of the page and select the corresponding Oerating System
-
![Pharo Website](https://i.imgur.com/95xDNe6.png)

Unzip the directory at a desired location
-

Now download the Pharo Image Zip that you can find via this link:
-
https://drive.google.com/

Extract the Zip in the same directory as the previous Zip (everything should be in one folder with no sub folders)
-

**If on windows:** Drag the `.image` file on top of the `Pharo.exe` file and Pharo will automatically open
-

**If on MacOS/Linux:** Double click on the `.image` file and when prompted to open another file, just select the same `.image` file and open it
-
????????????????????????????????????????

---
At this point, project in Pharo will automatically install all the needed dependencies and frameworks. The only thing left to install after Pharo is `Postgres`.

---
Head over to the https://www.postgresql.org/ website and click Download
-
![Postgres Website](https://i.imgur.com/AMcrnKL.png)


Select the corresponding OS and follow the instructions
-
![Postgres Website](https://i.imgur.com/9SISC53.png)


When you run the installation you should be welcomed by the following screen
-
![Postgres Website](https://i.imgur.com/Qmcw79P.png)


Select everything except for the `Stack Builder`. After that point, just follow the default installation instructions (set the passowrd to `1234`)
-
![Postgres Website](https://i.imgur.com/6QNbvwv.png)

