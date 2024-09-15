import { Icon } from '@iconify/react';

export const HeroPage = () => {
    return(
        <div className='w-full h-[calc(100vh-10dvh)] border border-black'>
            <div className='w-full h-full flex justify-center items-center gap-10'>
                <div className='w-full h-full flex justify-end'>
                    <div className='w-full h-full flex justify-center items-center border border-black'>
                        <img className='object-cover h-96 rounded-full shadow-lg' src="/assets/grad.jpg" alt="" />
                    </div>
                </div>
                <div className='w-full justify-start'>
                    <h1 className='text-2xl font-serif uppercase'>Alro John T. Mercado</h1>
                </div>
            </div>
        </div>
    )
}