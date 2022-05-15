import Completed from "./completed";

export default function Tab({ tab, setTab }) {
  return (
    <>
      <ul
        className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tabFill"
        role="tablist"
      >
        <Completed
          text="Todo"
          handleClick={() => {
            setTab(1);
          }}
          tab={tab}
        />
        <Completed
          text="Completed"
          handleClick={() => {
            setTab(2);
          }}
        />
      </ul>
    </>
  );
}
