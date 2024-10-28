import React from 'react'



const Footer = ({content}) => {
    return (
        <div className='bg-black text-white py-8'>
            <div className='flex justify-around'>
                {content?.items && content?.items?.map((item,index)=>{
                    return (
                        <div className='flex flex-col'>
                        <p className='text-[16px] pb-[10px]'>{item?.title}</p>
                        {item?.list && item?.list?.map((listItem,index)=><a className='flex flex-col text-[12px] py-2'
                        href={listItem?.path}>{listItem?.label}</a>)}
                        {item?.description && <p>{item?.description}</p>}
                        </div>
                    )
                })}
            </div>
            
            <p className='text-sm text-white text-center content-center'>{content?.copyright}</p>

        </div>
    )
}


export default Footer