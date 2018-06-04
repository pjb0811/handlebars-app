import Handlebars from 'handlebars/runtime';

export default html => {
  return new Handlebars.SafeString(html);
};
