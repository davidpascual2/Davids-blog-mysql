import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios'


function App() {

  //=====STATES=================

  const [movie_name, setMovieName] = useState('')
  const [review, setReview] = useState('')
  const [movieReviewList, setMovieList] = useState([])
  const [newReview, setNewReview] = useState('')

  //======USE EFFECT ============

  // useEffect(() => {
  //   Axios.get('http://localhost:3001/api/get').then((response)=> {
  //     setMovieList(response.data)
  //     // console.log(response.data)
  //   })
  // }, [])

  useEffect(() => { //runs when the page is rendered
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/api/get');
        setMovieList(response.data)
      } catch (err) {
        console.log(err)
        alert("error fetching data: " + err);
      }
    };
    fetchData();
    
  }, [])

  

  //================ .THEN ====================

  // const submitReview = () => {
  //   Axios.post('http://localhost:3001/api/insert', {
  //     movieName: movieName, 
  //     movieReview: review
  //   });
  //   setMovieList([
  //     ...movieReviewList, {movieName: movieName, movieReview: review }, 
  //   ]) 
  // };

  // ============ TRY CATCH ===========//

  const submitReview = () => {
    try{
      const response = Axios.post('http://localhost:3001/api/insert', {
        movie_name: movie_name, //ref state name (line 10)
        movie_review: review //ref state name (line 11)
      });
      console.log(response)
      // alert('successful insert!')
      setMovieList([ //to auto refresh when we add a new review (ref states)
        ...movieReviewList, {movie_name: movie_name, movie_review: review }, 
      ]) 
    } catch (err) {

      console.log(err);
      alert('Insert failed: ' + err)
    }
  };

  //====== delete review =======

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  };

// ====== update review ======//

const updateReview = (movie) => {
  Axios.put(`http://localhost:3001/api/update`, {
    movie_name: movie,
    movie_review: newReview,
  });
  setNewReview('')
};
//======== JSX ============

  return (
    <div className="App">
      <h2>Movie Review</h2>
      <div className='form'>
        <label>movie name</label>
        <input 
          type="text" 
          name="movie_name" 
          onChange={(e) => {
            setMovieName(e.target.value)
          }} />

        <label>review</label>
        <input 
          type="text" 
          name="movie_review" 
          onChange={(e) => {
            setReview(e.target.value)
          }}/>

        <button onClick ={submitReview} >Submit</button>

        {movieReviewList.map((val) => { //render list of reviews
            return (
              <div className='card'>
                <h3>{val.movie_name}</h3>
                <p>{val.movie_review}</p>

                <button onClick={() => { // delete button
                  deleteReview(val.movie_name)
                  }}>Delete</button>

                <input //update input
                  type="text" 
                  id='updateInput' 
                  onChange={(e) => {
                    setNewReview(e.target.value);
                  }} 
                />
                <button onClick ={() => {updateReview(val.movie_name)}}>Update</button>



              </div>
            );
        })}
      </div>
    </div>
  );
}

export default App;
