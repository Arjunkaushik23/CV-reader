console.log("This is cv scanner");

const data = [
  {
    name: "Ashu",
    age: "22",
    city: "Charla",
    language: "javaScript",
    frameWork: "react.js",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Deepak",
    age: "23",
    city: "BulandSher",
    language: "C++",
    frameWork: "N/A",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Arjun",
    age: "21",
    city: "Muzaffarnagar",
    language: "javaScript",
    frameWork: "N/A",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    name: "Ashutosh",
    age: "20",
    city: "Meerut",
    language: "PHP",
    frameWork: "Angular",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Ankit",
    age: "21",
    city: "Ghaziabad",
    language: "javaScript",
    frameWork: "Angular.js",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Rohan",
    age: "22",
    city: "Bulandsher",
    language: "javaScript",
    frameWork: "N/A",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
];

 // cv iterator

 function cvIterator(profiles){
     let nextIndex = 0;
     return{
         next: function(){
             return nextIndex<profiles.length ?
             {value: profiles[nextIndex++], done:false} : 
             {done: true}
             
            }
        };
    }
    const candiadates = cvIterator(data);
    nextCV();

 // button listner for next button
 const next = document.getElementById("next");
 next.addEventListener("click", nextCV);


 function nextCV() {
const currentCandidate = candiadates.next().value;

     let image = document.getElementById('image');
     let profile = document.getElementById('profile');
     if(currentCandidate!=undefined){
         image.innerHTML = `<img src='${currentCandidate.image}'>`;
     
     profile.innerHTML = `<ul class="list-group list-group-flush">
     <li class="list-group-item">${currentCandidate.name}</li>
     <li class="list-group-item">${currentCandidate.age} years old</li>
     <li class="list-group-item">Lives in ${currentCandidate.city}</li>
     <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
     <li class="list-group-item">Uses ${currentCandidate.frameWork} framework</li>
     
   </ul>`
     }
     else{
         alert('End of the Candidates Applications.');
         window.location.reload();
     }
 }
