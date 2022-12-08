import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  
  // articles = [
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "India summons Wikipedia officials over cricketer biography tweak",
  //     "description": "India has summoned executives of Wikipedia after a national cricketer's page on the online encyclopedia was edited following a match with rival Pakistan to claim that he was linked to a Sikh separatist movement, a government source said on Monday.",
  //     "url": "https://www.reuters.com/world/india/india-summons-wikipedia-officials-over-cricketer-bio-tweak-after-pakistan-match-2022-09-05/",
  //     "urlToImage": "https://www.reuters.com/resizer/myh5jYJ94YrckS9N1JnVidkoLcc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UM4X4MWSO5OW7HI5QD54BXLQX4.jpg",
  //     "publishedAt": "2022-09-05T16:13:40Z",
  //     "content": "NEW DELHI, Sept 5 (Reuters) - India has summoned executives of Wikipedia after a national cricketer's page on the online encyclopedia was edited following a match with rival Pakistan to claim that he… [+2531 chars]"
  //   },

  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "techcrunch",
  //       "name": "TechCrunch"
  //     },
  //     "author": "Manish Singh",
  //     "title": "India summons Wikipedia officials over edits to cricketer's page",
  //     "description": "India has summoned executives of Wikipedia after a cricketer's page on the online encyclopedia was edited with links to a separatist movement.",
  //     "url": "https://techcrunch.com/2022/09/05/india-summons-wikipedia-officials-over-edits-to-cricketers-page/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1242949140.jpg?w=600",
  //     "publishedAt": "2022-09-05T13:21:45Z",
  //     "content": "India has summoned executives of Wikipedia after a cricketer’s page on the online encyclopedia was edited with links to a separatist movement.\r\nThe country’s IT ministry made the order on Monday to s… [+1365 chars]"
  //   }
  //   ]
    const [articles, setarticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    
    

   const Capitalize= (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
 


  const updateNews = async(pageNo)=>{
    props.setprogress(10);
    const apiUrl = `https://newsapi.org/v2/everything?q=${props.category}
    &apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(apiUrl);
    props.setprogress(30);
    let parsedData = await data.json()
    props.setprogress(50);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults,)
    setLoading(false)
    props.setprogress(100);
}
  useEffect(() => {
    document.title= `${Capitalize(props.category)} - NewsMonkey `
   updateNews();
    
  }, [])
  


 const handlePreClick = async () => {
    // console.log("previous");
    // let apiUrl = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=47e3917301e74b3388ddbedac6f87402&page=${this.state.page - 1}&pagesize=${props.pageSize}`;
    // let data = await fetch(apiUrl);
    // let parseData = await data.json();
    // this.state.loading=true;
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false
    // })
    await setpage(page-1)

    updateNews();
  }

 const handleNextClick = async () => {
    // console.log("Next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //   let apiUrl = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=47e3917301e74b3388ddbedac6f87402&page=${this.state.page + 1}&pagesize=${props.pageSize}`;
    //   let data = await fetch(apiUrl);
    //   let parseData = await data.json();
    //   this.state.loading=true;
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false
    //   })
    // }
    await setpage(page+1)
    updateNews();
  }
  const fetchMoreData = async() => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);

    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults)
    
  };


    return (
      <>
      
        <h2 className='text-center my-3' style={{padding:"60px 0"}}>News Monkey top {Capitalize(props.category)} Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container my-3'>
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 45) : ""} discription={element.description ? element.description.slice(0, 91) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
          </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
          <button disabled={this.state.page +1> Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        </>
    )
  }
News.defaultProps = {
  category: 'bitcoin',
  pageSize:8
}
News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number
}
export default News