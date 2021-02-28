import Router from 'next/router';
import nprogress from 'nprogress';
import { debounce } from 'lodash';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500);

Router.events.on('routeChangeStart', start);

Router.events.on('routeChangeComplete', (url) => {
  start.cancel();
  nprogress.done();
  window.scrollTo(0, 0);
});

Router.events.on('routeChangeError', () => {
  start.cancel();
  nprogress.done();
});

const Nprogress = () => (
  <style jsx global>
    {`
      /* Make clicks pass-through */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        position: fixed;
        background: #e6af2e;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #e6af2e, 0 0 5px #e6af2e;
        opacity: 1;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}
  </style>
);

export default Nprogress;