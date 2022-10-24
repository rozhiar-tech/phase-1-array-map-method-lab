const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const modArry = tutorials.map(function(item) {
    item = item.split(' ');
    item = item.map((innerItem) => {
      if (innerItem==='OO'||innerItem==="API" || innerItem==="JSONP"){
          return innerItem
      }
     
      return innerItem.charAt(0).toUpperCase() + innerItem.slice(1)
    })
    return item.join(' ');
  })


  return modArry
}
titleCased()