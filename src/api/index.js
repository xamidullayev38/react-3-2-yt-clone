import axios from 'axios';

const getVideos = async () => {
    try{
        const res = await axios.get("http://localhost:3001/videos");
        console.log(res.data);
        
        return res.data
    }catch(e) {console.log(e);
    }
}

export {getVideos};