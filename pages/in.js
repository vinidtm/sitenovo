import { useState, useEffect } from 'react';
import Router from 'next/router';

function HomePage() {
  const [data, setData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: '',
    activityLevel: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) return prevProgress + 1;
          clearInterval(timer);
          return prevProgress;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isLoading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setProgress(0);

    let bmr;
    if(data.gender === "M") {
      bmr = 88.362 + (13.397 * data.weight) + (4.799 * data.height) - (5.677 * data.age);
    } else {
      bmr = 447.593 + (9.247 * data.weight) + (3.098 * data.height) - (4.330 * data.age);
    }
  
    let maintenanceCalories;
    switch(data.activityLevel) {
      case 'Sedentário':
        maintenanceCalories = bmr * 1;
        break;
      case 'Leve':
        maintenanceCalories = bmr * 1.375;
        break;
      case 'Moderado':
        maintenanceCalories = bmr * 1.55;
        break;
      case 'Intenso':
        maintenanceCalories = bmr * 1.725;
        break;
      case 'Muito Intenso': 
        maintenanceCalories = bmr * 1.9;
        break;
      default:
        maintenanceCalories = bmr;
    }
    
    maintenanceCalories = maintenanceCalories.toFixed(2);
    const recommendedWaterIntake = (data.weight * 35 / 1000).toFixed(3);
  
    setTimeout(() => {
      setIsLoading(false);
      Router.push({
        pathname: '/resultado',
        query: { ...data, maintenanceCalories, recommendedWaterIntake }
      });
    }, 5000);
  };

  return (
    <div className="fitness-container">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo do Site" className="logo" />
      </div>
      
      <div className="content-container">
        {isLoading ? (
          <div className="loading-section">
            <b>Aguarde... </b> <br />
            Eu estou calculando a sua Fórmula exclusiva!
            <div className="progress-container">
              {progress}%
              <div className="progress-bar" style={{width: `${progress}%`}}></div>
            </div>
          </div>
        ) : (
          <>
            <div className="fitness-text">
            Seja bem-vinda(o) ao <b>EpiFórmula</b>!<br></br>
            Preencha os seus dados para gerar a sua <b>Fórmula exclusiva!</b></div>

            <form onSubmit={handleSubmit} className="fitness-form">
              <input
                type="number"
                name="age"
                value={data.age}
                onChange={handleChange}
                placeholder="Idade"
                className="fitness-input"
                required
              />
              <input
                type="number"
                name="weight"
                value={data.weight}
                onChange={handleChange}
                placeholder="Peso (em kg)"
                className="fitness-input"
                required
              />
              <input
                type="number"
                name="height"
                value={data.height}
                onChange={handleChange}
                placeholder="Altura (em cm)"
                className="fitness-input"
                required
              />
              <select
                name="gender"
                value={data.gender}
                onChange={handleChange}
                className="fitness-input"
                required
              >
                <option value="" disabled>Qual seu sexo?</option>
                <option value="M">Homem</option>
                <option value="F">Mulher</option>
              </select>
              <select
                name="activityLevel"
                value={data.activityLevel}
                onChange={handleChange}
                className="fitness-input"
                required
              >
                <option value="" disabled>Qual seu nível de atividade na semana?</option>
                <option value="Sedentário">Sedentário</option>
                <option value="Leve">Leve</option>
                <option value="Moderado">Moderado</option>
                <option value="Intenso">Intenso</option>
                <option value="Muito Intenso">Muito Intenso</option>
              </select>
              <button type="submit" className="fitness-button">Gerar a Fórmula</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
