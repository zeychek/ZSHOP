import React from 'react';
import Jewelery from '../../assets/IMG/1pc Simple & Fashionable Punk Style Street Portrait Coin Pendant Metal Exaggerated Thick Chain Multi-Layer Necklace For Daily Wear.jpeg';
import Bag from '../../assets/IMG/Addisyn Shoulder Bag - White.jpeg';
import coat from '../../assets/IMG/coat.jpeg';
import dress from '../../assets/IMG/dress.jpeg';
import heels from '../../assets/IMG/heels.jpeg';
import Outfit from '../../assets/IMG/outfir.jpeg';
import pants from '../../assets/IMG/pants.jpeg';
import Card from '../Card/Card';
import './NewArrivals.css';
import SectionHeading from './SectionsHeading/SectionHeading';

const items = [
    { title: 'Jewelery', imagePath: Jewelery },
    { title: 'Bag', imagePath: Bag },
    { title: 'Outfit', imagePath: Outfit },
    { title: 'Dresses', imagePath: dress },
    { title: 'Coat', imagePath: coat },
    { title: 'Heels', imagePath: heels },
    { title: 'Pants', imagePath: pants }
];

const NewArrivals = () => {
    return (
        <>
            <SectionHeading title={'New Arrivals'} />
            <div className="flex flex-wrap justify-start px-8 gap-6"> {/* Flex container */}
                {items && items.map((item, index) => (
                    <Card
                        key={item.title + index}
                        title={item.title}
                        imagePath={item.imagePath}
                        description="New trendy fashion"
                        actionArrow={true}
                        
                    />
                ))}
            </div>
        </>
    );
}

export default NewArrivals;
