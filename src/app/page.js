import { Typography } from '@mui/material'
import styles from './page.module.css'
import Card from './ui/card'
import Header from './ui/header'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <ul className={styles.cards}>
          <li className={styles.card}  style={{ '--index': 1 }} >
            <Card urlImage = {"https://lh3.googleusercontent.com/drive-viewer/AEYmBYSY63IPrhLyOAzaGFzPK_VqRYFJtZraz6gSnbaioWRHPt6T0AAWiYWwxtso-fIk-A_0dkG9Xgk6Rz06Pogr5McaW15iyA=s1600"}
            backgroundColor ="rgb(36,42,59)"
            texColor = "rgb(255,255,255)"
            index = {1}
            text={'Seria tu sonrisa, seria tus mirada, seria tu cuerpo, seria tu espíritu, seria el cálido color del sol; alguno de tantos detalles que tienes que me cautivaron y no logro permitir que te alejes de mis pensamientos así lejos estés.'}     ></Card>
          </li>
          <li className={styles.card}  style={{ '--index': 2 }} >
            <Card 
              urlImage = {""}
              backgroundColor="white"
              texColor = "rgb(40, 38, 38)"
              text={'Espero ancioso por ver nuestro segundo encuentro y conocer mas de eso que me gusta'}
              index = {2}
            ></Card>
          </li>
          <li className={styles.card}  style={{ '--index': 3 }} >
            <Card 
              urlImage = {""}
              backgroundColor="transparent"
              texColor = "transparent"
              index = {3}
            ></Card>
          </li>
          <li className={styles.card}  style={{ '--index': 4 }} >
            <Card 
              urlImage = {""}
              backgroundColor="transparent"
              texColor = "transparent"
              index = {4}
            ></Card>
          </li>
          <li className={styles.card}  style={{ '--index': 5 }} >
            <Card 
              urlImage = {""}
              backgroundColor="transparent"
              texColor = "transparent"
              index = {5}
            ></Card>
          </li>
     
        </ul>
      </main>
    </>
  )
}
