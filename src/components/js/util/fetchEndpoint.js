const fetchEndpoint = function (url, callback) {
  if((url && typeof url === 'string') && (callback && typeof callback === 'function')) {
    const rqs = new XMLHttpRequest();

    rqs.open('GET', url);
    rqs.onload = (response) => {
      if (response.target.status >= 200 && response.target.status < 400) {
        callback(JSON.parse(response.target.responseText));
      } else {
        throw new Error(`Server response with ${response.target.status}`);
      }
    };

    rqs.onerror = () => { throw new Error('Error on request (Check json URL)'); };
    rqs.send();
  } else {
    if(typeof url !== 'string') {
      throw new Error(`URL must be a string. A ${typeof url} was provided`);
    }
    if(typeof callback !== 'function') {
      throw new Error(`Callback must be a function. A ${typeof callback} was provided`);
    }
  }
};

export default fetchEndpoint;
