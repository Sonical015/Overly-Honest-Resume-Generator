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
