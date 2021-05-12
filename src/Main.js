import React,{useEffect,useState} from 'react';

const data = {
    counter : 14,
    results :[
        {id : 1 , firstName : "mark1", lastName:"Ma1"},
        {id : 2 , firstName : "mark2", lastName:"Ma2"},
        {id : 3 , firstName : "mark3", lastName:"Ma3"},
        {id : 4 , firstName : "mark4", lastName:"Ma4"},
        {id : 5 , firstName : "mark5", lastName:"Ma5"},
        {id : 6 , firstName : "mark6", lastName:"Ma6"},
        {id : 7 , firstName : "mark7", lastName:"Ma7"},
        {id : 8 , firstName : "mark8", lastName:"Ma8"},
        {id : 9 , firstName : "mark9", lastName:"Ma9"},
        {id : 10 , firstName : "mark10", lastName:"Ma10"},
        {id : 11 , firstName : "mark11", lastName:"Ma11"},
        {id : 12 , firstName : "mark12", lastName:"Ma12"},
        {id : 13 , firstName : "mark13", lastName:"Ma13"},
        {id : 14 , firstName : "mark14", lastName:"Ma14"},
        {id : 15 , firstName : "mark15", lastName:"Ma15"},
        {id : 16 , firstName : "mark16", lastName:"Ma16"},
        {id : 17 , firstName : "mark17", lastName:"Ma17"},
        {id : 18 , firstName : "mark18", lastName:"Ma18"},
        {id : 19 , firstName : "mark19", lastName:"Ma19"},
        {id : 20 , firstName : "mark20", lastName:"Ma20"}
    ]
}

export default function Main(){

    const page ={
        currentPage : 1 ,
        totalPages : 0,
        pageSize : 10
    }

    const initPageItem = {
        id : 0,
        firstName : "",
        lastName : ""
    }
    const initPageItemList = {
        counter : 0,
        results : [initPageItem]
    }
    const [pageItemList, setPageItemList] = useState(initPageItemList);
    const [pageInfo, setPageInfo] = useState(page);

    const url = "https://exmpale/users/page/";

    useEffect(()=>{
        const pageUrl = url + pageInfo.currentPage;
        
        fetch(pageUrl, {
            method :"GET"
        }).then(res => res.json()).then(data => setPageItemList({
            counter : data.counter ,
            results : data.results
        }));
        
        /*
       if(pageInfo.currentPage > 1){
           data.results = data.results.slice(10);
           alert(pageInfo.currentPage);
       }
       */
        
       setPageItemList({
           counter : data.counter,
           results : data.results
       })

        if(pageInfo.totalPages === 0){
            const totalPageNum = (pageItemList.counter % pageInfo.pageSize) > 0 ? 
            pageItemList.counter / pageInfo.pageSize  + 1 : pageItemList.counter/pageInfo.pageSize ;

            setPageInfo({
                currentPage : pageInfo.currentPage,
                totalPages : totalPageNum,
                pageSize : pageInfo.pageSize
            })
        }

    }, [pageInfo]);

    const handleNext = () =>{
        setPageInfo({
            currentPage : (pageInfo.currentPage+1 > pageInfo.totalPages ? pageInfo.totalPages : pageInfo.currentPage+1 ),
            totalPages : pageInfo.totalPages,
            pageSize : pageInfo.pageSize
        })
    }

    const handlePrev = () =>{
        setPageInfo({
            currentPage : (pageInfo.currentPage-1 < 1 ? 1 : pageInfo.currentPage),
            totalPages : pageInfo.totalPages,
            pageSize : pageInfo.pageSize
        })
    }

    const handleFirst = () =>{
        setPageInfo({
            currentPage : 1,
            totalPages : pageInfo.totalPages,
            pageSize : pageInfo.pageSize
        })
    }

    const handleLast = () =>{
        setPageInfo({
            currentPage : pageInfo.totalPages,
            totalPages : pageInfo.totalPages,
            pageSize : pageInfo.pageSize
        })
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pageItemList.results.map(aResult => {
                            return(
                                <tr>
                                    <td>{aResult.id}</td> 
                                    <td>{aResult.firstName}</td> 
                                    <td>{aResult.lastName}</td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <section>
                <button onClick={handleFirst} >first</button>
                <button onClick={handlePrev}>previouse</button>
                <button onClick={handleNext} >next</button>
                <button onClick={handleLast}>last</button>
            </section>
        </div>
    );
}
