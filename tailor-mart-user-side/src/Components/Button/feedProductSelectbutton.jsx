import { NavLink } from 'react-router-dom';
import './feedProductSelectbutton.css';

function feedProductSelectbutton() {
    let feedProductSelectButtonArr = [
        {
            id:'1',
            buttonName:'All',
            buttonTag:'/feed/all',
            buttonIcons:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Check-Square--Streamline-Ultimate">
                        <desc>
                            Check Square Streamline Icon: https://streamlinehq.com
                        </desc>
                        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 9.00002 3.294 4.61098c0.1356 0.1899 0.3129 0.3461 0.5183 0.4567 0.2054 0.1106 0.4335 0.1726 0.6666 0.1813 0.2331 0.0087 0.4651 -0.0362 0.6782 -0.1312s0.4015 -0.2376 0.5509 -0.4168L23.25 0.749023" stroke-width="1.5"></                     path>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 10.5v9.75c0 0.7956 -0.3161 1.5587 -0.8787 2.1213 -0.5626 0.5626 -1.3257 0.8787 -2.1213 0.8787h-15c-0.79565 0 -1.55871 -0.3161 -2.12132 -0.8787C1.06607 21.8087 0.75 21.0456 0.75 20.25v-15c0 -0.79565 0.31607 -1.55871 0.87868 -2.12132C2.19129 2.56607 2.95435 2.25 3.75 2.25H16.5" stroke-width="1.5"></path>
                        </svg>
        },
        {
            id:'2',
            buttonName:'T-shirt',
            buttonTag:'men-T-shirt',
            buttonIcons:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Shirt--Streamline-Sharp"><desc>{"\n    Shirt Streamline Icon: https://streamlinehq.com\n  "}</desc><g id="shirt--clothing-t-shirt-men-top-shopping-fashion"><path id="Vector 2716" d="M9 3v-0.5l-7 2L3 10h3v12l12 0V10h3l1 -5.5 -7 -2V3a3 3 0 0 1 -6 0Z" strokeWidth={1.5} /></g></svg>
        },
        {
            id:'3',
            buttonName:'Dress',
            buttonTag:'women-dress',
            buttonIcons:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Dress--Streamline-Cyber">
                        <desc>
                            Dress Streamline Icon: https://streamlinehq.com
                        </desc>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8.5 3.5v-3" stroke-width="1"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m15 11.5 -3.5 0.5 -3.5 -0.5" stroke-width="1"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m11.5 5.5 -3 -2 -3 2 2.5 6 -6.5 10 4 2h12l4 -2 -6.5 -10 2.5 -6 -3 -2 -3 2Z" stroke-width="1"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14.5 3.5v-3" stroke-width="1"></path>
                        </svg>
        },
        {
            id:'4',
            buttonName:'Shirt',
            buttonTag:'men-shirt',
            buttonIcons:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Shirt-Folded-Thin--Streamline-Phosphor-Thin"><desc>{"\n    Shirt Folded Thin Streamline Icon: https://streamlinehq.com\n  "}</desc><path d="M13.88 1.46666875h-1.82443125L10.84445 0.25555c-0.0613125 -0.06124375 -0.14445 -0.09561875 -0.23111875 -0.09555H5.38666875c-0.0866625 -0.00006875 -0.16980625 0.03430625 -0.23111875 0.09555L3.94443125 1.46666875H2.12c-0.54125625 -0.000025 -0.98 0.43874375 -0.98 0.98V14.86c0 0.54125625 0.43874375 0.980025 0.98 0.98h11.76c0.54121875 -0.000025 0.98 -0.43878125 0.98 -0.98V2.44666875c0 -0.54124375 -0.4387625 -0.98 -0.98 -0.98ZM8 3.81785 5.99671875 0.81333125h4.0065625Zm2.66396875 -2.81831875 0.9293625 0.92936875v4.43776875c0.00029375 0.1269125 -0.07295 0.24250625 -0.18783125 0.29645 -0.11290625 0.05444375 -0.247175 0.03818125 -0.34381875 -0.04165L8.43201875 4.3495ZM4.40666875 1.9289l0.9293625 -0.92936875 2.23195 3.3483375 -2.6272125 2.27033125c-0.1942625 0.15968125 -0.4885375 0.0491875 -0.5297 -0.1988875 -0.0028875 -0.0174 -0.00435625 -0.03500625 -0.0044 -0.05264375ZM1.79333125 14.86V2.44666875c0 -0.1804125 0.14625625 -0.32666875 0.32666875 -0.32666875h1.63333125v4.24666875c-0.0023375 0.3809875 0.21834375 0.72814375 0.56431875 0.8877125 0.13019375 0.06065625 0.27205625 0.09215 0.41568125 0.0922875 0.22869375 -0.0002125 0.4499625 -0.0812 0.62475 -0.22866875h0.0049l2.31035 -1.99756875v10.0662375H2.12c-0.1804125 0 -0.32666875 -0.14625625 -0.32666875 -0.32666875Zm12.4133375 0c0 0.1804125 -0.14625625 0.32666875 -0.32666875 0.32666875h-5.55333125V5.12043125l2.3128 1.99756875c0.17550625 0.14789375 0.3976875 0.22889375 0.6272 0.22866875 0.144575 -0.00029375 0.28731875 -0.03235 0.41813125 -0.09391875 0.344475 -0.16004375 0.56400625 -0.50625 0.56186875 -0.88608125V2.12H13.88c0.18040625 0.00000625 0.32666875 0.1462625 0.32666875 0.32666875Z" strokeWidth={0.0625} /></svg>
        },
    ]
  return (
    <div className={`feed-product-selectbutton`}>
      {feedProductSelectButtonArr.map((buttons) => (
        <NavLink to={`${buttons.buttonTag}`} className={({isActive}) => isActive ? `feed-product-buttons active` : `feed-product-buttons deactive`}>
            <i>{buttons.buttonIcons}</i>
            <p>{buttons.buttonName}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default feedProductSelectbutton
