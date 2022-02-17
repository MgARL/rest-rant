const React = require('react')
const Def = require('./default')

function Home(){
   return( 
   <Def>
        <main>
            <h1>REST-Rant</h1>
            <div>
                <img src="/images/madie-hamilton-steak.jpg" alt="tomahawk Steak" id='steak'/>
                <div>
                Photo by <a href="https://unsplash.com/@mham3816?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Madie Hamilton</a> on <a href="https://unsplash.com/s/photos/steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
        </main>
    </Def>
   )
}

module.exports = Home