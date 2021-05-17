import axios from 'axios';

const KEY = 'AIzaSyCKbRYy_gSK0u2HLXaZbJBEr7wF-WcBj-U';

export default axios.create({                           //create preconfigured instance of axios with youtube api query and params + access key
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});