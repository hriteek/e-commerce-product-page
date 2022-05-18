function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: withOpacity('--color-orange'),
        'orange-pale': withOpacity('--color-orange-pale'),
        'blue-dark': withOpacity('--color-blue-dark'),
        'grayish-blue-dark': withOpacity('--color-grayish-blue-dark'),
        'grayish-blue': withOpacity('--color-grayish-blue'),
        'grayish-blue-light': withOpacity('--color-grayish-blue-light'),
      },
    },
  },
  plugins: [],
};
