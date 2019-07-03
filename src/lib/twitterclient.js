var OAuth = require('oauth')

class TwitterClient {
    constructor(){
        const config = 
        {
            "consumerKey": "XXXXX",
            "consumerSecret": "XXXXX",
            "accessToken": "XXXXX",
            "accessTokenSecret": "XXXXX",
            "callBackUrl": ""
        }
        this.consumerKey = config.consumerKey;
        this.consumerSecret = config.consumerSecret;
        this.accessToken = config.accessToken;
        this.accessTokenSecret = config.accessTokenSecret;
        this.callBackUrl = config.callBackUrl;
        this.baseUrl = 'https://api.twitter.com/1.1';
        this.oauth = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            this.consumerKey,
            this.consumerSecret,
            '1.0',
            null,
            'HMAC-SHA1'
        );
    }
  async getRequest(url){
   return new Promise((resolve, reject) =>{
        this.oauth.get(url, this.accessToken, this.accessTokenSecret, (error, data) => {
            //console.log(error)
            resolve(JSON.parse(data))
        })
    })
  }  
  async postRequest(url, opts){
    return new Promise((resolve, reject) =>{
         this.oauth.post(url, this.accessToken, this.accessTokenSecret, opts, "application/x-www-form-urlencoded", (error, data) => {
             //console.log(error)
             resolve(JSON.parse(data))
         })
     })
   } 

  async getTweet(id){
    const url = this.baseUrl + "/statuses/show.json?id=" + id
    return this.getRequest(url)
  }
  async postTweet(params){
    const url = this.baseUrl + "/statuses/update.json"
    return this.postRequest(url, params)
  }
  async searchTweet(params){
    const url = this.baseUrl + "/search/tweets.json?" + params
    return this.getRequest(url)
  }
  async likeTweet(id){
    const url = this.baseUrl + "/favorites/create.json"
    const params = {
        id: id
    }
    return this.postRequest(url, params)
  }
}

export default TwitterClient;