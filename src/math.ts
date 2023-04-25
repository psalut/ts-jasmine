export function add(numbers: string) {

  if (numbers === '') {
    return 0;
  } else {
    let delimitator = ',';

    if (numbers.slice(0,2) === '//' && numbers.charAt(3) === '\n') {
      delimitator = numbers.charAt(2);
      numbers = numbers.substring(4);
    }
  
    const replaced = numbers.replace('\n', delimitator);
    const splitted = replaced.split(delimitator);
    let result = 0;

    splitted.forEach(element => {
      result += parseInt(element);
    });
    return result;
  }
}