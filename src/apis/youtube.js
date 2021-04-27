import axios from "axios";

const KEY = "AIzaSyCo4ngUxbRRIdFAxAoM_ElwqzKtVWWZ_TM";

export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: {
      part: "snippet",
      type: "video",
      maxResults: 5,
      key: KEY,
   },
});
