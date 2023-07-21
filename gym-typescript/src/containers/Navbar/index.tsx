import { Bars3Icon,XMarkIcon } from '@heroicons/react/20/solid'
import {useState} from 'react'
import Logo from '@/assets//Logo.png'
import Links from './Links'
import { SelectedPage } from '@/shared/type'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'


type Props = {
    isTopOfPage:boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const NavBar = ({isTopOfPage ,selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled , setIsMenuToggled] = useState<boolean>(false);

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navBackGround = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
    <div className={`${navBackGround}${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap`}>
                <img src={Logo} alt='logo' />
                {isAboveMediumScreens ? 
                (
                <div className={`${flexBetween} w-full `}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Links page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>
                
                <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a member today!</ActionButton>
                </div>
            </div>  )  :
                    (
                       <button className='rounded-full bg-secondary-500 p-2'
                        onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className='h-6 w-6 text-white'></Bars3Icon>

                       </button>
                        
                    )

}


            </div>

        </div>
    </div>
    {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
            <div className='flex justify-end p-12'>
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className='h-6 w-6 text-gray-400'></XMarkIcon>
            </button>
            </div>

            <div className="flex ml-[33%] gap-10 text-2xl flex-col gap-8 text-sm">
                        <Links page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                    </div>

        </div>
    )}
    </nav>
  )
}

export default NavBar