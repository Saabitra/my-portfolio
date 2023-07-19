import {useContext} from 'react';
import {ImTwitter, ImGithub, ImInstagram, ImLinkedin} from 'react-icons/im';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
  <div 
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.linkedin.com/in/saabitra-bera-47124b154/' target='_blank' rel='noreferrer'>
          <ImLinkedin className='text-[#696c6d] hover:text-primary transition' />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/saabitra.bera/' target='_blank' rel='noreferrer'>
          <ImInstagram className='text-[#696c6d] hover:text-primary transition' />
        </a>
      </li>
      <li>
        <a href='https://twitter.com/SaabitraBera' target='_blank' rel='noreferrer'>
          <ImTwitter className='text-[#696c6d] hover:text-primary transition' />
        </a>
      </li>
      <li>
        <a href='https://github.com/Saabitra' target='_blank' rel='noreferrer'>
          <ImGithub className='text-[#696c6d] hover:text-primary transition' />
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Socials;
