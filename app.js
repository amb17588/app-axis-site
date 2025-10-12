
  window.addEventListener('load', () => {
    if (window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      history.replaceState(null, null, ' ');
    }
  });
