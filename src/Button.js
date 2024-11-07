import axios from 'axios';

export default function Gallery() {
    async function clickButton(){
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
      <section>
        <h1>Amazing scientists</h1>
        Hi my name is react

        <button onClick={clickButton}>
            click me!
        </button>
      </section>
    );
  }