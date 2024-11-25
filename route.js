
let currentSteps = [];



function findRoute() {
    const source = document.getElementById('source').value.trim().toLowerCase();
    const destination = document.getElementById('destination').value.trim().toLowerCase();
    const navigationSteps = document.getElementById('navigationSteps');
    const routeImage = document.getElementById('routeImage');

    
    
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');

   // Logic to display the appropriate steps and change image
if (source === "entrance" && destination === "office") {
routeImage.src = 'assets/entrance - office.png';

navigationSteps.style.display = "block";
currentSteps = [
"Step1: Walk straight forward.",
"Step  2: Turn right.",
"Step 3: Continue walking straight until you see the office on your rigth side."
];

step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "entrance" && destination === "ladies washroom") {
routeImage.src = 'assets/entrance - Lwashroom.png';

navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Walk straight forward.",
"Step 2: Take second left turn.",
"Step 3: Walk straight until you see the ladies washroom sign ."

];

step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "entrance" && destination === "gents washroom") {
routeImage.src = 'assets/entrance - Gwashroom.png';

navigationSteps.style.display = "block";
currentSteps = [
"Step 1: From the entrance, go straight down the main corridor.",
"Step 2: leave the first intersection.",
"Step 3: Walk straight and turn left.",
"Step 4: Continue straight and then turn right you will get Gents Washroom."
];

step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "entrance" && destination === "food court") {
routeImage.src = 'assets/entrance - foodcourt.png';

navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Start at the Entrance.",
"Step 2: Walk straight past the Ticket Counter.",
"Step 3: Continue straight until you reach the Food Court."

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "entrance" && destination === "ticket counter") {
routeImage.src = 'assets/entrance - ticketcounter.png';

navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Start at the Entrance.",
"Step 2: Turn right continue straight until you reach the Ticket Counter on the Left."

];

step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "entrance" && destination === "platform") {
routeImage.src = 'assets/entrance - platform.png';

navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Start at the entrance and walk straight ",
"Step 2: Walk past ticket counter and food court and walk straight until you reach the platform"

];

step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

}
// Logic for navigation steps and image update

