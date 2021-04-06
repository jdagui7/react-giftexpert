import React ,{ useState }from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = (  ) =>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['The Big Bang Theory']);

    // const handleAdd = (e) =>{
    //     setCategories([...categories , 'Rick And Morty']);

    //     console.log(categories)

    // }

    return (
      <>
        <h1> GitExpertApp</h1>
        <AddCategory setCategories={ setCategories } />
        <hr/>

       

        <ol>
           { 
                categories.map( category =>(
                <GifGrid 
                key={category} 
                category={ category } />
                ))
            }
        </ol>

       
      </>

    )


}

export default GitExpertApp;
