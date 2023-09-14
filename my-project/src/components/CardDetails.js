import React from 'react';
import BackButton from './Button';
import {Route, Link} from "react-router-dom";
import BorderButton from './BorderButton';

const CardDetails = ( {countryInfo} ) => {

    const {flag,name,nativeName,region,subregion,population,capital,
    topLevelDomain,currencies,languages,borders} = countryInfo
    
    return (
        <div className = 'bg-secondary min-h-screen'>
            <Route path="/" component= {BackButton}></Route>
            <div className= 'lg:flex container m-auto'>
                <div className = 'flex-1 p-8'>
                    <img alt="country-flag" src = {flag}></img>
                </div>
                <div className='flex-1 p-6 '>
                    <h1 className='text-primary text-4xl p-6 font-bold'>{name}</h1>
                    <div className='md:flex'>
                        <div className="p-6">
                            <p className="text-sm text-primary py-2"><span className="font-bold text-sm">Native Name</span>: {nativeName}</p>
                            <p className="text-sm text-primary py-2"><span className="font-bold text-sm text-primary">Population</span>: {population} </p>
                            <p className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Region</span>: {region}</p>
                            <p className="text-sm text-primary py-2"><span className="font-bold medium text-sm">sub Region</span>: {subregion}</p>
                            <p className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Capital</span>: {capital}</p>
                        </div>
                        <div className='p-6'>
                            <p className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Top Level Domain</span>: {topLevelDomain}</p>
                            <p className="text-sm text-primary py-2"><span className="font-bold medium text-sm">Languages
                            </span>: { languages && languages.map((currency) => <span key={currency.name}>{currency.name }</span>) }</p>
                            <p className="text-sm text-primary py-2"><span className="font-bold medium text-sm">currencies
                            </span>: {currencies && currencies.map((lang) => <span key={lang.name}>{lang.name}</span>)}</p>
                        </div>
                    </div>
                    <div className='p-6'>
                        <p className='font-bold medium text-sm text-primary'>Border Countries: {
                            borders && borders.map( border =>
                                (<Link key={border} to={`/details/${border}`} >
                                    <BorderButton countryCode = {border} />
                                </Link>)
                            )
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;

