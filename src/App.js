import { useState } from 'react'


function App() {
 

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  
  function handleSubmit() {
    setJobs(prev => {
      const newJobs = [...prev, job];

      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs
    });
    setJob('');
  }
 
  return (
    <div className="App" style={{padding: '100px 570px', margin:'0 auto', fontSize:'24px'}}>
      <input style={{fontSize: '24px'}} placeholder={'add job'}
        value={job} onChange={ (e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button> 
      
      <ul>

        {jobs.map((job, index) => ( 
          
          <li key={index}>{job}</li>
          
        ))}
        
      </ul>

    </div>
  );  
}

export default App;
