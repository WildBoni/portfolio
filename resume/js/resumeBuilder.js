/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var name = "Davide Bonifacio";


var role ="Web Developer"

*/
var bio = {
  "name": "Davide Bonifacio",
  "role": "Front End Web Developer",
  "contacts": {
    "mobile": "+393492146785",
    "email": "web@davidebonifacio.it",
    "github": "WildBoni",
    "twitter": "@boniphoto",
    "blog": "www.davidebonifacio.it",
    "location": "Massino Visconti, Italy"
  },
  "welcomeMessage": "Welcome!",
  "skills": [
    "web developing", "web designing", "still life photography", "copywriting"
  ],
  "biopic": "images/davide_bonifacio.jpg"
};

var work = {
  "jobs": [
    {
      "title": "web designer",
      "employer": "StudioKey",
      "dates": "September 2006 - Now",
      "location": "Vicolo Fossati, Arona, Italy",
      "description": "Started as a web designer and copywriter, eventually " +
        "became part of the web developing team. I also shoot still life " +
        "photos for catalogues and advertising."
    },
    {
      "title": "bartender",
      "employer": "Ipanema",
      "dates": "September 2005 - May 2006",
      "location": "Via Parrocchiale, Pisogno, Italy",
      "description": "First emplyment after finishing school."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "My Portfolio",
      "dates": "2016",
      "description": "My responsive portfolio page, part of Udacity Front " +
        "End Web Developer nano degree",
      "images": [
        "images/portfolio_project.jpg"
      ],
      "url": "#"
    },
    {
      "title": "Davide Bonifacio Photography",
      "dates": "2014",
      "description": "My personal website, the place where I share my " +
        "passion for photography and thoughts about my travels.",
      "images": [
        "images/website_project.jpg", "images/website_project2.jpg"
      ],
      "url": "#"
    }
  ]
};

var education = {
    "schools": [
    {
      "name": "Collegio de Filippi",
      "degree": "Diploma (96 / 100)",
      "location": "Collegio de Filippi, Arona, Italy",
      "dates": "2004",
      "majors": [
        "English", "French", "German"
      ],
      "url": "#"
    },
    {
      "name": "First Certificate",
      "degree": "First Certificate in English (grade A)",
      "location": "Borgomanero, Italy",
      "dates": "2003",
      "majors": [
        "English"
      ],
      "url": "#"
    },
    {
      "name": "DELF",
      "degree": "Diplôme d'études en langue Française",
      "location": "Villa Marazza, Borgomanero, Italy",
      "dates": "2003",
      "majors": [
        "French"
      ],
      "url": "#"
    },
    {
      "name": "ECDL",
      "degree": "European Computer Driving Licence",
      "location": "Collegio de Filippi, Arona, Italy",
      "dates": "2002",
      "majors": [
        "Computer skills"
      ],
      "url": "#"
     }
  ],
  "onlineCourses": [
    {
      "school": "Udacity",
      "title": "Front End Web developer",
      "date": "2016",
      "url": "www.udacity.com"
    },
    {
      "school": "Udacity",
      "title": "JavaScript basics",
      "date": "2016",
      "url": "www.udacity.com"
    },
    {
      "school": "Udacity",
      "title": "How to use Git and GitHub",
      "date": "2016",
      "url": "www.udacity.com"
    },
    {
      "school": "Udacity",
      "title": "Responsive Images",
      "date": "2016",
      "url": "www.udacity.com"
    }
  ]
};

bio.display = function() {
  // Inserting basic biography
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  // Pushing contact details in a new array, so I don't have to repeat the $("#divid").append over and over.
  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.blog));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

  //Appending array content to the page
  if(formattedContactInfo.length > 0) {
    formattedContactInfo.forEach(function(detail) {
      $("#topContacts, #footerContacts").append(detail);
    });
  }

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%", (skill)));
    });
  }
};
bio.display();

work.display = function() {
  if(work.jobs.length > 0) {
    work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", (job).employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", (job).title);
      var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", (job).location);
      var formattedWorkDates = HTMLworkDates.replace("%data%", (job).dates);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", (job).description);

      $(".work-entry:last").append(formattedWorkEmployerTitle);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkDescription);
    });
  }
};
work.display();

projects.display = function() {
  if(projects.projects.length > 0) {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", (project).title).replace("#", (project).url);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", (project).dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", (project).description);
      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      if((project).images.length > 0) {
        (project).images.forEach(function(image) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", (image)));
        });
      }
    });
  }
};
projects.display();

education.display = function() {
  if(education.schools.length > 0 || education.onlineCourses.length > 0) {
    education.schools.forEach(function(school)  {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", (school).name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", (school).degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", (school).dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", (school).location);

      //adding a space between each major array entry
      var text = "";
      var formattedSchoolMajor= "";
      for (i = 0; i < (school).majors.length; i++) {
        text += (school).majors[i] + " ";
        formattedSchoolMajor = HTMLschoolMajor.replace("%data%", text);
      }

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    });

    if(education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", (course).title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", (course).school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", (course).date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", (course).url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      });
    }
  }
};
education.display();

$("#mapDiv").append(googleMap);

/*
function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase;
  return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);
*/
