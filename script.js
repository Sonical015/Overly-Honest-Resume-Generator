// quickfill presets, so I don't have to type the same stuff while testing
const presets = {
    coder: {
        name: 'Dev Dan',
        role: '10x Full Stack Ninja',
        why: 'unlimited energy drinks',
        sink: 'fixing a bug I created 5 minutes ago'
    },
    student: {
        name: 'Sleepless Sam',
        role: 'Professional Deadline Dodger',
        why: 'passing grade without opening the textbook',
        sink: 'reorganizing my room instead of studying'
    }
};

function loadPreset(type) {
    const p = presets[type];
    if (!p) return; // unknown preset, does absolutely nothing

    document.getElementById('candidateName').value = p.name;
    document.getElementById('targetRole').value = p.role;
    document.getElementById('realMotivation').value = p.why;
    document.getElementById('timeSink').value = p.sink;
}

function buildDossier() {
    // fallbacks in case someone leaves a box empty
    const name = document.getElementById('candidateName').value || "Anonymous Candidate";
    const role = document.getElementById('targetRole').value || "Professional Thinker";
    const why = document.getElementById('realMotivation').value || "paying rent";
    const sink = document.getElementById('timeSink').value || "starting at walls";

    document.getElementById('dossierName').innerText = name;
    document.getElementById('dossierTitle').innerText = "Aspiring " + role;

    document.getElementById('dossierSummary').innerText = `${name} is a highly energetic induvidual primary motivated by ${why}. Known for aggresively pretending to type fast whenever a manager or teacher walks by.`;

    // innerHTML here because of the <strong> tag
    document.getElementById('dossierDuties').innerHTML = `
        <li>Expertly balances minimal actual work with extreme <strong>${sink}</strong>.</li>
        <li>Maintains 100% uptime on looking attentive during video calls while playing video games.</li>
        <li>Consistently delivers high-quality projects right before the absolute final deadline.</li>
    `;

    document.getElementById('intakeForm').classList.add('hidden');
    document.getElementById('dossierView').classList.remove('hidden');
}

function startOver() {
    document.getElementById('intakeForm').classList.remove('hidden');
    document.getElementById('dossierView').classList.add('hidden');
}

function printDossier() {
    window.print();
}

const companyReplies = {
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
    ]
};

// small helper so I'm not repeating the Math.random line twice
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function submitToCompany() {
    const company = document.getElementById('companyPicker').value;
    const replyBox = document.getElementById('replyBox');
    const header = document.getElementById('replyHeader');
    const body = document.getElementById('replyBody');
    const status = document.getElementById('replyStatus');

    // this gives 20% chance of getting hired
    const gotIn = Math.random() < 0.2;

    if (gotIn) {
        header.innerText = `Incoming Email from ${company} HR:`;
        body.innerText = `"${pickRandom(companyReplies.acceptances)}"`;
        status.innerText = "STATUS: OFFER EXTENDED";
        status.className = "status-pill accepted";
    } else {
        header.innerText = `Automatic Reply from ${company} Careers:`;
        body.innerText = `"${pickRandom(companyReplies.rejections)}"`;
        status.innerText = "STATUS: REJECTED";
        status.className = "status-pill rejected";
    }

    replyBox.classList.remove('hidden');
}
