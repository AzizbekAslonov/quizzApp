
const scoresList = document.querySelector('#scoresList')
const LOCAL_SCORES = JSON.parse(localStorage.getItem('hightScores')) || []

const SCIENCES = {
   Informatika: [],
   Matematika: [],
}

LOCAL_SCORES.forEach(element => {
   if (element.science === 'Informatika') SCIENCES.Informatika.push(element)
   else if (element.science === 'Matematika') SCIENCES.Matematika.push(element)
})

for (const key in SCIENCES) {
   if (Object.hasOwnProperty.call(SCIENCES, key)) {
      const eachArray = SCIENCES[key];
      scoresList.appendChild(createHtmlForScience(eachArray, key))
   }
}
console.log(SCIENCES);

function createHtmlForScience(item, key) {

   if (item.length > 0) {
      const PARENTDIV = document.createElement('div');
      PARENTDIV.classList.add('scores');

      let header = document.createElement('div');
      header.classList.add('science-name');
      header.innerHTML = item[0].science;

      PARENTDIV.appendChild(header)

      item.forEach((elem, index) => {
         let span = document.createElement('span')

         let content = createDomEl('div', ['hight-score', 'd-flex'], `${index + 1}) ${elem.name} : ${elem.score}`)

         span.innerHTML = elem.time + 's';
         content.appendChild(span)
         PARENTDIV.appendChild(content)
      })

      return PARENTDIV
   }
   else {
      let header = document.createElement('div');
      header.classList.add('science-name');
      header.textContent = `${key} fanidan ballar yo\'q!`

      return header
   }
}


function createDomEl(el, classes = [], text = '') {
   let a = document.createElement(el);
   a.classList += classes.join(' ');
   a.textContent = text

   return a
}