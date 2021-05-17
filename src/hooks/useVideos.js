import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', { //return an array containing videos being requested and metadata associated with them
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    };

    return [ videos, search ];
};

export default useVideos;