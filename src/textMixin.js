export const textMixin = {
  computed: {
    reversedText(){
      return this.text.split("").reverse().join("");
    },
    textLength(){
      return '(' + this.text.length + ')';
    }
  },
}
