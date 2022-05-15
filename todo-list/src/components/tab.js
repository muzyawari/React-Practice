export default function Tab({ tab, setTab }) {
  return (
    <>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tabFill"
        role="tablist"
      >
        <li className="nav-item flex-auto text-center" role="presentation">
          <button
            onClick={() => {
              setTab(1);
            }}
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
               tab === 1
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
            Todo
          </button>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <button
            onClick={() => {
              setTab(2);
            }}
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
             tab === 2
               ? "text-blue-600  border-b-2 border-blue-600 hover:text-blue-600 hover:border-blue-600"
               : ""
           }`}
            id="tabs-messages-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-messagesFill"
            role="tab"
            aria-controls="tabs-messagesFill"
            aria-selected="false"
          >
            Completed
          </button>
        </li>
      </ul>
    </>
  );
}
