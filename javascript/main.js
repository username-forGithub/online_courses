const arr = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Yochai Benkler',
    redDescr: 'Creative Director at Hashrocket',
    description: 'Benckler studied commons-based peer production, and published his seminal book The Wealth of Networks in 2006',

  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    name: 'Cameron Diagle',
    redDescr: 'Cameron is currently the Head of Engineering at Product Hunt (by AngelList)',
    description: 'Lately, juggling between Ruby and JavaScript projects. Organizer of React.NotAConf conference and React.Sofia meetup.',
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/women/77.jpg',
    name: 'Terence Lee',
    redDescr: 'Senor Ruby Engineer at Bundler',
    description: 'Terence is a Software Engineer with an interest in tooling, automation, and testing. A creator of over 50 Ruby gems including the TTY toolkit.',
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/women/78.jpg',
    name: 'Tim Riley',
    redDescr: 'Community Engineer at WNY',
    description: 'Tim is a partner at Icelab, an Australian design agency, and a committed open source software contributor. He’s a co-founder and core team member of dry-rb.',
  },
  {
    id: 5,
    image: 'https://randomuser.me/api/portraits/men/79.jpg',
    name: 'Phil Nash',
    redDescr: 'Developer Evangelist at Twilio',
    description: 'Phil is the Head of Engineering (Astral) at IEX in New York City. Prior to IEX, he worked as a Senior Software Consultant at Def Method.',
  },
  {
    id: 6,
    image: 'https://randomuser.me/api/portraits/men/59.jpg',
    name: 'Richard Schneeman',
    redDescr: 'Runs a quirky conf in Austin, Texas',
    description: 'Richard codes for Heroku & is married to Ruby, literally. He built CodeTriage.com, the easiest way to get started contributing to Open Source.',
  },

];

let htmlstring = '';
arr.forEach((item) => {
  let string = `
            <div class="mentor-item ">
                <div class="inner-wrapper">
                    <img class="chess" src="img/chess.jpg" alt="">
                    <div class="left"><img src="${item.image}" alt=""></div>
                        
                    <div class="right">
                        <div class="name">${item.name}</div>
                        <div class="red-descr">${item.redDescr}</div>
                        <div class="line"></div>
                        <div class="descr">${item.description}</div>
                    </div>
                </div>
            </div>
            `;
  htmlstring += string;
  string = '';
});
const getWrapper = document.querySelector('.mentors-wrapper');
if (getWrapper) {
  getWrapper.innerHTML = htmlstring;
}

const gethumburger = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('.closeclass');
gethumburger.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('active');
});
getclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('active');
});
