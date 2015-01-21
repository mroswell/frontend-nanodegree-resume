var bio = {
  "name": "Marjorie Roswell",
  "role": "Front-End Web Developer",
  "contacts": {
    "mobile": "410-375-5803",
    "email": "mroswell@gmail.com",
    "github": "mroswell",
    "twitter": "mroswell",
    "location": "Baltimore, MD"
  },
  "welcomeMessage": "Digital support for game-changing advocacy",
  "skills": ["HTML5", "CSS Frameworks", "JavaScript", "Leaflet", "Underscore"],
  "biopic": "images/MyAvatarWavyHairBackground.png",
  "display": function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    //HTMLblog
    $header = $('#header');
    $header.prepend(formattedRole);
    $header.prepend(formattedName);
    $header.prepend(formattedBioPic);

    $topContacts = $('#topContacts, #footerContacts');
    $topContacts.append(formattedMobile);
    $topContacts.append(formattedEmail);
    $topContacts.append(formattedTwitter);
    $topContacts.append(formattedGithub);

    if (bio.skills.length > 0) {
      $header.append(HTMLskillsStart);
      for (i in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $('#skills').append(formattedSkill);
      }
    }
  }
};

var education = {
  "schools": [{
    "name": "Connecticut College",
    "location": "New London, CT",
    "degree": "BA",
    "majors": ["Botany", "Science Teacher Certification"],
    "dates": 1984,
    "url": "http://ConnCollege.edu"
  }],
  "onlineCourses": [{
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "date": 2015,
    "url": "http://udacity.com"
  }],
  "display": function() {
    for (i in education.schools) {
      $('#education').append(HTMLschoolStart);
      //var formattedStart = HTMLschoolStart.replace("%data%",)
      var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      var  $educationLast =  $('.education-entry:last');
      $educationLast
        .append(formattedName + formattedDegree)
        .append(formattedDates)
        .append(formattedSchoolLocation)
        .append(formattedMajor);
    }


    for (j in education.onlineCourses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
      var formattedSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].date);
      var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);

      var  $educationOnlineLast =  $('.education-entry:last');
      $educationLast
        .append(HTMLonlineClasses)
        .append(formattedOnlineTitle + formattedSchool)
        .append(formattedOnlineDates)
        .append(formattedURL);
  }
  }


};

var work = {
  "jobs": [{
    "employer": "Voting Information Project",
     "title": "Data Fellow",
     "location": "Brooklyn, NY",
     "dates": "2014",
     "description": "We partnered with Pew and with Google to provide polling location information to every voter in the country"
  },
    {
    "employer": "Roswell Infographics",
     "title": "Web Developer",
     "location": "Baltimore, MD",
     "dates": "2009 - Present",
     "description": "Building Drupal, WordPress and NationBuilder websites for clients. Key clients include the Palestine Poster Project Archives, the League of Conservation Voters, the Baltimore Orchard Project, and the Maryland Offshore Wind Coalition"
  }
  ],
  "display": function() {
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var  $workEntryLast =  $('.work-entry:last')
    $workEntryLast.append(formattedEmployerTitle );

    var formattedLocation  = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    //  $('.work-entry:last').append(formattedEmployer + " - "+ formattedTitle );
    $workEntryLast.append(formattedLocation );  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $workEntryLast.append(formattedDates );
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $workEntryLast.append(formattedDescription );
  }
}
};




var projects = {
  "projects": [{
    "title": "CommitteeMaps.org",
    "dates": ["2013-2015"],
    "description": "Interactive map of Congressional committees and subcommittees, with links to social media and campaign donor information ",
    "images": ["http://committeemaps.org/CommitteeMaps.org.png"]
  },
    {
    "title": "Maryland League of Conservation Voters Scorecard",
    "dates": ["2013-2014"],
    "description": "Holding elected officials accountable for their environmental record",
    "images": ["images/mdlcv-scorecard.png"]
  }],
  "display": function() {
    if (projects.projects.length > 0) {
      for (i in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var $projectEntry = $('.project-entry:last');
        $projectEntry
          .append(formattedTitle)
          .append(formattedDates)
          .append(formattedDescription);
        for (img in projects.projects[i].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
          $projectEntry.append(formattedImage);
        }
      }
    }
  }
};
bio.display();
work.display();
projects.display();
education.display();

$('#main').append(internationalizeButton);


var inName = function(name) {
  names = name.trim().split(" ");
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names.join(" ");
}
$('button').click(function(name) {
  $('h1').text(inName(bio.name))
});

$('#mapDiv').append(googleMap);