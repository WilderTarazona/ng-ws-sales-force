export const formatTextData = (data: string) => {
    let text = '';
    const array = data.toLowerCase().split(' ');
    array.forEach(element => {
      element = element.charAt(0).toUpperCase() + element.slice(1);
      text = text + element + ' ';
    });
    return text;
};
