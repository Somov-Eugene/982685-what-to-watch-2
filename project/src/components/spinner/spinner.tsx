import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner">
      <h1 className="page-title">Loading&hellip;</h1>
      <div className="lds-ring" aria-hidden="true">
        <span/>
        <span/>
        <span/>
        <span/>
      </div>
    </div>
  );
}

export default Spinner;
