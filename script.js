function fillPreset(type) {
    if (type === 'coder') {
        document.getElementById('userName').value = 'Dev Dan';
        document.getElementById('jobTitle').value = '10x Full Stack Ninja'
        document.getElementById('motivation').value = 'unlimited energy drinks';
        document.getElementById('distraction').value = 'fixing a bug I created 5 minutes ago';
    } else if (type === 'student') {
        document.getElementById('userName').value = 'Sleepless Sam';
        document.getElementById('jobTitle').value = 'Professional Deadline Dodger';
        document.getElementById('motivation').value = 'passing grade without opening the textbook';
        document.getElementById('distraction').value = 'reorganizing my room instead of studying';    
    }
}
function generateResume() {
    const name = document.getElementById('userName').value || "Anonymous Candidate";
    const title = document.getElementById('jobTitle').value || "Professional Thinker";
    const motivation = document.getElementById('motivation').value || "paying rent";
    const distraction = document.getElementById('distraction').value || "starting at walls";

    document.getElementById('resName').innerText = name;
    document.getElementById('resTitle').innerText = "Aspiring " + title;

    document.getElementById('resSummary').innerText = `${name} is a highly energetic induvidual primary motivated by ${motivation}. Known for aggresively pretending to type fast whenever a manager or teacher walks by.`;

    document.getElementById('resDuties').innerHTML = `
        <li>Expertly balances minimal actual work with extreme <strong>${distraction}</strong>.</li>
        <li>Maintains 100% uptime on looking attentive during video calls while playing video games.</li>
        <li>Consistently delivers high-quality projects right before the absolute final deadline.</li>
    `;

    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('resume-section').classList.remove('hidden');
} 

function resetForm() {
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('resume-section').classList.add('hidden'); 
} 

function printResume() {
    window.print(); 
}

const corporateResponses = {
    rejections: [
        "HR looked at your resume for 2 seconds, laughed out loud, and accidentally deleted our entire database.",
        "We are currently looking for candidates who can pretend to work even harder than you do. Position Filled.",
        "What the heck even is this??",
        "We checked your references. Your mom told us to tell you to go clean your room instead.",
        "Our AI automated recruiter caught fire after reading your resume.",
        "Stop harrassing us. We beg you.",
        "No."
    ],
    acceptances: [
        "OFFER LETTER: You are hired as Chief Vibe Officer! Your primary duty is keeping the coffee machine working.",
        "ACCEPTED! We also love boba tea and spending 3 hours on cat videos. You start on Monday as Senior Partner.",
        "You are Hired.",
        "Niceeeee. Our vibes totally match!!! You should start tomorrow. Whats your zodiac btw? Tell meeeee.. I cant wait!"
    ],
};

function sendApplication() {
    const company = document.getElementById('companySelect').value;
    const responseBox = document.getElementById('companyResponse');
    const header = document.getElementById('responseHeader');
    const body = document.getElementById('responseBody');
    const status = document.getElementById('responseStatus');

    const isAccepted = Math.random() < 0.2;

    if(isAccepted) {
        const randomAccept = corporateResponses.acceptances[Math.floor(Math.random() * corporateResponses.acceptances.length)];
        header.innerText = `Incoming Email from ${company} HR:`;
        body.innerText = `"${randomAccept}"`;
        status.innerText = "STATUS: OFFER EXTENDED";
        status.className = "status-tag accepted";
    } else {
        const randomReject = corporateResponses.rejections[Math.floor(Math.random() * corporateResponses.rejections.length)];
        header.innerText = `Automatic Reply from ${company} Careers:`;
        body.innerText = `"${randomReject}"`;
        status.innerText = "STATUS: REJECTED";
        status.className = "status-tag rejected";
    }
     responseBox.classList.remove('hidden');
}
