function generateResume() {
    const name = document.getElementById('userName').value || "Anonymous Candidate";
    const title = document.getElementById('jobTitle').value || "Professional Thinker";
    const motivation = document.getElementById('motivation').value || "paying rent";
    const distraction = document.getElementById('distraction').value || "starting at walls";

    document.getElementById('resName').innerText = name;
    document.getElementById('resTitle').innerText = "Aspiring " + title;

    document.getElementById('resSummary').innerText = `${name} is a highly energetic induvidual primary motivated by ${motivation}. Known for pretending to type fast whenever a manager walks by.`;

    document.getElementById('resDuties').innerHTML = `
        <li>Expertly balances working on prjects with <strong>${distraction}</strong>.</li>
        <li>Maintains 100% uptime on looking attentive during video calls.</li>
        <li>Consistently delivers high-quality work right before the absolute final deadline.</li>
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



