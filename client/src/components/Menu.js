const Menu = () => {

    const posts = [
        {
            id:1,
            title: "lorem",
            desc: "lorem ipsum asldfjk asd fas fd asdfas asd fas fsd s a fs df asdfasfdfasdf asdf asdfadsfdsf sd",
            img: "https://www.w3schools.com/css/img_5terre.jpg"
        },
        {
            id:2,
            title: "lorem",
            desc: "lorem a  fa d sa ds   as d s f ads  f as df as  saf as fsa fd sa fsafasfssa fa sf asf dsafasdfsad f asdf",
            img: "https://www.w3schools.com/css/img_forest.jpg"
        },
        {
            id:3,
            title: "lorem",
            desc: "lorem asdaf asd fa sdfasdfasdf adf asd fasdfasdfasd fasdfasdfasdf asdfasdfasdfdsa dsa adfads fasdfasdfsda f",
            img: "https://www.w3schools.com/css/img_lights.jpg"
        },
    ]

    return (
        <div className="menu">
            <h1>Other posts you might like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </ div>
            ))}
        </div>
    );
}
 
export default Menu;