if (source === "office" && destination === "foodcourt") {
routeImage.src = 'assets/office - foodcourt.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Destination: You have reached the food court."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "office" && destination === "ticketcounter") {
routeImage.src = 'assets/office - ticketcounter.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Destination: You have reached the ticket counter."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "office" && destination === "entrance") {
routeImage.src = 'assets/office - entrance.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the left turn.",
"Step 3: Go straight.",
"Destination: You have reached the entrance."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "office" && destination === "gents washroom") {
routeImage.src = 'assets/office - Gwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Step 4: Take the first left turn.",
"Step 5: Go straight.",
"Step 6: Take the right turn.",
"Step 7: Go straight.",
"Destination: You have reached the gents washroom."


];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "office" && destination === "ladies washroom") {
routeImage.src = 'assets/office - Lwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Step 4: Take the first left turn.",
"Step 5: Go straight.",
"Destination: You have reached the ladies washroom."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "office" && destination === "platform") {
routeImage.src = 'assets/office - platform.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Destination: You have reached the platform."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "ticketcounter" && destination === "foodcourt") {
routeImage.src = 'assets/ticketcounter - foodCourt.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Destination: You have reached the food court."

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "ticketcounter" && destination === "entrance") {
routeImage.src = 'assets/ticketcounter - entrance.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the left turn.",
"Destination: You have reached the entrance."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "ticketcounter" && destination === "gents washroom") {
routeImage.src = 'assets/ticketcounter - Gwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Step 4: Take the left turn.",
"Step 5: Go straight.",
"Step 6: Take the right turn.",
"Destination: You have reached the gents washroom."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "ticketcounter" && destination === "ladies washroom") {
routeImage.src = 'assets/ticketcounter - Lwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Step 4: Take the first left turn.",
"Step 5: Go straight.",
"Destination: You have reached the ladies washroom."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "ticketcounter" && destination === "platform") {
routeImage.src = 'assets/ticketcounter - platform.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Destination: You have reached the platform."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "ticketcounter" && destination === "office") {
routeImage.src = 'assets/ticketcounter - office.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Destination: You have reached the office."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "gents washroom" && destination === "foodcourt") {
routeImage.src = 'assets/Gwashroom - foodCourt.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first left turn.",
"Step 3: Go straight.",
"Step 4: Take the first left turn.",
"Step 5: Go a little further.",
"Destination: You have reached the food court."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "gents washroom" && destination === "entrance") {
routeImage.src = 'assets/Gwashroom - entrance.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first left turn.",
"Step 3: Go straight.",
"Step 4: Take the first straight turn.",
"Step 5: Go straight without taking any turn.",
"Destination: You have reached the entrance."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

}  else if (source === "gents washroom" && destination === "ticket counter") {
routeImage.src = 'assets/Gwashroom - ticketcounter.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first left turn.",
"Step 3: Go straight.",
"Step 4: Take the first right turn.",
"Step 5: Go straight.",
"Step 6: Take the second left turn.",
"Step 7: Go a little further.",
"Destination: You have reached the ticket counter."


];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "gents washroom" && destination === "ladies washroom") {
routeImage.src = 'assets/Gwashroom - Lwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first right turn.",
"Step 3: Go straight.",
"Destination: You have reached the ladies washroom."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "gents washroom" && destination === "platform") {
routeImage.src = 'assets/Gwashroom - platform.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first left turn.",
"Step 3: Go straight.",
"Step 4: Take the first left turn.",
"Step 5: Go straight.",
"Destination: You have reached the platform."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "gents washroom" && destination === "office") {
routeImage.src = 'assets/Gwashroom - office.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first left turn.",
"Step 3: Go straight.",
"Step 4: Take the first right turn.",
"Step 5: Go straight.",
"Step 6: Take the second left turn.",
"Step 7: Go straight.",
"Destination: You have reached the office."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

// Ladies Washroom as the source
}else if (source === "ladies washroom" && destination === "foodcourt") {
routeImage.src = 'assets/Lwashroom - foodcourt.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the second left turn.",
"Destination: You have reached the food court."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "ladies washroom" && destination === "entrance") {
routeImage.src = 'assets/Lwashroom - entrance.png';
navigationSteps.style.display = "block";
currentSteps = [ 
"Step 1: Go straight.",
"Step 2: Take the first right turn.",
"Step 3: Go straight without taking any turns.",
"Destination: You have reached the entrance.",

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "ladies washroom" && destination === "ticket counter") {
routeImage.src = 'assets/Lwashroom - ticketcounter.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first right turn.",
"Step 3: Go straight.",
"Step 4: Take the first left turn.",
"Step 5: Go straight.",
"Destination: You have reached the ticket counter."

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "ladies washroom" && destination === "gents washroom") {
routeImage.src = 'assets/Lwashroom - Gwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
 "Step 2: Take the first left turn.",
"Step 3: Go straight.",
"Destination: You have reached the gents washroom."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "ladies washroom" && destination === "platform") {
routeImage.src = 'assets/Lwashroom - platform.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the second left turn.",
"Step 3: Go straight.",
"Destination: You have reached the platform."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "ladies washroom" && destination === "office") {
routeImage.src = 'assets/Lwashroom - office.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the first right turn.",
"Step 3: Go straight.",
"Step 4: Take the second left turn.",
"Step 5: Go straight.",
"Destination: You have reached the office."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
}

// Foodcourt as the source
if (source === "foodcourt" && destination === "entrance") {
routeImage.src = 'assets/foodcourt - entrance.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Avoid the two turns.",
"Destination: You have reached the entrance."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "foodcourt" && destination === "gents washroom") {
routeImage.src = 'assets/foodcourt - Gwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Step 4: Take a right turn.",
"Step 5: Go straight.",
"Destination: You have reached the gents washroom."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "foodcourt" && destination === "ladies washroom") {
routeImage.src = 'assets/foodcourt - Gwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the right turn.",
"Step 3: Go straight.",
"Destination: You have reached the ladies washroom."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "foodcourt" && destination === "platform") {
routeImage.src = 'assets/foodcourt - platform.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Destination: You have reached the platform."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "foodcourt" && destination === "ticket counter") {
routeImage.src = 'assets/foodcourt - ticketcounter.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the second left turn.",
"Step 3: Go straight.",
"Destination: You have reached the ticket counter."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "foodcourt" && destination === "office") {
routeImage.src = 'assets/foodcourt - office.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Go straight.",
"Step 2: Take the second left turn.",
"Step 3: Go straight.",
"Destination: You have reached the office."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
}

// Platform as the source
if (source === "platform" && destination === "foodcourt") {
routeImage.src = 'assets/platform - foodcourt.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Walk straight.",
"Step 2: On the left you will see food court"

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];

} else if (source === "platform" && destination === "gents washroom") {
routeImage.src = 'assets/platform - Gwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Walk straight ",
"Step 2: Take the first right.",
"Step 3: Walk straight and take right",
"Step 4: You will find Gents washroom on your left."
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "platform" && destination === "ladies washroom") {
routeImage.src = 'assets/platform - Lwashroom.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Move straight .",
"Step 2: Take the first right.",
"Step 3: Walk straight until you find the Ladies Washroom."

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "platform" && destination === "entrance") {
routeImage.src = 'assets/platform - entrance.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Start at the Platform and walk straight ",
"Step 2: Walk past food court and ticket counter walk straight until you reach the entrance"
];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "platform" && destination === "ticket counter") {
routeImage.src = 'assets/platform - ticketcounter.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Walk straight pass the food court",
"Step 2: Take a left turn and walk straight ",
"Step 3: You will see Ticket counter on your right"

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
} else if (source === "platform" && destination === "office") {
routeImage.src = 'assets/platform - office.png';
navigationSteps.style.display = "block";
currentSteps = [
"Step 1: Walk straight.",
"Step 2: Take the third turn to your left.",
"Step 3: Walk straight until you find the office."

];
step1.textContent = currentSteps[0];
step2.textContent = currentSteps[1];
step3.textContent = currentSteps[2];
step4.textContent = currentSteps[3];
}
function speakRoute() {
if (currentSteps.length === 0) {
    alert("No route steps to read!");
    return;
}

// Function to read the navigation steps aloud
function playAudio() {
    const steps = currentSteps.join('. '); // Combine all steps into a single string
    if (steps) {
        const speech = new SpeechSynthesisUtterance(steps);
        speech.lang = 'en-US'; // Language for the speech
        speech.rate = 1;       // Speed of the speech
        speech.pitch = 1;      // Pitch of the voice
        window.speechSynthesis.speak(speech);
    } else {
        alert("No navigation steps available to read.");
    }
}

// Attach an event listener to the audio button
document.getElementById('audioButton').addEventListener('click', playAudio);


const utterance = new SpeechSynthesisUtterance();
utterance.lang = 'en-US';
utterance.rate = 1; // Adjust speed if needed

// Combine steps into a single string
utterance.text = currentSteps.join(" ");

// Speak the text
speechSynthesis.speak(utterance);

// Optional: Handle events
utterance.onstart = () => console.log("Audio Navigation started.");
utterance.onend = () => console.log("Audio Navigation completed.");
}
}
