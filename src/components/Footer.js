import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
      <div className='sm:flex text-center justify-between items-center'>
          <h1>Travel</h1>
        </div>
        <div className='flex justify-evenly sm:font-4'>
          <ul className='flex flex-col'>
            <a href='/'>About</a>
            <a href='/'>Partnerships</a>
            <a href='/'>Careers</a>
            <a href='/'>Newsroom</a>
            <a href='/'>Advertising</a>
          </ul>
          <ul className='flex flex-col'>
          <a href='#home'>Home</a>
          <a href='#destinations'>Destination</a>
          <a href='#travel'>Travel</a>
          <a href='#view'>View</a>
          <a href='#search'>Book</a>
          </ul>
        </div>
        <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
      </div>
    </div>
  );
};

export default Footer;