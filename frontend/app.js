// Get the featured job list element
const featuredJobsList = document.querySelector('#featuredJobs');


const searchButton = document.getElementById('searchButton');
const locationInput = document.getElementById('location');

const baseUrl = 'http://localhost:8383/info';

searchButton.addEventListener('click', getResults);

async function getResults(e){
    e.preventDefault();

    const res = await fetch(baseUrl, {
        medthod: 'GET'
    });
    console.log(res);

    const data = await res.json();
    locationInput.value = data.protest
}

{/* <div  class="job">
    <div class="company-logo">
        <img src="https://cdn.freebiesupply.com/transparent.png" class="logo-image" alt="Starbucks Logo">
    </div>
    <div>
        <h3>Software Developer</h3>
        <h4>Company Name:</h4><p>Starbucks</p>
        <h4>Location:</h4><p>Ottawa</p>
    </div>
    <div>
        <h4>Description:</h4>
        <p style="padding-bottom: 5px;">This job creates the Starbucks Experience for our customers by providing customers with prompt service, quality beverages and products, and maintaining a clean and comfortable store environment. Models and acts in accordance with Starbucks guiding principles.</p>
        <a href="#">Apply Now</a>
    </div>
</div> */}


// Define the function to populate the featured job list
function populateFeaturedJobs() {


  // Fetch the featured jobs data from the mock JSON file
    fetch(data)
      .then(response => {
        if (!response.ok) {
            throw new Error(response.error)
            }
            return response.json();
        })
        .then(data => {
    
            data.jobs.forEach(job => {

            const jobElem = document.createElement('div');
            jobElem.className('job');

            const jobImgDiv = document.createElement('div');
            jobImgDiv.classList.add('company-logo');

            const logoImg = document.createElement('img');
            logoImg.setAttribute('src', job.logo);
            logoImg.setAttribute('alt', `${job.company} Logo`);
            logoImg.classList.add('logo-image');

            const jobTitlesDiv = document.createElement('div');
            //jobTitlesDiv.classList.add();

            const jobTitle = document.createElement('h3');
            jobTitle.classList.add('job-title');
            jobTitle.textContent = job.title;

            const jobCompany = document.createElement('h4');
            jobCompany.textContent = job.company;

            const jobLocation = document.createElement('h4');
            jobLocation.textContent = job.location;


            const jobDescriptionDiv = document.createElement('div');

            const jobDescriptionTitle = document.createElement('h4');
            jobDescriptionTitle.textContent = 'Description:';

            const jobDescription = document.createElement('p');
            jobDescription.classList.add('job-description');
            jobDescription.textContent = job.description;

            const jobLink = document.createElement('a');
            jobLink.setAttribute('href', job.apply_link);
            jobLink.classList.add('apply-button');
            jobLink.textContent = 'Apply Now!';


            jobDescriptionDiv.appendChild(jobDescriptionTitle);
            jobDescriptionDiv.appendChild(jobDescription);
            jobDescriptionDiv.appendChild(jobLink);

            jobTitlesDiv.appendChild(jobTitle);
            jobTitlesDiv.appendChild(jobCompany);
            jobTitlesDiv.appendChild(jobLocation);

            jobImgDiv.appendChild(jobImg);


            jobElem.appendChild(jobImgDiv);
            jobElem.appendChild(jobTitlesDiv);
            jobElem.appendChild(jobDescriptionDiv);

            featuredJobsList.appendChild(jobElem);
        })
    })
}

// document.getElementById('searchButton').onclick = function(){
//     populateFeaturedJobs();
// }

//   fetch('sampleJobs.json')
//     .then(response => response.json())
//     .then(data => {
//       // Iterate over the jobs and create a new list item for each one
//       data.jobs.forEach(job => {
//         // Create the new list item
//         const listItem = document.createElement('li');

//         // Create the logo image element
//         const logoImg = document.createElement('img');
//         logoImg.setAttribute('src', job.logo);
//         logoImg.setAttribute('alt', `${job.company} Logo`);
//         logoImg.classList.add('job-logo');

//         // Create the job details div element
//         const jobDetailsDiv = document.createElement('div');
//         jobDetailsDiv.classList.add('job-details');

//         // Create the job title element
//         const jobTitle = document.createElement('h3');
//         jobTitle.textContent = job.title;

//         // Create the job company element
//         const jobCompany = document.createElement('p');
//         jobCompany.textContent = job.company;

//         // Create the job location element
//         const jobLocation = document.createElement('p');
//         jobLocation.textContent = job.location;

//         // Create the job description element
//         const jobDescription = document.createElement('p');
//         jobDescription.textContent = job.description;

//         // Create the apply now button element
//         const applyButton = document.createElement('a');
//         applyButton.setAttribute('href', job.applyURL);
//         applyButton.textContent = 'Apply Now';
//         applyButton.classList.add('apply-button');

//         // Add the logo and job details to the list item
//         jobDetailsDiv.appendChild(jobTitle);
//         jobDetailsDiv.appendChild(jobCompany);
//         jobDetailsDiv.appendChild(jobLocation);
//         jobDetailsDiv.appendChild(jobDescription);
//         jobDetailsDiv.appendChild(applyButton);
//         listItem.appendChild(logoImg);
//         listItem.appendChild(jobDetailsDiv);

//         // Add the list item to the featured job list
//         featuredJobsList.appendChild(listItem);
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching featured jobs data:', error);
//     });
//}

// Call the populateFeaturedJobs function to populate the list

