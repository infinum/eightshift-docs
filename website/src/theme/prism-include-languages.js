const prismIncludeLanguages = (Prism) => {
  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`); // eslint-disable-line
  });
};
