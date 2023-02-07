import React from "react";
import { Link } from "react-router-dom"



const Home = () => {

    const posts = [
        {
            id:1,
            title: "lorem ipsum asdfas asdfsd",
            desc: "lorem ipsum asldfjk asd fas fd asdfas asd fas fsd s a fs df asdfasfdfasdf asdf asdfadsfdsf sd",
            img: "https://www.w3schools.com/css/img_5terre.jpg"
        },
        {
            id:2,
            title: "lorem ipsum asdf lasdfa",
            desc: "lorem a  fa d sa ds   as d s f ads  f as df as  saf as fsa fd sa fsafasfssa fa sf asf dsafasdfsad f asdf",
            img: "https://www.w3schools.com/css/img_forest.jpg"
        },
        {
            id:3,
            title: "lorem asdfasdf asdfasd asdf",
            desc: "lorem asdaf asd fa sdfasdfasdf adf asd fasdfasdfasd fasdfasdfasdf asdfasdfasdfdsa dsa adfads fasdfasdfsda f",
            img: "https://www.w3schools.com/css/img_lights.jpg"
        },
    ]

    //=====================//
    return ( 
    <div className="home">
        <div className="posts">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <div className="img">
                        <img src={post.img} alt='' />
                    </div>

                    <div className="content">
                        <Link  className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                        <p>{post.desc}</p>
                        <button>Read More</button>
                    </div>
                </div>
            ))}
        </div>
        
    </div> 
    );
}
 
export default Home;