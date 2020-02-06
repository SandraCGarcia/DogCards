import React from 'react';

import { 
  CardContainer,
  CardHeader,
  CardHeaderPhoto,
  CardHeaderTitle,
  CardHeaderDate,
  CardMainText,
  CardFooter,
  More,
  Likes,
  Heart
}
 from './styles';

// Componente Mediacard, forma normal

class Mediacard extends React.Component {


  render() {
    let heartClassName = "fa-heart heart ";
    if (this.props.heart === 'full') {
      heartClassName += "fas"
    } else {
      heartClassName += "far"
    }

  //Establece fecha de nacimiento de cada persona en cada tarjeta
    let birthDate = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre'];

    //Determina el día del nacimiento, de acuerdo con props recibido
    let dd = this.props.bday;
      console.log(dd);
    birthDate.setDate(dd);

  //Determina el mes del nacimiento, de acuerdo con props recibido
    let mm = this.props.bmonth;
      console.log(mm);
      mm -= 1;
    birthDate.setMonth(mm);

    let mmm = months[mm];
      console.log(mmm);

    //Determina el año del nacimiento, de acuerdo con props recibido
    let yyyy = this.props.byear;

    //Monta la fecha completa del nacimiento
    birthDate.setFullYear(yyyy);
      console.log(yyyy);

  //Retorna el día de la semana, de acuerdo con la fecha completa
    let ddd = birthDate.getDay();
        ddd = days[ddd];
        console.log(ddd);

    let birthday = `${ddd}, ${dd} de ${mmm} de ${yyyy}`;

    console.log(birthday);

    return (
      console.log(this.props.photo),
    <CardContainer>

      <CardHeader>

          <CardHeaderPhoto photo={this.props.photo} />

          <div>
              <CardHeaderTitle>{this.props.name}
              </CardHeaderTitle>
              <CardHeaderDate>{birthday}</CardHeaderDate>
          </div>
      </CardHeader>
      <div>
          <CardMainText>
          {this.props.text}</CardMainText>
      </div>
      <CardFooter>
          <More>Leer más...</More>
          <Likes>{this.props.likes} 
          <Heart className={heartClassName}></Heart></Likes>
      </CardFooter>

    </CardContainer>
    );
  }
}

export default Mediacard;
