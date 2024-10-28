import React from 'react';
import Cap from '../../../assets/IMG/Casquette.jpeg';
import Coat from '../../../assets/IMG/CoatMen.jpeg';
import Hoodie from '../../../assets/IMG/Hoodie.jpeg';
import pants from '../../../assets/IMG/MenPant.jpeg';
import Shirt from '../../../assets/IMG/Shirt.jpeg';
import Shoes from '../../../assets/IMG/Shoes.jpeg';
import TShirt from '../../../assets/IMG/T-Shirt.jpeg';
import Card from '../../Card/Card';
import SectionHeading from '../SectionsHeading/SectionHeading';

const items = [
    { title: 'Hoodies', imagePath: Hoodie },
    { title: 'Pants', imagePath: pants },
    { title: 'Coat', imagePath: Coat },
    { title: 'T-Shirt', imagePath: TShirt },
    { title: 'Casquette', imagePath: Cap },
    { title: 'Shirt', imagePath: Shirt },
    { title: 'Shoes', imagePath: Shoes }
    
];


const Category = () => {
    
    return (
        <>
            <SectionHeading title={'Category Men'} />
            <div className="flex flex-wrap justify-start px-8 gap-6"> {/* Flex container */}
                {items && items.map((item, index) => (
                    <Card
                        key={item.title + index}
                        title={item.title}
                        imagePath={item.imagePath}
                        description="In Men Category"
                        actionArrow={true}
                        
                    />
                ))}
            </div>
        </>
)
}

export default Category