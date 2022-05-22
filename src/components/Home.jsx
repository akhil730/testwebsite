import React from "react";
import "./photoo.png";


 function Home() {
    return (
        <div className="home" display="flex">

<img  height = "500" width={800} src = {require("./photoo.png")} alt = "akhil"></img>

<div className="home">
    <h1 style={{ color: 'violet' }}> Hi Hello we provide videos for marriages, birthdays.
    Thses are some of our best images, videos. Make your events more special with customized changes as you needed.

    </h1>
</div>

</div>

    )
}

export default Home;