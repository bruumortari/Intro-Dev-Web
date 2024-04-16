import img from "./assets/foto_perfil.jpeg"

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={img} alt="profile picture"></img>
            <h2>Bruna Bertolo Mortari</h2>
            <h3>Graduanda em ciência da computação na USP</h3>
                <h4>Linguagens: C/C++, Java, Python</h4>
                <p>Participação no projeto de cultura e extensão "Pensamento Computacional para Alunos do Ensino Fundamental</p>
                <h4><a href="https://github.com/bruumortari">Github</a></h4>
                <h4><a href="https://www.linkedin.com/in/bruna-mortari-806297233/">Linkedin</a></h4>
        </div>
    );
}

export default Card