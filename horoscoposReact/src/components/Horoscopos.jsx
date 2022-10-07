import React from 'react';
import { useState } from 'react';
import './Horoscopos.css';

const Horoscopos = () => {
    const calculateSign = (e) => {
        e.preventDefault();
        const month = e.target.month.value;
        const day = e.target.day.value;
        let sign;
        let img;
        let description;
        switch (month) {
            case '1':
                if (day < 20) {
                    sign = 'Capricornio';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/capricornio.jpg';
                    description = 'Capricornio es el signo del zodiaco que representa a los nacidos entre el 22 de diciembre y el 19 de enero. Es el décimo signo del zodiaco y el cuarto de tierra. Su elemento es la tierra y su planeta regente es Saturno. Su símbolo es el cabrito, y su color es el marrón.';
                } else {
                    sign = 'Acuario';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/acuario.jpg';
                    description = 'Acuario es el signo del zodiaco que representa a los nacidos entre el 20 de enero y el 18 de febrero. Es el undécimo signo del zodiaco y el cuarto de aire. Su elemento es el aire y su planeta regente es Urano. Su símbolo es el agua, y su color es el azul.';
                }
                break;
            case '2':
                if (day < 19) {
                    sign = 'Acuario';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/acuario.jpg';
                    description = 'Acuario es el signo del zodiaco que representa a los nacidos entre el 20 de enero y el 18 de febrero. Es el undécimo signo del zodiaco y el cuarto de aire. Su elemento es el aire y su planeta regente es Urano. Su símbolo es el agua, y su color es el azul.';
                } else {
                    sign = 'Piscis';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/piscis.jpg';
                    description = 'Piscis es el signo del zodiaco que representa a los nacidos entre el 19 de febrero y el 20 de marzo. Es el duodécimo signo del zodiaco y el cuarto de agua. Su elemento es el agua y su planeta regente es Neptuno. Su símbolo es los peces, y su color es el violeta.';
                }
                break;
            case '3':
                if (day < 21) {
                    sign = 'Piscis';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/piscis.jpg';
                    description = 'Piscis es el signo del zodiaco que representa a los nacidos entre el 19 de febrero y el 20 de marzo. Es el duodécimo signo del zodiaco y el cuarto de agua. Su elemento es el agua y su planeta regente es Neptuno. Su símbolo es los peces, y su color es el violeta.';
                } else {
                    sign = 'Aries';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/aries.jpg';
                    description = 'Aries es el signo del zodiaco que representa a los nacidos entre el 21 de marzo y el 19 de abril. Es el primer signo del zodiaco y el primero de fuego. Su elemento es el fuego y su planeta regente es Marte. Su símbolo es el carnero, y su color es el rojo.';
                }
                break;
            case '4':
                if (day < 20) {
                    sign = 'Aries';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/aries.jpg';
                    description = 'Aries es el signo del zodiaco que representa a los nacidos entre el 21 de marzo y el 19 de abril. Es el primer signo del zodiaco y el primero de fuego. Su elemento es el fuego y su planeta regente es Marte. Su símbolo es el carnero, y su color es el rojo.';
                } else {
                    sign = 'Tauro';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/tauro.jpg';
                    description = 'Tauro es el signo del zodiaco que representa a los nacidos entre el 20 de abril y el 20 de mayo. Es el segundo signo del zodiaco y el segundo de tierra. Su elemento es la tierra y su planeta regente es Venus. Su símbolo es el toro, y su color es el verde.';
                }
                break;
            case '5':
                if (day < 21) {
                    sign = 'Tauro';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/tauro.jpg';
                    description = 'Tauro es el signo del zodiaco que representa a los nacidos entre el 20 de abril y el 20 de mayo. Es el segundo signo del zodiaco y el segundo de tierra. Su elemento es la tierra y su planeta regente es Venus. Su símbolo es el toro, y su color es el verde.';
                } else {
                    sign = 'Géminis';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/geminis.jpg';
                    description = 'Géminis es el signo del zodiaco que representa a los nacidos entre el 21 de mayo y el 20 de junio. Es el tercer signo del zodiaco y el tercero de aire. Su elemento es el aire y su planeta regente es Mercurio. Su símbolo es los gemelos, y su color es el amarillo.';
                }
                break;
            case '6':
                if (day < 21) {
                    sign = 'Géminis';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/geminis.jpg';
                    description = 'Géminis es el signo del zodiaco que representa a los nacidos entre el 21 de mayo y el 20 de junio. Es el tercer signo del zodiaco y el tercero de aire. Su elemento es el aire y su planeta regente es Mercurio. Su símbolo es los gemelos, y su color es el amarillo.';
                } else {
                    sign = 'Cáncer';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/cancer.jpg';
                    description = 'Cáncer es el signo del zodiaco que representa a los nacidos entre el 21 de junio y el 22 de julio. Es el cuarto signo del zodiaco y el cuarto de agua. Su elemento es el agua y su planeta regente es la Luna. Su símbolo es el cangrejo, y su color es el blanco.';
                }
                break;
            case '7':
                if (day < 23) {
                    sign = 'Cáncer';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/cancer.jpg';
                    description = 'Cáncer es el signo del zodiaco que representa a los nacidos entre el 21 de junio y el 22 de julio. Es el cuarto signo del zodiaco y el cuarto de agua. Su elemento es el agua y su planeta regente es la Luna. Su símbolo es el cangrejo, y su color es el blanco.';
                } else {
                    sign = 'Leo';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/leo.jpg';
                    description = 'Leo es el signo del zodiaco que representa a los nacidos entre el 23 de julio y el 22 de agosto. Es el quinto signo del zodiaco y el quinto de fuego. Su elemento es el fuego y su planeta regente es el Sol. Su símbolo es el león, y su color es el naranja.';
                }
                break;
            case '8':
                if (day < 23) {
                    sign = 'Leo';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/leo.jpg';
                    description = 'Leo es el signo del zodiaco que representa a los nacidos entre el 23 de julio y el 22 de agosto. Es el quinto signo del zodiaco y el quinto de fuego. Su elemento es el fuego y su planeta regente es el Sol. Su símbolo es el león, y su color es el naranja.';
                } else {
                    sign = 'Virgo';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/virgo.jpg';
                    description = 'Virgo es el signo del zodiaco que representa a los nacidos entre el 23 de agosto y el 22 de septiembre. Es el sexto signo del zodiaco y el sexto de tierra. Su elemento es la tierra y su planeta regente es Mercurio. Su símbolo es la virgen, y su color es el azul.';
                }
                break;
            case '9':
                if (day < 23) {
                    sign = 'Virgo';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/virgo.jpg';
                    description = 'Virgo es el signo del zodiaco que representa a los nacidos entre el 23 de agosto y el 22 de septiembre. Es el sexto signo del zodiaco y el sexto de tierra. Su elemento es la tierra y su planeta regente es Mercurio. Su símbolo es la virgen, y su color es el azul.';
                } else {
                    sign = 'Libra';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/libra.jpg';
                    description = 'Libra es el signo del zodiaco que representa a los nacidos entre el 23 de septiembre y el 22 de octubre. Es el séptimo signo del zodiaco y el séptimo de aire. Su elemento es el aire y su planeta regente es Venus. Su símbolo es la balanza, y su color es el rosa.';
                }
                break;
            case '10':
                if (day < 23) {
                    sign = 'Libra';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/libra.jpg';
                    description = 'Libra es el signo del zodiaco que representa a los nacidos entre el 23 de septiembre y el 22 de octubre. Es el séptimo signo del zodiaco y el séptimo de aire. Su elemento es el aire y su planeta regente es Venus. Su símbolo es la balanza, y su color es el rosa.';
                } else {
                    sign = 'Escorpio';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/escorpio.jpg';
                    description = 'Escorpio es el signo del zodiaco que representa a los nacidos entre el 23 de octubre y el 21 de noviembre. Es el octavo signo del zodiaco y el octavo de agua. Su elemento es el agua y su planeta regente es Marte y Plutón. Su símbolo es el escorpión, y su color es el rojo.';
                }
                break;
            case '11':
                if (day < 22) {
                    sign = 'Escorpio';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/escorpio.jpg';
                    description = 'Escorpio es el signo del zodiaco que representa a los nacidos entre el 23 de octubre y el 21 de noviembre. Es el octavo signo del zodiaco y el octavo de agua. Su elemento es el agua y su planeta regente es Marte y Plutón. Su símbolo es el escorpión, y su color es el rojo.';
                } else {
                    sign = 'Sagitario';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/sagitario.jpg';
                    description = 'Sagitario es el signo del zodiaco que representa a los nacidos entre el 22 de noviembre y el 21 de diciembre. Es el noveno signo del zodiaco y el noveno de fuego. Su elemento es el fuego y su planeta regente es Júpiter. Su símbolo es el arquero, y su color es el verde.';
                }
                break;
            case '12':
                if (day < 22) {
                    sign = 'Sagitario';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/sagitario.jpg';
                    description = 'Sagitario es el signo del zodiaco que representa a los nacidos entre el 22 de noviembre y el 21 de diciembre. Es el noveno signo del zodiaco y el noveno de fuego. Su elemento es el fuego y su planeta regente es Júpiter. Su símbolo es el arquero, y su color es el verde.';
                } else {
                    sign = 'Capricornio';
                    img = 'https://www.astrologia.com.ar/wp-content/uploads/2019/12/capricornio.jpg';
                    description = 'Capricornio es el signo del zodiaco que representa a los nacidos entre el 22 de diciembre y el 19 de enero. Es el décimo signo del zodiaco y el décimo de tierra. Su elemento es la tierra y su planeta regente es Saturno. Su símbolo es el cabrito, y su color es el marrón.';
                }
                break;
            default:
                sign = 'No es un mes válido';
}

        setSign(sign);
        setImg(img);
        setDescription(description);
    }

    const [sign, setSign] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="horoscopos">
            <h1>Calcula tu signo zodiacal</h1>
            <fieldset>
                <form onSubmit={calculateSign}>
                    <p className='form-p'>
                        <label htmlFor="month">Mes: </label>
                        <input type="number" name="month" id="month" min="1" max="12" required />
                    </p>

                    <p className='form-p'>
                        <label htmlFor="day">Día: </label>
                        <input type="number" name="day" id="day" min="1" max="31" required />
                    </p>

                    <p className='form-p'>
                        <button type="submit">Calcular</button>
                    </p>
                </form>
                <p>Tu signo es: {sign}</p>
                <img src={img} alt="" />
                <p>{description}</p>
            </fieldset>
        </div>
    )
}

export default Horoscopos;