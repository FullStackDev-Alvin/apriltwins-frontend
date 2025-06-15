import React from 'react'
import BackdropComponent from '../Components/BackdropComponent'
import ReusableLeftToRight from '../Components/ReusableLeftToRight'

const About = () => {
    const AboutContent= [
        {
            title:"About Us",
            header:"April Twins: United in Solidarity",
            paragraph:[  
                'The "April Twins" are those born in the month of April—a time when the earth awakens with warmth, life, and renewed energy. These individuals are said to carry the vibrant spirit of spring: fresh beginnings, resilience, and growth.',
                "More than just a shared birth month, the concept of April Twins symbolizes a community—people joined together not by blood, but by shared timing and a mutual sense of purpose. United in the name of solidarity, they aim to lift one another up, to help, support, and grow together."
            ],
            image:"/about.jpg"
        }
    ] 
    const lists = [
        "To foster unity among April-born individuals worldwide",

        "To create networks of support, both emotional and practical",

        "To encourage acts of kindness, charity, and collaboration",

        "To serve as ambassadors of hope, especially in seasons of renewal"
    ]
  return (
    <div className='min-h-screen'>
        <BackdropComponent title="About Us"/>
        {AboutContent.map((content)=>(
            <ReusableLeftToRight  title={content.title} paragraph={content.paragraph} image={content.image} header={content.header}/>
        ))}
        
        <div className="max-w-screen-xl m-auto px-12 p-4 flex flex-col gap-[20px]">
            <h2 class="mb-2 text-lg font-semibold text-primary ">Our Objectives:</h2>
            <ul class="max-w-xl space-y-1 text-black list-disc list-inside p-4">
                {lists.map((list)=>(
                    <li>
                        {list}
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default About