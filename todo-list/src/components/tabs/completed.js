export default function Completed({ tab, handleClick, text, number }) {
  return (
    <li className="nav-item flex-auto text-center" role="presentation">
      <button
        onClick={handleClick}
        className={`
							nav-link
							w-full
							block
							font-medium
							text-xs
							leading-tight
							uppercase
							border-x-0 border-t-0 border-b-2 border-transparent
							px-6
							py-3
							my-2
						hover:text-gray-600 hover:border-gray-300
							active
							text-gray-500
						 ${
               tab === number
                 ? "text-blue-600  border-b-2 border-blue-600 hover:text-blue-600 hover:border-blue-600"
                 : ""
             }`}
        id="tabs-home-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-homeFill"
        role="tab"
        aria-controls="tabs-homeFill"
        aria-selected="true"
      >
        {text}
      </button>
    </li>
  );
}
