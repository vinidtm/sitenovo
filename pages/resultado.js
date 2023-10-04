import { useRouter } from 'next/router';

function Resultado() {
  const router = useRouter();
  const { age, weight, height, gender, activityLevel, maintenanceCalories, recommendedWaterIntake } = router.query;

  const handleButtonClick = () => {
    window.location.href = "https://seulinkaqui.com"; // Substitua pelo seu link
  };

  return (
    <div className="results-container">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo do Site" className="logo" />
      </div>
      
      <div className="content-container">
        <h1>Esse é o resumo de algumas informações importantes que eu usei para montar a sua Fórmula Exclusiva!</h1>
        <div className="infoBlock"><b>Idade:</b><br />  {age} anos</div>
        <div className="infoBlock"><b>Peso:</b><br />  {weight} kg</div>
        <div className="infoBlock"><b>Altura:</b><br />  {height} cm</div>
        <div className="infoBlock"><b>Sexo:</b><br />  {gender === 'M' ? 'Homem' : 'Mulher'}</div>
        <div className="infoBlock"><b>Nível de Atividade:</b><br />  {activityLevel}</div>
        <div className="infoBlock"><b>Calorias Diarias:</b><br />  {maintenanceCalories} kcal/dia</div>
        <div className="infoBlock"><b>Consumo de água recomendado:</b><br />  {recommendedWaterIntake} Litros/dia</div>
        <button onClick={handleButtonClick} type="button" className="fitness-button2">ACESSAR FÓRMULA EXCLUSIVA</button>                            
      </div>
    </div>
  );
}

export default Resultado;
