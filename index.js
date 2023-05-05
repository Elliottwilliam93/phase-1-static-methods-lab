class Formatter {
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-'\s]/g,"");
    }
    static titleize(string) {
      const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      const words = string.toLowerCase().split(' ');
      const capitalizedWords = words.map((word, index) => {
        if (index === 0 || !exceptions.includes(word)) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      });
      return capitalizedWords.join(' ');
    }
}