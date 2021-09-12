export const alphabet = [
  { text: 'A', number: 1 },
  { text: 'B', number: 2 },
  { text: 'C', number: 3 },
  { text: 'D', number: 4 },
  { text: 'E', number: 5 },
  { text: 'F', number: 6 },
  { text: 'G', number: 7 },
  { text: 'H', number: 8 },
  { text: 'I', number: 9 },
  { text: 'J', number: 10 },
  { text: 'K', number: 11 },
  { text: 'L', number: 12 },
  { text: 'M', number: 13 },
  { text: 'N', number: 14 },
  { text: 'O', number: 15 },
  { text: 'P', number: 16 },
  { text: 'Q', number: 17 },
  { text: 'R', number: 18 },
  { text: 'S', number: 19 },
  { text: 'T', number: 20 },
  { text: 'U', number: 21 },
  { text: 'V', number: 22 },
  { text: 'W', number: 23 },
  { text: 'X', number: 24 },
  { text: 'Y', number: 25 },
  { text: 'Z', number: 26 }
];

export const setTimer = (mode) => {
    let timer;
    if( mode==="easy") { 
        timer = 5000 
    }
    else if(mode==="medium") {
        timer = 3500
    }
    else if(mode==="hard") { 
        timer = 2000
    }
    return timer;
}

export const shuffle = () => {
    return alphabet.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
}