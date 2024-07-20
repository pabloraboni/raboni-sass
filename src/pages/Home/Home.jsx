import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className="pr-page__content --f-center">
        <div className={styles["pr-page__home"]}>
          <h1>Rabôni Styles</h1>
          <p>
            Rabôni Styles é um conjunto de mixins e classes Sass reutilizáveis,
            desenvolvidos para facilitar a estilização de projetos web.            
          </p>
          <div className="pr-line --mg-20-0"></div>
          <h1>Como Usar</h1>
          <p>
            1. **Importar Mixins no Seu Projeto**
            <br />
            <br />
            Adicione o seguinte código ao seu arquivo Sass principal:
            <br />
            <br />
            @import url('https://raw.githubusercontent.com/pabloraboni/raboni-styles/main/scss/mixins/_mixins.scss');
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
