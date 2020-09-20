import React from 'react';
import DescriptionInDetails from './DescriptionInDetails';
import './Description.css'
import sajek from '../../Image/Sajek.png'
import sreemongol  from '../../Image/Sreemongol.png'
import sundorbon  from '../../Image/sundorbon.png'
const Descriptin = () => {
    
    const descriptions = [
        
        {id : 1 , name:"Sreemangal",description:`Srimangal/Sreemangal is a city in Sylhet Division in Bangladesh. Sreemangal is situated in Moulvibazar district in sylhet division. 
      Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. 
      Its natural scenery is very charming.It soothes one’s eyes. Birds are twittering always here. 
      The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here.`,urlImg:sreemongol
      },
      {id:2,name:'Sundarbans',description:`The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges,Brahmaputra and Meghna Rivers in the Bay of Bengal. 
      It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.
      Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites.`,urlImg : sundorbon
    },
    {id : 3 , name:'Cox’s Bazar', description :`Cox’s Bazar is a town on the southeast coast of Bangladesh.
    It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.
     Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds.
    North, sea turtles breed on nearby Sonadia Island.`,urlImg:sajek
    }
              ]

    return (
        <div className='container description-container'>
            <div className="py-3">
               <div className="row">
                   {descriptions.map(description => <DescriptionInDetails description={description} key={description.id}></DescriptionInDetails>)}
               </div>
            </div>
            
        </div>
    );
};

export default Descriptin;