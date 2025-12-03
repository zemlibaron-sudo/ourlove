// Caption list in order
const captions = [
    "Our first date… even the air felt softer with you.",
    "Two shy eyes, one growing connection… our beginning.",
    "Your smile that day… it felt like sunshine choosing me.",
    "The moment your hand touched mine… everything felt right.",
    "Gourang Park was pretty… but you were unforgettable.",
    "You looked so beautiful that night… even the lights stared.",
    "Freshers Night gave me a stage… but you were my highlight."
];

// Auto-load images
let gallery = document.getElementById("gallery");

for (let i = 1; i <= captions.length; i++) {
    let item = document.createElement("div");
    item.className = "gallery-item";

    // Correct image file name: 01.jpg, 02.jpg...
    let padded = String(i).padStart(2, "0");
    let img = document.createElement("img");
    img.src = `images/${padded}.jpg`;

    // Caption
    let cap = document.createElement("div");
    cap.className = "caption";
    cap.innerText = captions[i - 1];

    item.appendChild(img);
    item.appendChild(cap);
    gallery.appendChild(item);
}
