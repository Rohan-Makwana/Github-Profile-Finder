import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 items-center p-4 footer text-neutral-content ">
      <div className="items-center grid-flow-col justify-center mx-auto  md:mx-4">
        <svg
          width="48"
          height="48"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" rx="100" fill="#2D2926" />
          <path
            d="M95.5 74L97.6947 75.1971L99.7114 71.5H95.5V74ZM87.3053 83.8029C86.6441 85.015 87.0907 86.5336 88.3029 87.1947C89.515 87.8559 91.0336 87.4093 91.6947 86.1971L87.3053 83.8029ZM55 76.5H95.5V71.5H55V76.5ZM93.3053 72.8029L87.3053 83.8029L91.6947 86.1971L97.6947 75.1971L93.3053 72.8029Z"
            fill="#E94B3C"
          />
          <path
            d="M90 85C76.1929 85 65 93.9543 65 105C65 116.046 70.5679 125 84.375 125"
            stroke="#E94B3C"
            stroke-width="5"
          />
          <path
            d="M105.5 124.5V83.5L122 104"
            stroke="#E94B3C"
            stroke-width="5"
          />
          <path d="M145 124V74L126 95.5" stroke="#E94B3C" stroke-width="5" />
          <line
            x1="109.952"
            y1="72.4383"
            x2="133.952"
            y2="102.438"
            stroke="#E94B3C"
            stroke-width="5"
          />
        </svg>

        <p>Copyright &copy; {currentYear}, All rights reserved.</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-center mx-auto md:mx-4">
        <a href="https://github.com/Rohan-Makwana" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare color="#f5f5f5" className="f-icons text-3xl hover:shadow-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/rohan-makwana-2835bb1a7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="#0077b5" className="f-icons text-3xl hover:shadow-3xl" />
        </a>
        <a href="https://www.facebook.com/rohan.makwana.1804" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare color="#1877f2" className="f-icons text-3xl hover:shadow-3xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
