exports.linkResolver = function linkResolver(doc) {
  if (doc.type === 'index') {
    return '/';
  }
  if (doc.type === 'page') {
    return '/' + doc.uid;
  }
  return '/';
}