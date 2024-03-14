import data from './data.js'
const main = document.getElementById('main');

//cards
function showCards(data){
    data.forEach((event)=>{
        const box = document.createElement('div');
        box.className = 'box-card';

            const card = document.createElement('div');
            card.className = 'card';
            box.appendChild(card);
                
                const img = document.createElement('img');
                img.src = 'https://aniplus.co.il//Imgs/animePictures/' + event.animeImage;
                img.alt = event.hebrewName;
                card.appendChild(img);

                const contentBox = document.createElement('div');
                contentBox.className = 'card-content-box';
                card.appendChild(contentBox);

                    const content = document.createElement('div');
                    content.className = 'card-content';
                    contentBox.appendChild(content);

                        const hebrewName = document.createElement('h3');
                        hebrewName.className = 'card-title';
                        hebrewName.innerText = event.hebrewName;
                        content.appendChild(hebrewName);

                        const space = document.createElement('div');
                        space.className = 'card-space';
                        content.appendChild(space);

                        const agebox = document.createElement('p');
                        agebox.className = 'card-age-box';
                        content.appendChild(agebox);

                            const age = document.createElement('p');
                            age.className = 'card-age';
                            age.innerText = event.age+'+';
                            agebox.appendChild(age);

                        const episode = document.createElement('p');
                        episode.className = 'card-epTime';
                        episode.innerText =  event.episode + ' פרקים';
                        content.appendChild(episode);

                        const epTime = document.createElement('p');
                        epTime.className = 'card-epTime';
                        epTime.innerText = 'אורך פרק: כ-' + event.epTime + ' דקות';
                        content.appendChild(epTime);

                        const click = document.createElement('button');
                        click.type = 'button';
                        click.className = 'card-play';
                        click.innerText = 'לצפייה';
                        content.appendChild(click);
                            const svg = document.createElement('img');
                            svg.src = './triange.svg';
                            svg.alt = 'play';
                            click.appendChild(svg);

        main.appendChild(box);
    })
}


showCards(data);
showCards(data);


//Search
const from = document.getElementById('search-form');

const letters = ['הכל','א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת'];

const lettersBox = document.createElement('div');
lettersBox.className='letters-box';

letters.forEach((letter,index)=>{
    const label = document.createElement('label');
    label.className='letter';
    label.innerText = letter;
    lettersBox.appendChild(label);
        const element = document.createElement('input');
        element.type = 'checkbox';
        element.className='checkbox-letter checkbox-hide';
        element.name = 'letter';
        element.value = letter;
        element.title = letter;
        if (index === 0){element.checked = true;}
        label.appendChild(element);
});

from.appendChild(lettersBox);





const options = [
    {
        title:"ג'אנר",
        enTitle:"Genre",
        value:'אקשן,קומדיה,אימה,ספורט,הרפתקאות,דרמה,פנטזיה,רומנטיקה,מדע בדיוני,חלק מהחיים,מיסתורין',
        enValue:'Action,Comedy,Horror,Sports,Adventure,Drama,Fantasy,Romance,Science Fiction,Slice of Life,Mystery',
    },
    {
        title:'מדינה',
        enTitle:"Country",
        value:'יפן,סין',
        enValue:'Japan, China',
    }
];
const optionsBox = document.createElement('div');
optionsBox.className='options-box';

options.forEach(event=>{

    const label = document.createElement('label');
    label.className='options';
    label.innerText = event.title;
    optionsBox.appendChild(label);

        const backgroundLabel = document.createElement('label');
        backgroundLabel.className='background-label';
        backgroundLabel.htmlFor = event.enTitle;
        label.appendChild(backgroundLabel);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = event.enTitle;
        checkbox.className='checkbox-group checkbox-hide';
        checkbox.title = event;
        label.appendChild(checkbox);

        const svg = document.createElement('img');
        svg.src = './down.svg';
        svg.alt = 'play';
        label.appendChild(svg);

        const group = document.createElement('div');
        group.className = 'options-group';
        label.appendChild(group);

        
            event.value.split(',').forEach((e,i)=>{     
                const enValue = event.enValue.split(',')[i];
                const label = document.createElement('label');
                label.className='option';
                label.innerText = e;
                group.appendChild(label);
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.className='checkbox-options';
                    checkbox.title = e;
                    checkbox.name = 'options';
                    checkbox.value = enValue;
                    label.appendChild(checkbox);
            });
});

from.appendChild(optionsBox);










 const textBox = document.getElementById('text-box');
 from.appendChild(textBox)


