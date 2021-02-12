import './App.css';
import DonutChartCard from './Components/DonutChartCard';

function App() {
  return (
    <div  class="container" >
      <div class="row">

        {/* Left part */}
        <div class="col-sm-12 col-md-6">
          <h3>INDIA COVIE-19 Tracker</h3>
          <p>Let's all pray to make our Earth Covid-19
          free soon, Stay Safe and do TheLocate
           </p>

           <div>
             <DonutChartCard/>
           </div>
        </div>

        {/* Right part */}
        <div class="col-sm-12 col-md-6">
          <h3>INDIA MAP</h3>
          <p> HOVER OVER A STATE FOR MORE DETAILS
           </p>
        </div>
      </div>

    </div>
  );
}

export default App;
