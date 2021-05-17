import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

//this will be a class based component as it will hold all of our different state for our app. I.e list of video being fetched, video being shown

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    const [videos, search] = useVideos('jazz'); //destructure out videos and search object from the array being returned from out useVideso hook

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return(
        <div className="ui container">
           <SearchBar onFormSubmit={search} />
           <div className="ui grid">
               <div className="ui row">
                   <div className="eleven wide column">
                       <VideoDetail video={selectedVideo} />
                   </div>
                   <div className="five wide column">
                       <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                   </div>
               </div>
           </div>
       </div>
    );

};

export default App;