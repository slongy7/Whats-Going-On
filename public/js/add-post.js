const addFormHandler = async (event) => {
    event.preventDefault();
    
    const crowded = document.querySelector('#crowded').value.trim();
    const masks = document.querySelector('#masks').value.trim();
    const entertainment = document.querySelector('#entertainment').value.trim();
    const specials = document.querySelector('#specials').value.trim();
    const quality = document.querySelector('#quality').value.trim();
    const addComment = document.querySelector('#comment').value;
  
    if (crowded && masks && entertainment && specials && quality && addComment) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ crowded, masks, entertainment, specials, quality, addComment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        console.log('success!!!');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.add-form')
    .addEventListener('submit', addFormHandler);

    