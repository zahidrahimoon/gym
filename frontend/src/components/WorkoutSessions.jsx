const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Achieve your fitness goals with our top workout sessions, tailored for all levels. Whether you are a beginner or a seasoned athlete, our expert trainers provide personalized guidance to ensure you get the most out of every session.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Push your limits with our intense bootcamp classes, designed to challenge your strength, endurance, and agility. Join a community of motivated individuals who are committed to reaching their fitness goals together.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT (High-Intensity Interval Training)</h4>
            <p>
              Burn calories fast with our HIIT bootcamps. These sessions combine short bursts of intense exercise with recovery periods, maximizing your workout efficiency.
            </p>
          </div>
          <div>
            <h4>Strength and Conditioning</h4>
            <p>
              Build muscle and improve overall fitness with our strength and conditioning bootcamps. Perfect for those looking to increase strength, flexibility, and endurance.
            </p>
          </div>
          <div>
            <h4>Functional Training</h4>
            <p>
              Enhance your everyday movements with functional training. These sessions focus on exercises that improve coordination, balance, and strength using a variety of equipment.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
              Get your heart pumping with cardio kickboxing. This high-energy workout combines martial arts techniques with fast-paced cardio to help you burn fat and relieve stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
