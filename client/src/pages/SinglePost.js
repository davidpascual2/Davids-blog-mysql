import React from "react";
import Edit from '../images/edit-icon.jpeg';
import Delete from '../images/delete-icon.png'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="content">
                <img src="https://www.w3schools.com/css/img_mountains.jpg" alt="" />
                    <div className="user">
                        <img src="https://www.w3schools.com/css/img_lights.jpg" alt="" />
                            <div className="info">
                                <span>David</span>
                                <p>Posted 2 days ago</p>
                            </div>
                            <div className="edit">
                                {/* query */}
                                <Link to='/writepost?edit=2'> 
                                    <img src={Edit} alt="" />
                                </Link>
                    
                                <img src={Delete} alt="" />
                            </div>
                    </div>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta eos voluptas labore, illo ipsam sunt ipsum voluptatum modi! Tempore quia nesciunt ipsa veritatis illum enim dicta eos perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam iste numquam ducimus odio consequatur. Quisquam dolorum architecto recusandae unde facere quo eum, cum perspiciatis, ratione ipsa obcaecati, est cumque!</p>
            </div>
            <Menu />
        </div>
      );
}
 
export default SinglePost;