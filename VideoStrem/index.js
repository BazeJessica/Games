// Create variables here
// =========================================
 let episode = {
    Title: "The fiest battle",
   Duration:45,
   hasBeenWatched:true
}
class Episode{
    constructor(title,duration,hasBeenWatched){
        this.title=title;
        this.duration=duration;
        this.hasBeenWatched=hasBeenWatched;
    }
}
let firstEpisode = new Episode("Seriouse courting ", 23, true);
let secondEpisode =new Episode("That one faith ", 23, true) ;
let thirdEpisode =new Episode(" Remeber the goal", 23, true) ;

let episodes=[firstEpisode,secondEpisode,thirdEpisode]
// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episode.Title}
Duration: ${episode.Duration} min
${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}  firstepisode `
const body = document.querySelector('body');

for(let i = 0; i < 12; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episodes[i].title}
${episodes[i].duration} minutes
${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}