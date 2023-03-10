import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const WritePost = () => {

    const [value, setValue] = useState('');

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="title" />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Visisbility: </b> Public
                    </span>
                    <input style={{display:"none"}} type="file" name="" id="file"></input>
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button>Update</button>
                    </div>
                </div>

                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type='radio' name="cat" value="art" id="art" />
                        <label htmlFor="art">Art</label>
                    </div>
                    
                    <div className="cat">
                        <input type='radio' name="cat" value="science" id="science" />
                        <label htmlFor="art">Science</label>
                    </div>

                    <div className="cat">
                        <input type='radio' name="cat" value="tech" id="tech" />
                        <label htmlFor="art">Tech</label>
                    </div>

                    <div className="cat">
                        <input type='radio' name="cat" value="cinema" id="cinema" />
                        <label htmlFor="art">Cinema</label>
                    </div>

                    <div className="cat">
                        <input type='radio' name="cat" value="food" id="food" />
                        <label htmlFor="art">Food</label>
                    </div>

                    <div className="cat">
                        <input type='radio' name="cat" value="design" id="design" />
                        <label htmlFor="art">Design</label>
                    </div>
                </div>
            </div>    
        </div>
      );
}
 
export default WritePost;