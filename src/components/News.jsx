import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class news extends Component {
  articles=[{
    "source": { "id": null, "name": "NDTV News" },
    "author": null,
    "title": "Mobiles, Internet Blocked In J&K's Uri After Infiltration Bid - NDTV",
    "description": "Internet and mobile phone services have been suspended in Jammu and Kashmir's Uri sector near the Line of Control after an infiltration attempt by a heavily-armed group of terrorists, authorities said on Monday.",
    "url": "https://www.ndtv.com/india-news/mobile-internet-services-suspended-in-jammu-and-kashmirs-uri-after-infiltration-attempt-across-line-of-control-2547510",
    "urlToImage": "https://i.ndtvimg.com/i/2016-09/uri-attack-soldier-afp_650x400_51474314268.jpg",
    "publishedAt": "2021-09-20T14:18:00Z",
    "content": "Reinforcements have been called in and a large area has been cordoned off.\r\nSrinagar: Internet and mobile phone services have been suspended in Jammu and Kashmir's Uri sector near the Line of Control… [+1315 chars]"
},
{
    "source": { "id": null, "name": "91mobiles" },
    "author": null,
    "title": "iQOO Z5 5G India launch is set for September 27th: expected specifications - 91mobiles",
    "description": "iQOO Z5 5G launch date in India is September 27th and the phone is set to arrive with a 120Hz AMOLED display, Snapdragon 778, and 55W charging.",
    "url": "https://www.91mobiles.com/hub/iqoo-z5-5g-india-launch-date-september-27/",
    "urlToImage": "https://www.91-cdn.com/hub/wp-content/uploads/2021/09/iqoo-z5-launch-date-india-feat.jpg",
    "publishedAt": "2021-09-20T10:46:22Z",
    "content": "The official iQOO Z5 5G launch date invite not only reveals the date and time of the phone’s launch but also teases the design. We see the phone with a rectangular rear camera module housing triple c… [+1594 chars]"
},
{
    "source": { "id": "the-times-of-india", "name": "The Times of India" },
    "author": "TIMESOFINDIA.COM",
    "title": "Six of the biggest COVID-19 vaccine myths debunked - Times of India",
    "description": "Nicki Minaj's recent tweet about vaccines causing impotency has stirred up misinformation about their safety, yet again.",
    "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/six-of-the-biggest-covid-19-vaccine-myths-debunked/photostory/86366292.cms",
    "urlToImage": "https://static.toiimg.com/photo/86366689.cms",
    "publishedAt": "2021-09-20T10:30:00Z",
    "content": "Minaj, who admitted to have not taken the vaccine herself (and claimed to be doing her own scientific research) before getting the jab mentioned in a tweet that one of her cousin's friend in Trinidad… [+1302 chars]"
},
{
    "source": { "id": null, "name": "Hindustan Times" },
    "author": "Hindustantimes",
    "title": "‘Old habit’: BJP says Congress made Channi Punjab CM to win Dalit votes - Hindustan Times",
    "description": "BJP’s Punjab in-charge Dushyant Kumar Gautam, who also hails from the Dalit community, said that the Congress has in the past followed the same tactic in Maharashtra and Rajasthan and that the party has humiliated Dalits “innumerable times.” | Latest News Ind…",
    "url": "https://www.hindustantimes.com/india-news/old-habit-bjp-says-congress-made-channi-punjab-cm-to-win-dalit-votes-101632131762531.html",
    "urlToImage": "https://images.hindustantimes.com/img/2021/09/20/1600x900/charanjit_channi_punjab_congress_bjp_dalit_votes_1632132204644_1632132204792.jpg",
    "publishedAt": "2021-09-20T10:05:13Z",
    "content": "Taking a fresh dig at Punjabs ruling dispensation, the Bharatiya Janata Partys (BJP) in charge of the state unit, Dushyant Kumar Gautam on Monday said that selecting Charanjit Singh Channi as the fir… [+2464 chars]"
},
{
    "source": { "id": "the-times-of-india", "name": "The Times of India" },
    "author": "TIMESOFINDIA.COM",
    "title": "Kangana Ranaut takes a dig at Javed Akhtar: Remember those who can’t make you, they can’t break you eithe - Times of India",
    "description": "Recently, Kangana Ranaut arrived in Andheri magistrate’s court for the hearing in the defamation case filed against",
    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/kangana-ranaut-takes-a-dig-at-javed-akhtar-remember-those-who-cant-make-you-they-cant-break-you-either/articleshow/86364985.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-86364963,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-43968/86364963.jpg",
    "publishedAt": "2021-09-20T09:18:00Z",
    "content": null
},
{
    "source": { "id": null, "name": "News-Medical.Net" },
    "author": null,
    "title": "First dose of COVID-19 mRNA vaccine (BNT162b2) reduced platelet polyP levels in young females - News-Medical.Net",
    "description": "In a recent study, scientists have tested the hypothesis that indicates the role of polyP in the COVID-19 mRNA vaccine-induced immune responses.",
    "url": "https://www.news-medical.net/news/20210920/First-dose-of-COVID-19-mRNA-vaccine-(BNT162b2)-reduced-platelet-polyP-levels-in-young-females.aspx",
    "urlToImage": "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/9/shutterstock_1661745232.jpg",
    "publishedAt": "2021-09-20T09:17:00Z",
    "content": "The world is experiencing a massive economic and healthcare crisis due to the novel severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) global outbreak. The rapid worldwide transmission of t… [+5410 chars]"
}
]
  constructor(){
    super()
    console.log("from news comp");
    this.state={
      articles : this.articles,
      loading:false
    }
  }
  render() {
    return (
     
      <div className="container my-4">
        <h1>NewsSter - Top Headlines</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="mytits" description="despo" imageUrl="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/E_mGTPoXIAEq7iA.jpg" newsUrl="TODO"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="mytits" description="despo" imageUrl="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/E_mGTPoXIAEq7iA.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="mytits" description="despo" imageUrl="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/E_mGTPoXIAEq7iA.jpg"/>
          </div>
      
          
        </div>
      

       
      </div>
    );
  }
}
